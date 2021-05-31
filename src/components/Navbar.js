import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar({ theme, setTheme }) {
    const [displayMenu, setDisplayMenu] = useState(false);
    const location = useLocation();

    useLayoutEffect(() => {
        function updateSize() {
            setDisplayMenu(false);
        }
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    useEffect(() => {
        function updateSize() {
            setDisplayMenu(false);
        }
        updateSize();
    }, [location]);

    return (
        <>
            {!displayMenu && (
                <div className="fixed bottom-0 z-10 inset-x-0 md:relative flex flex-wrap justify-between h-12 py-3 md:py-4 container mx-auto px-5 bg-white dark:bg-gray-900 bg-opacity-100 md:bg-opacity-0 md:bg-auto dark:md:bg-auto dark:md:bg-opacity-0">
                    <div>
                        <Link
                            to="/"
                            className="font-bold md:mx-4 hover:text-green-300 cursor-pointer transition duration-500 dark:text-white dark:hover:text-green-300"
                        >
                            Pranesh Palanisamy
                        </Link>
                    </div>
                    <div className="flex">
                        <Link
                            to="/"
                            className="font-bold mr-2 md:mx-4 hidden md:block hover:text-green-300 cursor-pointer transition duration-500 dark:text-white dark:hover:text-green-300"
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className="font-bold mr-2 md:mx-4 hidden md:block hover:text-green-300 cursor-pointer transition duration-500 dark:text-white dark:hover:text-green-300"
                        >
                            About
                        </Link>
                        <Link
                            to="/skills"
                            className="font-bold mr-2 md:mx-4 hidden md:block hover:text-green-300 cursor-pointer transition duration-500 dark:text-white dark:hover:text-green-300"
                        >
                            Skills
                        </Link>
                        <Link
                            to="/works"
                            className="font-bold mr-2 md:mx-4 hidden md:block hover:text-green-300 cursor-pointer transition duration-500 dark:text-white dark:hover:text-green-300"
                        >
                            Works
                        </Link>
                        {theme ? (
                            <h6
                                className="font-bold mr-2 md:mx-4 hover:text-green-300 cursor-pointer transition duration-500 dark:text-white dark:hover:text-green-300"
                                onClick={() => setTheme(!theme)}
                            >
                                <span className="material-icons-outlined">
                                    light_mode
                                </span>
                            </h6>
                        ) : (
                            <h6
                                className="font-bold mr-2 md:mx-4 hover:text-green-300 cursor-pointer transition duration-500 dark:text-white dark:hover:text-green-300"
                                onClick={() => setTheme(!theme)}
                            >
                                <span className="material-icons-outlined">
                                    dark_mode
                                </span>
                            </h6>
                        )}
                        <h6
                            className="font-bold ml-2 md:hidden hover:text-green-300 cursor-pointer transition duration-500 dark:text-white dark:hover:text-green-300"
                            onClick={() => setDisplayMenu(true)}
                        >
                            <i className="material-icons-outlined">grid_view</i>
                        </h6>
                    </div>
                </div>
            )}
            {displayMenu && (
                <div className="fixed bottom-0 z-10 inset-x-0 md:hidden py-1 mx-auto px-5 flex flex-col flex-wrap bg-white dark:bg-gray-900 bg-opacity-100">
                    <div className="grid grid-cols-2 gap-3 shadow-lg rounded-md py-2 my-4">
                        <Link
                            to="/"
                            className="p-3 flex flex-col text-center hover:text-green-300 cursor-pointer transition duration-500 dark:text-white dark:hover:text-green-300"
                        >
                            <div className="py-1">
                                <i className="material-icons-outlined text-2xl">
                                    house
                                </i>
                            </div>
                            <div className="py-1 font-bold">Home</div>
                        </Link>
                        <Link
                            to="/about"
                            className="p-3 flex flex-col text-center hover:text-green-300 cursor-pointer transition duration-500 dark:text-white dark:hover:text-green-300"
                        >
                            <div className="py-1">
                                <i className="material-icons-outlined text-2xl">
                                    person
                                </i>
                            </div>
                            <div className="py-1 font-bold">About</div>
                        </Link>
                        <Link
                            to="/skills"
                            className="p-3 flex flex-col text-center hover:text-green-300 cursor-pointer transition duration-500 dark:text-white dark:hover:text-green-300"
                        >
                            <div className="py-1">
                                <i className="material-icons-outlined text-2xl">
                                    sticky_note_2
                                </i>
                            </div>
                            <div className="py-1 font-bold">Skills</div>
                        </Link>
                        <Link
                            to="/works"
                            className="p-3 flex flex-col text-center hover:text-green-300 cursor-pointer transition duration-500 dark:text-white dark:hover:text-green-300"
                        >
                            <div className="py-1">
                                <i className="material-icons-outlined text-2xl">
                                    work_outline
                                </i>
                            </div>
                            <div className="py-1 font-bold">Works</div>
                        </Link>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <Link
                                to="/"
                                className="font-bold md:mx-4 hover:text-green-300 cursor-pointer transition duration-500 dark:text-white dark:hover:text-green-300"
                            >
                                Pranesh Palanisamy
                            </Link>
                        </div>
                        <div className="flex">
                            {theme ? (
                                <h6
                                    className="font-bold mr-2 md:mx-4 hover:text-green-300 cursor-pointer transition duration-500 dark:text-white dark:hover:text-green-300"
                                    onClick={() => setTheme(!theme)}
                                >
                                    <span className="material-icons-outlined">
                                        light_mode
                                    </span>
                                </h6>
                            ) : (
                                <h6
                                    className="font-bold mr-2 md:mx-4 hover:text-green-300 cursor-pointer transition duration-500 dark:text-white dark:hover:text-green-300"
                                    onClick={() => setTheme(!theme)}
                                >
                                    <span className="material-icons-outlined">
                                        dark_mode
                                    </span>
                                </h6>
                            )}
                            <h6
                                className="font-bold ml-2 md:hidden hover:text-green-300 cursor-pointer transition duration-500 dark:text-white dark:hover:text-green-300"
                                onClick={() => setDisplayMenu(false)}
                            >
                                <i className="material-icons-outlined">close</i>
                            </h6>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Navbar;
