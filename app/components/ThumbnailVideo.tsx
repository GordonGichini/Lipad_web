// components/ThumbnailVideo.tsx
import React from 'react';

const ThumbnailVideo: React.FC = () => {
    return (
        <section className="p-12 bg-gray-50">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Learn how to use Lipad</h3>
                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="relative">
                    <img src="/Images/" alt="Learn Lipad" className="w-full h-auto rounded-lg"/>
                    <button className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 rounded-lg">
                        <span className="text-4xl">▶️</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ThumbnailVideo;
