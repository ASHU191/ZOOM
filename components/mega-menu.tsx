"use client"

import type React from "react"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronLeft, ChevronRight, Users, Globe, Award, TrendingUp, Shield } from "lucide-react"

interface MegaMenuProps {
  activeMenu: string
  onMouseEnter: () => void
  onMouseLeave: () => void
  parentRef: React.RefObject<HTMLDivElement>
}

const productCategories = [
  {
    name: "Power Solutions",
    href: "/products?category=power-solutions",
    icon: "⚡",
    subcategories: [
      {
        name: "EV Charger",
        href: "/products?category=ev-charger",
        products: [
          {
            name: "RACE 7kW AC EV Charger (AC EV CHARGER)",
            image: "/product/38.jpeg?height=80&width=80",
            href: "/products/p38",
            // price: "2,50,000",
          },
          {
            name: "30/40kW Fast DC EV Charger (Mini Series DC Charger)",
            image: "/product/40.jpeg?height=80&width=80",
            href: "/products/p40",
            // price: "45,000",
          },
          {
            name: "Integrated 60/80kW DC EV Charger (Standard Series DC Charger)",
            image: "/product/42.jpeg?height=80&width=80",
            href: "/products/p42",
            // price: "25,000",
          },
        ],
      },
      {
        name: "MV AVR",
        href: "/products?category=mv-avr",
        products: [
          {
            name: "Single Phase Step Voltage Regulators",
            image: "/product/p92-1.jpeg?height=80&width=80",
            href: "/products/p92",
            // price: "1,50,000",
          },
          {
            name: "Three Phase Step Voltage Regulators",
            image: "/product/p93.jpeg?height=80&width=80",
            href: "/products/p93",
            // price: "2,80,000",
          },
        ],
      },
    ],
  },
  {
    name: "Aviation Obstruction Lights",
    href: "/products?category=AVIATION-OBSTRUCTION-LIGHT",
    icon: "✈️",
    subcategories: [
      {
        name: "LED Aviation Lights",
        href: "/products?category=AVIATION-OBSTRUCTION-LIGHT",
        products: [
          {
            name: "OJ100",
            image: "/product/p121.jpeg?height=80&width=80",
            href: "/products/p121",
            // price: "15,000",
          },
          {
            name: "OJ403A",
            image: "/product/p122.jpeg?height=80&width=80",
            href: "/products/p122",
            // price: "25,000",
          },
          {
            name: "OJ40",
            image: "/product/p123.jpeg?height=80&width=80",
            href: "/products/p123",
            // price: "35,000",
          },
        ],
      },
    ],
  },
  {
    name: "Explosion-proof Equipment",
    href: "/products?category=explosion-proof",
    icon: "🔥",
    subcategories: [
      {
        name: "Coupler",
        href: "/products?category=coupler",
        products: [
          {
            name: "TS01-Series Explosion-proof Coupler",
            image: "/product/p35-1.png?height=80&width=80",
            href: "/products/p35",
            // price: "8,500",
          },
          {
            name: "TS02-Series Explosion-proof Coupler",
            image: "/product/p36-1.png?height=80&width=80",
             href: "/products/p36",
            // price: "12,500",
          },
        ],
      },
      {
        name: "Air Condition",
        href: "/products?category=air-conditioner",
        products: [
          {
            name: "B01-Series Explosion-proof Air Conditioners",
            image: "/product/p1-1.jpeg?height=80&width=80",
             href: "/products/b01-explosion-proof-air-conditioner",
            // price: "1,25,000",
          },
        ],
      },
      {
        name: "Distribution Box",
        href: "/products?category=distribution-box",
        products: [
          {
            name: "NEX51-Series Explosion Protected Distribution Box",
            image: "/product/p43-1.png?height=80&width=80",
             href: "/products/p43",
            // price: "45,000",
          },
          {
            name: "PAX23-Series Explosion-proof Electrical Apparatus",
            image: "/product/p45.png?height=80&width=80",
            href: "/products/p45",
            // price: "15,000",
          },
        ],
      },
      {
        name: "Exhaust Fan",
        href: "/products?category=exhaust-fan",
        products: [
          {
            name: 'BL01-Series Explosion-proof Axial Flow Fan"',
            image: "/product/p55-1.png?height=80&width=80",
            href: "/products/p55",
            // price: "25,000",
          },
          {
            name: 'BL02-Series Explosion-proof Exhaust Fan"',
            image: "/product/p56-1.png?height=80&width=80",
             href: "/products/p56",
            // price: "35,000",
          },
        ],
      },
      {
        name: "Lights",
        href: "/products?category=lights",
        products: [
          {
            name: "BLB01-Series Explosion-proof LED Lightings",
            image: "/product/p59-1.png?height=80&width=80",
            href: "/products/p59",
            // price: "8,500",
          },
          {
            name: "BLB02-Series Explosion-proof LED Lightings",
            image: "/product/p60-1.png?height=80&width=80",
            href: "/products/p60",
            // price: "15,000",
          },
        ],
      },
      {
        name: "Isolators",
        href: "/products?category=isolators",
        products: [
          {
            name: "CKT01- Series Explosion-proof Safety Switch",
            image: "/product/p90-1.png?height=80&width=80",
           href: "/products/p90"

            // price: "12,000",
          },
          {
            name: "CKT02- Series Explosion-proof Load Isolation Switch",
            image: "/product/p91-1.png?height=80&width=80",
           href: "/products/p90"

            // price: "18,000",
          },
        ],
      },
      {
        name: "Plug and Sockets",
        href: "/products?category=Plug-and-Sockets",
        products: [
          {
            name: "BS01-Series Explosion-proof Plug and Sockets",
            image: "/product/p134-1.png?height=80&width=80",
    href: "/products/p134"
            // price: "5,500",
          },
          {
            name: "BS02-Series Explosion-proof Plug and Sockets",
            image: "/product/p135-1.png?height=80&width=80",
    href: "/products/p135"
            // price: "7,500",
          },
        ],
      },
      {
        name: "Terminal Box",
        href: "/products?category=Terminal-Box",
        products: [
          {
            name: "ST02-Series Explosion-proof Terminal Boxes",
            image: "/product/p132-1.png?height=80&width=80",
    href: "/products/p132"
            // price: "8,000",
          },
          {
            name: "ST04-Series Explosion-proof Terminal Box",
            image: "/product/p110-1.png?height=80&width=80",
    href: "/products/p132"
            // price: "15,000",
          },
        ],
      },
      {
        name: "Pipe Fittings",
        href: "/products?category=pipe-fittings",
        products: [
          {
            name: "ZK01-Series Explosion-proof Conduits",
            image: "/product/p94-1.png?height=80&width=80",
            href: "/products/p94"

            // price: "2,500",
          },
          {
            name: "ZK02-Series Explosion-proof Conduits",
            image: "/product/p95-1.png?height=80&width=80",
            href: "/products/p95"

            // price: "1,800",
          },
        ],
      },
      {
        name: "Control Button Switch",
        href: "/products?category=control-button-switch",
        products: [
          {
            name: "AK01-Series Explosion-proof Switch Module",
            image: "/product/p10-1.png?height=80&width=80",
    href: "/products/p10",
            // price: "4,500",
          },
          {
            name: "AK02-Series Explosion-proof Flash Buzzer",
            image: "/product/p11-1.png?height=80&width=80",
    href: "/products/p11",
            // price: "6,500",
          },
        ],
      },
    ],
  },
]

