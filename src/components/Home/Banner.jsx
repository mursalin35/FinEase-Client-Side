// HeroBanner.jsx
import React, { useState, useEffect } from "react";

const slides = [
  {
    image: "https://i.ibb.co/B2BjxbZz/finans-2.jpg",
    text: "Take control of your money,\nand your future will thank you.",
  },
  {
    image: "https://i.ibb.co/DSk3bRt/finans-3.jpg",
    text: "Every dollar saved\nis a step closer to your dreams.",
  },
  {
    image: "https://i.ibb.co/nshs876K/finans-1.jpg",
    text: "Plan wisely today,\nenjoy freedom tomorrow.",
  },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-11/12 mx-auto rounded-2xl h-[400px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
           
          }}
        >
          {/* Dark overlay for text visibility */}
          <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <h1
              className="text-3xl md:text-5xl font-bold text-center px-4 md:px-0 whitespace-pre-line"
              style={{
                background: "var(--gradient-primary)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              {slide.text}
            </h1>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-6 w-full flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-primary" : "bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Banner;
