import { db } from "@/core/config/firebase-config";
import { RegisterRequestModel } from "./model/register-request-model";
import { addDoc, collection } from "firebase/firestore";

export async function RegisterCollectorRepository(data: RegisterRequestModel) {
    try {
        const payload = {
            ...data,
            contractAddress: data.contractAddress.trim().toLowerCase()
        };
        const docRef = await addDoc(collection(db, "collectors"), payload);

        console.log("Document written with ID: ", docRef.id);

        return true;
    } catch (e) {
        console.error("Error adding document: ", e);

        return false;
    }
}