import { pinata } from "@/core/utils/config";
import { UploadFileModelResponse, UploadFileRequestModel } from "./model/upload-file-model";

export default async function UploadFileRepository(data: UploadFileRequestModel) {
    try {
        const res = await fetch("/api/pinata-url");
        const { url } = await res.json();

        const response = await pinata.upload.public.file(data.file).url(url);

        const dataResult: UploadFileModelResponse = {
            id: response.id,
            group_id: response.group_id ?? "",
            name: response.name,
            cid: response.cid,
            created_at: response.created_at,
            size: response.size,
            number_of_files: response.number_of_files,
            mime_type: response.mime_type,
            vectorized: response.vectorized,
            network: response.network,
        }

        console.log("dataResult", dataResult);

        return dataResult;
    } catch (error) {
        console.error("Error uploading file to Pinata: ", error);

        throw error;
    }
}