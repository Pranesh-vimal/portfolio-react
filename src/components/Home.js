import React from "react";
import Image from "../assets/img/pranesh.png";

function Home() {
    return (
        <div className="grid grid-cols-5 container mx-auto px-5">
            <div className="flex flex-col md:mx-4 col-span-1 justify-center text-center text-green-400 h-screen">
                <div className="my-3">
                    <a
                        href="https://www.linkedin.com/in/pranesh-vimal/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i class="fab fa-linkedin text-2xl"></i>
                    </a>
                </div>
                <div className="my-3">
                    <a
                        href="https://github.com/Pranesh-vimal/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i class="fab fa-github text-2xl"></i>
                    </a>
                </div>
                <div className="my-3">
                    <a
                        href="https://twitter.com/Pranesh_Vimal/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i class="fab fa-twitter-square text-2xl"></i>
                    </a>
                </div>
            </div>
            <div className="md:mx-4 my-5 md:my-10 col-span-4 grid grid-cols-1 md:grid-cols-2">
                <div className="mt-5 hidden md:block">
                    <div className="p-3">
                        <h1 className="font-extrabold py-2 md:text-4xl dark:text-white">
                            Hi, I'am Pranesh
                        </h1>
                        <p className="font-semibold py-2 text-green-400 dark:text-green-400">
                            Full stack developer
                        </p>
                        <p className="py-2 text-green-400 dark:text-green-400">
                            High level experience in web development and
                            producting quality of work
                        </p>
                    </div>
                </div>
                <div className="mt-5 flex justify-center">
                    <svg
                        viewBox="0 0 200 187"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        className="h-52 md:h-64"
                        fill="#6EE7B7"
                    >
                        <mask id="mask0" mask-type="alpha">
                            <path
                                d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                            />
                        </mask>
                        <g mask="url(#mask0)">
                            <path
                                d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                            />
                            <image className="h-64" xlinkHref={Image} />
                        </g>
                    </svg>
                </div>
                <div className="-mt-10 text-center md:hidden">
                    <div className="p-3">
                        <h1 className="font-extrabold md:py-2 md:text-4xl dark:text-white">
                            Hi, I'am Pranesh
                        </h1>
                        <p className="font-semibold md:py-2 text-green-400 dark:text-green-400">
                            Full stack developer
                        </p>
                        <p className="md:py-2 text-green-400 dark:text-green-400">
                            High level experience in web development and
                            producing quality of work
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
