// "use client"

// import type React from "react"
// import { useState } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { ChevronRight } from "lucide-react"

// export default function AK06ProductPage() {
//   const [activeTab, setActiveTab] = useState("description")
//   const [isZoomed, setIsZoomed] = useState(false)
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

//   const product = {
//     id: 15,
//     title: "AK06-Series Explosion-proof Signal Lamp (Board back cable type)",
//     description:
//       "The AK06-Series explosion-proof signal lamp (board back cable type) is designed to provide clear visual signaling in hazardous areas with explosive gases or dust. Featuring a flameproof enclosure, it ensures safe operation while preventing ignition risks.",
//     image: "/placeholder.svg?height=400&width=400",
//     gallery: ["/product/p14-1.png?height=300&width=300", "/product/p14-2.png?height=300&width=300"],
//     features: [
//       "Explosion protection - IEC Ex(IEC), ATEX(CENELEC,EN), China Ex(GB)",
//       "Zone 1, Zone 2, Zone 21 and Zone 22 application",
//       "Five colors: red, green, yellow, blue and white",
//       "Panel cable type installation method",
//       "Quick disassembly structure for easy maintenance",
//     ],
//     specifications: {
//       explosionProtection: "IEC Ex(IEC), ATEX(CENELEC,EN), China Ex(GB)",
//       hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
//       colors: "Five colors: red, green, yellow, blue and white",
//       installation: "Panel cable type, quick disassembly structure",
//       maintenance: "Easy installation and maintenance",
//       enclosure: "Flameproof enclosure",
//       cableEntry: "Board back cable entry design",
//     },
//     price: "3,800",
//     originalPrice: "4,500",
//     availability: "IN STOCK",
//     sku: "AK06-SL-EX",
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
//                 <div className="text-blue-600 font-semibold mb-1 text-sm lg:text-base">• EXPLOSION-PROOF CERTIFIED</div>
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
//                   The AK06-Series explosion-proof signal lamp is specifically designed for hazardous industrial
//                   environments where explosive gases or dust may be present. This advanced signaling device features a
//                   robust flameproof enclosure that ensures safe operation while providing clear visual indication.
//                 </p>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
//                   <div>
//                     <p className="mb-4 text-sm lg:text-base">
//                       The board back cable entry design allows for easy and secure installation in control panels and
//                       monitoring systems. The quick disassembly structure facilitates maintenance operations while
//                       maintaining the integrity of the explosion-proof protection.
//                     </p>
//                     <p className="text-sm lg:text-base">
//                       Available in five distinct colors (red, green, yellow, blue, and white), this signal lamp provides
//                       versatile visual indication options for different operational states and safety requirements.
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
//                 <h3 className="text-lg lg:text-xl font-bold mb-3">Safety Certifications</h3>
//                 <ul className="list-disc pl-5 mb-6 space-y-2 text-sm lg:text-base">
//                   <li>IEC Ex (IEC) - International Electrotechnical Commission standards</li>
//                   <li>ATEX (CENELEC, EN) - European Conformity for explosive atmospheres</li>
//                   <li>China Ex (GB) - Chinese national explosion protection standards</li>
//                   <li>Suitable for Zone 1, Zone 2, Zone 21, and Zone 22 hazardous areas</li>
//                   <li>Flameproof enclosure prevents ignition of surrounding explosive atmosphere</li>
//                 </ul>
//               </div>
//             )}

//             {activeTab === "specification" && (
//               <div>
//                 <h2 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6">Technical Specifications</h2>

//                 <div className="mb-6 lg:mb-8">
//                   <h3 className="text-base lg:text-lg font-bold mb-4">Explosion Protection Standards</h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
//                     {Object.entries(product.specifications).map(([key, value]) => (
//                       <div key={key} className="flex justify-between py-2 border-b">
//                         <span className="text-gray-700 capitalize text-sm lg:text-base">
//                           {key.replace(/([A-Z])/g, " $1").trim()}:
//                         </span>
//                         <span className="font-semibold text-sm lg:text-base">{value}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="mb-6 lg:mb-8">
//                   <h3 className="text-base lg:text-lg font-bold mb-4">Installation and Maintenance</h3>
//                   <h4 className="font-semibold mb-2 text-sm lg:text-base">Installation Method</h4>
//                   <p className="mb-4 text-sm lg:text-base">Panel cable type with board back cable entry design</p>

//                   <h4 className="font-semibold mb-2 text-sm lg:text-base">Maintenance Features</h4>
//                   <p className="mb-4 text-sm lg:text-base">Quick disassembly structure for easy maintenance</p>

//                   <h4 className="font-semibold mb-2 text-sm lg:text-base">Available Colors</h4>
//                   <p className="mb-4 text-sm lg:text-base">Red, Green, Yellow, Blue, White</p>

//                   <h4 className="font-semibold mb-2 text-sm lg:text-base">Hazardous Area Classification</h4>
//                   <p className="text-sm lg:text-base">Zone 1, Zone 2, Zone 21, Zone 22</p>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
