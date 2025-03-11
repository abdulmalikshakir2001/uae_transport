"use client";
import { useState, useEffect } from "react";
import { FaLessThan, FaGreaterThan, FaBars } from "react-icons/fa6";
import NavBar from "./NavBar";
import Image from "next/image";
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: "/carousel/slide1.webp",
      title: "Wellcome to  UAE Transport",
      description: "Buss Rental And Transportation.",
    },
    {
      image: "/carousel/slide2.webp",
      title: "Professional Services",
      description: "Experience top-notch support and service from our team.",
    },
    {
      image: "/carousel/slide3-2.webp",
      title: "Your Success, Our Mission",
      description: "We are dedicated to achieving your goals together.",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-screen ">
      <NavBar />
      {/* Carousel wrapper */}
      <div className="bg-gray-400 h-screen w-full ">
        <div className="relative h-screen overflow-hidden ">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                currentIndex === index ? "opacity-80" : "opacity-0"
              }`}
            >
              <Image
                src={slide.image}
                className=" object-cover "
                alt={slide.title}
                fill
                loading="eager"
              />

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white  z-50 ">
                <h1 className="md:text-2xl text-lg ">{slide.title}</h1>
                <h2 className="md:text-4xl text-2xl  font-bold mt-2">
                  {slide.description}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="carsousel-btn left-4"
        onClick={prevSlide}
      >
        <FaLessThan />
      </button>
      <button
        type="button"
        className="carsousel-btn right-4"
        onClick={nextSlide}
      >
        <FaGreaterThan />
      </button>
    </div>
  );
};

export default Carousel;
