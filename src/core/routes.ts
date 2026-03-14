const COLLECTOR = {
    LOGIN: "/collector/login-collector",
    DASHBOARD: "/collector/dashboard-collector",
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
