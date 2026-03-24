"use client"

import { useRouter } from "next/navigation"
import { useCallback } from "react"

export function useNavigationUtils() {
    const router = useRouter()

    const pushRoute = useCallback(<T extends unknown[]>(
        route: (...args: T) => string,
        ...args: T
    ) => {
        router.push(route(...args))
    }, [router]);

    const replaceRoute = useCallback(<T extends unknown[]>(
        route: (...args: T) => string,
        ...args: T
    ) => {
        router.replace(route(...args))
    }, [router]);

    return {
        pushRoute,
        replaceRoute,
        back: router.back,
    }
}
