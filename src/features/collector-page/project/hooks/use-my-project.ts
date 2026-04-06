import { useState } from "react";

export default function useMyProject() {
    const [isLoading, setLoading] = useState(false)

    return {
        isLoading,
    }
}