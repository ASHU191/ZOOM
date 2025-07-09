// "use client"
// import { useState } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { ChevronRight, Star, Shield, Truck, Award, Settings } from "lucide-react"

// const product = {
//   id: 43,
//   category: "Distribution Box (hexlon DBs)",
//   title: "NEX51-Series Explosion Protected Distribution Box",
//   description:
//     "The NEX51-Series integrates a flameproof chamber with an increased safety chamber, featuring modular structure for flexible power distribution needs.",
//   image: "/placeholder.svg?height=400&width=400",
//   gallery: [
//     "/placeholder.svg?height=300&width=300",
//     "/placeholder.svg?height=300&width=300",
//     "/placeholder.svg?height=300&width=300",
//     "/placeholder.svg?height=300&width=300",
//   ],
//   features: [
//     "Explosion protection - IECEx (IEC), ATEX (CENELEC, EN), China Ex (GB)",
//     "Zone 1, Zone 2, Zone 21 and Zone 22 application",
//     "Flameproof chamber with increased safety chamber design",
//     "Front panel handle operation for main and branch switches",
//     "Modular structure supports flexible assembly",
//     "Pre-installed internal wiring using terminals and components",
//   ],
//   specifications: {
//     explosionProtection: "IECEx (IEC), ATEX (CENELEC, EN), China Ex (GB)",
//     hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
//     design: "Flameproof chamber with increased safety chamber",
//     operation: "Front panel handle operation",
//     structure: "Modular structure for flexible assembly",
//     wiring: "Pre-installed internal wiring using terminals and components",
//     circuitBreaker: "Freeze-resistant metal handle with padlock capability",
//     cableEntry: "Sealed with stop plugs by default, optional cable entry devices available",
//   },
//   price: "25,000",
//   originalPrice: "29,000",
//   availability: "IN STOCK",
//   sku: "NEX51-DB-EX",
//   rating: 4.8,
//   reviews: 19,
// }
// export default function ProductDetailPage() {

//   const imageContainerRef = useRef(null)
//   const [bgPosition, setBgPosition] = useState("center")
//   const [isZoomed, setIsZoomed] = useState(false)

//   // Debounced position update for smoothness
//   let animationFrameId = null
//   const handleMouseMove = (e) => {
//     if (animationFrameId) cancelAnimationFrame(animationFrameId)
//     animationFrameId = requestAnimationFrame(() => {
//       const rect = imageContainerRef.current.getBoundingClientRect()
//       const x = ((e.clientX - rect.left) / rect.width) * 100
//       const y = ((e.clientY - rect.top) / rect.height) * 100
//       setBgPosition(`${x}% ${y}%`)
//     })
//   }

//   const handleMouseEnter = () => {
//     setIsZoomed(true)
//   }

//   const handleMouseLeave = () => {
//     setIsZoomed(false)
//     setBgPosition("center")
//   }


//   const [activeTab, setActiveTab] = useState("description")
//   const [selectedImage, setSelectedImage] = useState(0)

//   return (
//     <div className="pt-16 lg:pt-20">
//       {/* Breadcrumb */}
//       <div className="bg-gray-100 py-3">
//         <div className="container mx-auto px-4">
//           <div className="flex items-center text-sm text-gray-600">
//             <Link href="/" className="hover:text-primary-600">
//               Home
//             </Link>
//             <ChevronRight className="h-4 w-4 mx-2" />
//             <Link href="/products" className="hover:text-primary-600">
//               Products
//             </Link>
//             <ChevronRight className="h-4 w-4 mx-2" />
//             <Link href="/products?category=distribution-box" className="hover:text-primary-600">
//               Distribution Box (hexlon DBs)
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
//                <div className="mb-4 border rounded-lg overflow-hidden">
//                 <div
//                   ref={imageContainerRef}
//                   onMouseMove={handleMouseMove}
//                   onMouseEnter={handleMouseEnter}
//                   onMouseLeave={handleMouseLeave}
//                   className={`w-full h-80 lg:h-96 bg-no-repeat bg-white transition-all duration-500 ease-out rounded-lg`}
//                   style={{
//                     backgroundImage: `url(${product.gallery[selectedImage] || product.image})`,
//                     backgroundSize: isZoomed ? "130%" : "contain", // Adjust zoom level
//                     backgroundPosition: isZoomed ? bgPosition : "center",
//                     cursor: isZoomed ? "zoom-out" : "zoom-in",
//                     transitionProperty: "background-position, background-size", // 👈 smoother transitions
//                   }}
//                 />
//               </div>

//               {/* Thumbnail Images */}
//               <div className="grid grid-cols-4 gap-3">
//                 {product.gallery.map((img, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setSelectedImage(index)}
//                     className={`border rounded-lg overflow-hidden ${
//                       selectedImage === index ? "border-primary-500" : "border-gray-300"
//                     }`}
//                   >
//                     <Image
//                       src={img || "/placeholder.svg"}
//                       alt={`${product.title} ${index + 1}`}
//                       width={100}
//                       height={100}
//                       className="w-full h-20 object-contain"
//                     />
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Product Info */}
//             <div>
//               <div className="mb-4">
//                 <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
//                   {product.category}
//                 </span>
//               </div>

//               <h1 className="text-2xl lg:text-3xl font-bold mb-4">{product.title}</h1>

//               {/* Rating */}
//                             {/* <div className="flex items-center mb-4">
//                 <div className="flex items-center">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       className={`h-5 w-5 ${
//                         i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
//                       }`}
//                     />
//                   ))}
//                 </div>
//                 <span className="ml-2 text-sm text-gray-600">
//                   {product.rating} ({product.reviews} reviews)
//                 </span>
//               </div>

//               <div className="flex items-center mb-6">
//                 <div className="text-gray-400 line-through text-lg mr-4">₹{product.originalPrice}</div>
//                 <div className="text-3xl font-bold text-primary-600">₹{product.price}</div>
//                 <div className="ml-4 bg-green-100 text-green-600 px-2 py-1 rounded text-sm font-medium">
//                   Save ₹{Number.parseInt(product.originalPrice) - Number.parseInt(product.price)}
//                 </div>
//               </div> */}

//               {/* Trust Badges */}
//               <div className="grid grid-cols-2 gap-4 mb-6">
//                 <div className="flex items-center text-sm">
//                   <Shield className="h-5 w-5 text-primary-600 mr-2" />
//                   <span>Multi-Standard Certified</span>
//                 </div>
//                 <div className="flex items-center text-sm">
//                   <Truck className="h-5 w-5 text-primary-600 mr-2" />
//                   <span>Free Shipping</span>
//                 </div>
//                 <div className="flex items-center text-sm">
//                   <Award className="h-5 w-5 text-primary-600 mr-2" />
//                   <span>Modular Design</span>
//                 </div>
//                 <div className="flex items-center text-sm">
//                   <Settings className="h-5 w-5 text-primary-600 mr-2" />
//                   <span>Pre-wired</span>
//                 </div>
//               </div>

//               <p className="text-gray-700 mb-6 text-sm lg:text-base">{product.description}</p>

//               {/* Key Features */}
//               <div className="mb-6">
//                 <h3 className="font-semibold mb-3 text-lg">Key Features:</h3>
//                 <ul className="space-y-2">
//                   {product.features.map((feature, index) => (
//                     <li key={index} className="flex items-start">
//                       <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2"></span>
//                       <span className="text-sm lg:text-base">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Product Info */}
//                {/* <div className="mb-6 space-y-2">
//                 <div className="flex items-center justify-between py-2 border-b">
//                   <span className="text-gray-600 text-sm lg:text-base">SKU:</span>
//                   <span className="font-medium text-sm lg:text-base">{product.sku}</span>
//                 </div>
//                 <div className="flex items-center justify-between py-2 border-b">
//                   <span className="text-gray-600 text-sm lg:text-base">Availability:</span>
//                   <span className="text-green-600 font-semibold text-sm lg:text-base">{product.availability}</span>
//                 </div>
//               </div> */}

//               {/* Action Buttons */}
//               <div className="space-y-4">
//                 <Link
//                   href="/contact"
//                   className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors font-semibold text-center block"
//                 >
//                   Request Quote
//                 </Link>
//                 <Link
//                   href="/contact"
//                   className="w-full border border-primary-600 text-primary-600 py-3 px-6 rounded-lg hover:bg-primary-50 transition-colors font-semibold text-center block"
//                 >
//                   Technical Support
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Tabs Section */}
//       <section className="py-8 lg:py-12 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="border-b border-gray-300 mb-6 lg:mb-8">
//             <div className="flex overflow-x-auto">
//               <button
//                 className={`px-4 py-2 lg:px-6 lg:py-3 font-semibold text-sm lg:text-base whitespace-nowrap ${
//                   activeTab === "description"
//                     ? "border-b-2 border-primary-600 text-primary-600"
//                     : "text-gray-600 hover:text-primary-600"
//                 }`}
//                 onClick={() => setActiveTab("description")}
//               >
//                 DESCRIPTION
//               </button>
//               <button
//                 className={`px-4 py-2 lg:px-6 lg:py-3 font-semibold text-sm lg:text-base whitespace-nowrap ${
//                   activeTab === "specifications"
//                     ? "border-b-2 border-primary-600 text-primary-600"
//                     : "text-gray-600 hover:text-primary-600"
//                 }`}
//                 onClick={() => setActiveTab("specifications")}
//               >
//                 SPECIFICATIONS
//               </button>
//                            {/* <button
//                 className={`px-4 py-2 lg:px-6 lg:py-3 font-semibold text-sm lg:text-base whitespace-nowrap ${
//                   activeTab === "applications"
//                     ? "border-b-2 border-primary-600 text-primary-600"
//                     : "text-gray-600 hover:text-primary-600"
//                 }`}
//                 onClick={() => setActiveTab("applications")}
//               >
//                 APPLICATIONS
//               </button> */}
//             </div>
//           </div>

//           {/* Tab Content */}
//           <div className="pb-6 lg:pb-8">
//             {activeTab === "description" && (
//               <div>
//                 <h2 className="text-xl lg:text-2xl font-bold mb-4">{product.title}</h2>
//                 <div className="prose max-w-none">
//                   <p className="mb-4 text-sm lg:text-base">
//                     The NEX51-Series Explosion Protected Distribution Box represents the latest advancement in
//                     explosion-proof electrical distribution technology. This innovative system integrates a flameproof
//                     chamber with an increased safety chamber, providing unparalleled flexibility and safety for power
//                     distribution in hazardous environments.
//                   </p>
//                   <p className="mb-4 text-sm lg:text-base">
//                     Designed with a modular structure, the NEX51-Series allows for flexible assembly and customization
//                     to meet specific application requirements. The pre-installed internal wiring using high-quality
//                     terminals and components ensures reliable operation and simplified installation procedures.
//                   </p>
//                   <h3 className="text-lg font-bold mb-3">Advanced Distribution Technology</h3>
//                   <ul className="list-disc pl-5 mb-6 space-y-2 text-sm lg:text-base">
//                     <li>Dual-chamber design for enhanced safety and flexibility</li>
//                     <li>Front panel operation for easy access and control</li>
//                     <li>Freeze-resistant metal handles with padlock capability</li>
//                     <li>Multiple international certifications for global compliance</li>
//                     <li>Modular construction for custom configurations</li>
//                     <li>Professional pre-wiring for plug-and-play installation</li>
//                   </ul>
//                 </div>
//               </div>
//             )}

//             {activeTab === "specifications" && (
//               <div>
//                 <h2 className="text-xl lg:text-2xl font-bold mb-6">Technical Specifications</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   {Object.entries(product.specifications).map(([key, value]) => (
//                     <div key={key} className="flex justify-between py-3 border-b">
//                       <span className="text-gray-700 capitalize font-medium text-sm lg:text-base">
//                         {key.replace(/([A-Z])/g, " $1").trim()}:
//                       </span>
//                       <span className="font-semibold text-sm lg:text-base text-right max-w-xs">{value}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {activeTab === "applications" && (
//               <div>
//                 <h2 className="text-xl lg:text-2xl font-bold mb-6">Applications & Industries</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                   <div className="bg-white p-6 rounded-lg shadow-sm">
//                     <h3 className="font-bold mb-3">Power Distribution</h3>
//                     <p className="text-sm text-gray-600">Main and sub-distribution in hazardous areas</p>
//                   </div>
//                   <div className="bg-white p-6 rounded-lg shadow-sm">
//                     <h3 className="font-bold mb-3">Motor Control</h3>
//                     <p className="text-sm text-gray-600">Control and protection for industrial motors</p>
//                   </div>
//                   <div className="bg-white p-6 rounded-lg shadow-sm">
//                     <h3 className="font-bold mb-3">Lighting Control</h3>
//                     <p className="text-sm text-gray-600">Distribution for explosion-proof lighting systems</p>
//                   </div>
//                   <div className="bg-white p-6 rounded-lg shadow-sm">
//                     <h3 className="font-bold mb-3">Process Control</h3>
//                     <p className="text-sm text-gray-600">Control systems for industrial processes</p>
//                   </div>
//                   <div className="bg-white p-6 rounded-lg shadow-sm">
//                     <h3 className="font-bold mb-3">Emergency Systems</h3>
//                     <p className="text-sm text-gray-600">Critical power distribution for safety systems</p>
//                   </div>
//                   <div className="bg-white p-6 rounded-lg shadow-sm">
//                     <h3 className="font-bold mb-3">Instrumentation</h3>
//                     <p className="text-sm text-gray-600">Power supply for monitoring and control equipment</p>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* Related Products */}
//       <section className="py-8 lg:py-12">
//         <div className="container mx-auto px-4">
//           <h2 className="text-xl lg:text-2xl font-bold mb-6 lg:mb-8">Related Products</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
//             <div className="text-center text-gray-500 col-span-full py-8">
//               <p>Related products will be displayed here</p>
//               <Link
//                 href="/products?category=distribution-box"
//                 className="inline-block mt-4 bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
//               >
//                 View All Distribution Boxes
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
