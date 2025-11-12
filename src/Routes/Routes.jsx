import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/Authentication/SignIn";
import SignUp from "../Pages/Authentication/SignUp";
import JobDetails from "../Pages/JobsDetails/JobDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/sign-in',
                element: <SignIn />
            },
            {
                path: '/sign-up',
                element: <SignUp />
            },
            {
                path: '/job/:id',
                element: <JobDetails />,
                loader: async ({ params }) => {
                    const res = await fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`);
                    if (!res.ok) {
                        throw new Response('Failed to load job data', { status: res.status });
                    }
                    return res.json();
                }
            }
        ]
    }
]);

export default router;
