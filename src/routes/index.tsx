import App from "@/App";
import MainLayout from "@/layout/main-layout";
import AuthLayout from "@/pages/auth/auth-layout";
import LoginPage from "@/pages/auth/login-page";
import RegisterPage from "@/pages/auth/register-page";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <LoginPage />
            },
            {
                path: "register",
                element: <RegisterPage />
            }
        ]
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