"use client";
import { useState, useEffect, useRef } from "react";

interface IProps {
    slides: {
        title: string
        image?: string
        imageAlt?: string
        url?: string
    }[]
}

export default function AffiliateCarousel({ slides }: IProps) {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const containerRef = useRef(null);
    const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
    const paddingBetweenSlides = 16;

    const previousSlide = (): void => {
        let newIndex = (currentIndex - 1 + slides.length) % slides.length;
        setCurrentIndex(newIndex);
        adjustSlideScroll(newIndex);
    };

    const nextSlide = (): void => {
        let newIndex = (currentIndex + 1) % slides.length;
        setCurrentIndex(newIndex);
        adjustSlideScroll(newIndex);
    };

    const setSlideIndex = (index: number): void => {
        setCurrentIndex(index);
        adjustSlideScroll(index);
    }

    const adjustSlideScroll = (index: number): void => {
        if (containerRef.current && slideRefs.current[0] && slideRefs.current[index]) {
            let containerElement = containerRef.current as unknown as HTMLDivElement;
            let slideOffset = (slideRefs.current[index].offsetWidth / 2);
            if (window.innerWidth < 640) {
                slideOffset = 0;
            }
            containerElement.scrollLeft = (slideRefs.current[index].offsetLeft - slideRefs.current[0].offsetLeft) - slideOffset;
        }
    }

    const handleMouseOver = (): void => {
        setIsHovered(true);
    };
    const handleMouseLeave = (): void => {
        setIsHovered(false);
    };

    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(() => {
                nextSlide();
            }, 3000);

            return () => {
                clearInterval(interval);
            };
        }
    }, [isHovered, currentIndex]);

    const handleScroll = () => {
        if (containerRef.current && slideRefs.current[0]) {
            let containerElement = containerRef.current as unknown as HTMLDivElement;
            let slideOffset = (slideRefs.current[0].offsetWidth / 2);
            if (window.innerWidth < 640) {
                slideOffset = 0;
            }
            let index = (containerElement.scrollLeft - (paddingBetweenSlides * currentIndex) + slideOffset) / slideRefs.current[0].offsetWidth
            setCurrentIndex(Math.round(index));
        }
    };

    return (
        <div className="relative flex items-stretch justify-between w-full bg-neutral-800 bg-opacity-75 rounded-md overflow-hidden shadow-md shadow-black/50"
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleMouseOver}
            onTouchEnd={handleMouseLeave}>
            <div className="relative flex flex-col justify-between w-full">
                <div className="flex flex-row gap-4 overflow-y-hidden py-4 mx-8 overflow-x-scroll scroll-smooth"
                    ref={containerRef}
                    onScroll={handleScroll}>
                    {slides.map((slide, index) => (
                        <div ref={element => { (slideRefs.current[index] = element) }}
                            key={`slide-${index}`}
                            className={"basis-[100%] sm:basis-1/2 shrink-0 rounded-md overflow-hidden shadow-md shadow-black/50 bg-neutral-500 hover:bg-neutral-900 hover:scale-105 md:hover:scale-[1.02] transition-transform"}
                        >
                            <a href={slide.url} target="_blank" className="flex flex-col w-full">
                                <img className="w-full"
                                    src={slide.image}
                                    alt={slide.imageAlt}
                                />
                                <div className="flex flex-row justify-between text-center items-center gap-2 p-4 h-20 bg-neutral-900">
                                    <div className="font-bold text-white text-left">{slide.title}</div>
                                    <svg className="w-8 grow-0 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#0f0" strokeWidth="4" viewBox="0 0 64 64">
                                        <path d="M55.4 32v21.58a1.81 1.81 0 0 1-1.82 1.82H10.42a1.81 1.81 0 0 1-1.82-1.82V10.42a1.81 1.81 0 0 1 1.82-1.82H32M40.32 8.6H55.4v15.58M19.32 45.72 54.61 8.91" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center flex-wrap gap-2 mx-8 my-4">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setSlideIndex(index)}
                            className={`h-2 w-6 ${index === currentIndex
                                ? "bg-green-500 rounded-full"
                                : "bg-neutral-900 rounded-full"
                                } transition-all duration-300 ease-in-out`}
                        ></button>
                    ))}
                </div>
            </div>
            <button
                className="absolute h-full w-8 rounded-l-md hover:bg-neutral-900 bg-neutral-800 text-white font-bold group"
                onClick={previousSlide}
            >
                <p className="text-neutral-400 group-hover:text-white">{'<'}</p>
            </button>
            <button
                className="absolute right-0 h-full w-8 rounded-r-md hover:bg-neutral-900 bg-neutral-800 text-white font-bold group"
                onClick={nextSlide}
            >
                <p className="text-neutral-400 group-hover:text-white">{'>'}</p>
            </button>
        </div>
    );
}
