// components/WhyLipad.tsx
import React from 'react';

const WhyLipad: React.FC = () => {
    return (
        <section className="p-12 bg-gray-50">
            <h3 className="text-2xl font-bold mb-6 text-center">One platform for all your business payments</h3>
            <div className="space-y-4">
                {["Instant Activation", "Simple Pricing", "Built for all merchants", "Dashboard Reporting"].map((item, index) => (
                    <details key={index} className="p-4 bg-white rounded-lg shadow-lg">
                        <summary className="text-lg font-semibold">{item}</summary>
                        <p className="text-gray-600 mt-2">Simplify your business with our all-in-one platform.</p>
                    </details>
                ))}
            </div>
        </section>
    );
};

export default WhyLipad;
