import { addDoc, collection } from "firebase/firestore";
import { RegisterInvestorRequestModel } from "./model/register-investor-model";
import { db } from "@/core/config/firebase-config";

export async function RegisterInvestorRepository(data: RegisterInvestorRequestModel) {
    try {
        const payload = {
            ...data,
            contractAddress: data.contractAddress.trim().toLowerCase()
        };
        const docRef = await addDoc(collection(db, "investor"), payload);

        return docRef;
    } catch (error) {
        console.error("Error registering investor: ", error);
        throw error;
    }
}