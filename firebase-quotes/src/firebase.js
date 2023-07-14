// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "fir-quote-app-51077.firebaseapp.com",
  projectId: "fir-quote-app-51077",
  storageBucket: "fir-quote-app-51077.appspot.com",
  messagingSenderId: "637096111630",
  appId: "1:637096111630:web:fed4f741cf34ba392c565f",
  measurementId: "G-6T2NJ0R5FJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const getQuotes = async () => {
  const quotesCollection = collection(db, "quotes");
  const quoteResults = await getDocs(quotesCollection);
  const quoteList = quoteResults.docs.map((doc) => doc.data());
  return quoteList;
};

export const getQuoteById = async (id) => {
  const docRef = doc(db, "quotes", id);
  const docSnap = await getDoc(docRef);
  const data = docSnap.data();
  return {...data, id: id}
}

export const addQuote = async (data) => {
  const result = await addDoc(collection(db, "quotes"), data);
  return result;
};

export const updateQuote = async(id, data) => {
  const docRef = doc(db, "quotes", id);
  return await updateDoc(docRef, data)
}


