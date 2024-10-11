// components/CarouselHero.tsx
"use client"
import React, { useState, useEffect } from 'react';

const heroContent = [
    {
        id: 1,
        title: "All your business payments on one platform",
        description: "Collect online on socials, across all your branches",
        image: "/path-to-your-image1.png",
    },
    {
        id: 2,
        title: "Effortless Transactions, Endless Possibilities",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "/path-to-your-image2.png",
    },
];

const CarouselHero: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
        }, 5000); // Change card every 5 seconds
        return () => clearInterval(interval);
    }, []);

    const handleDotClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <section className="flex flex-col md:flex-row items-center justify-between p-12 bg-gray-50">
            <div className="md:w-1/2 space-y-6">
                <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full">Banks</span>
                    <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full">Merchants</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                    {heroContent[activeIndex].title}
                </h1>
                <p className="text-gray-600">
                    {heroContent[activeIndex].description}
                </p>
                <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                    Get Started
                </button>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
                <img src={heroContent[activeIndex].image} alt="Hero Image" className="w-full h-auto" />
            </div>
            <div className="flex justify-center mt-4 space-x-2">
                {heroContent.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
                    ></button>
                ))}
            </div>
        </section>
    );
};

export default CarouselHero;
