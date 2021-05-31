import React from "react";
import image from "../assets/img/pranesh-1.jpg";

function About() {
    return (
        <div className="container mx-auto md:px-5 my-10 md:my-5" data-aos="fade-up">
            <div className="text-center">
                <h1 className="font-extrabold py-2 text-2xl md:text-4xl dark:text-white">
                    About Me
                </h1>
                <p className="font-semibold py-2 dark:text-white">
                    My introduction
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3 md:mt-6 container mx-auto md:px-10 text-center md:text-justify">
                <div className="px-5 py-2 md:p-2">
                    <img src={image} alt="Pranesh" className="rounded-lg border border-green-300 dark:border-white" />
                </div>
                <div className="p-2">
                    <div className="md:my-5 text-green-400">
                        <p className="mx-2">
                            Web developer with extensive knowledge and years of
                            experience working with web technologies like
                            <span className="font-extrabold">
                                {" "}
                                React, Node{" "}
                            </span>
                            and
                            <span className="font-extrabold"> Laravel, </span>
                            delivering quality of work.
                        </p>
                    </div>
                    <div className="mt-3 md:my-5 grid grid-cols-2 text-center gap-3 dark:text-white">
                        <div className="p-2 flex flex-col">
                            <h1 className="font-extrabold text-2xl md:text-5xl">
                                1
                            </h1>
                            <p className="text-xs font-bold">
                                Year Experience
                            </p>
                        </div>
                        <div className="p-2 flex flex-col">
                            <h1 className="font-extrabold text-2xl md:text-5xl">
                                2
                            </h1>
                            <p className="text-xs font-bold">
                                Completed projects
                            </p>
                        </div>
                        <div className="col-span-2 w-full my-2 md:mt-5">
                            <a
                                href="https://drive.google.com/file/d/1kfTDhJtiJhPcykmOgxlcvH-G0vik-gZ_/view?usp=sharing"
                                target="_blank"
                                rel="noreferrer"
                                className="py-2 px-3 rounded-md shadow-sm bg-green-400 cursor-pointer text-white"
                            >
                                Download Resume
                                <i className="fas fa-cloud-download-alt mx-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
