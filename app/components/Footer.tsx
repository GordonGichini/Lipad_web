import Link from 'next/link'
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
import { Facebook, Twitter } from 'lucide-react'
// import { Input } from "postcss";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-blue-900 to-green-800 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">I'm interested to simplify my business today!</h2>
                    <div className="flex max-w-md">
                        {/*<Input type="email" placeholder="Enter your email" className="rounded-r-none" />*/}
                        {/*<Button type="submit" className="rounded-l-none bg-orange-500 hover:bg-orange-600">Submit Now</Button>*/}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">lipad</h3>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Our Location</h4>
                        <ul className="space-y-1">
                            <li>Kijabe Rd,</li>
                            <li>Nairobi Kenya</li>
                            <li>info@lipad.io</li>
                            <li>+254712349342</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Company</h4>
                        <ul className="space-y-1">
                            <li><Link href="/about">About us</Link></li>
                            <li><Link href="/contact">Contact us</Link></li>
                            <li><Link href="/careers">Careers</Link></li>
                            <li><Link href="/press">Press</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Products</h4>
                        <ul className="space-y-1">
                            <li><Link href="/collect">Collect</Link></li>
                            <li><Link href="/payout">Payout</Link></li>
                            <li><Link href="/engage">Engage</Link></li>
                            <li><Link href="/erp">ERP Solutions</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-600 pt-4">
                    <div className="text-sm mb-4 md:mb-0">
                        © 2024 All rights reserved
                    </div>
                    <div className="flex space-x-4 text-sm">
                        <Link href="/terms">Terms</Link>
                        <Link href="/privacy">Privacy</Link>
                        <Link href="/cookies">Cookies</Link>
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