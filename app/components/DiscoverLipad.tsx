import Image from 'next/image'

const features = [
    {
        title: "Petty Cash Efficiency, Simplified",
        description: "Real time, stay on schedule, handle all your expenses from wherever you are.",
        image: "/Images/Illustration_Frame.png",
        fullWidth: true
    },
    {
        title: "Streamline Your Invoicing",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut vulputate nisi.",
        image: "/Images/Illustration_Frame (1).png"
    },
    {
        title: "Collect Instore with different payment methods?",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut vulputate nisi.",
        image: "/Images/Illustration_Frame (2).png"
    },
    {
        title: "Get paid instantly using our payment request links",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut vulputate nisi.",
        image: "/Images/Illustration_Frame (3).png"
    },
    {
        title: "Connect with your Customers easily",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut vulputate nisi.",
        image: "/Images/Illustration_Frame (1).png"
    }
]

export default function DiscoverLipad() {
    return (
        <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Discover the Power of LIPAD
                    </h2>
                    <p className="mt-4 text-xl text-gray-500">
                        Automate your business and give your customers a multi-channel experience.
                    </p>
                </div>

                <div className="flex flex-wrap -mx-4">
                    {features.map((feature, index) => (
                        <div key={index} className={`${feature.fullWidth ? 'w-full mb-8' : 'w-full md:w-1/2 px-4 mb-8'}`}>
                            <div className="bg-gray-200 overflow-hidden shadow-lg rounded-lg">
                                <div className={`p-6 flex ${feature.fullWidth ? 'flex-col md:flex-row-reverse' : 'flex-col'} items-center`}>

                                    {/* First Card with Image on Right */}
                                    {feature.fullWidth && (
                                        <div className="md:w-1/2 mb-6 md:mb-0 md:pl-6">
                                            <Image
                                                src={feature.image}
                                                alt={feature.title}
                                                width={400}
                                                height={300}
                                                objectFit="cover"
                                                className="rounded-lg"
                                            />
                                        </div>
                                    )}

                                    {/* Green Dot and Text */}
                                    <div className={`${feature.fullWidth ? 'md:w-1/2' : 'w-full'} relative`}>
                                        <div className="absolute -top-3 left-0 bottom-3">
                                            <div className="h-6 w-6 rounded-full bg-green-500"></div>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 mt-8">{feature.title}</h3>
                                        <p className="text-base text-gray-500 mt-2">{feature.description}</p>
                                    </div>

                                    {/* Non-Full-Width Cards Image */}
                                    {!feature.fullWidth && (
                                        <div className="mt-4">
                                            <Image
                                                src={feature.image}
                                                alt={feature.title}
                                                width={400}
                                                height={300}
                                                objectFit="cover"
                                                className="rounded-lg"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
