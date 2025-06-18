"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Star, Shield, Truck, Award, Zap } from "lucide-react"

const product = {
  id: 2,
  category: "Circuit Breakers",
  title: "TS01-Series Explosion-proof Circuit Breakers",
  description:
    "The TS01-Series explosion-proof circuit breakers are designed to provide reliable circuit protection in hazardous environments with flammable gases or dust.",
  image: "/placeholder.svg?height=400&width=400",
  gallery: [
    "/placeholder.svg?height=300&width=300",
    "/placeholder.svg?height=300&width=300",
    "/placeholder.svg?height=300&width=300",
    "/placeholder.svg?height=300&width=300",
  ],
  features: [
    "Explosion protection - China Ex(GB)",
    "Zone 1 and Zone 2 application",
    "GRP enclosure (Polyester resin, glass fiber reinforced)",
    "Built-in Schneider iC65 series miniature circuit breaker",
    "7 kinds of electrical accessories",
  ],
  specifications: {
    explosionProtection: "China Ex(GB)",
    hazardousArea: "Zone 1 and Zone 2",
    enclosure: "GRP (Polyester resin, glass fiber reinforced)",
    builtIn: "Schneider iC65 series miniature circuit breaker",
    accessories: "7 kinds of electrical accessories",
    padlock: "Type I module can be equipped with padlock",
  },
  price: "15,500",
  originalPrice: "18,000",
  availability: "IN STOCK",
  sku: "TS01-CB-EX",
  rating: 4.6,
  reviews: 28,
}

export default function ProductDetailPage() {
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
            <Link href="/products?category=circuit-breakers" className="hover:text-primary-600">
              Circuit Breakers
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
                <div className="relative w-full h-80 lg:h-96">
                  <Image
                    src={product.gallery[selectedImage] || product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-secondary-500 text-white px-2 py-1 rounded text-sm font-semibold">
                    -15%
                  </div>
                </div>
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
                      className="w-full h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-4">
                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                  {product.category}
                </span>
              </div>

              <h1 className="text-2xl lg:text-3xl font-bold mb-4">{product.title}</h1>

              {/* Rating */}
              <div className="flex items-center mb-4">
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

              {/* Price */}
              <div className="flex items-center mb-6">
                <div className="text-gray-400 line-through text-lg mr-4">₹{product.originalPrice}</div>
                <div className="text-3xl font-bold text-primary-600">₹{product.price}</div>
                <div className="ml-4 bg-green-100 text-green-600 px-2 py-1 rounded text-sm font-medium">
                  Save ₹{Number.parseInt(product.originalPrice) - Number.parseInt(product.price)}
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-sm">
                  <Shield className="h-5 w-5 text-primary-600 mr-2" />
                  <span>Explosion-Proof Certified</span>
                </div>
                <div className="flex items-center text-sm">
                  <Truck className="h-5 w-5 text-primary-600 mr-2" />
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center text-sm">
                  <Award className="h-5 w-5 text-primary-600 mr-2" />
                  <span>Schneider Quality</span>
                </div>
                <div className="flex items-center text-sm">
                  <Zap className="h-5 w-5 text-primary-600 mr-2" />
                  <span>Circuit Protection</span>
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
              <div className="mb-6 space-y-2">
                <div className="flex items-center justify-between py-2 border-b">
                  <span className="text-gray-600 text-sm lg:text-base">SKU:</span>
                  <span className="font-medium text-sm lg:text-base">{product.sku}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b">
                  <span className="text-gray-600 text-sm lg:text-base">Availability:</span>
                  <span className="text-green-600 font-semibold text-sm lg:text-base">{product.availability}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
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
                  Technical Support
                </Link>
              </div>
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
              <button
                className={`px-4 py-2 lg:px-6 lg:py-3 font-semibold text-sm lg:text-base whitespace-nowrap ${
                  activeTab === "applications"
                    ? "border-b-2 border-primary-600 text-primary-600"
                    : "text-gray-600 hover:text-primary-600"
                }`}
                onClick={() => setActiveTab("applications")}
              >
                APPLICATIONS
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="pb-6 lg:pb-8">
            {activeTab === "description" && (
              <div>
                <h2 className="text-xl lg:text-2xl font-bold mb-4">{product.title}</h2>
                <div className="prose max-w-none">
                  <p className="mb-4 text-sm lg:text-base">
                    The TS01-Series explosion-proof circuit breakers represent the pinnacle of electrical safety
                    technology for hazardous environments. Built with premium Schneider iC65 series miniature circuit
                    breakers housed in robust GRP enclosures, these units provide uncompromising protection against
                    electrical faults while maintaining explosion-proof integrity.
                  </p>
                  <p className="mb-4 text-sm lg:text-base">
                    Designed for Zone 1 and Zone 2 applications, these circuit breakers feature glass fiber reinforced
                    polyester resin enclosures that resist corrosion and provide long-lasting durability in harsh
                    industrial environments. The modular design allows for easy customization with seven different types
                    of electrical accessories.
                  </p>
                  <h3 className="text-lg font-bold mb-3">Safety & Protection Features</h3>
                  <ul className="list-disc pl-5 mb-6 space-y-2 text-sm lg:text-base">
                    <li>Schneider Electric iC65 series circuit breaker technology</li>
                    <li>GRP enclosure for superior corrosion resistance</li>
                    <li>Explosion-proof certification for hazardous areas</li>
                    <li>Multiple electrical accessory options</li>
                    <li>Optional padlock capability for security</li>
                    <li>Easy installation and maintenance</li>
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

            {activeTab === "applications" && (
              <div>
                <h2 className="text-xl lg:text-2xl font-bold mb-6">Applications & Industries</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold mb-3">Electrical Distribution</h3>
                    <p className="text-sm text-gray-600">Main and sub-distribution panels in hazardous areas</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold mb-3">Motor Control Centers</h3>
                    <p className="text-sm text-gray-600">Protection for motor circuits and control systems</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold mb-3">Lighting Circuits</h3>
                    <p className="text-sm text-gray-600">Protection for explosion-proof lighting systems</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold mb-3">Instrumentation</h3>
                    <p className="text-sm text-gray-600">Protection for control and monitoring equipment</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold mb-3">Process Equipment</h3>
                    <p className="text-sm text-gray-600">Circuit protection for industrial process machinery</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold mb-3">Emergency Systems</h3>
                    <p className="text-sm text-gray-600">Critical circuit protection for safety systems</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-xl lg:text-2xl font-bold mb-6 lg:mb-8">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            <div className="text-center text-gray-500 col-span-full py-8">
              <p>Related products will be displayed here</p>
              <Link
                href="/products?category=circuit-breakers"
                className="inline-block mt-4 bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
              >
                View All Circuit Breakers
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
