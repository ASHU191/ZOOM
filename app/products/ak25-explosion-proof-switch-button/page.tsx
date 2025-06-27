// "use client"

// import type React from "react"
// import { useState } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { ChevronRight } from "lucide-react"

// export default function AK25ProductPage() {
//   const [activeTab, setActiveTab] = useState("description")
//   const [isZoomed, setIsZoomed] = useState(false)
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

//   const product = {
//     id: 34,
//     title: "AK25-Series Explosion-proof Switch Button",
//     description:
//       "The AK25-Series explosion-proof switch button is designed for safe and reliable manual control in hazardous environments with explosive gases or dust. Its flameproof enclosure prevents ignition risks, ensuring secure operation.",
//     image: "/placeholder.svg?height=400&width=400",
//         gallery: ["/product/p14-1.png?height=300&width=300", "/product/p14-2.png?height=300&width=300"],

//     features: [
//       "Explosion protection - IEC Ex(IEC), ATEX(CENELEC,EN), China Ex(GB)",
//       "Zone 1, Zone 2, Zone 21 and Zone 22 application",
//       "6 operating modes including emergency stop button",
//       "Self-cleaning function of the contact",
//       "Can add 3-6 sets of modules according to requirements",
//       "Adjustable angle after assembly for easy wiring",
//     ],
//     specifications: {
//       explosionProtection: "IEC Ex(IEC), ATEX(CENELEC,EN), China Ex(GB)",
//       hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
//       operatingModes:
//         "6 modes: standard button, emergency stop button with self-locking, mushroom button, knob switch, mushroom button with lock-key, knob switch with key",
//       contactModule: "Wiping action with self-cleaning function",
//       modules: "Can add 3-6 sets of modules according to user requirements",
//       structure: "Buckle structure for convenient disassembly and assembly",
//       adjustment: "Contact module can adjust angle after assembled for easy and beautiful wiring",
//       protectiveCover: "Protective cover for emergency stop button (rotate to reset) is optional",
//       usage: "Product shall be used with flame-proof box",
//     },
//     price: "6,200",
//     originalPrice: "7,200",
//     availability: "IN STOCK",
//     sku: "AK25-SB-EX",
//   }

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     const rect = e.currentTarget.getBoundingClientRect()
//     const x = ((e.clientX - rect.left) / rect.width) * 100
//     const y = ((e.clientY - rect.top) / rect.height) * 100
//     setMousePosition({ x, y })
//   }

//   return (
//     <div className="pt-16 lg:pt-20">
//       {/* Breadcrumb */}
//       <div className="bg-gray-100 py-3">
//         <div className="container mx-auto px-4">
//           <div className="flex items-center text-sm text-gray-600">
//             <Link href="/" className="hover:text-red-600">
//               Home
//             </Link>
//             <ChevronRight className="h-4 w-4 mx-2" />
//             <Link href="/products" className="hover:text-red-600">
//               Products
//             </Link>
//             <ChevronRight className="h-4 w-4 mx-2" />
//             <Link href="/products?category=control-button-switch" className="hover:text-red-600">
//               Control Button Switch
//             </Link>
//             <ChevronRight className="h-4 w-4 mx-2" />
//             <span className="text-gray-900 font-medium">{product.title}</span>
//           </div>
//         </div>
//       </div>

//       {/* Product Details */}
//       <section className="py-8 lg:py-12">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
//             {/* Product Images */}
//             <div>
//               <div
//                 className="mb-4 border rounded-lg overflow-hidden relative cursor-zoom-in"
//                 onMouseMove={handleMouseMove}
//                 onMouseEnter={() => setIsZoomed(true)}
//                 onMouseLeave={() => setIsZoomed(false)}
//               >
//                 <div className="relative w-full h-80 lg:h-96">
//                   <Image
//                     src={product.image || "/placeholder.svg"}
//                     alt={product.title}
//                     fill
//                     className={`object-cover transition-transform duration-300 ${isZoomed ? "scale-150" : "scale-100"}`}
//                     style={{
//                       transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
//                     }}
//                   />
//                 </div>
//               </div>

