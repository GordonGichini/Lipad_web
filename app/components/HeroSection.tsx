"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'

type Category = 'banks' | 'merchants'

const heroContent: Record<Category, { title: string; subtitle: string; image: string }[]> = {
    banks: [
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
    ],
    merchants: [
        {
            title: "Exclusive Solutions for Merchants",
            subtitle: "Easy integrations and powerful tools for your business",
            image: "/Images/Merchant 1.png"
        },
        {
            title: "Optimized for Growth",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            image: "/Images/Merchant 2.png"
        }
    ]
}

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [category, setCategory] = useState<Category>('banks')  // Set type as Category explicitly
    const content = heroContent[category]

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % content.length)
        }, 5000)

        return () => clearInterval(timer)
    }, [content.length])

    return (
        <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            {content[currentSlide].title}
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            {content[currentSlide].subtitle}
                        </p>
                        <button
                            className="px-4 py-2 bg-[#1F2544] text-white rounded-full hover:bg-blue-700"
                        >
                            Get Started
                        </button>
                        <div className="mt-8 flex space-x-2">
                            {content.map((_, index) => (
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
                                src={content[currentSlide].image}
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
