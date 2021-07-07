import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/components/pagination/pagination.min.css";
import works from "../data/works";

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
                        {works().map((data, index) => (
                            <SwiperSlide key={index}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-3">
                                    <div className="p-2">
                                        <img
                                            src={data.image}
                                            className="rounded-lg h-32 md:h-64 w-full"
                                            alt={data.name}
                                        />
                                    </div>
                                    <div className="p-2">
                                        <h1 className="font-bold my-2 dark:text-white md:text-xl text-center">
                                            {data.name}
                                        </h1>
                                        <p
                                            className="text-green-400"
                                            dangerouslySetInnerHTML={{
                                                __html: data.desc,
                                            }}
                                        ></p>
                                        <div className="flex justify-center my-3">
                                            <a
                                                href={data.website}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="px-3 py-2 text-white bg-green-300 rounded-lg hover:bg-green-400 w-full text-center mx-3"
                                            >
                                                <i className="fas fa-link"></i>
                                            </a>
                                            <a
                                                href={data.github}
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
                        ))}
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