//               {/* Fixed Size Thumbnail Images */}
//               {product.gallery && product.gallery.length > 0 && (
//                 <div className="grid grid-cols-4 gap-3 lg:gap-4">
//                   {product.gallery.map((img, index) => (
//                     <div key={index} className="border rounded-lg overflow-hidden">
//                       <Image
//                         src={img || "/placeholder.svg"}
//                         alt={`${product.title} ${index + 1}`}
//                         width={200}
//                         height={200}
//                         className="w-full h-20 object-cover"
//                       />
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Product Info */}
//             <div>
//               <h1 className="text-2xl lg:text-3xl font-bold mb-4">{product.title}</h1>
//               <div className="flex items-center mb-4 lg:mb-6">
//                 <div className="text-gray-400 line-through text-base lg:text-lg mr-4">₹{product.originalPrice}</div>
//                 <div className="text-2xl lg:text-3xl font-bold text-red-600">₹{product.price}</div>
//               </div>

//               <div className="mb-4 lg:mb-6">
//                 <div className="text-blue-600 font-semibold mb-1 text-sm lg:text-base">
//                   • EXPLOSION-PROOF CERTIFIED
//                 </div>
//                 <div className="text-blue-600 font-semibold text-sm lg:text-base">• FREE INSTALLATION</div>
//               </div>

//               <p className="text-gray-700 mb-4 lg:mb-6 text-sm lg:text-base">{product.description}</p>

//               <div className="mb-4 lg:mb-6">
//                 <div className="flex items-center justify-between mb-2">
//                   <span className="text-gray-600 text-sm lg:text-base">Availability:</span>
//                   <span className="text-green-600 font-semibold text-sm lg:text-base">{product.availability}</span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span className="text-gray-600 text-sm lg:text-base">SKU:</span>
//                   <span className="text-sm lg:text-base">{product.sku}</span>
//                 </div>
//               </div>

//               <div className="mb-4 lg:mb-6">
//                 <h3 className="font-semibold mb-3 text-base lg:text-lg">Key Features:</h3>
//                 <ul className="space-y-2">
//                   {product.features.map((feature, index) => (
//                     <li key={index} className="flex items-center">
//                       <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
//                       <span className="text-sm lg:text-base">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="border-t pt-4 lg:pt-6">
//                 <Link
//                   href="/contact"
//                   className="inline-flex items-center bg-red-600 text-white px-4 py-2 lg:px-6 lg:py-3 rounded-full hover:bg-red-700 transition-colors text-sm lg:text-base"
//                 >
//                   Contact for Inquiry
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Tabs */}
//       <section className="py-8 lg:py-12 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="border-b border-gray-300 mb-6 lg:mb-8">
//             <div className="flex overflow-x-auto">
//               <button
//                 className={`px-4 py-2 lg:px-6 lg:py-3 font-semibold text-sm lg:text-base ${
//                   activeTab === "description"
//                     ? "border-b-2 border-red-600 text-red-600"
//                     : "text-gray-600 hover:text-red-600"
//                 }`}
//                 onClick={() => setActiveTab("description")}
//               >
//                 DESCRIPTION
//               </button>
//               <button
//                 className={`px-4 py-2 lg:px-6 lg:py-3 font-semibold text-sm lg:text-base ${
//                   activeTab === "specification"
//                     ? "border-b-2 border-red-600 text-red-600"
//                     : "text-gray-600 hover:text-red-600"
//                 }`}
//                 onClick={() => setActiveTab("specification")}
//               >
//                 SPECIFICATION
//               </button>
//             </div>
//           </div>

