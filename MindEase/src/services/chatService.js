import { collection, query, where, getDocs, addDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { fetchHuggingFaceResponse } from "./huggingFaceService";

/**
 * Creates a new chat session with a title and initializes the session.
 * @param {string} title - The title for the chat session.
 * @returns {Promise<string>} - The document ID of the new chat session.
 */
export const createChatSession = async (title) => {
  try {
    const newSession = await addDoc(collection(db, "chats"), {
      title,
      date: new Date().toISOString(),
      messages: [], // Empty array for chat messages
    });
    console.log("Chat session created successfully!");
    return newSession.id; // Return the ID of the chat session
  } catch (error) {
    console.error("Error creating chat session:", error);
    throw error;
  }
};

/**
 * Sends a message in an existing chat session and generates Minnie's response.
 * @param {string} sessionId - The ID of the chat session.
 * @param {string} userMessage - The user's message.
 * @returns {Promise<void>}
 */
export const sendMessage = async (sessionId, userMessage) => {
  try {
    // Fetch the chat session
    const chatRef = doc(db, "chats", sessionId);
    const chatSnapshot = await getDocs(query(collection(db, "chats"), where("__name__", "==", sessionId)));
    if (chatSnapshot.empty) {
      throw new Error("Chat session not found!");
    }

    const chatData = chatSnapshot.docs[0].data();
    const updatedMessages = [...chatData.messages];

    // Add the user's message to the chat
    updatedMessages.push({
      sender: "user",
      message: userMessage,
      timestamp: new Date().toISOString(),
    });

    // Generate Minnie's response using Hugging Face
    const minnieResponse = await fetchHuggingFaceResponse(userMessage);

    // Add Minnie's response to the chat
    updatedMessages.push({
      sender: "minnie",
      message: minnieResponse,
      timestamp: new Date().toISOString(),
    });

    // Update the chat session with the new messages
    await updateDoc(chatRef, {
      messages: updatedMessages,
      date: new Date().toISOString(), // Update last update time
    });

    console.log("Message sent and Minnie's response added!");

    // Add activity recommendation
    const activityPrompt = `Based on this chat message: "${userMessage}", suggest 1 activity to improve mood.`;
    const activityResponse = await fetchHuggingFaceResponse(activityPrompt);

    await addDoc(collection(db, "activityRecommendations"), {
      date: new Date().toISOString().split("T")[0],
      recommendation: activityResponse,
    });
    console.log("Activity recommendation added successfully!");

    // Add motivational banner
    const bannerPrompt = `Based on this chat message: "${userMessage}", generate a motivational or uplifting message.`;
    const bannerResponse = await fetchHuggingFaceResponse(bannerPrompt);

    await addDoc(collection(db, "banners"), {
      date: new Date().toISOString().split("T")[0],
      message: bannerResponse,
    });
    console.log("Banner added successfully!");
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
};

/**
 * Fetches all chat sessions sorted by last update date.
 * @returns {Promise<Array>} - An array of chat sessions.
 */
export const fetchChatSessions = async () => {
  try {
    const chatQuery = query(collection(db, "chats"));
    const chatSnapshot = await getDocs(chatQuery);

    const chatSessions = [];
    chatSnapshot.forEach((doc) => {
      chatSessions.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    // Sort by last updated date
    chatSessions.sort((a, b) => new Date(b.date) - new Date(a.date));

    return chatSessions;
  } catch (error) {
    console.error("Error fetching chat sessions:", error);
    throw error;
  }
};

/**
 * Fetches messages for a specific chat session.
 * @param {string} sessionId - The ID of the chat session.
 * @returns {Promise<Array>} - An array of messages.
 */
export const fetchChatMessages = async (sessionId) => {
  try {
    const chatRef = doc(db, "chats", sessionId);
    const chatSnapshot = await getDocs(query(collection(db, "chats"), where("__name__", "==", sessionId)));

    if (chatSnapshot.empty) {
      throw new Error("Chat session not found!");
    }

    return chatSnapshot.docs[0].data().messages || [];
  } catch (error) {
    console.error("Error fetching chat messages:", error);
    throw error;
  }
};