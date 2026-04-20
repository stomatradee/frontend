import { collection, getDocs, query, where } from "firebase/firestore";
import { ProfileInvestorRequestModel, ProfileInvestorResponseModel } from "./model/profile-investor-model";
import { db } from "@/core/config/firebase-config";

export async function ProfileInvestorRepository(data: ProfileInvestorRequestModel) {
    try {
        console.log("profile req: ", data)

        const normalizedAddress = data.contractAddress.trim().toLowerCase();

        const docRef = query(
            collection(db, "investor"),
            where("contractAddress", "==", normalizedAddress)
        );

        const docSnap = await getDocs(docRef);

        if (!docSnap.empty) {
            const result = docSnap.docs[0].data();

            return result as ProfileInvestorResponseModel;
        }

        return null;
    } catch (error) {
        console.error("Error fetching profile:", error);
        return null;
    }

}