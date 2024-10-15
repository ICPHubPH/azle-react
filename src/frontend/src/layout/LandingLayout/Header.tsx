import { Button } from "@/components/ui/button";
import { PageRoutes } from "@/constants/PageRoutes";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const links = [
        { id: 1, url: '#home', name: "Home" },
        { id: 2, url: "#goals", name: "Goals" },
        { id: 3, url: "#about", name: "About" },
    ];
    
    return (
        <header className="p-4 grid grid-cols-3 max-md:grid-cols-2 md:mx-[75px] px-6 items-center">
            <div className="flex items-center gap-x-4">
                <img className="h-14 w-14" src="Logo.png" alt="logo" />
                <h1 className="font-medium text-xl text-foreground max-md:text-xl">Plantaria</h1>
            </div>

            <nav className="hidden md:flex justify-evenly items-center">
                {links.map((value) => (
                    <a
                        className="text-lg hover:underline font-medium"
                        key={value.id}
                        href={value.url}
                    >
                        {value.name}
                    </a>
                ))}
            </nav>

            <div className="hidden md:flex justify-end items-center gap-x-4">
                <Link to={PageRoutes.Login}>
                    <Button variant="ghost">Login</Button>
                </Link>
                <Link to={PageRoutes.SignUp}>
                    <Button>Sign Up</Button>
                </Link>
            </div>

            <div className="md:hidden flex justify-end items-center">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
                </button>
            </div>

            {isMenuOpen && (
                <nav
                    className="fixed inset-0 bg-white flex flex-col justify-center items-center gap-y-4 z-50 transition-transform duration-300 md:hidden"
                >
                    {links.map((value) => (
                        <a
                            className="text-lg hover:underline font-medium"
                            key={value.id}
                            href={value.url}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {value.name}
                        </a>
                    ))}

                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="absolute right-6 top-6"
                    >
                        <X size={30} />
                    </button>

                    <div className="flex flex-col items-center space-y-4 mt-4">
                        <Link to={PageRoutes.Login}>
                            <Button variant="ghost">Login</Button>
                        </Link>
                        <Link to={PageRoutes.SignUp}>
                            <Button>Sign Up</Button>
                        </Link>
                    </div>
                </nav>
            )}
        </header>
    )
}

export default Header