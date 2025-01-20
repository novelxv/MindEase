import { collection, query, where, getDocs, addDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { fetchCreativeResponse } from "./huggingFaceService"; // Ensure Hugging Face service is correctly implemented

/**
 * Saves or updates a journal entry for a specific date, generates a response,
 * and updates related collections for activity recommendations. Adds banners for each new journal entry.
 * @param {string} date - The date in YYYY-MM-DD format.
 * @param {string} userInput - The user's journal input.
 * @returns {Promise<void>}
 */
export const saveJournal = async (date, userInput) => {
  try {
    // 1. Generate Minnie's response for the journal
    const minnieResponse = await fetchCreativeResponse(`Dear Minnie, ${userInput}. Please give your response/feedback with at least 50 words!`);
    
    // 2. Check if a journal already exists for the date
    const journalQuery = query(collection(db, "journals"), where("date", "==", date));
    const journalSnapshot = await getDocs(journalQuery);

    if (!journalSnapshot.empty) {
      // Update existing journal
      const journalDoc = journalSnapshot.docs[0];
      const journalRef = doc(db, "journals", journalDoc.id);
      await updateDoc(journalRef, {
        userInput,
        minnieResponse,
      });
      console.log("Journal updated successfully!");
    } else {
      // Add a new journal
      await addDoc(collection(db, "journals"), {
        date,
        userInput,
        minnieResponse,
      });
      console.log("Journal saved successfully!");
    }

    // 3. Generate activity recommendations (always add new)
    const activityPrompt = `Based on this journal: "${userInput}", suggest 1 activity to improve mood in 1 sentence. Example: "Run in the park for 30 minutes". Please don't answer other than the activity.`;
    const activityResponse = await fetchCreativeResponse(activityPrompt);

    await addDoc(collection(db, "activityRecommendations"), {
      date,
      recommendation: activityResponse,
    });
    console.log("New activity recommendation added successfully!");

    // 4. Generate motivational banner (always add new)
    const bannerPrompt = `Based on this journal: "${userInput}", generate a motivational or uplifting quote in 1 sentence. Example: "You are strong and capable of overcoming any challenge". Please don't answer other than the quote.`;
    const bannerResponse = await fetchCreativeResponse(bannerPrompt);

    await addDoc(collection(db, "banners"), {
      date,
      message: bannerResponse,
    });
    console.log("New banner added successfully!");
  } catch (error) {
    console.error("Error saving journal and related data:", error);
  }
};