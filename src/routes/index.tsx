import App from "@/App";
import MainLayout from "@/layout/main-layout";
import LoginPage from "@/pages/login-page";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <App />
            },
        ]
    }
]);