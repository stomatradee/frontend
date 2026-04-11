const COLLECTOR = {
    LOGIN: "/collector/login-collector",
    DASHBOARD: "/collector/dashboard-collector",
    ADD_PROJECT: "/collector/add-project-collector",
    ADD_PROJECT_FORM: "/collector/add-project-form-collector",
    MY_PROJECT: "/collector/my-project-collector",
    USER_PROFILE: "/collector/user-profile-collector",
    REGISTER_PROFILE: "/collector/register-collector",
    HOME: "/collector/home-collector",
    PROJECT_DETAIL: "/collector/project-detail-collector",
}

const INVESTOR = {
    HOME: "/investor/home",
    LOGIN: "/investor/login-investor",
    DASHBOARD: "/investor/dashboard-investor",
    MY_PORTOFOLIO: "/investor/my-portofolio-investor",
    PROJECT_LIST: "/investor/project-list-investor",
    USER_PROFILE: "/investor/user-profile-investor",
}

export const routes = {
    landingPage: () => "/",
    collector: {
        dashboard: () => COLLECTOR.DASHBOARD,
        login: () => COLLECTOR.LOGIN,
        addProject: () => COLLECTOR.ADD_PROJECT,
        addProjectForm: () => COLLECTOR.ADD_PROJECT_FORM,
        myProject: () => COLLECTOR.MY_PROJECT,
        userProfile: () => COLLECTOR.USER_PROFILE,
        home: () => COLLECTOR.HOME,
        registerProfile: () => COLLECTOR.REGISTER_PROFILE,
        projectDetail: (id: string | number) => `${COLLECTOR.PROJECT_DETAIL}?projectId=${id}`,
    },
    investor: {
        home: () => INVESTOR.HOME,
        login: () => INVESTOR.LOGIN,
        dashboard: () => INVESTOR.DASHBOARD,
        myPortofolio: () => INVESTOR.MY_PORTOFOLIO,
        projectList: () => INVESTOR.PROJECT_LIST,
        userProfile: () => INVESTOR.USER_PROFILE,
    },
}
