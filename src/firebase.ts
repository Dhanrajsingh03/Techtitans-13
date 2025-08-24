import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace with your Firebase project config!
const firebaseConfig = {
  apiKey: "AIzaSyDLz-LXHBVS3bIflNYAIJh3nBqfiUunAhU",
  authDomain: "techtitans-13.firebaseapp.com",
  projectId: "techtitans-13",
  storageBucket: "techtitans-13.firebasestorage.app",
  messagingSenderId: "631048078360",
  appId: "1:631048078360:web:0619e9afaf44cc2f23ef6d",
  measurementId: "G-KHJW1BH7NJ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };