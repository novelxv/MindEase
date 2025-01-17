import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCG6-e85tHp_lm3hr1IXCasOvgzQ__Pl9M",
  projectId: "mindease-minnie",
  storageBucket: "mindease-minnie.firebasestorage.app",
  messagingSenderId: "764116535020",
  appId: "1:764116535020:android:6c864d8188d0d7549f07c9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const messaging = getMessaging(app);

export { db, messaging };