import { collection, addDoc, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

/**
 * Adds a new article to the Firestore database.
 * @param {string} title - The title of the article.
 * @param {string} imagePath - The local path of the article's image.
 * @param {string} content - The content of the article.
 * @returns {Promise<string>} - The document ID of the newly created article.
 */
export const addArticle = async (title, imagePath, content) => {
  try {
    const docRef = await addDoc(collection(db, "articles"), {
      title,
      imagePath,
      content,
      date: new Date().toISOString(), // Add a timestamp
    });
    console.log("Article added successfully:", docRef.id);
    return docRef.id; // Return the document ID
  } catch (error) {
    console.error("Error adding article:", error);
    throw error;
  }
};

/**
 * Fetches all articles from the Firestore database.
 * @returns {Promise<Array>} - An array of articles.
 */
export const fetchAllArticles = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "articles"));
    const articles = [];
    querySnapshot.forEach((doc) => {
      articles.push({ id: doc.id, ...doc.data() });
    });
    console.log("Fetched all articles successfully!");
    return articles;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};

/**
 * Fetches a single article by its ID.
 * @param {string} articleId - The ID of the article to fetch.
 * @returns {Promise<Object>} - The article data.
 */
export const fetchArticleById = async (articleId) => {
  try {
    const docRef = doc(db, "articles", articleId);
    const docSnapshot = await getDoc(docRef);
    if (!docSnapshot.exists()) {
      throw new Error("Article not found!");
    }
    console.log("Fetched article successfully:", docSnapshot.data());
    return { id: docSnapshot.id, ...docSnapshot.data() };
  } catch (error) {
    console.error("Error fetching article by ID:", error);
    throw error;
  }
};