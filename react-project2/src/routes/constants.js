import Landing from "../pages/Landing";
import AboutUs from "../pages/AboutUs";

export const HOME_ROUTE = {
    path:'/',
    name:'Homepage',
}

export const ABOUT_US_ROUTE = {
    path:'/about-us',
    name:'About Us',
}

export const DASHBOARD_ROUTE = {
    path:'/dashboard',
    name:'Dashboard',
}

export const LOGIN_SIGNUP_ROUTE = {
    path:'/login-signup',
    name:'LoginSignup',
}

export const SERVICES_ROUTE = {
    path:'/services',
    name:'Services',
}



export const NAVBAR_ROUTE = [
    HOME_ROUTE,
    ABOUT_US_ROUTE,
    DASHBOARD_ROUTE,
    LOGIN_SIGNUP_ROUTE,
    SERVICES_ROUTE
]