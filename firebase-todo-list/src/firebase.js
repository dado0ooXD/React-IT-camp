import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_ID
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const getTodoList = async () => {
  const todolistCollection = collection(db, "todo-list");
  const res = await getDocs(todolistCollection);
  const todoList = res.docs.map((doc) => {
    const data = doc.data();
    const id = doc.id;
    return { ...data, id: id };
  });
  return todoList;
};

// ADD
export const addItem = async (data) => {
    const result = addDoc(collection(db, "todo-list"), data);
  return result;
}

export const getItemById = async (id) => {
  const docRef = doc(db, "todo-list", id);
  const docSnap = await getDoc(docRef);
  const data = docSnap.data();
  return {...data, id: id}
}

// UPDATE
export const updateTodoItemData = async (id, data) => {
  const docRef = doc(db, "todo-list", id);
  return await updateDoc(docRef, data)
}

// DELETE ITEM

export const deleteItem = async(id, data) => {
  const docRef = doc(db, "todo-list", id);
  await deleteDoc(docRef, data)
}