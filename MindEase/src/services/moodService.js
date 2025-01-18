import { collection, getDocs, query, where, addDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "./firebaseConfig";

/**
* Save or update daily mood based on date.
* @param {string} date - Date in YYYY-MM-DD format.
* @param {string} mood - User's mood (Terrible, Bad, Okay, Good, Great).
* @returns {Promise<void>} - No return value.
*/
export const saveMood = async (date, mood) => {
    try {
        const q = query(collection(db, "moods"), where("date", "==", date));
        const querySnapshot = await getDocs(q);
        
        if (!querySnapshot.empty) {
            // Update document if data for the date already exists
            const moodDoc = querySnapshot.docs[0]; // Get the first document
            const moodRef = doc(db, "moods", moodDoc.id);
            await updateDoc(moodRef, { mood });
            console.log("Mood updated successfully!");
        } else {
            // Add new document if no data for the date exists
            await addDoc(collection(db, "moods"), { date, mood });
            console.log("Mood saved successfully!");
        }
    } catch (error) {
        console.error("Error saving/updating mood: ", error);
    }
};

/**
* Retrieves the user's mood data for the current day.
* @returns {Promise<{date: string, mood: string} | null>} - The mood data for today, or null if no data exists.
*/
export const getTodayMood = async () => {
    try {
        const today = new Date().toISOString().split("T")[0]; // Format YYYY-MM-DD
        const q = query(collection(db, "moods"), where("date", "==", today));
        const querySnapshot = await getDocs(q);
        
        if (!querySnapshot.empty) {
            // Return the mood data for today
            const moodDoc = querySnapshot.docs[0];
            return {
                id: moodDoc.id,
                ...moodDoc.data(),
            };
        } else {
            // No mood data for today
            return null;
        }
    } catch (error) {
        console.error("Error fetching today's mood: ", error);
    }
};

/**
* Get monthly mood data based on month and year.
* @param {number} month - Month as a number (1-12).
* @param {number} year - Year as a number.
* @returns {Promise<Array<{date: string, mood: string}>>} - Array containing mood data and date.
*/
export const getMonthlyMoods = async (month, year) => {
    try {
        const startDate = `${year}-${String(month).padStart(2, "0")}-01`;
        const endDate = `${year}-${String(month).padStart(2, "0")}-31`;
        
        const q = query(
            collection(db, "moods"),
            where("date", ">=", startDate),
            where("date", "<=", endDate)
        );
        const querySnapshot = await getDocs(q);
        
        const moods = [];
        querySnapshot.forEach((doc) => {
            moods.push({
                id: doc.id,
                ...doc.data(),
            });
        });
        
        return moods; // return array { date, mood }
    } catch (error) {
        console.error("Error fetching moods: ", error);
    }
};