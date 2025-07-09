"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Star, Shield, Truck, Award, Thermometer } from "lucide-react"
import { useRef } from "react"

const product = {
  id: 134,
  category: "Plug and Sockets",
  title: "BS01-Series Explosion-proof Plug and Sockets",
  description: "The BS01-Series explosion-proof plug and sockets are built for safe and reliable power connections in hazardous environments. Designed with flameproof construction, they prevent ignition of surrounding explosive gases or dust. These connectors ensure secure operation, easy installation, and long-lasting durability. Suitable for use in industrial zones requiring high safety standards.",
  image: "/placeholder.svg?height=200&width=250",
  gallery: ["/product/p134-1.png?height=300&width=300", "/product/p134-2.png?height=300&width=300"],

  features: [
    "Explosion protection - IECEx (IEC), ATEX (CENELEC, EN), China Ex(GB)",
    "Application in hazardous area - Zone 1 and Zone 2, Zone 21 and Zone 22",
    "Flame-proof type enclosure, four types of enclosure",
    "Eight current classes: 10A, 16A, 25A, 32A, 50A, 63A, 100A, 125A",
    "Four pole options: 2P, 3P, 4P, 5P",
    "Reliable interlocking: plug removal only after switch is off; power on only after plug is inserted",
    "Elastic shutter spring sleeve ensures reliable contact, low resistance, low-temperature rise",
    "Self-cleaning design, low insertion/extraction force",
    "Includes timer with voltage-specific color coding to avoid mistaken insertion"
  ],
  specifications: {},
  price: "N/A",
  originalPrice: "N/A",
  availability: "IN STOCK",
  sku: "BS01",
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
            <Link href="/products?category=Plug-and-Sockets" className="hover:text-primary-600">  Plug and Sockets
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
                    className={`border rounded-lg overflow-hidden ${selectedImage === index ? "border-primary-500" : "border-gray-300"
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

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                 <div className="flex items-center text-sm">
                  <Shield className="h-5 w-5 text-primary-600 mr-2" />
                </div>

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
                className={`px-4 py-2 lg:px-6 lg:py-3 font-semibold text-sm lg:text-base whitespace-nowrap ${activeTab === "description"
                  ? "border-b-2 border-primary-600 text-primary-600"
                  : "text-gray-600 hover:text-primary-600"
                  }`}
                onClick={() => setActiveTab("description")}
              >
                DESCRIPTION
              </button>
              <button
                className={`px-4 py-2 lg:px-6 lg:py-3 font-semibold text-sm lg:text-base whitespace-nowrap ${activeTab === "specifications"
                  ? "border-b-2 border-primary-600 text-primary-600"
                  : "text-gray-600 hover:text-primary-600"
                  }`}
                onClick={() => setActiveTab("specifications")}
              >
                SPECIFICATIONS
              </button>

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
