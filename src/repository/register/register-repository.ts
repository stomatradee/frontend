import { db } from "@/core/config/firebase-config";
import { RegisterModel } from "./model/register-model";
import { addDoc, collection } from "firebase/firestore";

export async function RegisterCollectorRepository(data: RegisterModel) {
    try {
        const docRef = await addDoc(collection(db, "collectors"), data);

        console.log("Document written with ID: ", docRef.id);

        return true;
    } catch (e) {
        console.error("Error adding document: ", e);

        return false;
    }
}