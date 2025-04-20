import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

function Navbar() {
    const MENU_ITEMS = [
        {
            name: "Beranda",
            path: "#"
        },
        {
            name: "Kategori",
            path: "#"
        },
        {
            name: "Tentang",
            path: "#"
        },
        {
            name: "Kontak",
            path: "#"
        },
    ]

    return (
        <header className="p-5 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between">
                    <Link to="/" className="font-playfair text-xl font-semibold">Blog - Site</Link>

                    <button className="rounded-full bg-gray-100 p-4 cursor-pointer hover:bg-gray-200 transition lg:hidden">
                        <FaBars className="size-4 text-gray-700" />
                    </button>

                    <div className="lg:flex hidden gap-8">
                        <nav className="items-center gap-8 flex">
                            {MENU_ITEMS.map((item, index) => {
                                return (
                                    <Link
                                        key={index}
                                        to={item.path}
                                        className="font-medium text-sm text-gray-800">
                                        {item.name}
                                    </Link>
                                )
                            })}
                        </nav>

                        <div className="space-x-2">
                            <Button asChild className="" size="lg">
                                <Link to="/auth/login">Masuk</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg">
                                <Link to="/auth/register">Daftar</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