//           {/* Tab Content */}
//           <div className="pb-6 lg:pb-8">
//             {activeTab === "description" && (
//               <div>
//                 <h2 className="text-xl lg:text-2xl font-bold mb-4">{product.title}</h2>
//                 <p className="mb-4 lg:mb-6 text-sm lg:text-base">
//                   The AK25-Series explosion-proof switch button represents the pinnacle of safety and functionality in
//                   hazardous area control equipment. This advanced switch button is engineered to provide reliable manual
//                   control in environments where explosive gases or dust may be present, ensuring both operational
//                   efficiency and personnel safety.
//                 </p>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
//                   <div>
//                     <p className="mb-4 text-sm lg:text-base">
//                       Featuring six distinct operating modes, including standard button, emergency stop button with
//                       self-locking, mushroom button, knob switch, and variants with lock-key functionality, this switch
//                       button offers unparalleled versatility for diverse industrial applications.
//                     </p>
//                     <p className="text-sm lg:text-base">
//                       The modular design allows for 3-6 sets of modules to be added according to user requirements, with
//                       adjustable contact angles for optimal wiring configuration and aesthetic installation.
//                     </p>
//                   </div>
//                   <div>
//                     <Image
//                       src={product.gallery && product.gallery[0] ? product.gallery[0] : product.image}
//                       alt={product.title}
//                       width={400}
//                       height={300}
//                       className="rounded-lg w-full h-auto"
//                     />
//                   </div>
//                 </div>
//                 <h3 className="text-lg lg:text-xl font-bold mb-3">Advanced Features</h3>
//                 <ul className="list-disc pl-5 mb-6 space-y-2 text-sm lg:text-base">
//                   <li>Self-cleaning contact module with wiping action for reliable long-term operation</li>
//                   <li>Buckle structure design for convenient disassembly and assembly during maintenance</li>
//                   <li>Adjustable contact module angle for easy and beautiful wiring arrangements</li>
//                   <li>Optional protective cover for emergency stop button (rotate to reset)</li>
//                   <li>Must be used with flame-proof box for complete explosion protection</li>
//                   <li>Certified for Zone 1, Zone 2, Zone 21, and Zone 22 hazardous areas</li>
//                 </ul>
//               </div>
//             )}

//             {activeTab === "specification" && (
//               <div>
//                 <h2 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6">Technical Specifications</h2>

//                 <div className="mb-6 lg:mb-8">
//                   <h3 className="text-base lg:text-lg font-bold mb-4">Explosion Protection Standards</h3>
//                   <div className="grid grid-cols-1 gap-3 lg:gap-4">
//                     <div className="flex justify-between py-2 border-b">
//                       <span className="text-gray-700 text-sm lg:text-base">Explosion Protection:</span>
//                       <span className="font-semibold text-sm lg:text-base">
//                         IEC Ex(IEC), ATEX(CENELEC,EN), China Ex(GB)
//                       </span>
//                     </div>
//                     <div className="flex justify-between py-2 border-b">
//                       <span className="text-gray-700 text-sm lg:text-base">Hazardous Area:</span>
//                       <span className="font-semibold text-sm lg:text-base">Zone 1, Zone 2, Zone 21, Zone 22</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mb-6 lg:mb-8">
//                   <h3 className="text-base lg:text-lg font-bold mb-4">Operating Modes</h3>
//                   <div className="space-y-2 text-sm lg:text-base">
//                     <p>
//                       <strong>6 Operating Modes Available:</strong>
//                     </p>
//                     <ul className="list-disc pl-5 space-y-1">
//                       <li>Standard button</li>
//                       <li>Emergency stop button with self-locking</li>
//                       <li>Mushroom button</li>
//                       <li>Knob switch</li>
//                       <li>Mushroom button with lock-key</li>
//                       <li>Knob switch with key</li>
//                     </ul>
//                   </div>
//                 </div>

//                 <div className="mb-6 lg:mb-8">
//                   <h3 className="text-base lg:text-lg font-bold mb-4">Technical Features</h3>
//                   <div className="space-y-3 text-sm lg:text-base">
//                     <p>
//                       <strong>Contact Module:</strong> Wiping action with self-cleaning function
//                     </p>
//                     <p>
//                       <strong>Modular Capacity:</strong> Can add 3-6 sets of modules according to user requirements
//                     </p>
//                     <p>
//                       <strong>Structure:</strong> Buckle structure for convenient disassembly and assembly
//                     </p>
//                     <p>
//                       <strong>Adjustment:</strong> Contact module can adjust angle after assembled for easy and beautiful
//                       wiring
//                     </p>
//                     <p>
//                       <strong>Protective Cover:</strong> Optional for emergency stop button (rotate to reset)
//                     \
