import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useEffect, useState } from "react";
import { HiLightBulb } from "react-icons/hi";
import { FaLightbulb } from "react-icons/fa";


const Main = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const currentTheme = darkMode ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', currentTheme);
    }, [darkMode]);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };
    return (
        <div>

            <header className=" bg-primary text-white">
                <div className="flex justify-center py-2">
                    <button
                        className="ml text-5xl rounded-full "
                        onClick={toggleTheme}
                    >
                        {darkMode ? <HiLightBulb></HiLightBulb> : <FaLightbulb className="text-black"></FaLightbulb>}
                    </button>
                </div>
            </header>
            <div>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>


            </div>
        </div>

    );
};

export default Main;