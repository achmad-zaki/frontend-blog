import Navbar from "@/components/navbar"
import { Outlet } from "react-router-dom"

function MainLayout() {
    return (
        <div>
            <Navbar />
            <main className="max-w-4xl mx-auto p-4">
                <Outlet />
            </main>
        </div>
    )
}

export default MainLayout