const COLLECTOR = {
    HOME: "/features/collector/home",
}

const INVESTOR = {
    HOME: "/features/investor/home",
}

export const routes = {
    landingPage: () => "/",
    collector: {
        home: () => COLLECTOR.HOME,
        detail: (id: string | number) => `/products/${id}`,
    },
    investor: {
        home: () => INVESTOR.HOME,
    },
}