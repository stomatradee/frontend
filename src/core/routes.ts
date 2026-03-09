const COLLECTOR = {
    LOGIN: "/collector/login-page-view",
    DASHBOARD: "/collector/dashboard",
}

const INVESTOR = {
    HOME: "/investor/home",
}

export const routes = {
    landingPage: () => "/",
    collector: {
        dashboard: () => COLLECTOR.DASHBOARD,
        login: () => COLLECTOR.LOGIN,
        detail: (id: string | number) => `/products/${id}`,
    },
    investor: {
        home: () => INVESTOR.HOME,
    },
}
