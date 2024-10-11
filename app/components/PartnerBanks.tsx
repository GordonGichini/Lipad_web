// components/PartnerBanks.tsx
import React from 'react';

const PartnerBanks: React.FC = () => {
    return (
        <section className="p-12 bg-white">
            <h3 className="text-2xl font-bold text-center mb-8">Our Partner Banks</h3>
            <div className="flex justify-center space-x-8">
                {['path_to_bank_logo1', 'path_to_bank_logo2', 'path_to_bank_logo3', 'path_to_bank_logo4'].map((logo, index) => (
                    <img
                        key={index}
                        src={logo}
                        alt="Bank Logo"
                        className="w-24 h-auto transition-transform transform hover:scale-110"
                    />
                ))}
            </div>
        </section>
    );
};

export default PartnerBanks;
