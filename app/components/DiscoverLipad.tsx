import Image from 'next/image'

const features = [
    {
        title: "Petty Cash Efficiency, Simplified",
        description: "Real time, stay on schedule, handle all your expenses from wherever you are.",
        image: "/petty-cash.jpg",
        fullWidth: true
    },
    {
        title: "Streamline Your Invoicing",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut vulputate nisi.",
        image: "/invoicing.jpg"
    },
    {
        title: "Collect Instore with different payment methods?",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut vulputate nisi.",
        image: "/collect-instore.jpg"
    },
    {
        title: "Get paid instantly using our payment request links",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut vulputate nisi.",
        image: "/payment-links.jpg"
    },
    {
        title: "Connect with your Customers easily",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut vulputate nisi.",
        image: "/connect-customers.jpg"
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

                <div className="space-y-8">
                    {features.map((feature, index) => (
                        <div key={index} className={`bg-white overflow-hidden shadow-lg rounded-lg ${feature.fullWidth ? 'w-full' : 'w-full md:w-[calc(50%-1rem)] inline-block align-top'} ${index > 0 && index % 2 === 1 ? 'md:mr-8' : ''}`}>
                            <div className={`relative p-6 ${feature.fullWidth ? 'md:flex' : 'flex flex-col'}`}>
                                <div className="absolute top-6 left-6">
                                    <div className="h-6 w-6 rounded-full bg-green-500"></div>
                                </div>
                                {feature.fullWidth && (
                                    <div className="md:w-1/2 md:pr-6 mb-6 md:mb-0">
                                        <Image
                                            src={feature.image}
                                            alt={feature.title}
                                            width={500}
                                            height={300}
                                            objectFit="cover"
                                            className="rounded-lg"
                                        />
                                    </div>
                                )}
                                <div className={`${feature.fullWidth ? 'md:w-1/2' : 'w-full'}`}>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-8">{feature.title}</h3>
                                    <p className="text-base text-gray-500 mb-6">{feature.description}</p>
                                    {!feature.fullWidth && (
                                        <div className="mt-4">
                                            <Image
                                                src={feature.image}
                                                alt={feature.title}
                                                width={500}
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