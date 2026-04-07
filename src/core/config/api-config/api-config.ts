type ApiConfigParams = {
    endpoint: string;
    method?: string;
    requestParam?: unknown;
};

export default async function apiConfig({ endpoint, method = "GET", requestParam }: ApiConfigParams) {
    try {
        const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}${endpoint}`

        console.log("url: ", url)

        const response = await fetch(url, {
            method: method,
            headers: {
                "Content-Type": "application/json",
            },
            body: requestParam ? JSON.stringify(requestParam) : undefined,
        });
        // const data = await response.json();
        return response;
    } catch (error) {
        console.error("Error fetching config: ", error);
        throw new Error(`Failed to fetch config: ${error}`);
    }
}