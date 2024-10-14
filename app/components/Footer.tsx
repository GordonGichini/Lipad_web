import Link from 'next/link'
import { Facebook, Twitter } from 'lucide-react'
import Image from "next/image"

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-blue-900 to-green-800 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="mb-8 items-center">
                    <h2 className="text-2xl font-bold mb-4">I'm interested to simplify my business today!</h2>
                    <form className="flex max-w-md">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-grow px-4 py-2 rounded-l-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="px-6 py-2 bg-orange-500 hover:bg-orange-600 rounded-r-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500"
                        >
                            Submit Now
                        </button>
                    </form>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <Image
                            src="/Images/Logo_Kepo.png"
                            alt="Logo"
                            width={90}
                            height={90}
                        />
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Our Location</h4>
                        <ul className="space-y-1">
                            <li>Kunde Rd,</li>
                            <li>Nairobi Kenya</li>
                            <li>info@lipad.io</li>
                            <li>+254712349342</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Company</h4>
                        <ul className="space-y-1">
                            <li><Link href="/About">About us</Link></li>
                            <li><Link href="/Contact">Contact us</Link></li>
                            <li><Link href="/Careers">Careers</Link></li>
                            <li><Link href="/Press">Press</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Products</h4>
                        <ul className="space-y-1">
                            <li><Link href="/Collect">Collect</Link></li>
                            <li><Link href="/Payout">Payout</Link></li>
                            <li><Link href="/Engage">Engage</Link></li>
                            <li><Link href="/ERP">ERP Solutions</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-600 pt-4">
                    <div className="text-sm mb-4 md:mb-0">
                        © 2024 All rights reserved
                    </div>
                    <div className="flex space-x-4 text-sm">
                        <Link href="/Terms">Terms</Link>
                        <Link href="/Privacy">Privacy</Link>
                        <Link href="/Cookies">Cookies</Link>
                    </div>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <Link href="#" aria-label="Facebook">
                            <Facebook size={20} />
                        </Link>
                        <Link href="#" aria-label="Twitter">
                            <Twitter size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}