export default async function apiConfig(endpoint: string, method: string = "GET", body?: any) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
            method: method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching config: ", error);
        throw new Error(`Failed to fetch config: ${error}`);
    }
}