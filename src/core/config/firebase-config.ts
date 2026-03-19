import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDSDMlbk7UCu0tASRhykGCu2mvUKKw8LBo",
    authDomain: "stomata-blockchain.firebaseapp.com",
    projectId: "stomata-blockchain",
    storageBucket: "stomata-blockchain.firebasestorage.app",
    messagingSenderId: "154029402657",
    appId: "1:154029402657:web:69764faa653ce511e95160"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };