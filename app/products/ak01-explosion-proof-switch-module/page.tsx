// "use client"

// import type React from "react"

// import { useState } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { ChevronRight } from "lucide-react"

// const product = {
//   id: 10,
//   title: "AK01-Series Explosion-proof Switch Module",
//   description:
//     "The AK01-Series explosion-proof switch module is designed for safe and reliable control of electrical circuits in hazardous environments. Housed in a flameproof enclosure, it prevents the ignition of flammable gases or dust. This compact module offers precise switching performance, durability, and ease of integration.",
//   image: "/placeholder.svg?height=400&width=600",
//       gallery: ["/product/p14-1.png?height=300&width=300", "/product/p14-2.png?height=300&width=300"],

//   features: [
//     "Explosion protection - IEC Ex(IEC), ATEX(CENELEC,EN), China Ex(GB)",
//     "Zone 1 and Zone 2 application",
//     "GRP (Polyester resin, glass fiber reinforced) mould pressing enclosure",
//     "Modular structure with independent contacts",
//     "Hundreds of combinations available",
//     "Precise switching performance",
//     "Easy integration into control systems",
//   ],
//   specifications: {
//     explosionProtection: "IEC Ex(IEC), ATEX(CENELEC,EN), China Ex(GB)",
//     hazardousArea: "Zone 1 and Zone 2",
//     enclosure: "GRP (Polyester resin, glass fiber reinforced) mould pressing",
//     structure: "Modular structure",
//     contacts: "Independent contact pairs",
//     combinations: "Hundreds of combinations available",
//     application: "Industrial control systems",
//     certification: "Certified explosion protection",
//   },
//   price: "4,500",
//   originalPrice: "5,200",
//   availability: "IN STOCK",
//   sku: "AK01-SM-EX",
//   href: "/products/ak01-explosion-proof-switch-module",
// }

// export default function ProductPage() {
//   const [activeTab, setActiveTab] = useState("description")
//   const [isZoomed, setIsZoomed] = useState(false)
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

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
//                   The AK01-Series explosion-proof switch module is specifically designed for hazardous environments
//                   where explosive gases or dust may be present. The modular structure allows for flexible configurations
//                   to meet various control requirements.
//                 </p>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
//                   <div>
//                     <h3 className="text-lg font-bold mb-3">Applications</h3>
//                     <ul className="list-disc pl-5 mb-4 space-y-2 text-sm lg:text-base">
//                       <li>Industrial control systems in hazardous areas</li>
//                       <li>Petrochemical plant control panels</li>
//                       <li>Oil and gas facility automation</li>
//                       <li>Zone 1 and Zone 2 classified locations</li>
//                     </ul>

//                     <h3 className="text-lg font-bold mb-3">Safety Features</h3>
//                     <ul className="list-disc pl-5 mb-4 space-y-2 text-sm lg:text-base">
//                       <li>GRP mould pressing enclosure</li>
//                       <li>Independent contact pairs</li>
//                       <li>Modular structure design</li>
//                       <li>Multiple international certifications</li>
//                     </ul>
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

//                 <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
//                   <h4 className="font-semibold mb-2 text-blue-800">Modular Design Benefits:</h4>
//                   <ul className="text-sm text-blue-700 space-y-1">
//                     <li>• Each pair of contacts is independent for maximum flexibility</li>
//                     <li>• Hundreds of combinations available to meet various requirements</li>
//                     <li>• Easy integration into existing control systems</li>
//                     <li>• Simplified maintenance and replacement</li>
//                   </ul>
//                 </div>
//               </div>
//             )}

//             {activeTab === "specification" && (
//               <div>
//                 <h2 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6">Technical Specifications</h2>

//                 <div className="mb-6 lg:mb-8">
//                   <h3 className="text-base lg:text-lg font-bold mb-4">General Specifications</h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
//                     {Object.entries(product.specifications).map(([key, value]) => (
//                       <div key={key} className="flex justify-between py-2 border-b">
//                         <span className="text-gray-700 capitalize text-sm lg:text-base">
//                           {key.replace(/([A-Z])/g, " $1")}:
//                         </span>
//                         <span className="font-semibold text-sm lg:text-base">{value}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="mb-6 lg:mb-8">
//                   <h3 className="text-base lg:text-lg font-bold mb-4">Certification Standards</h3>
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                     <div className="bg-gray-50 p-4 rounded-lg">
//                       <h4 className="font-semibold mb-2">IEC Ex (IEC)</h4>
//                       <p className="text-sm text-gray-600">International Electrotechnical Commission standards</p>
//                     </div>
//                     <div className="bg-gray-50 p-4 rounded-lg">
//                       <h4 className="font-semibold mb-2">ATEX (CENELEC, EN)</h4>
//                       <p className="text-sm text-gray-600">European conformity standards for explosive atmospheres</p>
//                     </div>
//                     <div className="bg-gray-50 p-4 rounded-lg">
//                       <h4 className="font-semibold mb-2">China Ex (GB)</h4>
//                       <p className="text-sm text-gray-600">Chinese national standards for explosion protection</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mb-6 lg:mb-8">
//                   <h3 className="text-base lg:text-lg font-bold mb-4">Hazardous Area Classifications</h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div className="bg-red-50 p-4 rounded-lg">
//                       <h4 className="font-semibold mb-2">Zone 1</h4>
//                       <p className="text-sm text-gray-600">
//                         Areas where explosive gas atmospheres are likely to occur in normal operation
//                       </p>
//                     </div>
//                     <div className="bg-red-50 p-4 rounded-lg">
//                       <h4 className="font-semibold mb-2">Zone 2</h4>
//                       <p className="text-sm text-gray-600">
//                         Areas where explosive gas atmospheres are not likely to occur in normal operation
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
