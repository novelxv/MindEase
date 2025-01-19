import { collection, query, where, getDocs, addDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { fetchHuggingFaceResponse } from "./huggingFaceService"; // Ensure Hugging Face service is correctly implemented

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
    const minnieResponse = await fetchHuggingFaceResponse(`Dear Minnie, ${userInput}`);
    
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

    // 3. Generate activity recommendations
    const activityPrompt = `Based on this journal: "${userInput}", suggest 1-2 activities to improve mood.`;
    const activityResponse = await fetchHuggingFaceResponse(activityPrompt);

    const activityQuery = query(collection(db, "activityRecommendations"), where("date", "==", date));
    const activitySnapshot = await getDocs(activityQuery);

    if (!activitySnapshot.empty) {
      // Update existing activity recommendations
      const activityDoc = activitySnapshot.docs[0];
      const activityRef = doc(db, "activityRecommendations", activityDoc.id);
      await updateDoc(activityRef, {
        recommendations: activityResponse,
      });
      console.log("Activity recommendations updated successfully!");
    } else {
      // Add new activity recommendations
      await addDoc(collection(db, "activityRecommendations"), {
        date,
        recommendations: activityResponse,
      });
      console.log("Activity recommendations saved successfully!");
    }

    // 4. Generate motivational banner
    const bannerPrompt = `Based on this journal: "${userInput}", generate a motivational or uplifting message.`;
    const bannerResponse = await fetchHuggingFaceResponse(bannerPrompt);

    // Add a new banner (no update for existing entries)
    await addDoc(collection(db, "banners"), {
      date,
      message: bannerResponse,
    });
    console.log("New banner added successfully!");
  } catch (error) {
    console.error("Error saving journal and related data:", error);
  }
};