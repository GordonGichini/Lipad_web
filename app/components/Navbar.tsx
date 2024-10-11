

const Navbar: React.FC = () => {
    return (
        <nav className="flex items-center justify-between p-6 bg-white shadow-md">
            <div className="text-2xl font-bold text-green-600">Lipad</div>
            <ul className="hidden md:flex space-x-6 text-gray-700">
                <li><a href="#" className="hover:text-green-600">Home</a></li>
                <li><a href="#" className="hover:text-green-600">Our Products</a></li>
                <li><a href="#" className="hover:text-green-600">Pricing</a></li>
                <li><a href="#" className="hover:text-green-600">FAQ</a></li>
                <li><a href="#" className="hover:text-green-600">Contact</a></li>
            </ul>
            <div className="flex items-center space-x-4">
                <button className="text-gray-700">Login</button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                    Get Started
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
