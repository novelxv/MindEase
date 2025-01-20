import { collection, query, where, getDoc, getDocs, addDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { fetchHuggingFaceResponse } from "./huggingFaceService";

/**
* Creates a new chat session with a title and initializes the session.
* @param {string} title - The title for the chat session.
* @returns {Promise<string>} - The document ID of the new chat session.
*/
export const createChatSession = async (title) => {
    try {
        const session = await addDoc(collection(db, "chats"), {
            title,
            date: new Date().toISOString(),
            messages: [], // Empty array for chat messages
        });
        console.log("Chat session created successfully!");
        return { id: session.id, title, messages: [] }; // Return session details
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
        // Fetch the session
        const chatRef = doc(db, "chats", sessionId);
        const chatSnapshot = await getDoc(chatRef);
        
        if (!chatSnapshot.exists()) {
            throw new Error("Chat session not found!");
        }
        
        const chatData = chatSnapshot.data();
        const updatedMessages = [...chatData.messages];
        
        // Add user's message
        updatedMessages.push({
            sender: "user",
            message: userMessage,
            timestamp: new Date().toISOString(),
        });
        
        // Generate Minnie's response
        const minnieResponse = await fetchHuggingFaceResponse(userMessage);
        updatedMessages.push({
            sender: "minnie",
            message: minnieResponse,
            timestamp: new Date().toISOString(),
        });
        
        // Update the session title (first user message as title)
        const updatedTitle = updatedMessages.find((msg) => msg.sender === "user")?.message || "New Chat";
        
        // Update Firestore
        await updateDoc(chatRef, {
            messages: updatedMessages,
            title: updatedTitle,
            date: new Date().toISOString(), // Update last activity time
        });
        
        console.log("Message sent and session updated!");
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
            const data = doc.data();
            chatSessions.push({
                id: doc.id,
                ...data,
                lastMessage: data.messages?.[data.messages.length - 1]?.message || "No messages yet",
            });
        });
        
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