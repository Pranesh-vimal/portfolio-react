import React from "react";

function Skills() {
    return (
        <div
            className="container mx-auto md:px-5 my-12 md:my-5"
            data-aos="fade-up"
        >
            <div className="text-center">
                <h1 className="font-extrabold py-2 text-2xl md:text-4xl dark:text-white">
                    Skills
                </h1>
                <p className="font-semibold py-2 dark:text-white">
                    My technical level
                </p>
            </div>
            <div className="md:my-5 grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-3">
                <div className="p-2 text-center flex flex-col">
                    <h1 className="font-extrabold md:text-xl">
                        <i className="fas fa-code text-green-300 font-extrabold mx-5"></i>
                        <span className="dark:text-white">
                            Frontend frameworks
                        </span>
                    </h1>
                    <div className="py-2 mx-3">
                        <div className="p-2 flex flex-wrap justify-between">
                            <p className="py-1 px-2 font-bold dark:text-white">
                                React
                            </p>
                            <p className="py-1 px-2 text-green-400 font-thin">
                                80%
                            </p>
                        </div>
                        <div className="flex">
                            <div className="w-9/12 bg-green-400 h-2 rounded-l-full"></div>
                            <div className="w-3/12 bg-green-500 bg-opacity-40 h-2 rounded-r-full"></div>
                        </div>
                        <div className="p-2 flex flex-wrap justify-between">
                            <p className="py-1 px-2 font-bold dark:text-white">
                                Bootstrap
                            </p>
                            <p className="py-1 px-2 text-green-400 font-thin">
                                90%
                            </p>
                        </div>
                        <div className="flex">
                            <div className="w-11/12 bg-green-400 h-2 rounded-l-full"></div>
                            <div className="w-1/12 bg-green-500 bg-opacity-40 h-2 rounded-r-full"></div>
                        </div>
                        <div className="p-2 flex flex-wrap justify-between">
                            <p className="py-1 px-2 font-bold dark:text-white">
                                Tailwind
                            </p>
                            <p className="py-1 px-2 text-green-400 font-thin">
                                80%
                            </p>
                        </div>
                        <div className="flex">
                            <div className="w-9/12 bg-green-400 h-2 rounded-l-full"></div>
                            <div className="w-3/12 bg-green-500 bg-opacity-40 h-2 rounded-r-full"></div>
                        </div>
                    </div>
                </div>
                <div className="p-2 text-center flex flex-col">
                    <h1 className="font-extrabold md:text-xl">
                        <i className="fas fa-server text-green-300 font-extrabold mx-5"></i>
                        <span className="dark:text-white">
                            Backend frameworks
                        </span>
                    </h1>
                    <div className="py-2 mx-3">
                        <div className="p-2 flex flex-wrap justify-between">
                            <p className="py-1 px-2 font-bold dark:text-white">
                                Node
                            </p>
                            <p className="py-1 px-2 text-green-400 font-thin">
                                80%
                            </p>
                        </div>
                        <div className="flex">
                            <div className="w-9/12 bg-green-400 h-2 rounded-l-full"></div>
                            <div className="w-3/12 bg-green-500 bg-opacity-40 h-2 rounded-r-full"></div>
                        </div>
                        <div className="p-2 flex flex-wrap justify-between">
                            <p className="py-1 px-2 font-bold dark:text-white">
                                Laravel
                            </p>
                            <p className="py-1 px-2 text-green-400 font-thin">
                                90%
                            </p>
                        </div>
                        <div className="flex">
                            <div className="w-11/12 bg-green-400 h-2 rounded-l-full"></div>
                            <div className="w-1/12 bg-green-500 bg-opacity-40 h-2 rounded-r-full"></div>
                        </div>
                    </div>
                </div>
                <div className="p-2 text-center flex flex-col">
                    <h1 className="font-extrabold md:text-xl">
                        <i className="fas fa-database text-green-300 font-extrabold mx-5"></i>
                        <span className="dark:text-white">
                            Databases
                        </span>
                    </h1>
                    <div className="py-2 mx-3">
                        <div className="p-2 flex flex-wrap justify-between">
                            <p className="py-1 px-2 font-bold dark:text-white">
                                MySQL
                            </p>
                            <p className="py-1 px-2 text-green-400 font-thin">
                                80%
                            </p>
                        </div>
                        <div className="flex">
                            <div className="w-9/12 bg-green-400 h-2 rounded-l-full"></div>
                            <div className="w-3/12 bg-green-500 bg-opacity-40 h-2 rounded-r-full"></div>
                        </div>
                        <div className="p-2 flex flex-wrap justify-between">
                            <p className="py-1 px-2 font-bold dark:text-white">
                                Mongo DB
                            </p>
                            <p className="py-1 px-2 text-green-400 font-thin">
                                70%
                            </p>
                        </div>
                        <div className="flex">
                            <div className="w-8/12 bg-green-400 h-2 rounded-l-full"></div>
                            <div className="w-4/12 bg-green-500 bg-opacity-40 h-2 rounded-r-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
