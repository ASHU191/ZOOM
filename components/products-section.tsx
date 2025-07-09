"use client"
import { useState, useRef } from "react"
import type React from "react"
import { useEffect } from "react"

import Image from "next/image"
import Link from "next/link"
import { X, Eye, ChevronLeft, ChevronRight } from "lucide-react"

export const featuredProducts = [
  // Residential Inverters (5 products)
  {
    id: 1,
    category: "Air Conditioner",
    title: "B01-Series Explosion-proof Air Conditioners",
    description:
      "The B01-Series Explosion-proof Air Conditioners are engineered to provide safe and effective cooling in hazardous areas where explosive gases or vapors may be present.",
    image: "/product/p1-1.jpeg?height=200&width=250",
    gallery: ["/product/p1-2.jpeg?height=300&width=300", "/product/p1-3.jpeg?height=300&width=300", "/product/p1-4.jpeg?height=300&width=300"],
    features: [
      "Explosion protection - China Ex(GB)",
      "Zone 1 and Zone 2 application",
      "Split type & Cabinet type structures",
      "Cooling only & Cooling and heating type",
      "Manual control or remote control",
    ],
    specifications: {
      explosionProtection: "China Ex(GB)",
      hazardousArea: "Zone 1 and Zone 2",
      structures: "Split type & Cabinet type",
      functions: "Cooling only type & Cooling and heating type",
      control: "Manual control or remote control",
      coolingTempRange: "18℃–43℃",
      heatingTempRange: "-7℃–24℃",
      enclosure: "Flameproof compressor, sealed electrical components",
    },
    price: "125,000",
    originalPrice: "145,000",
    availability: "IN STOCK",
    sku: "B01-AC-EX",
    href: "/products/b01-explosion-proof-air-conditioner",
  },
  {
    id: 35,
    category: "Coupler",
    title: "TS01-Series Explosion-proof Coupler",
    description:
      "The TS01-Series explosion-proof coupler is engineered for safe and reliable connection of electrical equipment in hazardous areas.",
    image: "/product/p35-1.png?height=200&width=250",
    gallery: ["/product/p35-2.png?height=300&width=300"],

    features: [
      "Explosion protection - China Ex(GB)",
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "Flame-proof type and dust explosion-proof type structure",
      "Three kinds of pole number: 2P, 3P, 4P",
      "Thread locking mode with anti-vibration functions",
      "Self-cleaning plug sleeve with elastic shutter spring",
    ],
    specifications: {
      explosionProtection: "China Ex(GB)",
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      structure: "Flame-proof type and dust explosion-proof type",
      poleNumbers: "2P, 3P, 4P",
      lockingMode: "Thread locking mode",
      features: "Anti-vibration, anti-loosening and anti-mis plugging functions",
      wiring: "Cable wiring for plug",
    },
    price: "8,500",
    originalPrice: "10,000",
    availability: "IN STOCK",
    sku: "TS01-CP-EX",
    href: "/products/p35",
  },
  {
    id: 45,
    category: "Distribution Box",
    title: "PAX23-Series Explosion-proof Electrical Apparatus",
    description:
      "The PAX23-Series is designed for safe power control and distribution in hazardous gas and dust environments with modular design.",
    image: "/product/p45.png?height=200&width=250",
    // gallery: ["/product/p15-2.png?height=300&width=300"],
    features: [
      "Explosion protection - IECEx (IEC), ATEX (CENELEC, EN), China Ex (GB)",
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "Explosion protection types: Ex db IIB, Ex db IIB + H₂, Ex tb IIIC",
      "Multiple enclosure materials: Steel Plate, 304/316 Stainless Steel",
      "Various function types: Distribution Box, Circuit Breaker, Magnetic Starter",
      "Easy customization for diverse industrial applications",
    ],
    specifications: {
      explosionProtection: "IECEx (IEC), ATEX (CENELEC, EN), China Ex (GB)",
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      protectionTypes: "Ex db IIB, Ex db IIB + H₂, Ex tb IIIC",
      enclosureMaterial: "Q – Steel Plate, 4 – 304 Stainless Steel, 6 – 316 Stainless Steel",
      functionTypes:
        "P – Distribution Box, B – Circuit Breaker, Q – Magnetic Starter, C – Control Circuit, J – Terminal Box",
      customization: "Modular structure allows easy customization",
    },
    price: "28,500",
    originalPrice: "33,000",
    availability: "IN STOCK",
    sku: "PAX23-EA-EX",
    href: "/products/p45",
  },
  {
    id: 55,
    category: "Exhaust Fan",
    title: "BL01-Series Explosion-proof Axial Flow Fan",
    description:
      "The BL01-Series is designed to provide efficient ventilation and air circulation in hazardous areas where flammable gases or vapors may be present.",
    image: "/product/p55-1.png?height=200&width=250",
    gallery: ["/product/p55-2.png?height=300&width=300", "/product/p55-3.png?height=300&width=300"],
    features: [
      "Explosion protection - China Ex(GB)",
      "Zone 1 and Zone 2 application",
      "Explosion-proof motor with corrosion-resistant materials",
      "Composed of explosion-proof motor, fan blade, fan stack",
      "Can be used for ventilation, exhaust, and pipeline pressure improvement",
      "Cable wiring connection",
    ],
    specifications: {
      explosionProtection: "China Ex(GB)",
      hazardousArea: "Zone 1 and Zone 2",
      components: "Explosion-proof motor, fan blade, fan stack, etc.",
      applications: "Ventilation, exhaust, and pipeline pressure improvement",
      installation: "Can install along interval of exhaust pipe",
      wiring: "Cable wiring",
      construction: "Explosion-proof motor and corrosion-resistant materials",
    },
    price: "15,000",
    originalPrice: "17,500",
    availability: "IN STOCK",
    sku: "BL01-AF-EX",
    href: "/products/p55",
  },
  {
    id: 65,
    category: "Lights",
    title: "BLB07-Series Explosion-proof Sight Glass Light",
    description:
      "The BLB07-Series Explosion-proof Sight Glass Light is specifically designed for illuminating the interior of tanks, reactors, and vessels in hazardous areas. Compact and durable, it features a flameproof structure and high-efficiency LED light source for clear visibility through sight glass under extreme conditions.",
    image: "/product/p65-1.png?height=200&width=250",
    gallery: ["/product/p65-2.png?height=300&width=300"],

    features: [
      "Explosion protection - China Ex (GB)",
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "LED power: 6W, 9W",
      "Two control modes: delay switch and touch switch",
      "Built-in control, no need for external lighting switch",
      "Customizable delay time",
    ],
    specifications: {
      explosionProtection: "China Ex (GB)",
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      lightSource: "LED: 6W, 9W",
      controlModes: "Two control modes: delay switch and touch switch, which both are built-in",
      switch: "User does not need to set up another lighting switch, and can customize the time of delay",
      applications: "It can be used in chemical reaction vessels, also for small range lighting",
    },
    price: "4,200",
    originalPrice: "4,900",
    availability: "IN STOCK",
    sku: "BLB07-SGL-EX",
    href: "/products/p65",
  },
  {
    id: 90,
    category: "Isolators",
    title: "CKT01- Series Explosion-proof Safety Switch",
    description:
      "The CKT01-Series explosion-proof safety switch is designed for hazardous environments where flammable gases, vapors, or dust may be present. It offers reliable circuit breaking with a durable flameproof enclosure to prevent ignition of surrounding atmosphere. The switch ensures high operational safety and compliance with international explosion protection standards. Ideal for industrial applications requiring robust and secure disconnection.",
    image: "/product/p90-1.png?height=200&width=250",
    gallery: ["/product/p90-2.png?height=300&width=300"],

    features: [
      "Explosion protection",
      "- IEC Ex (IEC)",
      "- ATEX (CENELEC, EN)",
      "- China Ex (GB)",
      "Application in hazardous area",
      "- Zone 1 and Zone 2",
      "- Zone 21 and Zone 22",
      "Black operating handle for standard, Red/Yellow operating handle for Emergency stop.",
      "The joint of the enclosure and the cover has a labyrinth sealing structure, sealed with imported polyurethane foam or silicon rubber, has good performance of water-proof and dust-proof.",
      "Equipped with an interlocking mechanism, in the locked state, the switch cannot be operated."
    ],
    specifications: {
      series: "CKT01",
      type: "Explosion-proof Safety Switch",
      application: "Hazardous Areas",
      zones: "Zone 1, Zone 2, Zone 21, Zone 22"
    },
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "CKT01-SWITCH",
    href: "/products/p90"
  },
  {
    id: 134,
    category: "Plug and Sockets",
    title: "BS01-Series Explosion-proof Plug and Sockets",
    description: "The BS01-Series explosion-proof plug and sockets are built for safe and reliable power connections in hazardous environments. Designed with flameproof construction, they prevent ignition of surrounding explosive gases or dust. These connectors ensure secure operation, easy installation, and long-lasting durability. Suitable for use in industrial zones requiring high safety standards.",
    image: "/product/p134-1.png?height=200&width=250",
    gallery: ["/product/p134-2.png?height=300&width=300"],

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
    href: "/products/p134"
  },

  {
    id: 112,
    category: "Terminal Box",
    title: "ST06-Series Explosion-proof Terminal Box",
    description: "The ST06-Series explosion-proof terminal box is built for safe and efficient cable terminations in hazardous locations. Its robust flameproof design prevents ignition of flammable gases or dust, ensuring secure operation. The enclosure offers high durability and corrosion resistance, making it suitable for harsh industrial environments. Ideal for use where certified explosion protection is essential.",
    image: "/product/p112-1.png?height=200&width=250",
    gallery: ["/product/p112-2.png?height=300&width=300"],

    features: [
      "Explosion protection - IECEx(IEC), ATEX(CENELEC,EN), China Ex(GB)",
      "Application in hazardous area - Zone 0, Zone 1 and Zone 2, Zone 21 and Zone 22",
      "4 types explosion protection (Ex eb, Ex ia, Ex ib, Ex tb IIC)",
      "PA66 enclosure",
      "2 types of enclosure customizable for current, terminal, size and direction of entry",
      "Type A: open crimping type terminal",
      "Type B (Standard): international brand terminal",
      "Stainless steel exposed fastener, anti dropping structure, easy installation and maintenance"
    ],
    specifications: {},
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "ST06",
    href: "/products/p112"
  },
  {
    id: 94,
    category: "Pipe Fittings",
    title: "ZK01-Series Explosion-proof Conduits (Flexible) (Stainless Steel, PVC Coated)",
    description: "The ZK01-Series explosion-proof flexible conduits are constructed using high-grade stainless steel and coated with durable PVC for added protection. Ideal for routing wiring in hazardous environments, they provide excellent flexibility and corrosion resistance. These conduits are certified for use in explosive atmospheres, making them suitable for Zone 1 and Zone 2 hazardous areas.",
    image: "/product/p94-1.png?height=200&width=250",
    gallery: ["/product/p94-2.png?height=300&width=300"],

    features: [
      "Explosion protection - IECEx(IEC), ATEX (CENELEC,EN), China Ex(GB)",
      "Application in hazardous areas: Zone 1, Zone 2, Zone 21, Zone 22",
      "Flame-proof (Type ‘d’), Increased safety (Type ‘e’)",
      "Flexible stainless steel with PVC coating",
      "Corrosion resistant, suitable for outdoor and chemical environments"
    ],
    specifications: {
      Material: "Stainless Steel with PVC Coating",
      TemperatureRange: "-40°C to +105°C",
      ProtectionClass: "IP66/IP67",
      Standard: "IEC 60079-0/1/7"
    },
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "ZK01",
    href: "/products/p94"
  },
  {
    id: 29,
    category: "Control Button Switch",
    title: "AK20-Series Explosion-proof Potentiometers",
    description:
      "The AK20-Series explosion-proof potentiometers are designed for precise signal adjustment in hazardous environments with explosive gases or dust.",
    image: "/product/p29-1.png?height=200&width=250",
    gallery: ["/product/p29-2.png?height=300&width=300"],

    features: [
      "Explosion protection - China Ex(GB)",
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "Explosion-proof form gas group: d IIB, d IIC",
      "Built-in wire-wound potentiometer from international famous brands",
      "Two types: single turn and multi-turn",
    ],
    specifications: {
      explosionProtection: "China Ex(GB)",
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      gasGroup: "d IIB, d IIC",
      potentiometer: "Built-in wire-wound potentiometer, international famous brands",
      types: "Single turn and multi-turn",
      structure: "Screw thread integrated structure, easy installation and maintenance",
    },
    price: "6,800",
    originalPrice: "7,900",
    availability: "IN STOCK",
    sku: "AK20-POT-EX",
    href: "/products/p29",
  },
  {
    id: 38,
    category: "EV Charger",
    title: "XPD Forklift Battery Charger",
    description:
      "The XPD Series forklift battery charger is a high-efficiency, fully automatic charging solution designed for lead-acid and other industrial battery types.",
    image: "/product/p38-1.jpg?height=200&width=250",
    gallery: ["/product/p38-2.png?height=300&width=300",
      "/product/p38-3.png?height=300&width=300",
      "/product/p38-4.png?height=300&width=300"],

    features: [
      "Nominal DC voltage: 24/36/48/72/80V",
      "Input AC voltage: 120±20% or 220±25%",
      "OEM/ODM Service available",
      "Silicon-controlled rectifier (SCR) technology",
      "Optimizes battery life and performance",
    ],
    specifications: {
      nominalDCVoltage: "24/36/48/72/80V",
      inputACVoltage: "120±20% or 220±25%",
      oemOdmService: "Yes",
      applications: "Forklift battery",
      technology: "Silicon-controlled rectifier (SCR)",
    },
    price: "45,000",
    originalPrice: "52,000",
    availability: "IN STOCK",
    sku: "XPD-FC-01",
    href: "/products/p38",
  },
  {
    id: 93,
    category: "MV AVR",
    title: "Three Phase Step Voltage Regulators",
    description:
      "SVR-3 type feeder automatic substation & distribution step voltage regulator is actually a three phase oil immersed auto-transformer with SVR controller and gathering sampling of voltage signal, on load tap changer controlling device to achieve gird more efficient from adjust the load character by increase and decrease the voltage.",
    image: "/product/p93.jpg?height=200&width=250",
    // gallery: ["/product/p15-2.png?height=300&width=300"],

    features: [
      "Maximum rating: 9 MVA",
      "7, 17 & 25 tap positions",
      "Integrated three-phase control",
      "Input Voltage Range: ±30%",
      "Flexible voltage regulation range"
    ],
    specifications: {
      type: "Three Phase Step Voltage Regulator",
      transformerType: "Oil-immersed",
      control: "SVR controller",
      regulationRange: "±30%",
      rating: "Up to 9 MVA"
    },
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "SVR-3",
    href: "/products/p93"
  },

  {
    id: 125,
    category: "AVIATION OBSTRUCTION LIGHT",
    title: "OJ88",
    description: "OJ88 high-intensity aviation obstruction lights are used to mark structures that pose a risk to aircraft. They incorporate advanced LED, optical, and control technologies for reliable performance in demanding conditions. Ideal for obstacles 150 meters and above, and suitable for high-salinity, corrosive environments.",
    image: "/product/p125.jpeg?height=200&width=250",
    gallery: ["/product/p125.jpeg?height=300&width=300"],
    features: [
      "Input Voltage: AC200–240V, AC100–130V, Light head @ DC48V",
      "Rated Power: 85W @ 1 layer daytime, 150W @ 2 layers daytime, 220W @ 3 layers daytime",
      "Frequency: 50–60Hz (AC power box)",
      "IP Rate: IP66"
    ],
    specifications: {},
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "OJ88",
    href: "/products/p125"
  },
  // {
  //   id: 6,
  //   title: "GW25K-MT Commercial Inverter",
  //   description: "25kW three-phase inverter for commercial installations",
  //   image: "/placeholder.svg?height=200&width=250",
  //       gallery: ["/product/p14-1.png?height=300&width=300", "/product/p14-2.png?height=300&width=300"],

  //   features: ["98.4% Efficiency", "Remote Monitoring", "5-Year Warranty"],
  //   specifications: {
  //     power: "25kW",
  //     efficiency: "98.4%",
  //     warranty: "5 Years",
  //     monitoring: "4G/WiFi/Ethernet",
  //     protection: "IP65",
  //   },
  //   price: "2,15,999",
  //   originalPrice: "2,45,999",
  //   availability: "IN STOCK",
  //   sku: "GW25K-MT",
  //   href: "/products/gw25k-mt",
  // },
]

