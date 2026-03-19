import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { ProfileRequestModel, ProfileResponseModel } from "./model/profile-request-model";
import { db } from "@/core/config/firebase-config";
import { da } from "zod/v4/locales";

export async function GetProfileRepository(data: ProfileRequestModel): Promise<ProfileResponseModel | null> {
    try {
        console.log("profile req: ", data)

        const normalizedAddress = data.contractAddress.trim().toLowerCase();

        const docRef = query(
            collection(db, "collectors"), // ganti sesuai collection kamu
            where("contractAddress", "==", normalizedAddress)
        );

        const docSnap = await getDocs(docRef);

        if (!docSnap.empty) {
            const result = docSnap.docs[0].data();

            return result as ProfileResponseModel;
        }

        return null;
    } catch (error) {
        console.error("Error fetching profile:", error);
        return null;
    }
}