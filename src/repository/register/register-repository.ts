import { db } from "@/core/config/firebase-config";
import { RegisterRequestModel } from "./model/register-request-model";
import { addDoc, collection } from "firebase/firestore";
import { pinata } from "@/core/utils/config";

export async function RegisterCollectorRepository(data: RegisterRequestModel) {
    try {
        // const payload = {
        //     ...data,
        //     contractAddress: data.contractAddress.trim().toLowerCase()
        // };
        // const docRef = await addDoc(collection(db, "collectors"), payload);

        // console.log("Document written with ID: ", docRef.id);
        var result = await uploadDataToPinata(data);

        console.log("result CID: ", result?.cid)

        return true;
    } catch (e) {
        console.error("Error adding document: ", e);

        return false;
    }
}

async function uploadDataToPinata(data: RegisterRequestModel) {
    try {
        const res = await fetch("/api/pinata-url");
        const { url } = await res.json();

        const result = await pinata.upload.public.json(data).url(url);

        console.log("data pinata: ", result)
        return result;
    } catch (error) {
        console.error("Error uploading data to Pinata: ", error);
    }
}