interface ProductModalProps {
  product: (typeof featuredProducts)[0] | null
  isOpen: boolean
  onClose: () => void
}


function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const [mainImage, setMainImage] = useState(product?.image || "/product/p15-1.png")

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, onClose])

  // Update image when modal opens with new product
  useEffect(() => {
    if (product?.image) {
      setMainImage(product.image)
    }
  }, [product])

  if (!isOpen || !product) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div ref={modalRef} className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
            {/* Left Side - Product Images */}
            <div>
              <div className="relative mb-4">
                <Image
                  src={mainImage}
                  alt={product.title}
                  width={400}
                  height={400}
                  className="w-full h-80 object-contain rounded-lg"
                />
              </div>

              {/* Thumbnails */}
              {product.gallery && product.gallery.length > 0 && (
                <div className="grid grid-cols-4 gap-2">
                  {product.gallery.map((img, index) => (
                    <div
                      key={index}
                      onClick={() => setMainImage(img || "/product/p15-1.png")}
                      className="border rounded-lg overflow-hidden cursor-pointer hover:shadow"
                    >
                      <Image
                        src={img || "/product/p15-1.png"}
                        alt={`${product.title} ${index + 1}`}
                        width={80}
                        height={80}
                        className="w-full h-16 object-contain"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right Side - Product Details */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-neutral-800">{product.title}</h2>
                    <p className="text-gray-600 mb-3 text-sm line-clamp-3">{product.description}</p>

              {/* Features List */}
              <div className="mb-6">
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Availability & SKU */}
              {/* <div className="mb-6 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">AVAILABILITY:</span>
                  <span className="text-primary-600 font-semibold text-sm">{product.availability}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">SKU:</span>
                  <span className="text-sm font-medium">{product.sku}</span>
                </div>
              </div> */}

              {/* Price */}
              {/* <div className="mb-6">
                <p className="text-accent-600 font-semibold text-sm mt-1">Limited stock available - order soon.</p>
              </div> */}

              {/* View Full Details Button */}
              <Link
                href={product.href}
                onClick={onClose}
                className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 px-6 rounded-lg transition-colors font-semibold text-center block"
              >
                View Full Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<(typeof featuredProducts)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)

  const openModal = (product: (typeof featuredProducts)[0], e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  return (
    <>
      <section className="py-10 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3 text-neutral-800">Featured Products</h2>
            <p className="text-base text-neutral-600 max-w-2xl mx-auto">
              Discover our range of high-quality electronic solutions
            </p>
          </div>

          {/* Product Slider */}
          <div className="relative">
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div
              ref={sliderRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {featuredProducts.map((product, index) => (
                <Link
                  key={product.id}
                  href={product.href}
                  className="flex-none w-80 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      width={320}
                      height={200}
                      className="w-full h-40 object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* <div className="absolute top-2 left-2 bg-secondary-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      -15%
                    </div> */}
                  </div>
                  <div className=" p-4 flex flex-col h-full">
                    <h3 className="line-clamp-2 text-base font-bold mb-2 group-hover:text-primary-600 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-neutral-600 mb-3 text-sm line-clamp-2">{product.description}</p>
                    <ul className="space-y-1 mb-4">
                      {product.features.slice(0, 2).map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-xs whitespace-nowrap overflow-hidden text-ellipsis"
                        >
                          <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* <div className="flex items-center justify-between mb-3">
                      <div>
                        <span className="text-gray-400 line-through text-xs">{product.originalPrice}</span>
                        <span className="text-base font-bold text-primary-600 ml-2">{product.price}</span>
                      </div>
                    </div> */}
                    <div className="flex space-x-2">
                      <button
                        onClick={(e) => openModal(product, e)}
                        className="flex-1 bg-primary-500 hover:bg-primary-600 text-white px-3 py-1.5 rounded-full transition-colors text-xs text-center cursor-pointer flex items-center justify-center"
                      >
                        <Eye className="h-3 w-3 mr-1" />
                        Quick View
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/products"
              className="inline-flex items-center bg-neutral-800 hover:bg-neutral-900 text-white px-5 py-2 rounded-full transition-colors text-sm"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      <ProductModal product={selectedProduct} isOpen={isModalOpen} onClose={closeModal} />

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  )
}
