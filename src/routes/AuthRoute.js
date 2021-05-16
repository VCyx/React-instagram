import {ERR_ROUTE, FULL_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE} from "./Arrow";
import Main from "../page/Main/Main";
import Profile from "../page/Profile/Profile";
import Page404 from "../page/404/Page404";
import Login from "../page/Login/Login";

export const authRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: PROFILE_ROUTE,
        Component: Profile
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Login
    },
    {
        path: ERR_ROUTE,
        Component: Page404
    },
    {
        path: FULL_ROUTE,
        Component: Page404
    }
]