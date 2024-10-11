import React from 'react';

const features = [
    {
        id: 1,
        title: "Petty Cash Efficiency, Simplified",
        description: "Save time, stay on schedule, handle all your payments from wherever you are.",
        image: "/path-to-your-image1.png",
    },
    {
        id: 2,
        title: "Streamline Your Invoicing",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        image: "/path-to-your-image2.png",
    },
    {
        id: 3,
        title: "Collect Instore with different payment methods?",
        description: "Different payment methods to suit your customers' needs.",
        image: "/path-to-your-image3.png",
    },
    {
        id: 4,
        title: "Get paid instantly using our payment request links",
        description: "Different payment methods to suit your customers' needs.",
        image: "/path-to-your-image4.png",
    },
    {
        id: 5,
        title: "Connect with your customers easily",
        description: "Different payment methods to suit your customers' needs.",
        image: "/path-to-your-image5.png",
    },
];

const FeaturesSection: React.FC = () => {
    return (
        <section className="p-12 bg-gray-50">
            <div className="text-center mb-12">
                <span className="px-4 py-1 bg-blue-100 text-blue-600 rounded-full">Feature</span>
                <h2 className="text-4xl font-bold text-gray-800 mt-4">Discover the Power of LIPAD</h2>
                <p className="text-gray-600 mt-2">Automate your business, and give your customers a more seamless experience.</p>
            </div>

            <div className="max-w-7xl mx-auto space-y-6">
                {/* Full Width Card */}
                <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
                     style={{ height: '344px', width: '100%', maxWidth: '1240px', margin: '0 auto' }}>
                    <h3 className="text-xl font-bold mb-2">{features[0].title}</h3>
                    <p className="text-gray-700">{features[0].description}</p>
                    <img src={features[0].image} alt={features[0].title} className="mt-4 w-full h-full object-cover rounded" />
                </div>

                {/* Four Uniform Cards in Two Columns and Two Rows */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.slice(1).map((feature) => (
                        <div key={feature.id} className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform flex flex-col space-y-4"
                             style={{ height: '744px', width: '100%', maxWidth: '595px' }}>
                            <div className="flex items-center space-x-4">
                                <div className="w-16 h-16 rounded-full bg-green-400"></div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800">{feature.title}</h3>
                                    <p className="text-gray-600 mt-2">{feature.description}</p>
                                </div>
                            </div>
                            <img src={feature.image} alt={feature.title} className="w-full h-full object-cover rounded" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
