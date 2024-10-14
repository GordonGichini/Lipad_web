import React from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'

export default function ThumbnailVideo() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Learn how to use Lipad</h2>
                        <p className="text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit at dolorem ea nulla saepe dolores voluptates quibusdam unde voluptatum quos.</p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
                            <Image
                                src="/placeholder.svg?height=360&width=640"
                                alt="Learn Lipad Video Thumbnail"
                                width={640}
                                height={360}
                                className="object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-opacity duration-300 hover:bg-opacity-20">
                                <button className="w-20 h-20 flex items-center justify-center rounded-full bg-white bg-opacity-80 hover:bg-opacity-100 transition-all duration-300 hover:scale-110">
                                    <Play className="w-10 h-10 text-primary fill-current" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}