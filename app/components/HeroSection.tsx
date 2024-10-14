'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames'


const heroContent = {
    banks: [
        {
            title: "All your business payments on one platform",
            subtitle: "Collect online or in-store, across all your branches",
            image: "/Images/Background 1.png"
        }
    ],
    merchants: [
        {
            title: "Effortless Transactions, Endless Possibilities",
            subtitle: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
            image: "/Images/PDQ 2.png"
        }
    ]
}

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [category, setCategory] = useState('banks')
    const content = heroContent[category]

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % content.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [category])

    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory)
        setCurrentSlide(0)
    }

    return (
        <div className="bg-white py-10">
            <div
                className="max-w-8xl mx-auto px-8 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-8">
                {/* First Container with Grey Background */}
                <div className="md:w-1/2  flex flex-col items-start space-y-8 mb-8 md:mb-0 bg-gray-100 p-12 rounded-lg">
                    <div className="flex space-x-1 mb-4">
                        <button
                            className={classNames(
                                'px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200',
                                category === 'banks' ? 'bg-[#1F2544] text-white' : 'bg-gray-200 text-gray-700'
                            )}
                            onClick={() => handleCategoryChange('banks')}
                        >
                            Banks
                        </button>
                        <button
                            className={classNames(
                                'px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200',
                                category === 'merchants' ? 'bg-[#1F2544] text-white' : 'bg-gray-200 text-gray-700'
                            )}
                            onClick={() => handleCategoryChange('merchants')}
                        >
                            Merchants
                        </button>
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                        {content[currentSlide].title}
                    </h1>
                    <p className="text-xl text-gray-600">
                        {content[currentSlide].subtitle}
                    </p>
                    <Link href="/contact">
                        <button className="px-4 py-2 bg-[#1F2544] text-white rounded-full hover:bg-blue-700">
                            Get Started
                        </button>
                    </Link>
                    <div className="flex space-x-2 mt-4">
                        <div
                            className={`w-2 h-2 rounded-full ${currentSlide === 0 ? 'bg-[#1F2544]' : 'bg-gray-300'}`}></div>
                        <div
                            className={`w-2 h-2 rounded-full ${currentSlide === 1 ? 'bg-[#1F2544]' : 'bg-gray-300'}`}></div>
                    </div>
                </div>

                {/* Second Container */}
                <div className="md:w-1/2 relative h-[450px] w-full max-w-[430px] rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-green-800"></div>
                    <Image
                        src="/Images/Layer 1.png"
                        alt="Africa Map"
                        layout="fill"
                        objectFit="cover"
                        className="opacity-20"
                    />
                    <div className="relative h-full flex items-center justify-center">
                        <Image
                            src="/Images/Rectangle 728.png"
                            alt="Illustration"
                            width={400}
                            height={400}
                            className="absolute bottom-2 left-3 opacity-80"
                        />
                        <Image
                            src={content[currentSlide].image}
                            alt="Hero Image"
                            width={500}
                            height={480}
                            className="relative z-10"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}