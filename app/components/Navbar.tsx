import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="flex items-center justify-between p-6 bg-white shadow-md border-b border-gray-900">
            <div className="flex items-center space-x-3">
                <Image
                    src="/Images/Logo_Kepo.png"
                    alt="Logo"
                    width={90}
                    height={90}
                />
            </div>
            <ul className="hidden md:flex space-x-8 text-gray-700">
                <li><a href="#" className="font-bold hover:text-[#21C463]">Home</a></li>
                <li><a href="#" className="font-bold hover:text-[#21C463]">Our Products</a></li>
                <li><a href="#" className="font-bold hover:text-[#21C463]">FAQ</a></li>
                <li><a href="/contact" className="font-bold hover:text-[#21C463]">Contact</a></li>
            </ul>
            <div className="flex items-center space-x-4">
                <button className="px-4 py-2 text-gray-700 border border-gray-700 rounded-full hover:bg-gray-100">
                    Login
                </button>
                <Link href="/contact">
                    <button className="px-4 py-2 bg-[#1F2544] text-white rounded-full hover:bg-blue-700">
                        Get Started
                    </button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
