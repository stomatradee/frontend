export type UploadFileRequestModel = {
    file: File,
}

export type UploadFileModelResponse = {
    id: string,
    group_id: string,
    name: string,
    cid: string,
    created_at: string,
    size: number,
    number_of_files: number,
    mime_type: string,
    vectorized: boolean,
    network: string,
}