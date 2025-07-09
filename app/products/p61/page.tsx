"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Star, Shield, Truck, Award, Thermometer } from "lucide-react"
import { useRef } from "react"
const product = {
     id: 61,
    category: "Lights",
    title: "BLB03-Series Explosion-proof LED Lightings",
    description:
      "The BLB03-Series Explosion-proof LED Lightings offer high-efficiency illumination specifically engineered for hazardous and demanding industrial environments. Built with a durable, flameproof aluminum alloy housing and advanced thermal management, they ensure optimal performance and longevity.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/product/p61-1.png?height=300&width=300", "/product/p61-2.png?height=300&width=300" , "/product/p61-3.png?height=300&width=300"],

    features: [
      "Explosion protection - China Ex (GB)",
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "LED power: 10W, 20W, 30W, 40W, 50W, 60W, 70W, 80W, 100W, 120W",
      "Five enclosure types: 20, 40, 60, 70, 120",
      "Separate light source, electrical and wiring cavities",
      "Wireless connection between lamp body and installation accessories",
    ],
    specifications: {
      explosionProtection: "China Ex (GB)",
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      lightSource: "LED: 10W, 20W, 30W, 40W, 50W, 60W, 70W, 80W, 100W, 120W",
      enclosureTypes: "Five enclosure types: 20, 40, 60, 70, 120",
      cavities: "Light source cavity, electrical cavity and wiring cavity are separate",
      installation: "Wireless connection between lamp body and installation accessories",
      emergency: "Emergency unit can be equipped upon request",
      protectiveGrid: "Protective grid can be equipped upon request",
    },
    price: "7,500",
    originalPrice: "8,800",
    availability: "IN STOCK",
    sku: "BLB03-LED-EX",
  rating: 4.9,
  reviews: 32,
}
export default function ProductDetailPage() {

  const imageContainerRef = useRef(null)
  const [bgPosition, setBgPosition] = useState("center")
  const [isZoomed, setIsZoomed] = useState(false)

  // Debounced position update for smoothness
  let animationFrameId = null
  const handleMouseMove = (e) => {
    if (animationFrameId) cancelAnimationFrame(animationFrameId)
    animationFrameId = requestAnimationFrame(() => {
      const rect = imageContainerRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      setBgPosition(`${x}% ${y}%`)
    })
  }

  const handleMouseEnter = () => {
    setIsZoomed(true)
  }

  const handleMouseLeave = () => {
    setIsZoomed(false)
    setBgPosition("center")
  }


  const [activeTab, setActiveTab] = useState("description")
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="pt-16 lg:pt-20">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-primary-600">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href="/products" className="hover:text-primary-600">
              Products
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
           <Link href="/products?category=lights" className="hover:text-primary-600">  Lights
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-gray-900 font-medium">{product.title}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Images */}
            <div>
               <div className="mb-4 border rounded-lg overflow-hidden">
                <div
                  ref={imageContainerRef}
                  onMouseMove={handleMouseMove}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className={`w-full h-80 lg:h-96 bg-no-repeat bg-white transition-all duration-500 ease-out rounded-lg`}
                  style={{
                    backgroundImage: `url(${product.gallery[selectedImage] || product.image})`,
                    backgroundSize: isZoomed ? "130%" : "contain", // Adjust zoom level
                    backgroundPosition: isZoomed ? bgPosition : "center",
                    cursor: isZoomed ? "zoom-out" : "zoom-in",
                    transitionProperty: "background-position, background-size", // 👈 smoother transitions
                  }}
                />
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-3">
                {product.gallery.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`border rounded-lg overflow-hidden ${
                      selectedImage === index ? "border-primary-500" : "border-gray-300"
                    }`}
                  >
                    <Image
                      src={img || "/placeholder.svg"}
                      alt={`${product.title} ${index + 1}`}
                      width={100}
                      height={100}
                      className="w-full h-20 object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-4">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                  {product.category}
                </span>
              </div>

              <h1 className="text-2xl lg:text-3xl font-bold mb-4">{product.title}</h1>

              {/* Rating */}
                            {/* <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <div className="flex items-center mb-6">
                <div className="text-gray-400 line-through text-lg mr-4">₹{product.originalPrice}</div>
                <div className="text-3xl font-bold text-primary-600">₹{product.price}</div>
                <div className="ml-4 bg-green-100 text-green-600 px-2 py-1 rounded text-sm font-medium">
                  Save ₹{Number.parseInt(product.originalPrice) - Number.parseInt(product.price)}
                </div>
              </div> */}

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                 <div className="flex items-center text-sm">
                  <Shield className="h-5 w-5 text-primary-600 mr-2" />
                </div>
                {/* <div className="flex items-center text-sm">
                  <Truck className="h-5 w-5 text-primary-600 mr-2" />
                  <span>Free Installation</span>
                </div>
                <div className="flex items-center text-sm">
                  <Award className="h-5 w-5 text-primary-600 mr-2" />
                  <span>5 Year Warranty</span>
                </div>
                <div className="flex items-center text-sm">
                  <Thermometer className="h-5 w-5 text-primary-600 mr-2" />
                  <span>Climate Control</span>
                </div> */}
              </div>

              <p className="text-gray-700 mb-6 text-sm lg:text-base">{product.description}</p>

              {/* Key Features */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3 text-lg">Key Features:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2"></span>
                      <span className="text-sm lg:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Product Info */}
               {/* <div className="mb-6 space-y-2">
                <div className="flex items-center justify-between py-2 border-b">
                  <span className="text-gray-600 text-sm lg:text-base">SKU:</span>
                  <span className="font-medium text-sm lg:text-base">{product.sku}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b">
                  <span className="text-gray-600 text-sm lg:text-base">Availability:</span>
                  <span className="text-green-600 font-semibold text-sm lg:text-base">{product.availability}</span>
                </div>
              </div> */}

              {/* Action Buttons */}
              {/* <div className="space-y-4">
                <Link
                  href="/contact"
                  className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors font-semibold text-center block"
                >
                  Request Quote
                </Link>
                <Link
                  href="/contact"
                  className="w-full border border-primary-600 text-primary-600 py-3 px-6 rounded-lg hover:bg-primary-50 transition-colors font-semibold text-center block"
                >
                  Contact for Installation
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-8 lg:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="border-b border-gray-300 mb-6 lg:mb-8">
            <div className="flex overflow-x-auto">
              <button
                className={`px-4 py-2 lg:px-6 lg:py-3 font-semibold text-sm lg:text-base whitespace-nowrap ${
                  activeTab === "description"
                    ? "border-b-2 border-primary-600 text-primary-600"
                    : "text-gray-600 hover:text-primary-600"
                }`}
                onClick={() => setActiveTab("description")}
              >
                DESCRIPTION
              </button>
              <button
                className={`px-4 py-2 lg:px-6 lg:py-3 font-semibold text-sm lg:text-base whitespace-nowrap ${
                  activeTab === "specifications"
                    ? "border-b-2 border-primary-600 text-primary-600"
                    : "text-gray-600 hover:text-primary-600"
                }`}
                onClick={() => setActiveTab("specifications")}
              >
                SPECIFICATIONS
              </button>
                           {/* <button
                className={`px-4 py-2 lg:px-6 lg:py-3 font-semibold text-sm lg:text-base whitespace-nowrap ${
                  activeTab === "applications"
                    ? "border-b-2 border-primary-600 text-primary-600"
                    : "text-gray-600 hover:text-primary-600"
                }`}
                onClick={() => setActiveTab("applications")}
              >
                APPLICATIONS
              </button> */}
            </div>
          </div>

          {/* Tab Content */}
          <div className="pb-6 lg:pb-8">
            {activeTab === "description" && (
              <div>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">{product.title}</h2>
                <div className="prose max-w-none">
                   {/* <p className="mb-4 text-sm lg:text-base">{product.description}
                  </p> */}
                  <h3 className="text-lg font-bold mb-3">Features</h3>
                  
                  <ul className="list-disc pl-5 mb-6 space-y-2 text-sm lg:text-base">
                   {product.features.slice(0, 7).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs">
                          <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "specifications" && (
              <div>
                <h2 className="text-xl lg:text-2xl font-bold mb-6">Technical Specifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-3 border-b">
                      <span className="text-gray-700 capitalize font-medium text-sm lg:text-base">
                        {key.replace(/([A-Z])/g, " $1").trim()}:
                      </span>
                      <span className="font-semibold text-sm lg:text-base text-right max-w-xs">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

                        {/* {activeTab === "applications" && (
              <div>
                <h2 className="text-xl lg:text-2xl font-bold mb-6">Applications & Industries</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold mb-3">Petrochemical Plants</h3>
                    <p className="text-sm text-gray-600">
                      Control rooms, laboratories, and administrative areas in refineries
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold mb-3">Chemical Processing</h3>
                    <p className="text-sm text-gray-600">
                      Manufacturing facilities, quality control labs, and storage areas
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold mb-3">Oil & Gas Facilities</h3>
                    <p className="text-sm text-gray-600">Offshore platforms, drilling sites, and processing units</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold mb-3">Pharmaceutical</h3>
                    <p className="text-sm text-gray-600">Clean rooms, research facilities, and production areas</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold mb-3">Mining Operations</h3>
                    <p className="text-sm text-gray-600">
                      Underground facilities, processing plants, and control rooms
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold mb-3">Marine Applications</h3>
                    <p className="text-sm text-gray-600">Ship engine rooms, offshore vessels, and marine terminals</p>
                  </div>
                </div>
              </div>
            )} */}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4">
          {/* <h2 className="text-xl lg:text-2xl font-bold mb-6 lg:mb-8">Related Products</h2> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            <div className="text-center text-gray-500 col-span-full py-8">
              {/* <p>Related products will be displayed here</p> */}
              <Link
                href="/products"
                className="inline-block mt-4 bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
              >
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
