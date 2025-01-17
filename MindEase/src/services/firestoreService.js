import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const addMood = async (mood) => {
  try {
    const docRef = await addDoc(collection(db, "moods"), { mood });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getMoods = async () => {
  const querySnapshot = await getDocs(collection(db, "moods"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
};