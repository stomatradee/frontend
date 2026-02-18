"use client"

import { useRouter } from "next/navigation"

export function useNavigationUtils() {
    const router = useRouter()

    function pushRoute<T extends any[]>(
        route: (...args: T) => string,
        ...args: T
    ) {
        router.push(route(...args))
    }

    function replaceRoute<T extends any[]>(
        route: (...args: T) => string,
        ...args: T
    ) {
        router.replace(route(...args))
    }

    return {
        pushRoute,
        replaceRoute,
        back: router.back,
    }
}
