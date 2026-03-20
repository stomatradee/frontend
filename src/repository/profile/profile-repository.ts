import { collection, getDocs, query, where } from "firebase/firestore";
import { ProfileRequestModel, ProfileResponseModel } from "./model/profile-request-model";
import { db } from "@/core/config/firebase-config";

export async function GetCollectorProfileRepository(data: ProfileRequestModel): Promise<ProfileResponseModel | null> {
    try {
        const normalizedAddress = data.contractAddress.trim().toLowerCase();

        const docRef = query(
            collection(db, "collectors"),
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