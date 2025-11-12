import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/Authentication/SignIn";
import SignUp from "../Pages/Authentication/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/jobs`)
            },
            {
                path: '/sign-in',
                element: <SignIn></SignIn>
            },
            {
                path: '/sign-up',
                element: <SignUp></SignUp>
            }
        ]
    }
])

export default router;