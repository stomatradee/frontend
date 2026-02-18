const COLLECTOR = {
    HOME: "/collector/home",
}

const INVESTOR = {
    HOME: "/investor/home",
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