const aboutData = [
  {
    title: "Company Profile",
    description: "Learn about our mission and vision",
    href: "/about/company",
    icon: <Users className="h-5 w-5" />,
  },
  {
    title: "Milestones",
    description: "Our journey and achievements",
    href: "/about/milestones",
    icon: <Award className="h-5 w-5" />,
  },
  {
    title: "Global Presence",
    description: "Worldwide operations and offices",
    href: "/about/global",
    icon: <Globe className="h-5 w-5" />,
  },
  {
    title: "Quality & Certificates",
    description: "Our commitment to quality",
    href: "/about/quality",
    icon: <Shield className="h-5 w-5" />,
  },
  {
    title: "CSR",
    description: "Corporate social responsibility",
    href: "/about/csr",
    icon: <TrendingUp className="h-5 w-5" />,
  },
]

export default function MegaMenu({ activeMenu, onMouseEnter, onMouseLeave, parentRef }: MegaMenuProps) {
  const [selectedCategory, setSelectedCategory] = useState(0)
  const [selectedSubcategory, setSelectedSubcategory] = useState(0)
  const categoryContainerRef = useRef<HTMLDivElement>(null)
  const productContainerRef = useRef<HTMLDivElement>(null)

  const scrollCategories = (direction: "up" | "down") => {
    if (!categoryContainerRef.current) return

    const container = categoryContainerRef.current
    const scrollAmount = 100

    if (direction === "up") {
      container.scrollTop -= scrollAmount
    } else {
      container.scrollTop += scrollAmount
    }
  }

  const scrollProducts = (direction: "left" | "right") => {
    if (!productContainerRef.current) return

    const container = productContainerRef.current
    const scrollAmount = 200

    if (direction === "left") {
      container.scrollLeft -= scrollAmount
    } else {
      container.scrollLeft += scrollAmount
    }
  }

  const renderProducts = () => (
    <div className="grid grid-cols-12 gap-4">
      {/* Product Categories Column */}
      <div className="col-span-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-semibold text-neutral-900">Categories</h3>
          <div className="flex space-x-1">
            <button onClick={() => scrollCategories("up")} className="p-1 hover:bg-gray-100 rounded">
              <ChevronLeft className="h-3 w-3 rotate-90" />
            </button>
            <button onClick={() => scrollCategories("down")} className="p-1 hover:bg-gray-100 rounded">
              <ChevronRight className="h-3 w-3 rotate-90" />
            </button>
          </div>
        </div>
        <div className="h-64 overflow-y-auto pr-2 scrollbar-thin" ref={categoryContainerRef}>
          <div className="space-y-2">
            {productCategories.map((category, index) => (
              <div key={category.name}>
                <button
                  onClick={() => setSelectedCategory(index)}
                  className={`w-full flex items-center p-2 rounded-md transition-colors text-left text-sm font-semibold ${
                    selectedCategory === index
                      ? "bg-primary-50 text-primary-600 border border-primary-200"
                      : "hover:bg-gray-50 hover:text-primary-600"
                  }`}
                >
                  <span className="text-sm mr-2">{category.icon}</span>
                  <span>{category.name}</span>
                </button>
                {selectedCategory === index && (
                  <div className="ml-6 mt-1 space-y-1">
                    {category.subcategories.map((sub, subIndex) => (
                      <button
                        key={sub.name}
                        onClick={() => setSelectedSubcategory(subIndex)}
                        className={`w-full text-left p-1 rounded text-xs transition-colors ${
                          selectedSubcategory === subIndex
                            ? "text-primary-600 bg-primary-25"
                            : "text-gray-600 hover:text-primary-600"
                        }`}
                      >
                        {sub.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <Link
            href="/products"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-xs"
          >
            View All Products
            <ArrowRight className="h-3 w-3 ml-1" />
          </Link>
        </div>
      </div>

      {/* Products Column */}
      <div className="col-span-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-semibold text-neutral-900">
            {productCategories[selectedCategory]?.subcategories[selectedSubcategory]?.name || "Products"}
          </h3>
          <div className="flex items-center space-x-2">
            <Link
              href={productCategories[selectedCategory]?.subcategories[selectedSubcategory]?.href || "/products"}
              className="text-xs text-primary-600 hover:text-primary-700 font-medium"
            >
              View All →
            </Link>
            <div className="flex space-x-1">
              <button onClick={() => scrollProducts("left")} className="p-1 hover:bg-gray-100 rounded">
                <ChevronLeft className="h-3 w-3" />
              </button>
              <button onClick={() => scrollProducts("right")} className="p-1 hover:bg-gray-100 rounded">
                <ChevronRight className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto max-h-64" ref={productContainerRef}>
          <div className="grid grid-cols-3 gap-2 min-w-[600px]">
            {productCategories[selectedCategory]?.subcategories[selectedSubcategory]?.products.map((product, index) => (
              <Link key={index} href={product.href} className="group">
                <div className="bg-white rounded-md border hover:border-primary-200 transition-colors p-2">
                  <div className="aspect-square bg-gray-50 rounded-md mb-2 overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="text-xs font-medium text-neutral-900 group-hover:text-primary-600 transition-colors leading-tight mb-1">
                    {product.name}
                  </h4>
                  <p className="text-xs font-semibold text-primary-600">{product.price}</p>
                </div>
              </Link>
            )) || []}
          </div>
        </div>
      </div>
    </div>
  )

  const renderAbout = () => (
    <div className="grid grid-cols-12 gap-6">
      {/* About Links */}
      <div className="col-span-5">
        <div className="flex items-center mb-4">
          <Link href="/about" className="flex items-center hover:text-primary-600 transition-colors">
            <h3 className="text-lg font-semibold text-neutral-900">About FHS Zoom</h3>
            <ArrowRight className="h-4 w-4 ml-2 text-neutral-600" />
          </Link>
        </div>
        <div className="space-y-2">
          {aboutData.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="flex items-start group p-3 rounded-lg hover:bg-primary-50 transition-colors"
            >
              <div className="w-8 h-8 mr-3 flex-shrink-0 flex items-center justify-center bg-primary-100 rounded-lg text-primary-600">
                {item.icon}
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors mb-1 text-sm">
                  {item.title}
                </h4>
                <p className="text-xs text-neutral-500 leading-relaxed">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Company Highlights */}
      <div className="col-span-7">
        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-6 h-full">
          <div className="flex items-center mb-4">
            <Users className="h-6 w-6 text-primary-600 mr-2" />
            <h3 className="text-lg font-semibold text-neutral-900">Leading Solar Innovation</h3>
          </div>

          <div className="mb-6">
            <Image
              src="/product/p90-1.png?height=120&width=300"
              alt="FHS Zoom Innovation"
              width={300}
              height={120}
              className="w-full h-24 object-cover rounded-lg mb-4"
            />
            <p className="text-sm text-neutral-600 leading-relaxed">
              For over a decade, FHS Zoom has been at the forefront of solar energy innovation, providing reliable and
              efficient solutions that power homes and businesses worldwide.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="text-center bg-white rounded-lg p-3 shadow-sm">
              <div className="text-xl font-bold text-primary-600 mb-1">2M+</div>
              <div className="text-xs text-neutral-600">Inverters Installed</div>
            </div>
            <div className="text-center bg-white rounded-lg p-3 shadow-sm">
              <div className="text-xl font-bold text-secondary-600 mb-1">100+</div>
              <div className="text-xs text-neutral-600">Countries</div>
            </div>
            <div className="text-center bg-white rounded-lg p-3 shadow-sm">
              <div className="text-xl font-bold text-accent-600 mb-1">15</div>
              <div className="text-xs text-neutral-600">Years Experience</div>
            </div>
          </div>

          <Link
            href="/about"
            className="inline-flex items-center bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors text-sm"
          >
            Learn More About Us
            <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  )

  const getMenuContent = () => {
    switch (activeMenu) {
      case "Products":
        return renderProducts()
      case "About FHS Zoom":
        return renderAbout()
      default:
        return null
    }
  }

  return (
    <div
      className="fixed top-14 left-0 right-0 bg-white shadow-xl border-t z-40"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="container mx-auto px-4 py-6">{getMenuContent()}</div>

      <style jsx>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 10px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </div>
  )
}
