// "use client";
// import React, { useState } from 'react'
//
// // Custom Button component
// const Button = ({ children, className, ...props }) => (
//     <button
//         className={`px-6 py-2 bg-[#1F2544] text-white rounded-full hover:bg-opacity-90 transition-colors duration-200 ${className}`}
//         {...props}
//     >
//         {children}
//     </button>
// )
//
// // Custom Input component
// const Input = ({ className, ...props }) => (
//     <input
//         className={`w-full p-2 bg-gray-100 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
//         {...props}
//     />
// )
//
// // Custom Textarea component
// const Textarea = ({ className, ...props }) => (
//     <textarea
//         className={`w-full p-2 bg-gray-100 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
//         {...props}
//     />
// )
//
// // Custom Select component
// const Select = ({ className, children, ...props }) => (
//     <select
//         className={`w-full p-2 bg-gray-100 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
//         {...props}
//     >
//         {children}
//     </select>
// )
//
// export default function Contact() {
//     const [formData, setFormData] = useState({
//         name: '',
//         businessSector: '',
//         email: '',
//         message: ''
//     })
//
//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//         const { name, value } = e.target
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }))
//     }
//
//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault()
//         // Handle form submission logic here
//         console.log(formData)
//     }
//
//     return (
//         <div className="container mx-auto px-4 py-8 max-w-2xl">
//             <h2 className="text-sm font-semibold text-gray-600 mb-2">CONTACT US</h2>
//             <h1 className="text-4xl font-bold mb-4">Get Started</h1>
//             <p className="text-gray-600 mb-8">
//                 Turpis euismod pharetra urna ut libero venenatis diam ipsum para venenatis ornare odio in nascetur id dictumst in in lectus vel eu scelerisque volutpat orcu sed massa.
//             </p>
//
//             <form onSubmit={handleSubmit} className="space-y-4">
//                 <Input
//                     type="text"
//                     name="name"
//                     placeholder="Your name"
//                     value={formData.name}
//                     onChange={handleChange}
//                 />
//
//                 <Select
//                     name="businessSector"
//                     value={formData.businessSector}
//                     onChange={handleChange}
//                 >
//                     <option value="" disabled>Business Sector</option>
//                     <option value="technology">Technology</option>
//                     <option value="finance">Finance</option>
//                     <option value="healthcare">Healthcare</option>
//                     <option value="education">Education</option>
//                     <option value="other">Other</option>
//                 </Select>
//
//                 <Input
//                     type="email"
//                     name="email"
//                     placeholder="Email address"
//                     value={formData.email}
//                     onChange={handleChange}
//                 />
//
//                 <Textarea
//                     name="message"
//                     placeholder="Message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     rows={4}
//                 />
//
//                 <Button type="submit">
//                     SEND MESSAGE
//                 </Button>
//             </form>
//         </div>
//     )
// }