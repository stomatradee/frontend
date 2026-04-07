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
    },
}
