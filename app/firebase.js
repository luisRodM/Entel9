import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, onSnapshot } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyBwp8yHYGUCOa7ciOU5C5xrWHt5lFEQYLo",
    authDomain: "entel9-a5043.firebaseapp.com",
    projectId: "entel9-a5043",
    storageBucket: "entel9-a5043.appspot.com",
    messagingSenderId: "755410623132",
    appId: "1:755410623132:web:65401d9ac823fbebd1ab59",
    measurementId: "G-71PBY3PBYH"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore()

export const saveToken = (token) => addDoc(collection(db, 'tokens'), {token})

export const getTokens = () => getDocs(collection(db, 'tokens'))

export const onGetTokens = (callback) => onSnapshot(collection(db, 'tokens'), callback)