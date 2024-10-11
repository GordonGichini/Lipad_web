'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'


const heroContent = [
    {
        title: "All your business payments on one platform",
        subtitle: "Collect online or in-store, across all your branches",
        image: "/Images/Background 1.png"
    },
    {
        title: "Effortless Transactions, Endless Possibilities",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
        image: "/Images/PDQ 2.png"

    }
]

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % heroContent.length)
        }, 5000) // Change slide every 5 seconds

        return () => clearInterval(timer)
    }, [])

    return (
        <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            {heroContent[currentSlide].title}
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            {heroContent[currentSlide].subtitle}
                        </p>
                        <button
                            className="px-4 py-2 bg-[#1F2544] text-white rounded-full hover:bg-blue-700"
                        >
                            Get Started
                        </button>
                        <div className="mt-8 flex space-x-2">
                            {heroContent.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-3 h-3 rounded-full ${
                                        index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                                    }`}
                                    onClick={() => setCurrentSlide(index)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <div className="relative w-full h-96">
                            <Image
                                src={heroContent[currentSlide].image}
                                alt="Hero Image"
                                layout="fill"
                                objectFit="contain"
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}