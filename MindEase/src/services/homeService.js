import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

/**
 * Fetches all banners for the current date from the Firestore database.
 * @returns {Promise<Array>} - An array of banners.
 * @throws {Error} - If there is an error fetching the banners.
 */
export const getAllBanners = async () => {
  try {
    const currentDate = new Date().toISOString().split('T')[0];
    const bannersCollection = collection(db, "banners");
    const bannersQuery = query(bannersCollection, where("date", "==", currentDate));
    const bannersSnapshot = await getDocs(bannersQuery);
    const bannersList = bannersSnapshot.docs.map(doc => doc.data());
    console.log("Fetched all banners for today successfully!");
    return bannersList;
  } catch (error) {
    console.error("Error fetching banners:", error);
    throw error;
  }
};

/**
 * Fetches all activity recommendations for the current date from the Firestore database.
 * @returns {Promise<Array>} - An array of activity recommendations.
 * @throws {Error} - If there is an error fetching the activity recommendations.
 */
export const getAllActivityRecommendations = async () => {
  try {
    const currentDate = new Date().toISOString().split('T')[0];
    const recommendationsCollection = collection(db, "activityRecommendations");
    const recommendationsQuery = query(recommendationsCollection, where("date", "==", currentDate));
    const recommendationsSnapshot = await getDocs(recommendationsQuery);
    const recommendationsList = recommendationsSnapshot.docs.map(doc => doc.data());
    console.log("Fetched all activity recommendations for today successfully!");
    return recommendationsList;
  } catch (error) {
    console.error("Error fetching activity recommendations:", error);
    throw error;
  }
};
