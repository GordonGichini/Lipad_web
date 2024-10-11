'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, ChevronUp } from 'lucide-react'

const bankLogos = [
    { name: 'Co-op Bank', src: '/Images/image 78.png' },
    { name: 'Stanbic Bank', src: '/Images/image 77.png' },
    { name: 'Absa', src: '/Images/image 79.png' },
    { name: 'KCB', src: '/Images/image 80.png' },
    { name: 'I&M Bank', src: '/Images/image 81.png' },
]

const accordionItems = [
    { title: 'Instant Activation to start transacting', content: 'Get started quickly with our seamless onboarding process.' },
    { title: 'Simple pricing', content: 'Transparent and competitive rates for all your transactions.' },
    { title: 'Built for all merchants', content: 'Our platform caters to businesses of all sizes and industries.' },
    { title: 'Dashboard Reporting', content: 'Comprehensive analytics and insights to track your business performance.' },
]

export default function LipadFeatures() {
    const [openItem, setOpenItem] = useState<number | null>(null)

    const toggleItem = (index: number) => {
        setOpenItem(openItem === index ? null : index)
    }

    return (
        <div className="bg-gray-100 text-black py-12">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-2xl font-bold mb-8 text-center">Our partner banks</h2>
                <div className="flex justify-between items-center mb-16">
                    {bankLogos.map((bank, index) => (
                        <div key={index} className="w-1/5 px-2">
                            <Image
                                src={bank.src}
                                alt={`${bank.name} logo`}
                                width={120}
                                height={60}
                                className="max-w-full h-auto"
                            />
                        </div>
                    ))}
                </div>

                <div className="flex">
                    <div className="w-1/2 pr-8">
                        <h3 className="text-sm uppercase mb-2">Why you should use LIPAD</h3>
                        <h2 className="text-3xl font-bold mb-4">One platform for all your business payments</h2>
                        <p className="text-gray-400 mb-4">
                            Simplify your business with our all-in-one platform.
                        </p>
                    </div>
                    <div className="w-1/2">
                        {accordionItems.map((item, index) => (
                            <div key={index} className="border-b border-gray-700">
                                <button
                                    className="flex justify-between items-center w-full py-4 text-left text-lg font-medium focus:outline-none"
                                    onClick={() => toggleItem(index)}
                                >
                                    {item.title}
                                    {openItem === index ? (
                                        <ChevronUp className="h-5 w-5" />
                                    ) : (
                                        <ChevronDown className="h-5 w-5" />
                                    )}
                                </button>
                                {openItem === index && (
                                    <div className="pb-4 pr-4 text-gray-600">{item.content}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}