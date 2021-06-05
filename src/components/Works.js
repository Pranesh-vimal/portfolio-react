import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/components/pagination/pagination.min.css";
import coronatracker from "../assets/img/corona-tracker.png";
import seriesFinder from "../assets/img/react-series-finder.png";
import pokemonApp from "../assets/img/pokemon.png";
import spot from "../assets/img/spot.png";
import royalcakes from "../assets/img/royal-cakes.png";
import sayaboutme from "../assets/img/sayaboutme.png";
import omdb from "../assets/img/omdb.png";
import tictactoe from "../assets/img/ticktactoe.png";

SwiperCore.use([Pagination, Navigation]);

function Works() {
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    const [prev, setPrev] = useState(false);
    const [next, setNext] = useState(true);

    return (
        <div
            className="container mx-auto md:px-5 my-12 md:my-5"
            data-aos="fade-up"
        >
            <div className="text-center">
                <h1 className="font-extrabold py-2 text-2xl md:text-4xl dark:text-white">
                    Works
                </h1>
                <p className="font-semibold py-2 dark:text-white">
                    My recent work
                </p>
            </div>
            <div className="container mx-auto px-6 my-6 grid grid-cols-8">
                <div
                    className="flex flex-col justify-center col-span-1 cursor-pointer text-green-400"
                    ref={navigationPrevRef}
                >
                    {prev && (
                        <div className="flex justify-center">
                            <i className="fas fa-chevron-left md:text-2xl"></i>
                        </div>
                    )}
                </div>
                <div className="col-span-6 h-64">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        // pagination={{ clickable: true }}
                        onSlideChange={(swiper) => {
                            setNext(!swiper.isEnd);
                            setPrev(!swiper.isBeginning);
                        }}
                        navigation={{
                            // Both prevEl & nextEl are null at render so this does not work
                            prevEl: navigationPrevRef.current,
                            nextEl: navigationNextRef.current,
                        }}
                        onSwiper={(swiper) => {
                            // Delay execution for the refs to be defined
                            setTimeout(() => {
                                // Override prevEl & nextEl now that refs are defined
                                swiper.params.navigation.prevEl =
                                    navigationPrevRef.current;
                                swiper.params.navigation.nextEl =
                                    navigationNextRef.current;

                                // Re-init navigation
                                swiper.navigation.destroy();
                                swiper.navigation.init();
                                swiper.navigation.update();
                            });
                        }}
                    >
                        <SwiperSlide>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-3">
                                <div className="p-2">
                                    <img
                                        src={coronatracker}
                                        className="rounded-lg h-32 md:h-64 w-full"
                                        alt="coronatracker"
                                    />
                                </div>
                                <div className="p-2">
                                    <h1 className="font-bold my-2 dark:text-white md:text-xl text-center">
                                        Corona Tracker India
                                    </h1>
                                    <p className="text-green-400">
                                        A website to display the live corona
                                        count in India which is build using
                                        <span className="font-bold">
                                            {" "}
                                            Reactjs
                                        </span>
                                        .
                                    </p>
                                    <div className="flex justify-center my-3">
                                        <a
                                            href="https://coronatrackerindia.netlify.app/"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="px-3 py-2 text-white bg-green-300 rounded-lg hover:bg-green-400 w-full text-center mx-3"
                                        >
                                            <i className="fas fa-link"></i>
                                        </a>
                                        <a
                                            href="https://github.com/Pranesh-vimal/corona-tracker/"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="px-3 py-2 text-white bg-green-300 rounded-lg hover:bg-green-400 w-full text-center mx-3"
                                        >
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-3">
                                <div className="p-2">
                                    <img
                                        src={seriesFinder}
                                        className="rounded-lg h-32 md:h-64 w-full"
                                        alt="series finder"
                                    />
                                </div>
                                <div className="p-2">
                                    <h1 className="font-bold my-2 dark:text-white md:text-xl text-center">
                                        Series Finder
                                    </h1>
                                    <p className="text-green-400">
                                        A website to display the series details.
                                        It is developed using
                                        <span className="font-bold">
                                            {" "}
                                            Reactjs
                                        </span>
                                        .
                                    </p>
                                    <div className="flex justify-center my-3">
                                        <a
                                            href="https://pranesh-series-finder.netlify.app/"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="px-3 py-2 text-white bg-green-300 rounded-lg hover:bg-green-400 w-full text-center mx-3"
                                        >
                                            <i className="fas fa-link"></i>
                                        </a>
                                        <a
                                            href="https://github.com/Pranesh-vimal/react-series-finder/"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="px-3 py-2 text-white bg-green-300 rounded-lg hover:bg-green-400 w-full text-center mx-3"
                                        >
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-3">
                                <div className="p-2">
                                    <img
                                        src={pokemonApp}
                                        className="rounded-lg h-32 md:h-64 w-full"
                                        alt="pokemon app"
                                    />
                                </div>
                                <div className="p-2">
                                    <h1 className="font-bold my-2 dark:text-white md:text-xl text-center">
                                        Pokemon App
                                    </h1>
                                    <p className="text-green-400">
                                        A website to display the pokemon details
                                        like abilities, type, gender etc.. It is
                                        build using
                                        <span className="font-bold">
                                            {" "}
                                            Reactjs
                                        </span>
                                        .
                                    </p>
                                    <div className="flex justify-center my-3">
                                        <a
                                            href="https://pranesh-pokemon.netlify.app/"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="px-3 py-2 text-white bg-green-300 rounded-lg hover:bg-green-400 w-full text-center mx-3"
                                        >
                                            <i className="fas fa-link"></i>
                                        </a>
                                        <a
                                            href="https://github.com/Pranesh-vimal/pokemon-react-app/"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="px-3 py-2 text-white bg-green-300 rounded-lg hover:bg-green-400 w-full text-center mx-3"
                                        >
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-3">
                                <div className="p-2">
                                    <img
                                        src={spot}
                                        className="rounded-lg h-32 md:h-64 w-full"
                                        alt="Ecommerce"
                                    />
                                </div>
                                <div className="p-2">
                                    <h1 className="font-bold my-2 dark:text-white md:text-xl text-center">
                                        Ecommerce
                                    </h1>
                                    <p className="text-green-400">
                                        A fully featured ecommerce web
                                        application with product management,
                                        order management and delivery
                                        management. It is developed using
                                        <span className="font-bold">
                                            {" "}
                                            Laravel
                                        </span>{" "}
                                        and
                                        <span className="font-bold">
                                            {" "}
                                            Livewire
                                        </span>
                                        .
                                    </p>
                                    <div className="flex justify-center my-3">
                                        <a
                                            href="#ecommerce"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="px-3 py-2 text-white bg-green-300 rounded-lg hover:bg-green-400 w-full text-center mx-3"
                                        >
                                            <i className="fas fa-link"></i>
                                        </a>
                                        <a
                                            href="https://github.com/Pranesh-vimal/spot-ecommerce/"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="px-3 py-2 text-white bg-green-300 rounded-lg hover:bg-green-400 w-full text-center mx-3"
                                        >
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-3">
                                <div className="p-2">
                                    <img
                                        src={royalcakes}
                                        className="rounded-lg h-32 md:h-64 w-full"
                                        alt="Ecommerce"
                                    />
                                </div>
                                <div className="p-2">
                                    <h1 className="font-bold my-2 dark:text-white md:text-xl text-center">
                                        Ecommerce
                                    </h1>
                                    <p className="text-green-400">
                                        A fully featured ecommerce web
                                        application with product management,
                                        order management and delivery
                                        management. It is developed using
                                        <span className="font-bold">
                                            {" "}
                                            Nodejs
                                        </span>
                                        .
                                    </p>
                                    <div className="flex justify-center my-3">
                                        <a
                                            href="https://royalcakes.in/"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="px-3 py-2 text-white bg-green-300 rounded-lg hover:bg-green-400 w-full text-center mx-3"
                                        >
                                            <i className="fas fa-link"></i>
                                        </a>
                                        <a
                                            href="#ecommerce"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="px-3 py-2 text-white bg-green-300 rounded-lg hover:bg-green-400 w-full text-center mx-3"
                                        >
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-3">
                                <div className="p-2">
                                    <img
                                        src={sayaboutme}
                                        className="rounded-lg h-32 md:h-64 w-full"
                                        alt="sayaboutme"
                                    />
                                </div>
                                <div className="p-2">
                                    <h1 className="font-bold my-2 dark:text-white md:text-xl text-center">
                                        Say About Me
                                    </h1>
                                    <p className="text-green-400">
                                        An anonymous for confession, it has
                                        OAuth for login and build using
                                        <span className="font-bold"> Php</span>.
                                    </p>
                                    <div className="flex justify-center my-3">
                                        <a
                                            href="http://sayaboutme.ga/"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="px-3 py-2 text-white bg-green-300 rounded-lg hover:bg-green-400 w-full text-center mx-3"
                                        >
                                            <i className="fas fa-link"></i>
                                        </a>
                                        <a
                                            href="https://github.com/Pranesh-vimal/SayAboutMe/"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="px-3 py-2 text-white bg-green-300 rounded-lg hover:bg-green-400 w-full text-center mx-3"
                                        >
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-3">
                                <div className="p-2">
                                    <img
                                        src={omdb}
                                        className="rounded-lg h-32 md:h-64 w-full"
                                        alt="omdb"
                                    />
                                </div>
                                <div className="p-2">
                                    <h1 className="font-bold my-2 dark:text-white md:text-xl text-center">
                                        Movie Finder
                                    </h1>
                                    <p className="text-green-400">
                                        A movie finder application which
                                        displays posters of the movie. It is
                                        developed using
                                        <span className="font-bold">
                                            {" "}
                                            Reactjs
                                        </span>
                                        .
                                    </p>
                                    <div className="flex justify-center my-3">
                                        <a
                                            href="https://pranesh-omdb.netlify.app/"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="px-3 py-2 text-white bg-green-300 rounded-lg hover:bg-green-400 w-full text-center mx-3"
                                        >
                                            <i className="fas fa-link"></i>
                                        </a>
                                        <a
                                            href="https://github.com/Pranesh-vimal/OMDbAPI-React/"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="px-3 py-2 text-white bg-green-300 rounded-lg hover:bg-green-400 w-full text-center mx-3"
                                        >
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-3">
                                <div className="p-2">
                                    <img
                                        src={tictactoe}
                                        className="rounded-lg h-32 md:h-64 w-full"
                                        alt="tictactoe"
                                    />
                                </div>
                                <div className="p-2">
                                    <h1 className="font-bold my-2 dark:text-white md:text-xl text-center">
                                        Tic Tac Toe
                                    </h1>
                                    <p className="text-green-400">
                                        A simple tic tac toe game build using
                                        <span className="font-bold">
                                            {" "}
                                            Reactjs
                                        </span>
                                        .
                                    </p>
                                    <div className="flex justify-center my-3">
                                        <a
                                            href="https://pranesh-tik-tak-toe.netlify.app/"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="px-3 py-2 text-white bg-green-300 rounded-lg hover:bg-green-400 w-full text-center mx-3"
                                        >
                                            <i className="fas fa-link"></i>
                                        </a>
                                        <a
                                            href="https://github.com/Pranesh-vimal/OMDbAPI-React/"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="px-3 py-2 text-white bg-green-300 rounded-lg hover:bg-green-400 w-full text-center mx-3"
                                        >
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div
                    className="flex flex-col justify-center col-span-1 cursor-pointer text-green-400"
                    ref={navigationNextRef}
                >
                    {next && (
                        <div className="flex justify-center">
                            <i className="fas fa-chevron-right md:text-2xl"></i>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Works;
