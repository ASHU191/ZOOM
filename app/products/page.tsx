"use client"

import type React from "react"
import { useRef } from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Filter, Eye, X } from "lucide-react"
import { useSearchParams } from "next/navigation"

// Real products based on your provided data
const allProducts = [
  // Air Conditioner Category
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

  // Circuit Breakers Category
  {
    id: 2,
    category: "Circuit Breakers",
    title: "TS01-Series Explosion-proof Circuit Breakers",
    description:
      "The TS01-Series explosion-proof circuit breakers are designed to provide reliable circuit protection in hazardous environments with flammable gases or dust.",
    image: "/product/p2-1.jpeg?height=200&width=250",
    gallery: ["/product/p2-2.jpeg?height=300&width=300"],
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
    href: "/products/p2",
  },
  {
    id: 3,
    category: "Circuit Breakers",
    title: "TS02-Series Explosion-proof Residual Current Circuit Breakers",
    description:
      "The TS02-Series explosion-proof residual current circuit breakers are designed to protect against earth faults and leakage currents in hazardous areas.",
    image: "/product/p3-1.jpeg?height=200&width=250",
    gallery: ["/product/p3-2.jpeg?height=300&width=300"],
    features: [
      "Explosion protection - China Ex(GB)",
      "Zone 1 and Zone 2 application",
      "GRP enclosure (Polyester resin, glass fiber reinforced)",
      "Built-in Schneider iC65 series residual circuit breaker",
      "Overload, short-circuit, and residual current protection",
    ],
    specifications: {
      explosionProtection: "China Ex(GB)",
      hazardousArea: "Zone 1 and Zone 2",
      enclosure: "GRP (Polyester resin, glass fiber reinforced)",
      builtIn: "Schneider iC65 series residual circuit breaker",
      protection: "Overload, short-circuit, and residual current",
      accessories: "7 kinds of electrical accessories",
    },
    price: "18,500",
    originalPrice: "22,000",
    availability: "IN STOCK",
    sku: "TS02-RCB-EX",
    href: "/products/p3",
  },
  {
    id: 4,
    category: "Circuit Breakers",
    title: "TS03-Series Explosion-proof AC Contactors",
    description:
      "The TS03-Series explosion-proof AC contactors are designed for safe and reliable control of electrical circuits in hazardous areas with flammable gases or dust.",
    image: "/product/p4-1.jpeg?height=200&width=250",
    gallery: [
      "/product/p4-2.jpeg?height=300&width=300"
    ],
    features: [
      "Explosion protection - China Ex(GB)",
      "Zone 1 and Zone 2 application",
      "GRP enclosure (Polyester resin, glass fiber reinforced)",
      "Built-in Schneider AC contactor",
      "High switching capacity and long service life",
    ],
    specifications: {
      explosionProtection: "China Ex(GB)",
      hazardousArea: "Zone 1 and Zone 2",
      enclosure: "GRP (Polyester resin, glass fiber reinforced)",
      builtIn: "Schneider AC contactor",
      terminals: "Main terminal contact, coil contact and auxiliary contact",
    },
    price: "12,500",
    originalPrice: "15,000",
    availability: "IN STOCK",
    sku: "TS03-AC-EX",
    href: "/products/p4",
  },
  {
    id: 5,
    category: "Circuit Breakers",
    title: "TS04-Series Explosion-proof Thermal Relays",
    description:
      "The TS04-Series explosion-proof thermal relays are designed to provide reliable overload protection for motors and equipment in hazardous environments.",
    image: "/product/p5-1.jpeg?height=200&width=250",
    gallery: [
      "/product/p5-2.jpeg?height=300&width=300",
    ],
    features: [
      "Explosion protection - China Ex(GB)",
      "Zone 1 and Zone 2 application",
      "GRP enclosure (Polyester resin, glass fiber reinforced)",
      "Built-in Schneider thermal relay",
      "Adjustable settings and accurate response",
    ],
    specifications: {
      explosionProtection: "China Ex(GB)",
      hazardousArea: "Zone 1 and Zone 2",
      enclosure: "GRP (Polyester resin, glass fiber reinforced)",
      builtIn: "Schneider thermal relay",
      terminals: "Main terminal contact, auxiliary contact and current tripping adjusting shaft",
    },
    price: "9,500",
    originalPrice: "11,500",
    availability: "IN STOCK",
    sku: "TS04-TR-EX",
    href: "/products/p5",
  },
  {
    id: 6,
    category: "Circuit Breakers",
    title: "TS05-Series Explosion-proof Motor Protection Switches",
    description:
      "The TS05-Series explosion-proof motor protection switches are designed for safe starting, stopping, and protection of motors in hazardous areas.",
    image: "/product/p6-2.jpeg?height=200&width=250",
    gallery: ["/product/p6-1.jpeg?height=300&width=300"],
    features: [
      "Explosion protection - China Ex(GB)",
      "Zone 1 and Zone 2 application",
      "GRP enclosure (Polyester resin, glass fiber reinforced)",
      "Built-in Eaton motor protection switch",
      "Over-current trip, short-circuit trip and phase loss reaction",
    ],
    specifications: {
      explosionProtection: "China Ex(GB)",
      hazardousArea: "Zone 1 and Zone 2",
      enclosure: "GRP (Polyester resin, glass fiber reinforced)",
      builtIn: "Eaton motor protection switch",
      protection: "Over-current trip, short-circuit trip and phase loss reaction",
      terminals: "Main terminal contact, auxiliary contact, operation handle and current tripping adjusting shaft",
    },
    price: "16,500",
    originalPrice: "19,500",
    availability: "IN STOCK",
    sku: "TS05-MPS-EX",
    href: "/products/p6",
  },
  {
    id: 7,
    category: "Circuit Breakers",
    title: "TS06-Series Explosion-proof Miniature Relays",
    description:
      "The TS06-Series explosion-proof miniature relays are designed for reliable signal control in hazardous areas containing flammable gases or dust.",
    image: "/product/p7-1.jpeg?height=200&width=250",
    gallery: ["/product/p7-2.jpeg?height=300&width=300"],
    features: [
      "Explosion protection - China Ex(GB)",
      "Zone 1 and Zone 2 application",
      "GRP enclosure (Polyester resin, glass fiber reinforced)",
      "Built-in Omron intermediate relay",
      "Precise performance and fast response",
    ],
    specifications: {
      explosionProtection: "China Ex(GB)",
      hazardousArea: "Zone 1 and Zone 2",
      enclosure: "GRP (Polyester resin, glass fiber reinforced)",
      builtIn: "Omron intermediate relay",
      terminals: "Terminal contact and coil contact",
    },
    price: "7,500",
    originalPrice: "9,000",
    availability: "IN STOCK",
    sku: "TS06-MR-EX",
    href: "/products/p7",
  },
  {
    id: 8,
    category: "Circuit Breakers",
    title: "TS07-Series Explosion-proof Time Relays",
    description:
      "The TS07-Series explosion-proof time relays are designed for precise timing control in hazardous environments with explosive gases or dust.",
    image: "/product/p8-1.jpeg?height=200&width=250",
    gallery: [
      "/product/p8-2.jpeg?height=300&width=300",
    ],
    features: [
      "Explosion protection - China Ex(GB)",
      "Zone 1 and Zone 2 application",
      "GRP enclosure (Polyester resin, glass fiber reinforced)",
      "Built-in Omron time relay",
      "Adjustable delay settings and stable performance",
    ],
    specifications: {
      explosionProtection: "China Ex(GB)",
      hazardousArea: "Zone 1 and Zone 2",
      enclosure: "GRP (Polyester resin, glass fiber reinforced)",
      builtIn: "Omron time relay",
      terminals: "Terminal contact, coil contact and time adjusting shaft",
    },
    price: "8,500",
    originalPrice: "10,500",
    availability: "IN STOCK",
    sku: "TS07-TR-EX",
    href: "/products/p8",
  },
  {
    id: 9,
    category: "Circuit Breakers",
    title: "TS08-Series Explosion-proof Surge Protectors",
    description:
      "The TS08-Series explosion-proof surge protectors are designed to safeguard electrical equipment from voltage spikes in hazardous areas with explosive gases or dust.",
    image: "/product/p9-1.jpeg?height=200&width=250",
    gallery: [
      "/product/p9-2.jpeg?height=300&width=300",
    ],
    features: [
      "Explosion protection - China Ex(GB)",
      "Zone 1 and Zone 2 application",
      "GRP enclosure (Polyester resin, glass fiber reinforced)",
      "Built-in surge protective device",
      "Fast response and high durability",
    ],
    specifications: {
      explosionProtection: "China Ex(GB)",
      hazardousArea: "Zone 1 and Zone 2",
      enclosure: "GRP (Polyester resin, glass fiber reinforced)",
      builtIn: "Surge protective device",
      terminals: "Terminal contact",
    },
    price: "11,500",
    originalPrice: "13,500",
    availability: "IN STOCK",
    sku: "TS08-SP-EX",
    href: "/products/p9",
  },

  // Control Button Switch Category (25 products)
  {
    id: 10,
    category: "Control Button Switch",
    title: "AK01-Series Explosion-proof Switch Module",
    description:
      "The AK01-Series explosion-proof switch module is designed for safe and reliable control of electrical circuits in hazardous environments.",
    image: "/product/p10-1.png?height=200&width=250",
    gallery: ["/product/p10-2.png?height=300&width=300"],
    features: [
      "Explosion protection - IEC Ex(IEC), ATEX(CENELEC,EN), China Ex(GB)",
      "Zone 1 and Zone 2 application",
      "GRP (Polyester resin, glass fiber reinforced) mould pressing enclosure",
      "Modular structure with independent contacts",
      "Hundreds of combinations available",
    ],
    specifications: {
      explosionProtection: "IEC Ex(IEC), ATEX(CENELEC,EN), China Ex(GB)",
      hazardousArea: "Zone 1 and Zone 2",
      enclosure: "GRP (Polyester resin, glass fiber reinforced) mould pressing",
      structure: "Modular structure",
      contacts: "Independent contact pairs",
    },
    price: "4,500",
    originalPrice: "5,200",
    availability: "IN STOCK",
    sku: "AK01-SM-EX",
    href: "/products/p10",
  },
  {
    id: 11,
    category: "Control Button Switch",
    title: "AK02-Series Explosion-proof Flash Buzzer",
    description:
      "The AK02-Series explosion-proof flash buzzer is designed to provide audible and visual alerts in hazardous areas with explosive gases or dust.",
    image: "/product/p11-1.png?height=200&width=250",
    gallery: ["/product/p11-2.png?height=300&width=300"],
    features: [
      "Explosion protection - China Ex(GB)",
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "Type de and Type e protection",
      "Threaded integrated structure",
      "Easy installation and maintenance",
    ],
    specifications: {
      explosionProtection: "China Ex(GB)",
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      protectionType: "Type de and Type e",
      structure: "Threaded integrated structure",
      installation: "Easy installation and maintenance",
    },
    price: "6,800",
    originalPrice: "7,800",
    availability: "IN STOCK",
    sku: "AK02-FB-EX",
    href: "/products/p11",
  },
  {
    id: 12,
    category: "Control Button Switch",
    title: "AK03-Series Explosion-proof Limit Switches",
    description:
      "The AK03-Series explosion-proof limit switches are designed for precise position detection in hazardous environments with explosive gases or dust.",
    image: "/product/p12-1.png?height=200&width=250",
    gallery: [

      "/product/p12-1.png?height=300&width=300",
    ],
    features: [
      "Explosion protection - China Ex(GB)",
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "Six models: B, B1, H, I, N and Z",
      "High mechanical strength",
      "Accurate response and long service life",
    ],
    specifications: {
      explosionProtection: "China Ex(GB)",
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      models: "Six models: B, B1, H, I, N and Z",
      strength: "High mechanical strength",
      response: "Accurate response",
    },
    price: "8,200",
    originalPrice: "9,500",
    availability: "IN STOCK",
    sku: "AK03-LS-EX",
    href: "/products/p12",
  },
  {
    id: 13,
    category: "Control Button Switch",
    title: "AK04-Series Explosion-proof Illumination Control Switches",
    description:
      "The AK04-Series explosion-proof illumination control switches are designed for safely controlling lighting circuits in hazardous areas.",
    image: "/product/p13-1.png?height=200&width=250",
    gallery: ["/product/p13-2.png?height=300&width=300"],

    features: [
      "Explosion protection - IEC Ex(IEC), ATEX(CENELEC,EN), China Ex(GB)",
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "Two functions: Power ON-OFF switch and bidirectional control switch",
      "Reliable performance and easy operation",
      "High durability",
    ],
    specifications: {
      explosionProtection: "IEC Ex(IEC), ATEX(CENELEC,EN), China Ex(GB)",
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      functions: "Power ON-OFF switch and bidirectional control switch",
      performance: "Reliable performance",
      operation: "Easy operation",
    },
    price: "5,800",
    originalPrice: "6,800",
    availability: "IN STOCK",
    sku: "AK04-ICS-EX",
    href: "/products/p13",
  },
  {
    id: 14,
    category: "Control Button Switch",
    title: "AK05-Series Explosion-proof Illumination Control Switches",
    description:
      "The AK05-Series explosion-proof illumination control switches are designed for safe and efficient lighting control in hazardous environments.",
    image: "/product/p14-1.png?height=200&width=250",
    gallery: ["/product/p14-2.png?height=300&width=300"],

    features: [
      "Explosion protection - China Ex(GB)",
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "Dependable performance",
      "Robust construction",
      "Easy installation",
    ],
    specifications: {
      explosionProtection: "China Ex(GB)",
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      performance: "Dependable performance",
      construction: "Robust construction",
      installation: "Easy installation",
    },
    price: "5,200",
    originalPrice: "6,000",
    availability: "IN STOCK",
    sku: "AK05-ICS-EX",
    href: "/products/p14",
  },
  {
    id: 15,
    category: "Control Button Switch",
    title: "AK06-Series Explosion-proof Signal Lamp (Board back cable type)",
    description:
      "The AK06-Series explosion-proof signal lamp (board back cable type) is designed to provide clear visual signaling in hazardous areas with explosive gases or dust.",
    image: "/product/p15-1.png?height=200&width=250",
    gallery: ["/product/p15-2.png?height=300&width=300", "/product/p15-3.png?height=300&width=300"],

    features: [
      "Explosion protection - IEC Ex(IEC), ATEX(CENELEC,EN), China Ex(GB)",
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "Five colors: red, green, yellow, blue and white",
      "Panel cable type installation method",
      "Quick disassembly structure for easy maintenance",
    ],
    specifications: {
      explosionProtection: "IEC Ex(IEC), ATEX(CENELEC,EN), China Ex(GB)",
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      colors: "Five colors: red, green, yellow, blue and white",
      installation: "Panel cable type, quick disassembly structure",
      maintenance: "Easy installation and maintenance",
    },
    price: "3,800",
    originalPrice: "4,500",
    availability: "IN STOCK",
    sku: "AK06-SL-EX",
    href: "/products/p15",
  },
  {
    id: 16,
    category: "Control Button Switch",
    title: "AK07-Series Explosion-proof Button/Switch (Board back cable type)",
    description:
      "The AK07-Series explosion-proof button/switch (board back cable type) is designed for safe control operations in hazardous environments with flammable gases or dust.",
    image: "/product/p16.png?height=200&width=250",
    gallery: ["/product/p16-2.png?height=300&width=300", "/product/p16-3.png?height=300&width=300"],

    features: [
      "Explosion protection - IEC Ex(IEC), ATEX(CENELEC,EN), China Ex(GB)",
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "Multiple head types: two-position, three-position",
      "Three-position left and right self-resetting",
      "Panel cable type installation method",
    ],
    specifications: {
      explosionProtection: "IEC Ex(IEC), ATEX(CENELEC,EN), China Ex(GB)",
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      headTypes: "Two-position, three-position, three-position left and right self-resetting",
      installation: "Panel cable type, quick disassembly structure",
      maintenance: "Easy installation and maintenance",
    },
    price: "4,200",
    originalPrice: "4,900",
    availability: "IN STOCK",
    sku: "AK07-BS-EX",
    href: "/products/p16",
  },
  {
    id: 17,
    category: "Control Button Switch",
    title: "AK08-Series Explosion-proof Button/Switch (Board back cable type)",
    description:
      "The AK08-Series explosion-proof button/switch (board back cable type) is designed for safe and reliable operation in hazardous areas containing explosive gases or dust.",
    image: "/product/p17-1.png?height=200&width=250",
    gallery: ["/product/p17-2.png?height=300&width=300", "/product/p17-3.png?height=300&width=300"],

    features: [
      "Explosion protection - IEC Ex(IEC), ATEX(CENELEC,EN), China Ex(GB)",
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "Three head types: φ38, φ65, Square operating handle",
      "φ65 operating handle with padlock available",
      "Panel cable type installation method",
    ],
    specifications: {
      explosionProtection: "IEC Ex(IEC), ATEX(CENELEC,EN), China Ex(GB)",
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      headTypes:
        "φ38 operating handle (S1), φ65 operating handle (S2, padlock available), Square operating handle (S3)",
      installation: "Panel cable type, quick disassembly structure",
      maintenance: "Easy installation and maintenance",
    },
    price: "4,800",
    originalPrice: "5,600",
    availability: "IN STOCK",
    sku: "AK08-BS-EX",
    href: "/products/p17",
  },
  {
    id: 18,
    category: "Control Button Switch",
    title: "AK09-Series Explosion-proof Button With Signal Lamp (Board back cable type)",
    description:
      "The AK09-Series explosion-proof button with signal lamp (board back cable type) is designed for dual-function control and visual indication in hazardous environments.",
    image: "/product/p18-1.png?height=200&width=250",
    gallery: ["/product/p18-2.png?height=300&width=300", "/product/p18-3.png?height=300&width=300"],

    features: [
      "Explosion protection - IEC Ex(IEC), ATEX(CENELEC,EN), China Ex(GB)",
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "Five colors: red, green, yellow, blue and white",
      "Integrated signal lamp for status feedback",
      "Panel cable type installation method",
    ],
    specifications: {
      explosionProtection: "IEC Ex(IEC), ATEX(CENELEC,EN), China Ex(GB)",
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      colors: "Five colors: red, green, yellow, blue and white",
      installation: "Panel cable type, quick disassembly structure",
      maintenance: "Easy installation and maintenance",
    },
    price: "5,200",
    originalPrice: "6,100",
    availability: "IN STOCK",
    sku: "AK09-BSL-EX",
    href: "/products/p18",
  },
  {
    id: 19,
    category: "Control Button Switch",
    title: "AK10-Series Explosion-proof Button/Switch (Board back cable type)",
    description:
      "The AK10-Series explosion-proof button/switch (board back cable type) is designed for safe and efficient control operations in hazardous environments.",
    image: "/product/p19-1.png?height=200&width=250",
    gallery: ["/product/p19-2.png?height=300&width=300", "/product/p19-3.png?height=300&width=300"],

    features: [
      "Explosion protection - IEC Ex(IEC), ATEX(CENELEC,EN), China Ex(GB)",
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "Five head types including emergency stop button",
      "Mushroom head button with self-reset and key options",
      "Optional protective covers available",
    ],
    specifications: {
      explosionProtection: "IEC Ex(IEC), ATEX(CENELEC,EN), China Ex(GB)",
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      headTypes:
        "Standard button, double heads button, emergency stop button (rotate to reset), mushroom head button (self-reset), mushroom head with key",
      protectiveCovers: "Optional for emergency stop and mushroom head buttons",
      installation: "Panel cable type, quick disassembly structure",
    },
    price: "5,800",
    originalPrice: "6,800",
    availability: "IN STOCK",
    sku: "AK10-BS-EX",
    href: "/products/p19",
  },
  {
    id: 20,
    category: "Control Button Switch",
    title: "AK11-Series Explosion-proof Signal Lamp (Board back type)",
    description:
      "The AK11-Series explosion-proof signal lamp (board back type) is designed to deliver clear visual status indication in hazardous environments.",
    image: "/product/p20-1.png?height=200&width=250",
    gallery: ["/product/p20-2.png?height=300&width=300", "/product/p20-3.png?height=300&width=300"],
    features: [
      "Explosion protection - IEC Ex(IEC), ATEX(CENELEC,EN), China Ex(GB)",
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "Five colors: red, green, yellow, blue and white",
      "Two installation methods: rail mounted and board back type",
      "Quick disassembly structure",
    ],
    specifications: {
      explosionProtection: "IEC Ex(IEC), ATEX(CENELEC,EN), China Ex(GB)",
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      colors: "Five colors: red, green, yellow, blue and white",
      installationMethods: "Rail mounted type and board back type",
      railMounted: "Contact is installed on rail",
      boardBack: "Contact is installed behind the cover, quick disassembly structure",
    },
    price: "3,500",
    originalPrice: "4,200",
    availability: "IN STOCK",
    sku: "AK11-SL-EX",
    href: "/products/p20",
  },
  {
    id: 21,
    category: "Control Button Switch",
    title: "AK12-Series Explosion-proof Button/Switch (Board back type)",
    description:
      "The AK12-Series explosion-proof button/switch (board back type) is built for reliable control in hazardous areas containing flammable gases or dust.",
    image: "/product/p21-1.png?height=200&width=250",
    gallery: ["/product/p21-2.png?height=300&width=300"],
    features: [
      "Explosion protection - IEC Ex(IEC), ATEX(CENELEC,EN), China Ex(GB)",
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "Five colors: red, green, yellow, blue and white",
      "Two installation methods: rail mounted and board back type",
      "Quick disassembly structure",
    ],
    specifications: {
      explosionProtection: "IEC Ex(IEC), ATEX(CENELEC,EN), China Ex(GB)",
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      colors: "Five colors: red, green, yellow, blue and white",
      installationMethods: "Rail mounted type and board back type",
      railMounted: "Contact is installed on rail",
      boardBack: "Contact is installed behind the cover, quick disassembly structure",
    },
    price: "4,100",
    originalPrice: "4,800",
    availability: "IN STOCK",
    sku: "AK12-BS-EX",
    href: "/products/p21",
  },
  {
    id: 22,
    category: "Control Button Switch",
    title: "AK13-Series Explosion-proof Button/Switch (Board back type)",
    description:
      "The AK13-Series explosion-proof button/switch (board back type) is designed for safe and reliable control operations in hazardous environments.",
    image: "/product/p22-1.png?height=200&width=250",
    gallery: ["/product/p22-2.png?height=300&width=300", "/product/p22-3.png?height=300&width=300"],
    features: [
      "Explosion protection - IEC Ex(IEC), ATEX(CENELEC,EN), China Ex(GB)",
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "Five colors: red, green, yellow, blue and white",
      "Two installation methods: rail mounted and board back type",
      "Streamlined wiring and installation",
    ],
    specifications: {
      explosionProtection: "IEC Ex(IEC), ATEX(CENELEC,EN), China Ex(GB)",
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      colors: "Five colors: red, green, yellow, blue and white",
      installationMethods: "Rail mounted type and board back type",
      railMounted: "Contact is installed on rail",
      boardBack: "Contact is installed behind the cover, quick disassembly structure",
    },
    price: "4,300",
    originalPrice: "5,000",
    availability: "IN STOCK",
    sku: "AK13-BS-EX",
    href: "/products/p22",
  },
  {
    id: 23,
    category: "Control Button Switch",
    title: "AK14-Series Explosion-proof Button/Switch (Board back type)",
    description:
      "The AK14-Series explosion-proof button/switch (board back type) is engineered for safe and dependable control functions in hazardous areas with explosive gases or dust.",
    image: "/product/p23-1.png?height=200&width=250",
    gallery: ["/product/p23-2.png?height=300&width=300", "/product/p23-3.png?height=300&width=300"],
    features: [
      "Explosion protection - IEC Ex(IEC), ATEX(CENELEC,EN), China Ex(GB)",
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "Five head types including emergency stop button",
      "Optional protective covers for emergency stop buttons",
      "Two installation methods: rail mounted and board back type",
    ],
    specifications: {
      explosionProtection: "IEC Ex(IEC), ATEX(CENELEC,EN), China Ex(GB)",
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      headTypes:
        "Standard button, double heads button, emergency stop button (rotate to reset), mushroom head button (self-reset), mushroom head with key",
      protectiveCovers: "Optional for emergency stop and mushroom head buttons",
      installationMethods: "Rail mounted type and board back type",
      railMounted: "Contact is installed on rail",
      boardBack: "Contact is installed behind the cover, quick disassembly structure",
    },
    price: "5,500",
    originalPrice: "6,400",
    availability: "IN STOCK",
    sku: "AK14-BS-EX",
    href: "/products/p23",
  },
  {
    id: 24,
    category: "Control Button Switch",
    title: "AK15-Series Explosion-proof Button With Signal Lamp (Board back type)",
    description:
      "The AK15-Series explosion-proof button with signal lamp (board back type) combines control and visual indication in one compact unit for hazardous environments.",
    image: "/product/p24-1.png?height=200&width=250",
    gallery: ["/product/p24-2.png?height=300&width=300", "/product/p24-3.png?height=300&width=300"],
    features: [
      "Explosion protection - IEC Ex(IEC), ATEX(CENELEC,EN), China Ex(GB)",
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "Five colors: red, green, yellow, blue and white",
      "Integrated signal lamp for clear status feedback",
      "Two installation methods: rail mounted and board back type",
    ],
    specifications: {
      explosionProtection: "IEC Ex(IEC), ATEX(CENELEC,EN), China Ex(GB)",
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      colors: "Five colors: red, green, yellow, blue and white",
      installationMethods: "Rail mounted type and board back type",
      railMounted: "Contact is installed on rail",
      boardBack: "Contact is installed behind the cover, quick disassembly structure",
    },
    price: "4,900",
    originalPrice: "5,700",
    availability: "IN STOCK",
    sku: "AK15-BSL-EX",
    href: "/products/p24",
  },
  {
    id: 25,
    category: "Control Button Switch",
    title: "AK16-Series Explosion-proof Switch Module",
    description:
      "The AK16-Series explosion-proof switch module is designed for reliable circuit control in hazardous environments with explosive gases or dust.",
    image: "/product/p25-1.png?height=200&width=250",
    gallery: ["/product/p25-2.png?height=300&width=300"],
    features: [
      "Explosion protection - IEC Ex(IEC), ATEX(CENELEC,EN), China Ex(GB)",
      "Zone 1 and Zone 2 application",
      "Customized engineering plastics enclosure",
      "High strength and corrosion resistance",
      "Acceleration mechanism with spring energy storage",
    ],
    specifications: {
      explosionProtection: "IEC Ex(IEC), ATEX(CENELEC,EN), China Ex(GB)",
      hazardousArea: "Zone 1 and Zone 2",
      enclosure: "Customized engineering plastics enclosure with high strength and corrosion resistance",
      mechanism: "Acceleration mechanism with spring energy storage and instantaneous release",
      usage: "Must be used in an increased-safety enclosure, cannot be used alone in explosive gas environment",
    },
    price: "3,200",
    originalPrice: "3,800",
    availability: "IN STOCK",
    sku: "AK16-SM-EX",
    href: "/products/p25",
  },
  {
    id: 26,
    category: "Control Button Switch",
    title: "AK17-Series Explosion-proof Control Switches",
    description:
      "The AK17-Series explosion-proof control switches are built for safe and reliable operation in hazardous areas containing flammable gases or dust.",
    image: "/product/p26-1.png?height=200&width=250",
    gallery: ["/product/p26-2.png?height=300&width=300"],

    features: [
      "Explosion protection - China Ex(GB)",
      "Zone 1 and Zone 2 application",
      "GRP (Polyester resin, glass fiber reinforced) molded enclosure",
      "Rail mounting structure available upon request",
      "Easy installation and maintenance",
    ],
    specifications: {
      explosionProtection: "China Ex(GB)",
      hazardousArea: "Zone 1 and Zone 2",
      enclosure: "GRP (Polyester resin, glass fiber reinforced) molded enclosure",
      mounting: "Rail mounting structure upon request",
      installation: "Easy installation and maintenance",
    },
    price: "2,800",
    originalPrice: "3,300",
    availability: "IN STOCK",
    sku: "AK17-CS-EX",
    href: "/products/p26",
  },
  {
    id: 27,
    category: "Control Button Switch",
    title: "AK18-Series Control Switch",
    description:
      "The AK18-Series control switch is designed for reliable manual control of electrical circuits in industrial environments.",
    image: "/product/p27-1.png?height=200&width=250",
    gallery: ["/product/p27-2.png?height=300&width=300"],
    features: [
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "Locking type and rebound type available",
      "Multiple pole configurations: 2P, 3P, 4P, 6P",
      "Explosion protection: Ex db IIB",
      "Must be used with explosion-proof box",
    ],
    specifications: {
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      types: "Locking type and rebound type",
      poles: "2P, 3P, 4P, 6P",
      explosionProtection: "Ex db IIB",
      usage: "Product shall be used with explosion-proof box",
    },
    price: "2,200",
    originalPrice: "2,600",
    availability: "IN STOCK",
    sku: "AK18-CS",
    href: "/products/p27",
  },
  {
    id: 28,
    category: "Control Button Switch",
    title: "AK19-Series Control Switch",
    description:
      "The AK19-Series control switch is a rotary-type switch designed for dependable circuit control in industrial applications.",
    image: "/product/p28-1.png?height=200&width=250",
    gallery: ["/product/p28-2.png?height=300&width=300"],

    features: [
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "Locking and rebounding type",
      "Variety of function switches for selection",
      "Multiple pole configurations: 2P, 3P, 4P, 6P",
      "Explosion-proof type: Ex db IIB, Ex db IIC",
    ],
    specifications: {
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      types: "Locking and rebounding type",
      functions: "A variety of function switches for selection",
      poles: "2P, 3P, 4P, 6P",
      explosionProtection: "Ex db IIB, Ex db IIC",
      usage: "This series of switches must be used in flameproof type enclosures",
    },
    price: "2,500",
    originalPrice: "2,900",
    availability: "IN STOCK",
    sku: "AK19-CS",
    href: "/products/p28",
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
    id: 30,
    category: "Control Button Switch",
    title: "AK21-Series Explosion-proof Signal Lamp",
    description:
      "The AK21-Series explosion-proof signal lamp provides clear and reliable visual indication in hazardous areas containing explosive gases or dust.",
    image: "/product/p30-1.png?height=200&width=250",
    gallery: ["/product/p30-2.png?height=300&width=300"],

    features: [
      "Explosion protection - IEC Ex(IEC), ATEX(CENELEC,EN), China Ex(GB)",
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "LED indicator light with 5 colors",
      "High visibility and durability",
      "Continuous operation in demanding environments",
    ],
    specifications: {
      explosionProtection: "IEC Ex(IEC), ATEX(CENELEC,EN), China Ex(GB)",
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      technology: "LED indicator light",
      colors: "5 colors: red, green, yellow, blue, white",
      performance: "High visibility and durability",
    },
    price: "3,400",
    originalPrice: "4,000",
    availability: "IN STOCK",
    sku: "AK21-SL-EX",
    href: "/products/p30",
  },
  {
    id: 31,
    category: "Control Button Switch",
    title: "AK22-Series Explosion-proof Signal Lamp",
    description:
      "The AK22-Series explosion-proof signal lamp is designed to deliver bright and reliable visual alerts in hazardous areas with flammable gases or dust.",
    image: "/product/p31-1.png?height=200&width=250",
    gallery: ["/product/p31-2.png?height=300&width=300"],

    features: [
      "Explosion protection - China Ex(GB)",
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "LED indicator light with 5 colors",
      "Built for durability and high visibility",
      "Effective performance in harsh industrial conditions",
    ],
    specifications: {
      explosionProtection: "China Ex(GB)",
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      technology: "LED indicator light",
      colors: "5 colors: red, green, yellow, blue, white",
      durability: "Built for durability and high visibility",
    },
    price: "3,100",
    originalPrice: "3,600",
    availability: "IN STOCK",
    sku: "AK22-SL-EX",
    href: "/products/p31",
  },
  {
    id: 32,
    category: "Control Button Switch",
    title: "AK23-Series Explosion-proof Switch Button",
    description:
      "The AK23-Series explosion-proof switch button is designed for safe and efficient control operations in hazardous environments.",
    image: "/product/p32-1.png?height=200&width=250",
    gallery: ["/product/p32-2.png?height=300&width=300"],

    features: [
      "Explosion protection - IEC Ex(IEC), ATEX(CENELEC,EN), China Ex(GB)",
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "Aluminum alloy or stainless steel enclosure",
      "Self-cleaning function of the contact",
      "Can add up to 4 sets of modules",
    ],
    specifications: {
      explosionProtection: "IEC Ex(IEC), ATEX(CENELEC,EN), China Ex(GB)",
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      enclosure: "Aluminum alloy or stainless steel",
      contactModule: "Wiping action with self-cleaning function",
      modules: "Can add up to 4 sets of modules according to user requirements",
      structure: "Buckle structure for convenient disassembly and assembly",
      usage: "Product shall be used with flame-proof box",
    },
    price: "4,600",
    originalPrice: "5,400",
    availability: "IN STOCK",
    sku: "AK23-SB-EX",
    href: "/products/p32",
  },
  {
    id: 33,
    category: "Control Button Switch",
    title: "AK24-Series Explosion-proof Control Button With Signal Lamp",
    description:
      "The AK24-Series explosion-proof control button with signal lamp combines control functionality and visual indication in a single compact unit.",
    image: "/product/p33-1.png?height=200&width=250",
    gallery: ["/product/p33-2.png?height=300&width=300"],

    features: [
      "Explosion protection - IEC Ex(IEC), ATEX(CENELEC,EN), China Ex(GB)",
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "Self-cleaning function of the contact",
      "Can add 3-6 sets of modules according to requirements",
      "Adjustable angle after assembly for easy wiring",
    ],
    specifications: {
      explosionProtection: "IEC Ex(IEC), ATEX(CENELEC,EN), China Ex(GB)",
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      contactModule: "Wiping action with self-cleaning function",
      modules: "Can add 3-6 sets of modules according to user requirements",
      structure: "Buckle structure for convenient disassembly and assembly",
      adjustment: "Contact module can adjust angle after assembled for easy and beautiful wiring",
      usage: "Product shall be used with flame-proof box",
    },
    price: "5,400",
    originalPrice: "6,300",
    availability: "IN STOCK",
    sku: "AK24-CBL-EX",
    href: "/products/p33",
  },
  {
    id: 34,
    category: "Control Button Switch",
    title: "AK25-Series Explosion-proof Switch Button",
    description:
      "The AK25-Series explosion-proof switch button is designed for safe and reliable manual control in hazardous environments with explosive gases or dust.",
    image: "/product/p34-1.png?height=200&width=250",
    gallery: [

      "/product/p34-1.png?height=300&width=300",
    ],
    features: [
      "Explosion protection - IEC Ex(IEC), ATEX(CENELEC,EN), China Ex(GB)",
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "6 operating modes including emergency stop button",
      "Self-cleaning function of the contact",
      "Can add 3-6 sets of modules according to requirements",
    ],
    specifications: {
      explosionProtection: "IEC Ex(IEC), ATEX(CENELEC,EN), China Ex(GB)",
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      operatingModes:
        "6 modes: standard button, emergency stop button with self-locking, mushroom button, knob switch, mushroom button with lock-key, knob switch with key",
      contactModule: "Wiping action with self-cleaning function",
      modules: "Can add 3-6 sets of modules according to user requirements",
      structure: "Buckle structure for convenient disassembly and assembly",
      adjustment: "Contact module can adjust angle after assembled for easy and beautiful wiring",
      protectiveCover: "Protective cover for emergency stop button (rotate to reset) is optional",
      usage: "Product shall be used with flame-proof box",
    },
    price: "6,200",
    originalPrice: "7,200",
    availability: "IN STOCK",
    sku: "AK25-SB-EX",
    href: "/products/p34",
  },

  // Coupler Category (2 products)
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
    id: 36,
    category: "Coupler",
    title: "TS02-Series Explosion-proof Coupler",
    description:
      "The TS02-Series explosion-proof couplers are designed for safe and efficient electrical connections in hazardous environments.",
    image: "/product/p36-1.png?height=200&width=250",
    gallery: [

      "/product/p36-1.png?height=300&width=300",
    ],
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
      wiring: "Cable wiring",
    },
    price: "9,200",
    originalPrice: "10,800",
    availability: "IN STOCK",
    sku: "TS02-CP-EX",
    href: "/products/p36",
  },

  // Distribution Cabinets Category (1 product)
  {
    id: 37,
    category: "Distribution Cabinets",
    title: "TB-Series Explosion-proof Pressurized Distribution Cabinets",
    description:
      "The TB-Series explosion-proof pressurized distribution cabinets are designed for safe power distribution in hazardous locations.",
    image: "/product/p37-1.png?height=200&width=250",
    gallery: ["/product/p37-2.png?height=300&width=300"],
    features: [
      "Explosion protection - China Ex(GB)",
      "Type px: Zone 1, Zone 2, Zone 21 and Zone 22",
      "Type pz: Zone 2, Zone 21 and Zone 22",
      "Explosion-proof type: pxIIC, pz IIC, pD IIIC",
      "Protection type: ventilation type, compensation type",
      "Multiple structure types available",
    ],
    specifications: {
      explosionProtection: "China Ex(GB)",
      typePx: "Zone 1, Zone 2, Zone 21 and Zone 22",
      typePz: "Zone 2, Zone 21 and Zone 22",
      explosionProofType: "pxIIC, pz IIC, pD IIIC",
      protectionType: "Ventilation type, compensation type",
      structureTypes:
        "Box type, piano table type, integrated cabinet type, upper and lower cabinet type, left and right cabinet type",
      controlDevice: "Positive pressure explosion-proof control device with one key operation mode",
      installation: "Concealed mounting, wall mounting and ceiling mounting",
    },
    price: "85,000",
    originalPrice: "95,000",
    availability: "IN STOCK",
    sku: "TB-DC-EX",
    href: "/products/p37",
  },
  // EV Charger Category (5 products)

  {
    id: 38,
    category: "EV Charger",
    title: "RACE 7kW AC EV Charger (AC EV CHARGER)",
    description:
      "This product is engineered to meet professional and industrial standards. It features a streamlined design with a minimalist, high-tech aesthetic. Equipped with ambient lighting and a content-customizable projector, it enhances the user interaction experience.",
    image: "/product/38.jpeg?height=200&width=250",
    // gallery: ["/product/38-2.png?height=300&width=300"],
    features: ["CE Certified", "Charging Power: 7 kW"],
    href: "/products/p38",

  },
  {
    id: 39,
    category: "EV Charger",
    title: "SHELL 7kW AC EV Charger (AC EV CHARGER)",
    description:
      "This AC EV charger supports both wall-mounted and pedestal (column) installations. It is compatible with 99% of new energy vehicle models and features smart control via a mobile app along with a built-in data management platform. Customization options are available, making it ideal for residential parking spaces and small-scale charging stations.",
    image: "/product/39.jpeg?height=200&width=250",
    // gallery: ["/product/39-2.png?height=300&width=300"],
    features: ["CE Certified", "Charging Power: 7 kW"],
    href: "/products/p39",

  },
  {
    id: 40,
    category: "EV Charger",
    title: "30/40kW Fast DC EV Charger (Mini Series DC Charger)",
    description:
      "This fast DC EV charger supports both wall-mounted and pedestal installation options. Compact in size and modern in appearance, it is available in two versions—one for residential use and one for commercial operation. It offers intelligent charging control and full-process monitoring, with support for app-based control and backend data management.",
    image: "/product/40.jpeg?height=200&width=250",
    // gallery: ["/product/40-2.png?height=300&width=300"],
    features: ["CE Certified", "Charging Power: 30/40 kW"],
    href: "/products/p40",

  },
  {
    id: 41,
    category: "EV Charger",
    title: "120–240kW Standard Series DC EV Charger (Standard Series DC Charger)",
    description:
      "This high-power DC EV charger features a space-saving tri-chamber structure design. It delivers ultra-fast charging with peak efficiency reaching up to 96%, helping to reduce energy consumption and charging costs. The charger also supports modular operation management, effectively lowering station operating expenses.",
    image: "/product/41.jpeg?height=200&width=250",
    // gallery: ["/product/41-2.png?height=300&width=300"],
    features: ["CE Certified", "Charging Power: 120/160/200/240 kW"],
    href: "/products/p41",

  },
  {
    id: 42,
    category: "EV Charger",
    title: "Integrated 60/80kW DC EV Charger (Standard Series DC Charger)",
    description:
      "This integrated DC EV charger utilizes advanced digital current balancing technology. It offers flexible configuration with options for single-connector or dual-connector setups. In single-connector mode, it delivers maximum power output, while in dual-connector mode, it intelligently distributes power between two vehicles. Multiple safety protection features ensure stable and reliable operation. ",
    image: "/product/42.jpeg?height=200&width=250",
    // gallery: ["/product/42-2.png?height=300&width=300"],
    features: ["CE Certified", "Charging Power: 60 kW / 80 kW"],
    href: "/products/p42",

  },
 {
    id: 136,
    category: "EV Charger",
    title: "320kW–640kW Split-Type DC EV Charger (Prime Series DC Charger)",
    description:
      "This split-type DC EV charger offers configurable output power, with a maximum output voltage of up to 1000V. Designed with a separate host-terminal structure, it utilizes an intelligent power distribution strategy to efficiently manage charging across 2 to 8 terminals. The remote installation of the host unit minimizes on-site noise, enhancing the overall user experience. ",
    image: "/product/136.jpeg?height=200&width=250",
    // gallery: ["/product/42-2.png?height=300&width=300"],
    features: ["CE Certified", "Charging Power Options: 320 kW / 480 kW / 640 kW "],
    href: "/products/p136",

  },
   {
    id: 137,
    category: "EV Charger",
    title: "600kW Terminal for Split-Type DC Super EV Charger  (Prime Series DC Charger)",
    description:
      "At peak power, a 10-minute charge can provide enough energy for approximately 800 km of driving. This high-performance terminal is ideal for rapid charging needs in diverse scenarios, including transportation hubs, commercial charging stations, and other applications requiring fast vehicle turnaround.  ",
    image: "/product/137.jpeg?height=200&width=250",
    // gallery: ["/product/42-2.png?height=300&width=300"],
    features: ["CE Certified", "Charging Power: 600 Kw "],
    href: "/products/p137",

  },
   {
    id: 138,
    category: "EV Charger",
    title: "30/40kW GB/T Charging Module  (Power Module)",
    description:
      "Utilizing advanced power electronics control technology, this module offers a wide constant power voltage range, high efficiency, and a high power factor. It features a compact, high power density design with efficient heat dissipation and ultra-low electromagnetic radiation and interference, making it well-suited for a wide range of charging applications. ",
    image: "/product/138.jpeg?height=200&width=250",
    // gallery: ["/product/42-2.png?height=300&width=300"],
    features: ["Charging Power: 30/40kW"],
    href: "/products/p138",

  },
   {
    id: 139,
    category: "EV Charger",
    title: "30/40kW EU Charging Module  (Standard Series DC Charger)",
    description:
      "Equipped with SiC MOSFET and SiC SBD technology, this module achieves peak efficiency exceeding 96.5%. It features a wide constant power voltage range, high power factor, and high power density. With efficient thermal management and ultra-low electromagnetic radiation and interference, it is optimized for a variety of fast-charging applications. ",
    image: "/product/139.jpeg?height=200&width=250",
    // gallery: ["/product/42-2.png?height=300&width=300"],
    features: ["Charging Power: 30/40kW"],
    href: "/products/p139",

  },
  // {
  //   id: 38,
  //   category: "EV Charger",
  //   title: "XPD Forklift Battery Charger",
  //   description:
  //     "The XPD Series forklift battery charger is a high-efficiency, fully automatic charging solution designed for lead-acid and other industrial battery types.",
  //   image: "/product/p38-1.jpg?height=200&width=250",
  //   gallery: ["/product/p38-2.png?height=300&width=300",
  //     "/product/p38-3.png?height=300&width=300",
  //     "/product/p38-4.png?height=300&width=300"],

  //   features: [
  //     "Nominal DC voltage: 24/36/48/72/80V",
  //     "Input AC voltage: 120±20% or 220±25%",
  //     "OEM/ODM Service available",
  //     "Silicon-controlled rectifier (SCR) technology",
  //     "Optimizes battery life and performance",
  //   ],
  //   specifications: {
  //     nominalDCVoltage: "24/36/48/72/80V",
  //     inputACVoltage: "120±20% or 220±25%",
  //     oemOdmService: "Yes",
  //     applications: "Forklift battery",
  //     technology: "Silicon-controlled rectifier (SCR)",
  //   },
  //   price: "45,000",
  //   originalPrice: "52,000",
  //   availability: "IN STOCK",
  //   sku: "XPD-FC-01",
  //   href: "/products/p38",
  // },
  // {
  //   id: 39,
  //   category: "EV Charger",
  //   title: "BPD Lithium Battery Charger",
  //   description:
  //     "The BPD Series lithium battery charger is a smart charging solution designed for high-efficiency energy transfer and long battery life.",
  //   image: "/product/p39-1.jpg?height=200&width=250",
  //   gallery: ["/product/p39-2.png?height=300&width=300"],

  //   features: [
  //     "Supports various lithium battery voltages",
  //     "Smart multi-stage charging (CC/CV)",
  //     "Built-in protections (OV, OC, temp, reverse)",
  //     "LED or digital status indicators",
  //     "High efficiency and compact design",
  //     "Optional CAN/RS485 communication",
  //   ],
  //   specifications: {
  //     batterySupport: "Various lithium battery voltages",
  //     chargingType: "Smart multi-stage charging (CC/CV)",
  //     protections: "OV, OC, temp, reverse",
  //     indicators: "LED or digital status indicators",
  //     design: "High efficiency and compact design",
  //     communication: "Optional CAN/RS485 communication",
  //   },
  //   price: "28,000",
  //   originalPrice: "32,000",
  //   availability: "IN STOCK",
  //   sku: "BPD-LC-01",
  //   href: "/products/p39",
  // },
  // {
  //   id: 40,
  //   category: "EV Charger",
  //   title: "ACP Lithium Battery Charger",
  //   description:
  //     "The ACP Series lithium battery charger is designed for reliable, high-efficiency charging in demanding environments.",
  //   image: "/product/p40-1.jpg?height=200&width=250",
  //   gallery: ["/product/p40-1.png?height=300&width=300"],

  //   features: [
  //     "Compatible with multiple lithium battery types and voltages",
  //     "Intelligent charging with automatic voltage/current regulation",
  //     "Multi-stage charging process (pre-charge, constant current, constant voltage)",
  //     "Comprehensive protection features",
  //     "Compact, durable design suitable for harsh environments",
  //     "High energy efficiency with low heat generation",
  //   ],
  //   specifications: {
  //     compatibility: "Multiple lithium battery types and voltages",
  //     chargingControl: "Intelligent charging with automatic voltage/current regulation",
  //     chargingProcess: "Multi-stage: pre-charge, constant current, constant voltage",
  //     protection: "Overvoltage, overcurrent, short circuit, over temperature, reverse polarity",
  //     design: "Compact, durable design suitable for harsh environments",
  //     efficiency: "High energy efficiency with low heat generation",
  //   },
  //   price: "32,000",
  //   originalPrice: "37,000",
  //   availability: "IN STOCK",
  //   sku: "ACP-LC-01",
  //   href: "/products/p40",
  // },
  // {
  //   id: 41,
  //   category: "EV Charger",
  //   title: "ACR Lithium Battery Charger",
  //   description:
  //     "The ACR Series lithium battery charger offers efficient and reliable charging for a wide range of lithium battery systems.",
  //   image: "/product/p41-1.jpg?height=200&width=250",
  //   gallery: ["/product/p41-2.png?height=300&width=300"],

  //   features: [
  //     "Compatible with various lithium battery chemistries",
  //     "Advanced charging control for voltage and current precision",
  //     "Multi-stage charging: pre-charge, constant current, constant voltage",
  //     "Built-in protection: overvoltage, overcurrent, over temperature",
  //     "High efficiency with minimal heat output",
  //     "Rugged, compact design for industrial and mobile use",
  //   ],
  //   specifications: {
  //     compatibility: "Various lithium battery chemistries",
  //     chargingControl: "Advanced charging control for voltage and current precision",
  //     chargingStages: "Pre-charge, constant current, constant voltage",
  //     protection: "Overvoltage, overcurrent, over temperature, short circuit, reverse polarity",
  //     efficiency: "High efficiency with minimal heat output",
  //     design: "Rugged, compact design for industrial and mobile use",
  //   },
  //   price: "35,000",
  //   originalPrice: "40,000",
  //   availability: "IN STOCK",
  //   sku: "ACR-LC-01",
  //   href: "/products/p41",
  // },
  // {
  //   id: 42,
  //   category: "EV Charger",
  //   title: "BCR DC Fast Charger",
  //   description:
  //     "The BCR DC fast charger is designed to deliver rapid, high-power charging for electric vehicles in public and commercial settings.",
  //   image: "/product/p42-1.jpg?height=200&width=250",
  //   gallery: ["/product/p42-2.png?height=300&width=300", "/product/p42-3.png?height=300&width=300"],

  //   features: [
  //     "High-power output for rapid EV charging",
  //     "Compatible with major charging standards",
  //     "Smart charging control with dynamic power allocation",
  //     "Built-in safety features: overvoltage, overcurrent, short circuit",
  //     "User-friendly interface with touchscreen or LED indicators",
  //     "Remote monitoring and management via OCPP",
  //   ],
  //   specifications: {
  //     output: "High-power output for rapid EV charging",
  //     compatibility: "Compatible with major charging standards",
  //     chargingControl: "Smart charging control with dynamic power allocation",
  //     safetyFeatures: "Overvoltage, overcurrent, short circuit, overheating protection",
  //     interface: "User-friendly interface with touchscreen or LED indicators",
  //     inputACVoltage: "305~520VAC",
  //     oemOdmService: "Yes, customized service available",
  //     certificates: "CE, EN61000, IEC60146",
  //     applications: "Highway, parking, station, workplace, fleet",
  //   },
  //   price: "185,000",
  //   originalPrice: "210,000",
  //   availability: "IN STOCK",
  //   sku: "BCR-DC-01",
  //   href: "/products/p42",
  // },

  // Distribution Box Category (12 products)
  {
    id: 43,
    category: "Distribution Box",
    title: "NEX51-Series Explosion Protected Distribution Box",
    description:
      "The NEX51-Series integrates a flameproof chamber with an increased safety chamber, featuring modular structure for flexible power distribution needs.",
    image: "/product/p43-1.png?height=200&width=250",
    gallery: ["/product/p43-2.png?height=300&width=300"],

    features: [
      "Explosion protection - IECEx (IEC), ATEX (CENELEC, EN), China Ex (GB)",
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "Flameproof chamber with increased safety chamber design",
      "Front panel handle operation for main and branch switches",
      "Modular structure supports flexible assembly",
      "Pre-installed internal wiring using terminals and components",
    ],
    specifications: {
      explosionProtection: "IECEx (IEC), ATEX (CENELEC, EN), China Ex (GB)",
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      design: "Flameproof chamber with increased safety chamber",
      operation: "Front panel handle operation",
      structure: "Modular structure for flexible assembly",
      wiring: "Pre-installed internal wiring using terminals and components",
      circuitBreaker: "Freeze-resistant metal handle with padlock capability",
      cableEntry: "Sealed with stop plugs by default, optional cable entry devices available",
    },
    price: "25,000",
    originalPrice: "29,000",
    availability: "IN STOCK",
    sku: "NEX51-DB-EX",
    href: "/products/p43",
  },
  {
    id: 44,
    category: "Distribution Box",
    title: "PAX03-Series Explosion-proof Electrical Apparatus",
    description:
      "The PAX03-Series is engineered for safe and reliable power distribution in hazardous environments with robust flameproof and increased safety design.",
    image: "/product/p44.jpeg?height=200&width=250",
    // gallery: ["/product/p15-2.png?height=300&width=300"],

    features: [
      "Explosion protection - IECEx (IEC), ATEX (CENELEC, EN), China Ex (GB)",
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "Flameproof and increased safety chambers combination",
      "Flexible modular configuration",
      "Various circuit protection and control components",
      "Wide range of industrial applications",
    ],
    specifications: {
      explosionProtection: "IECEx (IEC), ATEX (CENELEC, EN), China Ex (GB)",
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      installationMethod: "Z – Floor-mounted (stand type), (Blank) – Wall-mounted",
      outletDirection: "D – Top outlet, X – Bottom outlet",
      inletDirection: "D – Top inlet, X – Bottom inlet",
      mainSwitch: "K – Equipped with main switch, (Blank) – Without main switch",
      customization: "Modular configuration for various applications",
    },
    price: "32,000",
    originalPrice: "37,000",
    availability: "IN STOCK",
    sku: "PAX03-EA-EX",
    href: "/products/p44",
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
    id: 46,
    category: "Distribution Box",
    title: "PAX27-Series Explosion-proof Electrical Apparatus",
    description:
      "The PAX27-Series is built for reliable operation in hazardous areas with flammable gas or dust, featuring durable flameproof and increased safety designs.",
    image: "/product/p46.png?height=200&width=250",
    // gallery: ["/product/p15-2.png?height=300&width=300"],

    features: [
      "Explosion protection - IECEx (IEC), ATEX (CENELEC, EN), China Ex (GB)",
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "Durable enclosure combining flameproof and increased safety designs",
      "Various protective and control components support",
      "Modular, user-friendly structure",
      "Flexible configuration to meet specific industrial needs",
    ],
    specifications: {
      explosionProtection: "IECEx (IEC), ATEX (CENELEC, EN), China Ex (GB)",
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      functionCodes:
        "P – Power Distribution Box, B – Circuit Breaker Unit, Q – Magnetic Starter, C – Control Panel, J – Junction Box",
      ratedCurrent: "Specify rated current (A)",
      ratedVoltage: "Specify rated voltage (V)",
      customization: "Flexible configuration for specific industrial needs",
    },
    price: "30,000",
    originalPrice: "35,000",
    availability: "IN STOCK",
    sku: "PAX27-EA-EX",
    href: "/products/p46",
  },
  {
    id: 47,
    category: "Distribution Box",
    title: "PAX06-Series Explosion-proof Electrical Apparatus (Magnetic Starter)",
    description:
      "The PAX06-Series is designed for safe motor control in hazardous environments, integrating flameproof and increased safety features.",
    image: "/product/p47.png?height=200&width=250",
    // gallery: ["/product/p15-2.png?height=300&width=300"],

    features: [
      "Explosion protection - IECEx (IEC), ATEX (CENELEC, EN), China Ex (GB)",
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "Integrated flameproof and increased safety features",
      "Compact, modular design for easy customization",
      "Various control and protection components",
      "Reliable motor control in explosive atmospheres",
    ],
    specifications: {
      explosionProtection: "IECEx (IEC), ATEX (CENELEC, EN), China Ex (GB)",
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      controlTypes: "S – Direct motor control, N – Reversible motor control, Y – Star-delta motor control",
      thermalRelay: "Thermal relay setting current (A)",
      circuitBreaker: "Circuit breaker rated current (A) (Optional)",
      motorPower: "Motor power rating (kW)",
      customization: "Compact, modular design allows easy customization",
    },
    price: "22,000",
    originalPrice: "26,000",
    availability: "IN STOCK",
    sku: "PAX06-MS-EX",
    href: "/products/p47",
  },
  {
    id: 48,
    category: "Distribution Box",
    title: "PAX01-Series Explosion-proof Enclosures",
    description:
      "PAX01-Series Explosion-proof Enclosures are designed to safely house electrical components in hazardous environments with flameproof structure.",
    image: "/product/p48.png?height=200&width=250",
    // gallery: ["/product/p15-2.png?height=300&width=300"],

    features: [
      "Explosion protection - IECEx (IEC), ATEX (CENELEC, EN), China Ex (GB)",
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "Flameproof structure for reliable protection",
      "Protection against explosive gases and dust",
      "Durable construction for harsh environments",
      "Various enclosure sizes available",
    ],
    specifications: {
      explosionProtection: "IECEx (IEC), ATEX (CENELEC, EN), China Ex (GB)",
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      structure: "Flameproof structure",
      protection: "Against explosive gases and dust",
      enclosureCode: "Various enclosure codes available",
      designNumber: "Multiple design numbers for different configurations",
    },
    price: "15,000",
    originalPrice: "18,000",
    availability: "IN STOCK",
    sku: "PAX01-EN-EX",
    href: "/products/p48",
  },
  {
    id: 49,
    category: "Distribution Box",
    title: "PAX30-Series Explosion-proof Enclosures",
    description:
      "The PAX30-Series are designed to safely house electrical and control components in hazardous environments with durable flameproof construction.",
    image: "/product/p49.png?height=200&width=250",
    // gallery: ["/product/p15-2.png?height=300&width=300"],

    features: [
      "Explosion protection - IECEx (IEC), ATEX (CENELEC, EN)",
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "Durable flameproof construction",
      "Reliable protection against ignition sources",
      "Modular configurations for versatile applications",
      "Various functional types available",
    ],
    specifications: {
      explosionProtection: "IECEx (IEC), ATEX (CENELEC, EN)",
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      functionalTypes:
        "M(D) – Distribution Box, K – Circuit Breaker, C – Control Box, J – Junction Box, Q – Motor Starter",
      protectionTypes: "H – Ex d IIB + H₂ (Optional), B – Ex d IIB (Default)",
      enclosureCode: "Specifies the type and size of the enclosure",
      designNumber: "Product series or design version",
    },
    price: "18,000",
    originalPrice: "21,000",
    availability: "IN STOCK",
    sku: "PAX30-EN-EX",
    href: "/products/p49",
  },
  {
    id: 50,
    category: "Distribution Box",
    title: "NEX52-S Series Explosion-proof Illumination (Power) Distribution Box",
    description:
      "The NEX52-S Series is designed for safe power and lighting distribution in hazardous environments with modular configuration.",
    image: "/product/p50.png?height=200&width=250",
    // gallery: ["/product/p15-2.png?height=300&width=300"],

    features: [
      "Explosion protection - China Ex (GB)",
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "Flameproof and increased safety structure",
      "Modular configuration for various protection components",
      "Freeze-resistant metal handles",
      "Optional cable glands and customizable rain shade",
    ],
    specifications: {
      explosionProtection: "China Ex (GB)",
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      structure: "Flameproof and increased safety structure",
      indicatorLights: "Z – Number of indicator lights (Optional)",
      specialRequirements: "T – Special requirements (as per drawing or user specifications)",
      outletConfiguration: "D – Top outlet, X – Bottom outlet",
      inletConfiguration: "D – Top inlet, X – Bottom inlet",
      mainSwitch: "K – Main switch with rated current (Optional)",
      leakageProtection: "L – Leakage protection (Optional)",
      enclosure: "Glass Reinforced Polyester (GRP)",
    },
    price: "20,000",
    originalPrice: "23,000",
    availability: "IN STOCK",
    sku: "NEX52-IDB-EX",
    href: "/products/p50",
  },
  {
    id: 51,
    category: "Distribution Box",
    title: "NEX53-g Series Explosion-proof Illumination (Power) Distribution Box",
    description:
      "The NEX53 Series is built for reliable lighting and power distribution in explosive gas or dust environments with robust flameproof enclosure.",
    image: "/product/p51.png?height=200&width=250",
    // gallery: ["/product/p15-2.png?height=300&width=300"],

    features: [
      "Explosion protection - China Ex (GB)",
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "Robust flameproof enclosure",
      "Flexible configurations with various protective components",
      "User-friendly operation",
      "Optional cable entry devices and customizable rain shade",
    ],
    specifications: {
      explosionProtection: "China Ex (GB)",
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      enclosureMaterial: "Stainless steel",
      leakageProtection: "L – Leakage protection (optional)",
      branchQuantity: "Configurable branch quantity",
      branchCurrent: "Branch current rating",
      mainSwitch: "K – Main switch / Rated current (optional)",
      inletDirection: "D – Top inlet, X – Bottom inlet",
      outletDirection: "D – Top outlet, X – Bottom outlet",
      indicators: "Z – Indicator / Number of indicators (optional)",
    },
    price: "22,500",
    originalPrice: "26,000",
    availability: "IN STOCK",
    sku: "NEX53-IDB-EX",
    href: "/products/p51",
  },
  {
    id: 52,
    category: "Distribution Box",
    title: "PAX32 Series Explosion-proof Pressurized Control Systems",
    description:
      "The PAX32 Series are designed to safely operate electrical equipment in hazardous areas by maintaining protective overpressure within the enclosure.",
    image: "/product/p52.png?height=200&width=250",
    // gallery: [

    //   "/product/p15-1.png?height=300&width=300",
    // ],
    features: [
      "Explosion protection - IECEx (IEC), ATEX (CENELEC, EN), China Ex (GB)",
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "Automatic pressure monitoring and control",
      "Prevents ingress of explosive gases or dust",
      "Easy integration with various industrial applications",
      "Reliable protection with overpressure system",
    ],
    specifications: {
      explosionProtection: "IECEx (IEC), ATEX (CENELEC, EN), China Ex (GB)",
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      protectionTypes: "Ex db IIB, Ex db IIB + H₂, Ex tb IIIC",
      installationMethod: "G – Wall-mounted type, L – Floor-standing type",
      inletDirection: "D – Top inlet, X – Bottom inlet",
      components: "Potentiometers, Switches, Indicator Lights, Ammeters/Voltmeters, Push Buttons",
      pressureSystem: "Automatic pressure monitoring and control to prevent ingress of explosive gases or dust",
    },
    price: "65,000",
    originalPrice: "75,000",
    availability: "IN STOCK",
    sku: "PAX32-PCS-EX",
    href: "/products/p52",
  },
  {
    id: 53,
    category: "Distribution Box",
    title: "PAX53-Series Explosion-proof Emergency Power Distribution Box",
    description:
      "The PAX53 Series is designed to provide reliable backup power in hazardous environments with flameproof enclosure and integrated protection components.",
    image: "/product/p53.png?height=200&width=250",
    // gallery: ["/product/p15-2.png?height=300&width=300"],

    features: [
      "Explosion protection - China Ex (GB)",
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "Flameproof enclosure with integrated protection components",
      "Reliable backup power distribution",
      "Modular design allows flexible configuration",
      "Available in multiple KVA ratings",
    ],
    specifications: {
      explosionProtection: "China Ex (GB)",
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      ratedVoltageOptions: "DC 24V, DC 36V",
      ratedPowerOptions: "0.3 kVA, 0.6 kVA",
      application: "Emergency power distribution in hazardous environments",
      design: "Modular design for flexible configuration based on capacity requirements",
    },
    price: "35,000",
    originalPrice: "40,000",
    availability: "IN STOCK",
    sku: "PAX53-EPD-EX",
    href: "/products/p53",
  },
  {
    id: 54,
    category: "Distribution Box",
    title: "PAX05-Series Explosion-proof Electrical Apparatus (Circuit Breaker)",
    description:
      "The PAX05-Series is designed for safe power control in hazardous environments, combining flameproof and increased safety chambers.",
    image: "/product/p54.png?height=200&width=250",
    // gallery: ["/product/p15-2.png?height=300&width=300"],

    features: [
      "Explosion protection - IECEx (IEC), ATEX (CENELEC, EN), China Ex (GB)",
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "Flameproof and increased safety chambers combination",
      "Supports MCBs, MCCBs, and other protective devices",
      "Modular structure with freeze-resistant metal handle",
      "Reliable operation and easy maintenance",
    ],
    specifications: {
      explosionProtection: "IECEx (IEC), ATEX (CENELEC, EN), China Ex (GB)",
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      protectionTypes: "Ex db IIB, Ex db IIB + H₂, Ex tb IIIC",
      installationType: "Z – Stand-mounted type (Optional)",
      leakageProtection: "L – Leakage protection (Optional)",
      ratedCurrent: "Specify the current rating",
      numberOfPoles: "1P, 2P, 3P, or 4P",
      handle: "Freeze-resistant metal handle",
      devices: "Supports MCBs, MCCBs, and other protective devices",
    },
    price: "18,500",
    originalPrice: "21,500",
    availability: "IN STOCK",
    sku: "PAX05-CB-EX",
    href: "/products/p54",
  },

  // Exhaust Fan Category (4 products)
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
    id: 56,
    category: "Exhaust Fan",
    title: "BL02-Series Explosion-proof Exhaust Fan",
    description:
      "The BL02-Series is engineered to safely remove flammable gases, vapors, and fumes from hazardous industrial environments.",
    image: "/product/p56-1.png?height=200&width=250",
    gallery: ["/product/p56-2.png?height=300&width=300", "/product/p56-3.png?height=300&width=300"],
    features: [
      "Explosion protection - China Ex (GB)",
      "Zone 1 and Zone 2 application",
      "Flameproof motor with corrosion-resistant housing",
      "High-performance ventilation in demanding conditions",
      "Composed of explosion-proof motor, fan blade, fan stack, protect grid",
      "Cable wiring connection",
    ],
    specifications: {
      explosionProtection: "China Ex (GB)",
      hazardousArea: "Zone 1 and Zone 2",
      components: "Explosion-proof motor, fan blade, fan stack, protect grid, etc.",
      motor: "Flameproof motor",
      housing: "Corrosion-resistant housing",
      wiring: "Cable wiring",
      performance: "High-performance ventilation in demanding conditions",
    },
    price: "16,500",
    originalPrice: "19,000",
    availability: "IN STOCK",
    sku: "BL02-EF-EX",
    href: "/products/p56",
  },
  {
    id: 57,
    category: "Exhaust Fan",
    title: "BL03-Series Explosion-proof Exhaust Fan (Square)",
    description:
      "The BL03-Series is designed for safe and efficient ventilation in hazardous environments with explosive gas or dust, featuring a square-frame structure.",
    image: "/product/p57-1.png?height=200&width=250",
    gallery: ["/product/p57-2.png?height=300&width=300", "/product/p57-3.png?height=300&width=300", "/product/p57-4.png?height=300&width=300"],

    features: [
      "Explosion protection - China Ex (GB)",
      "Zone 1 and Zone 2 application",
      "Square-frame structure with flameproof motor",
      "Corrosion-resistant materials for long-term durability",
      "Vibration damping device for low running noise",
      "Composed of explosion-proof motor, fan blade, metal frame, shutter",
    ],
    specifications: {
      explosionProtection: "China Ex (GB)",
      hazardousArea: "Zone 1 and Zone 2",
      structure: "Square-frame structure",
      components: "Explosion-proof motor, fan blade, metal frame, shutter, etc.",
      vibrationDamping: "With vibration damping device, low running noise",
      wiring: "Cable wiring",
      materials: "Corrosion-resistant materials",
      airflow: "Stable airflow and long-term durability",
    },
    price: "18,000",
    originalPrice: "21,000",
    availability: "IN STOCK",
    sku: "BL03-EFS-EX",
    href: "/products/p57",
  },
  {
    id: 58,
    category: "Exhaust Fan",
    title: "BL04-Series Explosion-proof Exhaust Fan",
    description:
      "Explosion-proof axial fans designed for safe air and fume extraction in hazardous environments, compliant with ATEX Directive 2014/34/UE.",
    image: "/product/p58-1.png?height=200&width=250",
    gallery: ["/product/p58-2.png?height=300&width=300", "/product/p58-3.png?height=300&width=300"],

    features: [
      "ATEX Directive 2014/34/UE compliant, certified under CESI n°3 ATEX 251",
      "Suitable for Zones 1 and 2, Group II, Category 2",
      "Ex h construction, EPL Gb, max surface temperature T4 (optional T5/T6)",
      "Steel body with epoxy anti-corrosive coating",
      "VO-rated conductive nylon impeller",
      "Exd IIC T4 motor with IP55 protection, class F insulation",
    ],
    specifications: {
      atexCompliance: "ATEX Directive 2014/34/UE, certified under CESI n°3 ATEX 251",
      hazardousArea: "Zones 1 and 2, Group II, Category 2",
      construction: "Ex h construction, EPL Gb",
      maxSurfaceTemp: "T4 (optional T5/T6)",
      body: "Steel body with epoxy anti-corrosive coating",
      impeller: "VO-rated conductive nylon impeller",
      motor: "Exd IIC T4 motor with IP55 protection, class F insulation",
      airflow: "Reversible airflow",
      maxAirTemp: "40°C",
      standards: "EN 80079-36/37, EN 14986",
    },
    price: "22,000",
    originalPrice: "25,500",
    availability: "IN STOCK",
    sku: "BL04-EF-ATEX",
    href: "/products/p58",
  },
  // Lights Category (9 products)
  {
    id: 59,
    category: "Lights",
    title: "BLB01-Series Explosion-proof LED Lightings",
    description:
      "The BLB01-Series Explosion-proof LED Lightings are engineered for high-efficiency illumination in hazardous gas and dust environments. Featuring a durable flameproof housing and energy-saving LED technology, they ensure long-lasting and safe performance. Their compact design supports easy installation across various industrial settings.",
    image: "/product/p59-1.png?height=200&width=250",
    gallery: ["/product/p59-2.png?height=300&width=300", "/product/p59-3.png?height=300&width=300"],

    features: [
      "Explosion protection - IECEx (IEC), ATEX (CENELEC, EN), China Ex (GB)",
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "LED power: 20W, 25W, 30W, 45W, 50W, 60W, 70W, 85W, 100W, 120W",
      "Four enclosure types: 30, 60, 70, 120",
      "Separate light source, electrical and wiring cavities",
      "Emergency unit can be equipped upon request",
    ],
    specifications: {
      explosionProtection: "IECEx (IEC), ATEX (CENELEC, EN), China Ex (GB)",
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      lightSource: "LED: 20W, 25W, 30W, 45W, 50W, 60W, 70W, 85W, 100W, 120W",
      enclosureTypes: "Four enclosure types: 30, 60, 70, 120",
      outline: "Type I and Type II, with bigger beam angle",
      cavities: "Light source cavity, electrical cavity and wiring cavity are separate",
      installation: "Wireless connection between lamp body and installation accessories",
      emergency: "Emergency unit can be equipped upon request",
      protectiveGrid: "Protective grid can be equipped upon request",
    },
    price: "8,500",
    originalPrice: "10,000",
    availability: "IN STOCK",
    sku: "BLB01-LED-EX",
    href: "/products/p59",
  },
  {
    id: 60,
    category: "Lights",
    title: "BLB02-Series Explosion-proof LED Lightings",
    description:
      "The BLB02-Series Explosion-proof LED Lightings are designed for safe and efficient illumination in hazardous environments where flammable gases or dust are present. Engineered with a robust, corrosion-resistant housing and high-performance LED technology, they deliver long-lasting, energy-efficient lighting with minimal maintenance.",
    image: "/product/p60-1.png?height=200&width=250",
    gallery: ["/product/p60-2.png?height=300&width=300"],

    features: [
      "Explosion protection - IECEx (IEC), ATEX (CENELEC, EN), China Ex (GB)",
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "Spotlight LED: 130-240W, Floodlight LED: 130-280W",
      "Two enclosure types: Spot light, Floodlight",
      "Separate light source, electrical and wiring cavities",
      "Adjustable bracket angle",
    ],
    specifications: {
      explosionProtection: "IECEx (IEC), ATEX (CENELEC, EN), China Ex (GB)",
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      spotlightLED: "130, 150, 160, 180, 190, 200, 220, 240W",
      floodlightLED: "130, 150, 160, 180, 190, 200, 220, 240, 260, 280W",
      enclosureTypes: "Two enclosure types: Spot light, Floodlight",
      cavities: "Light source cavity, electrical cavity and wiring cavity are separate",
      bracket: "The angle of bracket is adjustable",
      protectiveGrid: "Protective grid can be equipped upon request",
    },
    price: "12,000",
    originalPrice: "14,000",
    availability: "IN STOCK",
    sku: "BLB02-LED-EX",
    href: "/products/p60",
  },
  {
    id: 61,
    category: "Lights",
    title: "BLB03-Series Explosion-proof LED Lightings",
    description:
      "The BLB03-Series Explosion-proof LED Lightings offer high-efficiency illumination specifically engineered for hazardous and demanding industrial environments. Built with a durable, flameproof aluminum alloy housing and advanced thermal management, they ensure optimal performance and longevity.",
    image: "/product/p61-1.png?height=200&width=250",
    gallery: ["/product/p61-2.png?height=300&width=300", "/product/p61-3.png?height=300&width=300"],

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
    href: "/products/p61",
  },
  {
    id: 62,
    category: "Lights",
    title: "BLB04-Series Explosion-proof LED Lightings",
    description:
      "The BLB04-Series Explosion-proof LED Lightings are designed for reliable illumination in hazardous areas with the presence of flammable gases or combustible dust. Featuring a compact, flameproof structure and high-efficiency LED technology, they offer energy savings and long service life.",
    image: "/product/p62-1.png?height=200&width=250",
    gallery: ["/product/p62-2.png?height=300&width=300", "/product/p62-3.png?height=300&width=300"],

    features: [
      "Explosion protection - China Ex (GB)",
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "LED power: 20W, 30W, 40W, 50W, 60W",
      "Compact, flameproof structure",
      "Wing cover with hinge and anti-loose screw",
      "Convenient for installation and maintenance",
    ],
    specifications: {
      explosionProtection: "China Ex (GB)",
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      lightSource: "LED: 20W, 30W, 40W, 50W, 60W",
      structure: "Compact, flameproof structure",
      cover: "Wing cover with hinge and anti-loose screw",
      maintenance: "Convenient for installation and maintenance",
    },
    price: "6,500",
    originalPrice: "7,500",
    availability: "IN STOCK",
    sku: "BLB04-LED-EX",
    href: "/products/p62",
  },
  {
    id: 63,
    category: "Lights",
    title: "BLB05-Series Explosion-proof LED Floodlights",
    description:
      "The BLB05-Series Explosion-proof LED Floodlights are engineered for powerful and safe area lighting in hazardous zones with explosive gas or dust. Featuring a rugged flameproof aluminum housing and high-lumen LED technology, they deliver wide beam coverage with excellent energy efficiency.",
    image: "/product/p63-1.png?height=200&width=250",
    gallery: ["/product/p63-2.png?height=300&width=300", "/product/p63-3.png?height=300&width=300"],

    features: [
      "Explosion protection - IECEx (IEC), ATEX (CENELEC, EN), China Ex (GB)",
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "LED power: 50W, 90W, 100W, 150W, 200W, 225W, 250W",
      "Three enclosure types: 90, 150, 250",
      "Separate light source, electrical and wiring cavities",
      "Mounting bracket with dentation crank set",
    ],
    specifications: {
      explosionProtection: "IECEx (IEC), ATEX (CENELEC, EN), China Ex (GB)",
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      lightSource: "LED: 50W, 90W, 100W, 150W, 200W, 225W, 250W",
      enclosureTypes: "Three enclosure types: 90, 150, 250",
      cavities: "Light source cavity, electrical cavity and wiring cavity are separate",
      bracket: "The mounting bracket with dentation crank set, which can adjust the lamp beam angle",
    },
    price: "15,000",
    originalPrice: "17,500",
    availability: "IN STOCK",
    sku: "BLB05-FL-EX",
    href: "/products/p63",
  },
  {
    id: 64,
    category: "Lights",
    title: "BLB06-Series Explosion-proof LED Floodlights",
    description:
      "The BLB06-Series Explosion-proof LED Floodlights are designed for high-intensity illumination in hazardous environments where flammable gases or dust may be present. Built with a robust, corrosion-resistant aluminum alloy housing and advanced LED technology, they provide exceptional brightness, long lifespan, and low maintenance.",
    image: "/product/p64-1.png?height=200&width=250",
    gallery: ["/product/p64-2.png?height=300&width=300", "/product/p64-3.png?height=300&width=300"],

    features: [
      "Explosion protection - China Ex (GB)",
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "LED power: 75W, 90W, 100W, 135W, 150W, 180W, 200W, 225W",
      "Separate light source, electrical and wiring cavities",
      "Mounting bracket has a toothed crank",
      "Adjustable irradiation angle of the lamp",
    ],
    specifications: {
      explosionProtection: "China Ex (GB)",
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      lightSource: "LED: 75W, 90W, 100W, 135W, 150W, 180W, 200W, 225W",
      cavities: "Light source cavity, electrical cavity and wiring cavity are separate",
      bracket: "The mounting bracket has a toothed crank, which can adjust the irradiation angle of the lamp",
    },
    price: "13,500",
    originalPrice: "15,800",
    availability: "IN STOCK",
    sku: "BLB06-FL-EX",
    href: "/products/p64",
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
    id: 66,
    category: "Lights",
    title: "BLB08-Series Explosion-proof Cleanliness Fluorescent Light",
    description:
      "The BLB08-Series Explosion-proof Cleanliness Fluorescent Light is designed for cleanroom environments that require both high hygiene standards and explosion protection. Constructed with a smooth, anti-corrosive housing and sealed to prevent dust accumulation, it ensures reliable and glare-free illumination.",
    image: "/product/p66-1.png?height=200&width=250",
    gallery: ["/product/p66-2.png?height=300&width=300", "/product/p66-3.png?height=300&width=300"],

    features: [
      "Explosion protection - China Ex (GB)",
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "Fluorescent tube: 14W, 18W, 28W, 36W; LED module: 9W, 18W",
      "Installation method: ceiling type, embedded type",
      "Two types of enclosures for each type",
      "Smooth, anti-corrosive housing",
    ],
    specifications: {
      explosionProtection: "China Ex (GB)",
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      fluorescentTube: "14W, 18W, 28W, 36W",
      ledModule: "9W, 18W",
      installationMethod: "Ceiling type, embedded type",
      enclosureTypes: "Two types of enclosures for each type (ceiling & embedded)",
      t8Fluorescent: "18W X1, 18W X2; 36W X1, 36W X2; 28W X1, 28W X2",
      t8LED: "9W X1, 9W X2; 18W X1, 18W X2",
    },
    price: "5,800",
    originalPrice: "6,800",
    availability: "IN STOCK",
    sku: "BLB08-CFL-EX",
    href: "/products/p66",
  },
  {
    id: 67,
    category: "Lights",
    title: "BLB09-Series Explosion-proof Fluorescent Light (Emergency)",
    description:
      "The BLB09-Series Explosion-proof Fluorescent Light (Emergency) is engineered to provide reliable lighting and automatic emergency backup in hazardous environments. Featuring a flameproof, corrosion-resistant housing and built-in emergency battery system, it ensures continuous illumination during power failures.",
    image: "/product/p67-1.png?height=200&width=250",
    gallery: ["/product/p67-2.png?height=300&width=300", "/product/p67-3.png?height=300&width=300"],

    features: [
      "Explosion protection - IECEx (IEC), ATEX (CENELEC, EN), China Ex (GB)",
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "T8 Fluorescent tube: 18W, 36W; LED module: 10W, 20W, 30W, 36W",
      "Two types of enclosures",
      "Central lock, built-in explosion-proof interlock switch",
      "Emergency unit can be equipped upon request",
    ],
    specifications: {
      explosionProtection: "IECEx (IEC), ATEX (CENELEC, EN), China Ex (GB)",
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      t8Fluorescent: "18W, 36W",
      ledModule: "10W, 20W, 30W, 36W",
      enclosure1: "T8 Fluorescent lamp (18W X1, 18W X2); LED module (10W X1, 20W X1, 30W X1, 36W X1)",
      enclosure2: "T8 Fluorescent lamp (36W X1, 36W X2); LED module (20W X2, 30W X2, 36W X2)",
      ledStructure: "LED module is external power supply, LED light source and LED power are in separate structure",
      centralLock: "Central lock, built-in explosion-proof interlock switch",
      emergency: "Emergency unit can be equipped upon request",
    },
    price: "9,500",
    originalPrice: "11,200",
    availability: "IN STOCK",
    sku: "BLB09-FLE-EX",
    href: "/products/p67",
  },
  {
    id: 68,
    category: "Lights",
    title: "BLB10-Series Explosion-proof Light Fittings for Fluorescent Lamp",
    description:
      "The BLB10-Series Explosion-proof Light Fittings for Fluorescent Lamps are designed for safe and efficient lighting in hazardous areas with explosive gas or dust. Built with a flameproof and anti-corrosive housing, they support various fluorescent tube configurations for uniform and stable illumination.",
    image: "/product/p68-1.png?height=200&width=250",
    gallery: ["/product/p68-2.png?height=300&width=300", "/product/p68-3.png?height=300&width=300"],

    features: [
      "Explosion protection - IECEx (IEC), ATEX (CENELEC, EN), China Ex (GB)",
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "T8 Fluorescent tube: 18W, 36W",
      "T8 LED tube: 9W, 18W",
      "Flameproof and anti-corrosive housing",
      "Various fluorescent tube configurations",
    ],
    specifications: {
      explosionProtection: "IECEx (IEC), ATEX (CENELEC, EN), China Ex (GB)",
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      fluorescentTube: "T8 Fluorescent tube: 18W, 36W",
      ledTube: "T8 LED tube: 9W, 18W",
      housing: "Flameproof and anti-corrosive housing",
      applications: "Petrochemical plants, warehouses, and industrial production facilities",
    },
    price: "6,800",
    originalPrice: "8,000",
    availability: "IN STOCK",
    sku: "BLB10-LFF-EX",
    href: "/products/p68",
  },
  {
    id: 69,
    category: "Lights",
    title: "BLB11-Series Explosion-proof Fluorescent Light",
    description:
      "The BLB11-Series Explosion-proof Fluorescent Lights are designed for use in hazardous environments requiring consistent and safe illumination. Featuring a durable, flameproof housing and high-transparency diffuser, they ensure efficient light distribution while withstanding harsh industrial conditions.",
    image: "/product/p69-1.png?height=200&width=250",
    gallery: ["/product/p69-2.png?height=300&width=300", "/product/p69-3.png?height=300&width=300"],

    features: [
      "Explosion protection - China Ex (GB)",
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "Fluorescent tube: 18W, 36W; LED tube: 9W, 18W",
      "Two types of enclosures",
      "T8/T5 fluorescent tube configurations",
      "High-transparency diffuser",
    ],
    specifications: {
      explosionProtection: "China Ex (GB)",
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      fluorescentTube: "18W, 36W",
      ledTube: "9W, 18W",
      enclosureTypes: "Two types of enclosures",
      t8t5Fluorescent: "18W X1, 18W X2, 18W X3; 36W X1, 36W X2, 36W X3, 28W X1, 28W X2, 28W X3",
      t8LED: "9W X1, 9W X2, 9W X3; 18W X1, 18W X2, 18W X3",
    },
    price: "7,200",
    originalPrice: "8,500",
    availability: "IN STOCK",
    sku: "BLB11-FL-EX",
    href: "/products/p69",
  },
  {
    id: 70,
    category: "Lights",
    title: "BLB12-Series Explosion-proof Light Fittings for Fluorescent Lamp",
    description:
      "The BLB12-Series Explosion-proof Light Fittings for Fluorescent Lamps are built to provide safe and reliable lighting in environments with explosive gas or dust. Featuring a robust flameproof design and corrosion-resistant construction, these fittings accommodate multiple fluorescent lamp types.",
    image: "/product/p70-1.png?height=200&width=250",
    gallery: ["/product/p70-2.png?height=300&width=300", "/product/p70-3.png?height=300&width=300"],

    features: [
      "Explosion protection - China Ex (GB)",
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "T8 fluorescent tube: 18W, 36W; T8 LED tube: 9W, 18W",
      "Four types of enclosures",
      "Special structure, quick lamp tube replacement",
      "Emergency unit can be equipped upon request",
    ],
    specifications: {
      explosionProtection: "China Ex (GB)",
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      fluorescentTube: "T8 fluorescent tube: 18W, 36W",
      ledTube: "T8 LED tube: 9W, 18W",
      enclosureTypes: "Four types of enclosures",
      configurations:
        "Fluorescent tube 18W X1, LED module 9W X1; Fluorescent tube 18W X2, LED module 9W X2; Fluorescent tube 36W X1, LED module 18W X1; Fluorescent tube 36W X2, LED module 18W X2",
      emergency: "Emergency unit can be equipped upon request. Single tube working for emergency",
    },
    price: "8,000",
    originalPrice: "9,400",
    availability: "IN STOCK",
    sku: "BLB12-LFF-EX",
    href: "/products/p70",
  },
  {
    id: 71,
    category: "Lights",
    title: "BLB13-Series Explosion-proof LED Lamp Tube",
    description:
      "The BLB13-Series Explosion-proof LED Lamp Tube is designed to deliver energy-efficient and safe lighting in hazardous environments where flammable gases or dust are present. Encased in a durable, flameproof tube structure, it offers excellent thermal performance, long lifespan, and consistent illumination.",
    image: "/product/p71-1.png?height=200&width=250",
    gallery: ["/product/p71-2.png?height=300&width=300"],

    features: [
      "Explosion protection - China Ex (GB)",
      "Zone 1 and Zone 2 application",
      "LED light tube, flame-proof structure",
      "Wide voltage input, constant power output",
      "Default color temperature 5000K, customizable to 2700~3500K",
      "Soft light from anti-glare design",
    ],
    specifications: {
      explosionProtection: "China Ex (GB)",
      hazardousArea: "Zone 1 and Zone 2",
      structure: "LED light tube, flame-proof structure",
      voltage: "Wide voltage input, constant power output",
      protection: "Constant current open circuit, short circuit and other protection functions",
      colorTemperature: "Default 5000K, customizable to 2700~3500K",
      design: "Soft light from anti-glare design",
      usage:
        "Product must used with increased safety lamp housing, cannot be used alone in an explosive gas environment",
    },
    price: "3,800",
    originalPrice: "4,500",
    availability: "IN STOCK",
    sku: "BLB13-LT-EX",
    href: "/products/p71",
  },
  {
    id: 72,
    category: "Lights",
    title: "BLB14-Series Explosion-proof Lightings",
    description:
      "The BLB14-Series Explosion-proof Lightings are engineered for reliable illumination in hazardous areas with the presence of explosive gases or combustible dust. Constructed with a rugged, flameproof aluminum alloy housing and advanced lighting technology, they offer high efficiency, durability, and low maintenance.",
    image: "/product/p72-1.png?height=200&width=250",
    gallery: ["/product/p72-2.png?height=300&width=300"],

    features: [
      "Explosion protection - China Ex (GB)",
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "Light source and power (Max. 400W)",
      "Metal halide lamp (HIE), High pressure sodium lamp (HSE), High pressure mercury lamp (HME)",
      "Four enclosure types",
      "Rugged, flameproof aluminum alloy housing",
    ],
    specifications: {
      explosionProtection: "China Ex (GB)",
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      maxPower: "400W",
      lightSources: "Metal halide lamp (HIE), High pressure sodium lamp (HSE), High pressure mercury lamp (HME)",
      enclosureTypes: "Four enclosure types",
      housing: "Rugged, flameproof aluminum alloy housing",
      applications: "Oil & gas facilities, chemical processing plants, and other high-risk industrial sites",
    },
    price: "18,500",
    originalPrice: "21,800",
    availability: "IN STOCK",
    sku: "BLB14-EL-EX",
    href: "/products/p72",
  },
  {
    id: 73,
    category: "Lights",
    title: "BLB15-Series Explosion-proof Lightings",
    description:
      "The BLB15-Series Explosion-proof Lightings are designed to provide safe and efficient illumination in environments where flammable gases or dust may be present. Featuring a robust flameproof structure and high-performance LED or discharge lamp options, they ensure long-lasting operation with minimal maintenance.",
    image: "/product/p73-1.png?height=200&width=250",
    gallery: ["/product/p73-2.png?height=300&width=300", "/product/p73-3.png?height=300&width=300"],

    features: [
      "Explosion protection - China Ex (GB)",
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "Light source and power (Max. 400W)",
      "Metal halide lamp (HIE), High pressure sodium lamp (HSE), High pressure mercury lamp (HME), Compact fluorescent lamp (CFL)",
      "Three enclosure types",
      "Robust flameproof structure",
    ],
    specifications: {
      explosionProtection: "China Ex (GB)",
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      maxPower: "400W",
      lightSources:
        "Metal halide lamp (HIE), High pressure sodium lamp (HSE), High pressure mercury lamp (HME), Compact fluorescent lamp (CFL)",
      enclosureTypes: "Three enclosure types",
      structure: "Robust flameproof structure",
      applications: "Petrochemical plants, offshore platforms, and heavy industrial facilities",
    },
    price: "17,200",
    originalPrice: "20,300",
    availability: "IN STOCK",
    sku: "BLB15-EL-EX",
    href: "/products/p73",
  },
  {
    id: 74,
    category: "Lights",
    title: "BLB16-Series Explosion-proof Floodlights",
    description:
      "The BLB16-Series Explosion-proof Floodlights are built for high-intensity, wide-area illumination in hazardous environments prone to explosive gases or dust. With a rugged flameproof design and high-efficiency light source, they deliver superior brightness, durability, and resistance to harsh conditions.",
    image: "/product/p74-1.png?height=200&width=250",
    gallery: ["/product/p74-2.png?height=300&width=300"],

    features: [
      "Explosion protection - China Ex (GB)",
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "Light source and power (Max. 400W)",
      "Metal halide lamp (HIE), High pressure sodium lamp (HSE)",
      "Light source and ballast are integrated",
      "Irradiation angle of bracket type is adjustable",
    ],
    specifications: {
      explosionProtection: "China Ex (GB)",
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      maxPower: "400W",
      lightSources: "Metal halide lamp (HIE), High pressure sodium lamp (HSE)",
      integration: "The light source and ballast are integrated, open side cover to replace bulb and maintenance",
      bulb: "Without light bulb as default, Philips bulb is recommended",
      bracket: "Irradiation angle of bracket type is adjustable",
      protectiveGrid: "Protective grid can be equipped upon request",
    },
    price: "22,000",
    originalPrice: "25,900",
    availability: "IN STOCK",
    sku: "BLB16-FL-EX",
    href: "/products/p74",
  },
  {
    id: 75,
    category: "Lights",
    title: "BLB17-Series Explosion-proof Audio and Visual Caution Light",
    description:
      "The BLB17-Series Explosion-proof Audio and Visual Caution Light is designed to deliver clear audible and visual alerts in hazardous environments where explosive gases or dust may be present. Featuring a durable flameproof enclosure, high-intensity LED strobe, and loud sounder, it ensures effective warning signals.",
    image: "/product/p75-1.png?height=200&width=250",
    gallery: ["/product/p75-2.png?height=300&width=300"],

    features: [
      "Explosion protection - China Ex (GB)",
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "LED: 5W, 6W",
      "Two types of enclosure: I type and II type",
      "Light color optional: red, blue, yellow, green, etc.",
      "Protective grid can be equipped upon request",
    ],
    specifications: {
      explosionProtection: "China Ex (GB)",
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      lightSource: "LED: 5W, 6W",
      enclosureTypes: "Two types of enclosure: I type and II type",
      lightColors: "Light color optional: red, blue, yellow, green, etc.",
      protectiveGrid: "Protective grid can be equipped upon request",
      applications:
        "Chemical plants, oil refineries, offshore platforms, and other industrial safety-critical applications",
    },
    price: "8,800",
    originalPrice: "10,400",
    availability: "IN STOCK",
    sku: "BLB17-AVCL-EX",
    href: "/products/p75",
  },
  {
    id: 76,
    category: "Lights",
    title: "BLB18-Series Explosion-proof Caution Light",
    description:
      "The BLB18-Series Explosion-proof Caution Light is designed to provide bright, reliable visual alerts in hazardous areas with explosive gas or dust atmospheres. Housed in a robust flameproof enclosure, it features high-intensity LED illumination for enhanced visibility in critical safety zones.",
    image: "/product/p76-1.png?height=200&width=250",
    gallery: ["/product/p76-2.png?height=300&width=300"],

    features: [
      "Explosion protection - China Ex (GB)",
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "Light source and power: 5W",
      "Two types: Flash type and continuous light type",
      "Robust flameproof enclosure",
      "Protective grid can be equipped upon request",
    ],
    specifications: {
      explosionProtection: "China Ex (GB)",
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      lightSource: "5W",
      types: "Two types: Flash type and continuous light type",
      enclosure: "Robust flameproof enclosure",
      protectiveGrid: "Protective grid can be equipped upon request",
      applications: "Petrochemical plants, offshore platforms, and other industrial safety applications",
    },
    price: "5,500",
    originalPrice: "6,500",
    availability: "IN STOCK",
    sku: "BLB18-CL-EX",
    href: "/products/p76",
  },
  {
    id: 77,
    category: "Lights",
    title: "BLB19-Series Explosion-proof Aviation Obstruction Light",
    description:
      "The BLB19-Series Explosion-proof Aviation Obstruction Light is specially designed to mark tall structures in hazardous areas where explosive gases or dust may be present. Featuring a flameproof, weather-resistant enclosure and high-intensity LED beacon, it ensures visibility for aircraft navigation under all environmental conditions.",
    image: "/product/p77-1.png?height=200&width=250",
    gallery: ["/product/p77-2.png?height=300&width=300"],

    features: [
      "Explosion protection - China Ex (GB)",
      "Zone 1, Zone 2, Zone 21 and Zone 22 application",
      "LED light source with low power consumption, high brightness, long life",
      "Automatic light control switch control",
      "Wireless synchronization (GPS) method available",
      "Reliable photo switch, automatically turn on at night and foggy day",
    ],
    specifications: {
      explosionProtection: "China Ex (GB)",
      hazardousArea: "Zone 1, Zone 2, Zone 21 and Zone 22",
      lightSource:
        "LED light source, with low power consumption, high brightness, long life, maintenance-free, or xenon light source",
      control:
        "Use automatic light control switch control, strong reliability, automatically turn on at night and foggy, and automatically turn off during the day",
      synchronization:
        "According to requirements, It can be made into a wireless synchronization (GPS) method to realize synchronous flashing of multiple lamps, or provide a centralized controller",
      photoSwitch:
        "Reliable photo switch, automatically turn on at night and foggy day, automatically turn off at the day time",
      customization:
        "It can be customized for wireless sync-flashing of multiple devices, or controlled by centralized controller",
      applications: "Chimneys, towers, oil rigs, and industrial facilities requiring aviation safety compliance",
    },
    price: "12,500",
    originalPrice: "14,700",
    availability: "IN STOCK",
    sku: "BLB19-AOL-EX",
    href: "/products/p77",
  },
  {
    id: 78,
    category: "Lights",
    title: "BLB20-Series Explosion-proof Emergency Exit Lights",
    description:
      "The BLB-20 Series Explosion-proof Emergency Exit Lights are designed to provide clear and reliable evacuation guidance in hazardous environments with flammable gases or dust. Featuring a flameproof, corrosion-resistant housing and high-visibility LED signage, these lights activate automatically during power failures to ensure safe egress. Suitable for Zone 1 and Zone 2 applications, this series is ideal for chemical plants, oil refineries, and industrial facilities requiring stringent safety compliance.",
    image: "/product/p78-1.png?height=200&width=250",
    gallery: ["/product/p78-2.png?height=300&width=300"],

    features: [
      "Explosion protection - China Ex (GB)",
      "Application in hazardous area - Zone 1 and Zone 2, Zone 21 and Zone 22",
      "Continuous light, with built-in maintenance-free battery pack, automatically charge, and automatically switch to battery power supply when power source cut off or in emergency situation.",
      "LED light source, low power consumption, long services life."
    ],
    specifications: {
      explosionProtection: "China Ex (GB)",
      hazardousArea: "Zone 1 and Zone 2, Zone 21 and Zone 22",
      lightType: "Continuous light",
      battery: "Built-in maintenance-free battery pack, automatically charges and switches in emergencies",
      lightSource: "LED",
      consumption: "Low power consumption, long service life"
    },
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "BLB20-EEL-EX",
    href: "/products/p78"
  },
  {
    id: 79,
    category: "Lights",
    title: "BLB21-Series Explosion-proof Emergency Exit Lights",
    description:
      "The BLB21-Series Explosion-proof Emergency Exit Lights are engineered to deliver dependable emergency egress indication in hazardous areas where explosive gases or dust may exist. Built with a flameproof, impact-resistant enclosure and energy-efficient LED display, they provide clear exit guidance during power outages or emergencies. Ideal for Zone 1 and Zone 2 environments, this series is well-suited for petrochemical plants, offshore platforms, and other high-risk industrial locations.",
    image: "/product/p79-1.png?height=200&width=250",
    gallery: ["/product/p79-2.png?height=300&width=300", "/product/p79-3.png?height=300&width=300"],

    features: [
      "Explosion protection - China Ex (GB)",
      "Application in hazardous area - Zone 1 and Zone 2, Zone 21 and Zone 22",
      "Continuous light, with built-in maintenance-free battery pack, automatically charge, and automatically switch to battery power supply when power source cut off or in emergency situation.",
      "LED light source, low power consumption, long services life."
    ],
    specifications: {
      explosionProtection: "China Ex (GB)",
      hazardousArea: "Zone 1 and Zone 2, Zone 21 and Zone 22",
      lightType: "Continuous light",
      battery: "Built-in maintenance-free battery pack, automatically charges and switches in emergencies",
      lightSource: "LED",
      consumption: "Low power consumption, long service life"
    },
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "BLB21-EEL-EX",
    href: "/products/p79"
  },
  {
    id: 80,
    category: "Lights",
    title: "BLB22-Series Explosion-proof Emergency Exit Lights",
    description:
      "The BLB22-Series Explosion-proof Emergency Exit Lights are designed to ensure clear and reliable exit guidance in hazardous environments with explosive gases or dust. Featuring a robust flameproof enclosure and high-brightness LED indicators, they automatically activate during power failures to support safe evacuation. Suitable for Zone 1 and Zone 2 areas, the BLB22-Series is ideal for use in oil refineries, chemical plants, and industrial safety-critical facilities.",
    image: "/product/p80-1.png?height=200&width=250",
    gallery: ["/product/p80-2.png?height=300&width=300", "/product/p80-3.png?height=300&width=300"],

    features: [
      "Explosion protection - IECEx (IEC), ATEX (CENELEC, EN), China Ex (GB)",
      "Application in hazardous area - Zone 1 and Zone 2, Zone 21 and Zone 22",
      "Continuous light, with built-in maintenance-free battery pack, automatically charging, and automatically switch to battery power supply when power source cut off or in emergency situation.",
      "LED light source, low power consumption, long service life."
    ],
    specifications: {
      explosionProtection: "IECEx (IEC), ATEX (CENELEC, EN), China Ex (GB)",
      hazardousArea: "Zone 1 and Zone 2, Zone 21 and Zone 22",
      lightType: "Continuous light",
      battery: "Built-in maintenance-free battery pack, automatically charges and switches in emergencies",
      lightSource: "LED",
      consumption: "Low power consumption, long service life"
    },
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "BLB22-EEL-EX",
    href: "/products/p80"
  },
  {
    id: 81,
    category: "Lights",
    title: "BLB23-Series Explosion-proof Emergency Lights",
    description:
      "The BLB23- Series Explosion-proof Emergency Lights are designed to provide reliable illumination during power outages in hazardous areas where flammable gases or dust are present. Equipped with a durable flameproof housing and high-efficiency LED light source, they ensure automatic emergency lighting with long service life and low maintenance. Ideal for Zone 1 and Zone 2 environments, this series is perfect for chemical plants, oil and gas facilities, and other industrial applications requiring high safety standards.",
    image: "/product/p81-1.png?height=200&width=250",
    gallery: ["/product/p81-2.png?height=300&width=300"],

    features: [
      "Explosion protection - China Ex (GB)",
      "Application in hazardous area - Zone 1 and Zone 2, Zone 21 and Zone 22",
      "Dedicated emergency unit, built-in maintenance-free battery pack, which is will automatically charged, and automatically switch to battery power supply when power source cut off or in emergency situation.",
      "LED light source, low power consumption, long services life."
    ],
    specifications: {
      explosionProtection: "China Ex (GB)",
      hazardousArea: "Zone 1 and Zone 2, Zone 21 and Zone 22",
      unitType: "Dedicated emergency unit",
      battery: "Built-in maintenance-free battery pack, charges and switches automatically",
      lightSource: "LED",
      consumption: "Low power consumption, long service life"
    },
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "BLB23-EL-EX",
    href: "/products/p81"
  },
  {
    id: 82,
    category: "Lights",
    title: "BLB24-Series Explosion-proof Emergency Lights",
    description:
      "The BLB24-Series Explosion-proof Emergency Lights are designed to deliver dependable lighting during power failures in hazardous environments with explosive gases or dust. Featuring a compact, flameproof structure and energy-efficient LED technology, they provide instant, automatic illumination to support safe evacuation. Suitable for Zone 1 and Zone 2 areas, this series is ideal for use in petrochemical plants, offshore platforms, and other high-risk industrial locations.",
    image: "/product/p82-1.png?height=200&width=250",
    gallery: ["/product/p82-2.png?height=300&width=300", "/product/p82-3.png?height=300&width=300"],

    features: [
      "Explosion protection - China Ex (GB)",
      "Application in hazardous area - Zone 1 and Zone 2, Zone 21 and Zone 22",
      "Emergency special form, built-in maintenance-free battery pack, automatically charging, and automatically switch to battery power supply when power source cut off or in emergency situation.",
      "LED light source, low power consumption, long service life.",
      "With self-checking function per month and per year. The fault will automatically alert with light and sound."
    ],
    specifications: {
      explosionProtection: "China Ex (GB)",
      hazardousArea: "Zone 1 and Zone 2, Zone 21 and Zone 22",
      unitType: "Emergency special form",
      battery: "Built-in maintenance-free battery pack, charges and switches automatically",
      lightSource: "LED",
      features: "Self-checking function, fault alert with light and sound"
    },
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "BLB24-EL-EX",
    href: "/products/p82"
  },
  {
    id: 83,
    category: "Lights",
    title: "BLB25-Series Explosion-proof Ballasts",
    description:
      "The BLB25-Series Explosion-proof Ballasts are engineered to safely regulate electrical current for lighting fixtures in hazardous areas with flammable gases or dust. Housed in a robust flameproof enclosure, they ensure stable performance, extended lamp life, and reliable operation under harsh industrial conditions. Suitable for Zone 1 and Zone 2 applications, the BLB25-Series is ideal for chemical plants, oil refineries, and other explosion-risk environments requiring certified electrical components.",
    image: "/product/p83-1.png?height=200&width=250",
    gallery: ["/product/p83-2.png?height=300&width=300"],

    features: [
      "Explosion protection - China Ex (GB)",
      "Application in hazardous area - Zone 1 and Zone 2, Zone 21 and Zone 22",
      "Light source and power (Max. 400W): Metal halide lamp (HIE), High pressure sodium lamp (HSE), High pressure mercury lamp (HME)",
      "The aluminum alloy enclosure is an explosion-proof threaded structure, with silicone rubber sealing strip, have two types of design.",
      "Inductive ballast."
    ],
    specifications: {
      explosionProtection: "China Ex (GB)",
      hazardousArea: "Zone 1 and Zone 2, Zone 21 and Zone 22",
      lampType: "HIE, HSE, HME",
      maxPower: "400W",
      enclosure: "Explosion-proof threaded aluminum alloy",
      sealing: "Silicone rubber sealing strip",
      type: "Inductive ballast"
    },
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "BLB25-BAL-EX",
    href: "/products/p83"
  },

  {
    id: 84,
    category: "Lights",
    title: "BLB26-Series Explosion-proof Lightings Emergency Units",
    description:
      "The BLB26-Series Explosion-proof Lightings Emergency Units are designed to provide reliable emergency illumination in hazardous environments with explosive gases or dust. Featuring a flameproof, corrosion-resistant enclosure and built-in emergency backup system, they ensure automatic lighting during power outages for enhanced safety. Suitable for Zone 1 and Zone 2 areas, the BLB26-Series is ideal for chemical plants, refineries, and other high-risk industrial facilities.",
    image: "/product/p84-1.png?height=200&width=250",
    gallery: ["/product/p84-2.png?height=300&width=300"],

    features: [
      "Explosion protection - China Ex (GB)",
      "Application in hazardous area - Zone 1 and Zone 2, Zone 21 and Zone 22",
      "Emergency unit power: Metal halide lamp (HIE): Max. 100W, Compact fluorescent lamp (CFL): Max. 55W, LED light: Max. 100W",
      "Must be applied with explosion-proof light fittings.",
      "Normal lighting and emergency lighting dual-purpose. Same light fixture for normal lighting and emergency lighting."
    ],
    specifications: {
      explosionProtection: "China Ex (GB)",
      hazardousArea: "Zone 1 and Zone 2, Zone 21 and Zone 22",
      power: "HIE: Max. 100W, CFL: Max. 55W, LED: Max. 100W",
      compatibility: "Must be used with explosion-proof fittings",
      usage: "Dual-purpose: normal and emergency lighting"
    },
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "BLB26-EMU-EX",
    href: "/products/p84"
  },

  {
    id: 85,
    category: "Lights",
    title: "Explosion Proof Fluorescent/LED Light",
    description:
      "Explosion Proof Fluorescent/LED Lights are designed for use in hazardous areas with flammable gases or dust. These fixtures combine high durability with energy-efficient lighting, making them ideal for industrial environments that require explosion protection and high visibility.",
    image: "/product/p85-1.png?height=200&width=250",
    // gallery: ["/product/p15-2.png?height=300&width=300"],

    features: [
      "Explosion-proof fluorescent/LED lighting solution",
      "Durable and efficient for hazardous environments",
      "Suitable for areas with explosive gases or dust"
    ],
    specifications: {
      type: "Fluorescent/LED",
      application: "Explosion proof",
      environment: "Hazardous areas"
    },
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "EXFL-LED-01",
    href: "/products/p85"
  },

  {
    id: 86,
    category: "Lights",
    title: "Explosion Proof Lighting Fixture MARS-II",
    description:
      "MARS-II is a lighting solution designed for hazardous or industrial applications, offering robust construction and reliable illumination. Suitable for harsh environments requiring certified lighting systems.",
    image: "/product/p86.png?height=200&width=250",
    // gallery: ["/product/p15-2.png?height=300&width=300"],

    features: [
      "Durable industrial-grade lighting",
      "Suitable for hazardous environments",
      "Reliable performance in extreme conditions"
    ],
    specifications: {
      model: "MARS-II",
      application: "Industrial / Hazardous areas",
      construction: "Heavy-duty"
    },
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "MARS-II",
    href: "/products/p86"
  },

  {
    id: 87,
    category: "Lights",
    title: "Mercury Flood Light",
    description:
      "Mercury Flood Lights are designed to provide high-intensity illumination in large outdoor or industrial areas. These lights are suitable for use where bright and widespread lighting is required.",
    image: "/product/p87.png?height=200&width=250",
    // gallery: ["/product/p15-2.png?height=300&width=300"],

    features: [
      "High-intensity mercury lighting",
      "Floodlight design for wide coverage",
      "Ideal for large industrial or outdoor areas"
    ],
    specifications: {
      type: "Mercury",
      lightForm: "Flood Light",
      usage: "Outdoor / Industrial"
    },
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "MERC-FLD-01",
    href: "/products/p87"
  },

  {
    id: 88,
    category: "Lights",
    title: "Explosion Proof Lighting Fixture MARS-I",
    description:
      "MARS-I is a robust lighting fixture tailored for demanding industrial environments. Built to provide consistent illumination under tough conditions, it ensures safety and visibility where it's needed most.",
    image: "/product/p88.png?height=200&width=250",
    // gallery: ["/product/p15-2.png?height=300&width=300"],

    features: [
      "Reliable lighting for industrial use",
      "Rugged and durable design",
      "Suitable for challenging environments"
    ],
    specifications: {
      model: "MARS-I",
      application: "Industrial",
      design: "Durable / Rugged"
    },
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "MARS-I",
    href: "/products/p88"
  },

  {
    id: 89,
    category: "Lights",
    title: "Aviation Obstruction Light",
    description:
      "Aviation Obstruction Lights are designed to mark tall structures for aircraft visibility. These lights ensure compliance with aviation safety standards and are typically installed on towers, buildings, and industrial chimneys.",
    image: "/product/p89.png?height=200&width=250",
    // gallery: ["/product/p15-2.png?height=300&width=300"],

    features: [
      "Marks tall structures for aviation safety",
      "High visibility for aircraft",
      "Complies with standard obstruction lighting requirements"
    ],
    specifications: {
      type: "Obstruction Light",
      application: "Aviation safety",
      placement: "Towers, chimneys, tall structures"
    },
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "AVI-OBS-01",
    href: "/products/p89"
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
    id: 91,
    category: "Isolators",
    title: "CKT02- Series Explosion-proof Load Isolation Switch",
    description:
      "The CKT02-Series explosion-proof load isolation switch is engineered for safe disconnection of electrical loads in hazardous areas. It features a flameproof enclosure that prevents ignition of explosive atmospheres, ensuring operational safety. Designed for durability and reliability, it is suitable for use in demanding industrial environments. Ideal for isolating power during maintenance or emergencies.",
    image: "/product/p91-1.png?height=200&width=250",
    gallery: ["/product/p91-2.png?height=300&width=300"],

    features: [
      "Explosion protection",
      "- IECEx (IEC)",
      "- ATEX (CENELEC, EN)",
      "- China Ex (GB)",
      "Application in hazardous area",
      "- Zone 1 and Zone 2",
      "- Zone 21 and Zone 22",
      "Black operating handle for standard, Red/Yellow operating handle for Emergency stop.",
      "The joint of the enclosure and the cover has a labyrinth sealing structure, sealed with imported polyurethane foam or silicon rubber, has good performance of water-proof and dust-proof.",
      "The handle can be equipped padlock."
    ],
    specifications: {
      series: "CKT02",
      type: "Explosion-proof Load Isolation Switch",
      application: "Hazardous Areas",
      zones: "Zone 1, Zone 2, Zone 21, Zone 22"
    },
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "CKT02-SWITCH",
    href: "/products/p91"
  },
  {
    id: 92,
    category: "MV AVR",
    title: "Single Phase Step Voltage Regulators",
    description:
      "FHS Zoom, FR-8 Single Phase Step voltage Regulators are tap-changing autotransformers. They regulate distribution line voltages from 10% raise (boost) to 10% lower (buck) in 32 Steps of approximately 5/8% each. Voltage ratings are available from 2400 volts (60KV BIL) for 60 and 50 Hz systems.",
    image: "/product/p92-1.jpeg?height=200&width=250",
    // gallery: ["/product/p15-2.png?height=300&width=300"],

    features: [
      "Tested per ANSI C57.15 standard",
      "1,000,000 times Electrical and mechanical operation",
      "Tap changer with motor and power supply",
      "SEL-2431 Voltage Regulator control",
      "Programmable without a Laptop",
      "IEEE C37.118 Synchrophasor Protocol",
      "Oil drain valve with sampling device",
      "High-creep porcelain bushings",
      "Control cabinet with removable front panel",
      "Conformably coated circuit boards",
      "MOV-type external series arresters"
    ],
    specifications: {
      type: "Single Phase Step Voltage Regulator",
      frequency: "50/60 Hz",
      regulationRange: "±10%",
      voltageRating: "2400V (60KV BIL)"
    },
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "FR-8-SVR",
    href: "/products/p92"
  },

  {
    id: 93,
    category: "MV AVR",
    title: "Three Phase Step Voltage Regulators",
    description:
      "SVR-3 type feeder automatic substation & distribution step voltage regulator is actually a three phase oil immersed auto-transformer with SVR controller and gathering sampling of voltage signal, on load tap changer controlling device to achieve gird more efficient from adjust the load character by increase and decrease the voltage.",
    image: "/product/p93.jpeg?height=200&width=250",
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

  // Previous entries here...

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
    id: 95,
    category: "Pipe Fittings",
    title: "ZK02-Series Explosion-proof Conduits (Flexible) (Galvanized Steel, PVC Coated)",
    description: "The ZK02-Series explosion-proof flexible conduits are manufactured from galvanized steel with a protective PVC coating. Designed for use in explosive atmospheres, they offer a safe, flexible, and corrosion-resistant solution for electrical cable routing. Suitable for use in industrial environments requiring certified explosion protection.",
    image: "/product/p95-1.png?height=200&width=250",
    gallery: ["/product/p95-2.png?height=300&width=300"],

    features: [
      "Explosion protection - IECEx(IEC), ATEX (CENELEC,EN), China Ex(GB)",
      "Application in hazardous areas: Zone 1, Zone 2, Zone 21, Zone 22",
      "Flame-proof (Type ‘d’), Increased safety (Type ‘e’)",
      "Galvanized steel core with PVC coating",
      "Resistant to oil, acids, and corrosive chemicals"
    ],
    specifications: {
      Material: "Galvanized Steel with PVC Coating",
      TemperatureRange: "-20°C to +80°C",
      ProtectionClass: "IP66/IP67",
      Standard: "IEC 60079-0/1/7"
    },
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "ZK02",
    href: "/products/p95"
  },
  {
    id: 96,
    category: "Pipe Fittings",
    title: "ZK03-Series Explosion-proof Conduit Connectors (Straight, Elbow, T-type)",
    description: "The ZK03-Series explosion-proof conduit connectors are designed for reliable and secure connections in hazardous areas. Available in straight, elbow, and T-type configurations, these connectors are made from high-quality metal with corrosion-resistant finishes. Ideal for safely linking flexible conduits in explosive environments.",
    image: "/product/p96-1.png?height=200&width=250",
    gallery: ["/product/p96-2.png?height=300&width=300"],

    features: [
      "Explosion protection - IECEx(IEC), ATEX (CENELEC,EN), China Ex(GB)",
      "Application in hazardous areas: Zone 1, Zone 2, Zone 21, Zone 22",
      "Available in multiple configurations (straight, elbow, T-type)",
      "Suitable for both indoor and outdoor use",
      "Provides secure connection and strain relief"
    ],
    specifications: {
      Material: "Zinc Alloy / Stainless Steel",
      ThreadTypes: "NPT, G, Metric",
      Finish: "Nickel-plated or Natural",
      ProtectionClass: "IP66"
    },
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "ZK03",
    href: "/products/p96"
  },
  {
    id: 97,
    category: "Pipe Fittings",
    title: "ZK04-Series Explosion-proof Adapters (Thread Conversion)",
    description: "The ZK04-Series explosion-proof adapters are designed to facilitate thread conversions in hazardous area installations. Made from high-strength metals and certified for explosion-proof applications, these adapters ensure safe and seamless connections between different thread types. Ideal for use with conduit and cable gland assemblies.",
    image: "/product/p97-1.png?height=200&width=250",
    gallery: ["/product/p97-2.png?height=300&width=300"],

    features: [
      "Explosion protection - IECEx(IEC), ATEX (CENELEC,EN), China Ex(GB)",
      "Thread conversion between different pipe sizes and types",
      "Corrosion-resistant metal construction",
      "Suitable for indoor and outdoor use in hazardous areas"
    ],
    specifications: {
      Material: "Brass / Stainless Steel",
      ThreadTypes: "NPT, BSP, Metric",
      Coating: "Optional Nickel Plated",
      ProtectionClass: "IP66"
    },
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "ZK04",
    href: "/products/p97"
  },
  {
    id: 98,
    category: "Pipe Fittings",
    title: "ZK05-Series Explosion-proof Reducers (Thread Size Reduction)",
    description: "The ZK05-Series explosion-proof reducers enable the safe reduction of thread sizes for conduit and gland applications in hazardous environments. Constructed from robust, corrosion-resistant materials and certified for explosion-proof use, they ensure secure connections and prevent gas or dust ingress.",
    image: "/product/p98-1.png?height=200&width=250",
    gallery: ["/product/p98-2.png?height=300&width=300"],

    features: [
      "Explosion protection - IECEx(IEC), ATEX (CENELEC,EN), China Ex(GB)",
      "Thread size reducers for pipe fittings and cable glands",
      "High-quality corrosion-resistant metal",
      "Maintains integrity of flameproof enclosures"
    ],
    specifications: {
      Material: "Brass / Stainless Steel",
      ThreadTypes: "NPT, BSP, Metric",
      Coating: "Optional Nickel Plated",
      ProtectionClass: "IP66/IP68"
    },
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "ZK05",
    href: "/products/p98"
  },
  {
    id: 99,
    category: "Pipe Fittings",
    title: "ZK06-Series Explosion-proof Sealing Washers and Gaskets",
    description: "The ZK06-Series explosion-proof sealing washers and gaskets are designed for sealing threaded joints in hazardous areas. Made from high-quality materials with excellent sealing properties, they prevent the ingress of explosive gases and dust. Suitable for use in conjunction with cable glands and conduit fittings.",
    image: "/product/p99-1.png?height=200&width=250",
    gallery: ["/product/p99-2.png?height=300&width=300"],

    features: [
      "Explosion protection - IECEx(IEC), ATEX (CENELEC,EN), China Ex(GB)",
      "Sealing washers and gaskets for cable glands and pipe fittings",
      "High-performance sealing materials",
      "Maintains integrity of hazardous area enclosures"
    ],
    specifications: {
      Material: "Silicone / Neoprene / Nitrile",
      TemperatureRange: "-60°C to +200°C",
      Applications: "Used with cable glands and conduit fittings",
      ProtectionClass: "IP66/IP68"
    },
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "ZK06",
    href: "/products/p99"
  },

  {
    id: 100,
    category: "Pipe Fittings",
    title: "ZK07-Series Explosion-proof Cable Glands (Double Seal, Unarmoured)",
    description: "The ZK07-Series explosion-proof cable glands (double seal, unarmoured) are designed for secure and flameproof entry of unarmoured cables in hazardous environments. The double-seal design offers enhanced protection against gas or dust ingress, ensuring safety and reliability. Made from corrosion-resistant materials, they provide long-lasting performance. Ideal for use in industrial settings requiring certified explosion protection.",
    image: "/product/p100-1.png?height=200&width=250",
    gallery: ["/product/p100-2.png?height=300&width=300"],

    features: [
      "Explosion protection - IECEx(IEC), ATEX(CENELEC,EN), China Ex(GB)",
      "Application in hazardous areas: Zone 1, Zone 2, Zone 21, Zone 22",
      "Flame-proof (Type ‘d’), Increased safety (Type ‘e’), restricted breathing (Type ’nR’), combustible dust (Type ‘tb’) structure",
      "Double seal for unarmoured cables",
      "External hexagon and stripe compression nuts",
      "Can be installed on Exi (intrinsic safety type) equipment"
    ],
    specifications: {},
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "ZK07",
    href: "/products/p100"
  },
  {
    id: 101,
    category: "Pipe Fittings",
    title: "ZK08-Series Explosion-proof Cable Glands (Double Seal, Armoured, Unarmoured)",
    description: "The ZK08-Series explosion-proof cable glands (double seal, armoured and unarmoured) are designed for versatile and secure cable entry in hazardous areas. Suitable for both armoured and unarmoured cables, the double-seal design ensures maximum protection against explosive gases or dust ingress. Made from durable, corrosion-resistant materials, they offer reliable sealing and long-term performance. Ideal for demanding industrial environments requiring certified explosion protection.",
    image: "/product/p101-1.png?height=200&width=250",
    gallery: ["/product/p101-2.png?height=300&width=300"],

    features: [
      "Explosion protection - IECEx(IEC), ATEX (CENELEC,EN), China Ex(GB)",
      "Application in hazardous areas: Zone 1, Zone 2, Zone 21, Zone 22",
      "Flame-proof (Type ‘d’), Increased safety (Type ‘e’), restricted breathing (Type ‘nR’), combustible dust (Type ‘tb’) structure",
      "Double seal for armoured and unarmoured cables",
      "External hexagon and stripe compression nuts",
      "Can be installed on Exi (intrinsic safety type) equipment"
    ],
    specifications: {},
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "ZK08",
    href: "/products/p101"
  },
  {
    id: 102,
    category: "Pipe Fittings",
    title: "ZK09-Series Explosion-proof Cable Glands (Compound Barrier, Unarmoured)",
    description: "The ZK09-Series explosion-proof cable glands (compound barrier, unarmoured) are designed for maximum sealing integrity in hazardous environments. Featuring a compound barrier seal, they prevent the passage of flammable gases through cable cores, ensuring superior explosion protection. Suitable for unarmoured cables, they offer reliable performance and resistance to harsh conditions. Ideal for high-risk industrial applications requiring certified safety.",
    image: "/product/p102-1.png?height=200&width=250",
    gallery: ["/product/p102-2.png?height=300&width=300"],

    features: [
      "Explosion protection - IECEx(IEC), ATEX (CENELEC,EN), China Ex(GB)",
      "Application in hazardous areas: Zone 1, Zone 2, Zone 21, Zone 22",
      "Flame-proof (Type ‘d’), Increased safety (Type ‘e’), restricted breathing (Type ‘nR’), combustible dust (Type ‘tb’) structure",
      "Single seal compound barrier for unarmoured cables",
      "External hexagon and stripe compression nuts",
      "Can be installed on Exi (intrinsic safety type) equipment"
    ],
    specifications: {},
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "ZK09",
    href: "/products/p102"
  },
  {
    id: 103,
    category: "Pipe Fittings",
    title: "ZK10-Series Explosion-proof Cable Glands (Compound Barrier, Armoured, Unarmoured)",
    description: "The ZK10-Series explosion-proof cable glands (compound barrier, armoured and unarmoured) are designed for high-integrity sealing in hazardous areas. Suitable for both armoured and unarmoured cables, the compound barrier prevents the transmission of flammable gases through cable cores. Built from corrosion-resistant materials, they ensure robust, long-lasting protection. Ideal for critical industrial applications requiring the highest level of explosion safety.",
    image: "/product/p103-1.png?height=200&width=250",
    gallery: ["/product/p103-2.png?height=300&width=300"],

    features: [
      "Explosion protection - IECEx(IEC), ATEX(CENELEC,EN), China Ex(GB)",
      "Application in hazardous areas: Zone 1, Zone 2, Zone 21, Zone 22",
      "Flame-proof (Type’d’), Increased safety (Type‘e’), restricted breathing (Type ‘nR’), combustible dust (Type ‘tb’) structure",
      "Single seal compound barrier for armoured and unarmoured cables",
      "External hexagon and stripe compression nuts",
      "Can be installed on Exi (intrinsic safety type) equipment"
    ],
    specifications: {},
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "ZK10",
    href: "/products/p103"
  },
  {
    id: 104,
    category: "Pipe Fittings",
    title: "Z11-Series Explosion-proof Cable Glands (Single Seal, Unarmoured)",
    description: "The Z11-Series explosion-proof cable glands (single seal, unarmoured) are designed for safe and reliable cable entry in hazardous areas. Featuring a single-seal design, they effectively prevent the ingress of explosive gases or dust. Made from durable, corrosion-resistant materials, they ensure secure installation and long-term performance. Ideal for industrial environments requiring certified explosion protection for unarmoured cables.",
    image: "/product/p104-1.png?height=200&width=250",
    gallery: ["/product/p104-2.png?height=300&width=300"],

    features: [
      "Explosion protection - China Ex(GB)",
      "Application in hazardous areas: Zone 1, Zone 2, Zone 21, Zone 22",
      "Increased safety (Type ‘e’) structure, engineering plastic material PA66, black color",
      "Single seal for unarmoured cables"
    ],
    specifications: {},
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "Z11",
    href: "/products/p104"
  },
  {
    id: 105,
    category: "Pipe Fittings",
    title: "ZK12-Series Explosion-proof Stopping Plugs",
    description: "The ZK12-Series explosion-proof stopping plugs are designed to safely seal unused cable entry points in hazardous areas. Constructed with a flameproof design, they prevent the passage of explosive gases or dust, maintaining the integrity of enclosures. Made from robust, corrosion-resistant materials, they ensure long-term reliability. Ideal for industrial applications requiring certified explosion protection.",
    image: "/product/p105-1.png?height=200&width=250",
    gallery: ["/product/p105-2.png?height=300&width=300"],

    features: [
      "Explosion protection - IECEx(IEC), ATEX(CENELEC,EN), China Ex(GB)",
      "Application in hazardous areas: Zone 1, Zone 2, Zone 20, Zone 21, Zone 22",
      "Six structural types: internal hexagon, external hexagon, internal fixed, external fixed, etc.",
      "Can be customized upon request",
      "Used for spare inlets on explosion-proof equipment"
    ],
    specifications: {},
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "ZK12",
    href: "/products/p105"
  },
  {
    id: 106,
    category: "Pipe Fittings",
    title: "Installation Accessories of Pipe Fitting",
    description: "Installation accessories for pipe fittings are designed to support secure, efficient, and reliable assembly of piping systems in industrial environments. These components include connectors, elbows, couplings, reducers, and support brackets, ensuring proper alignment and stability. Made from durable, corrosion-resistant materials, they withstand harsh conditions and maintain system integrity. Ideal for use in both hazardous and non-hazardous areas requiring robust installation solutions.",
    image: "/product/p106-1.png?height=200&width=250",
    gallery: ["/product/p106-2.png?height=300&width=300"],

    features: [
      "Suitable for sealing spare cable entry devices in electrical equipment",
      "Prevents water or dust ingress",
      "Material: Nylon plastic",
      "Ex marking: Ex e IIC Gb",
      "Degree of protection: IP66"
    ],
    specifications: {},
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "ZK-INST-ACCS",
    href: "/products/p106"
  },
  // Continuing from previous entries...

  {
    id: 110,
    category: "Terminal Box",
    title: "ST04-Series Explosion-proof Terminal Box",
    description: "The ST04-Series explosion-proof terminal box is engineered for safe cable terminations in hazardous areas with explosive gases or dust. Featuring a stainless steel flameproof enclosure, it offers superior corrosion resistance and long-term durability. Designed for reliable electrical connections, it supports flexible wiring configurations. Suitable for harsh industrial environments requiring high safety standards.",
    image: "/product/p110-1.png?height=200&width=250",
    gallery: ["/product/p110-2.png?height=300&width=300", "/product/p110-3.png?height=300&width=300"],

    features: [
      "Explosion protection - IECEx(IEC), ATEX(CENELEC,EN), China Ex(GB)",
      "Application in hazardous area - Zone 0, Zone 1 and Zone 2, Zone 21 and Zone 22",
      "Stainless steel enclosure, three types of explosion protection (Ex eb, Ex ia, Ex tb IIIC)",
      "19 types of enclosure specifications",
      "Customizable current, number of terminals, size and direction of entry",
      "Stainless steel exposed fastener, anti dropping structure, easy installation and maintenance"
    ],
    specifications: {},
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "ST04",
    href: "/products/p110"
  },
  {
    id: 111,
    category: "Terminal Box",
    title: "ST05-Series Explosion Proof Junction Boxes",
    description: "The ST05-Series explosion-proof junction boxes are designed for safe and reliable electrical connections in hazardous environments. Featuring a flameproof enclosure, they prevent the ignition of flammable gases or dust. These junction boxes offer excellent durability, flexible configuration options, and high resistance to corrosion. Ideal for use in industrial applications requiring certified explosion protection.",
    image: "/product/p111-1.png?height=200&width=250",
    gallery: ["/product/p111-2.png?height=300&width=300"],

    features: [
      "Explosion protection - IECEx(IEC), ATEX(CENELEC,EN), China Ex(GB)",
      "Application in hazardous area - Zone 0, Zone 1 and Zone 2, Zone 21 and Zone 22",
      "4 types explosion protection (Ex eb, Ex ia, Exib, Ex tb IIIC)",
      "GRP enclosure",
      "7 types of enclosure, customizable current, terminals, size and direction of entry",
      "Stainless steel exposed fastener, anti dropping structure, easy installation and maintenance"
    ],
    specifications: {},
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "ST05",
    href: "/products/p111"
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
    id: 113,
    category: "Terminal Box",
    title: "ST07-Series Explosion-proof Terminal Box",
    description: "The ST07-Series explosion-proof terminal box is designed for secure cable terminations in environments with explosive gases or dust. Its flameproof enclosure ensures safe operation by preventing external ignition sources. Engineered for durability and reliability, it withstands harsh industrial conditions. Ideal for applications requiring certified explosion protection and flexible wiring options.",
    image: "/product/p113-1.png?height=200&width=250",
    gallery: ["/product/p113-2.png?height=300&width=300"],

    features: [
      "Explosion protection - China Ex(GB)",
      "Application in hazardous area - Zone 1 and Zone 2, Zone 21 and Zone 22",
      "Screw structure, easy to open the cover",
      "Stainless steel enclosure",
      "Direction and size of cable entry customizable on request"
    ],
    specifications: {},
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "ST07",
    href: "/products/p113"
  },
  {
    id: 114,
    category: "Terminal Box",
    title: "ST08-Series Explosion-proof Electrical Apparatus (For Cable Connection)",
    description: "The ST08-Series explosion-proof electrical apparatus is designed for safe cable connections in hazardous areas with explosive gases or dust. Its flameproof construction prevents ignition, ensuring reliable and secure operation. Built for durability, it supports various cable types and installation needs. Ideal for industrial environments requiring certified explosion protection.",
    image: "/product/p114-1.png?height=200&width=250",
    gallery: ["/product/p114-2.png?height=300&width=300", "/product/p114-3.png?height=300&width=300"],

    features: [
      "Explosion protection - IECEx(IEC), ATEX(CENELEC,EN), China Ex(GB)",
      "Application in hazardous area - Zone 1 and Zone 2, Zone 21 and Zone 22",
      "3 types of explosion protection (Ex db IB, Ex db IIB+H2, Ex tb IIIC)",
      "Aluminum alloy enclosure, powder coated",
      "Equipped with hinges and door handle for easy installation and protection",
      "Customizable to meet certificate usage restrictions",
      "Direction, size and quantity of cable entry customizable to meet dissipated power and mechanical strength"
    ],
    specifications: {},
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "ST08",
    href: "/products/p114"
  },
  {
    id: 115,
    category: "Terminal Box",
    title: "ST09-Series Explosion-proof Terminal Box",
    description: "The ST09-Series explosion-proof terminal box is designed for safe and reliable cable terminations in hazardous locations. Its flameproof enclosure prevents the ignition of explosive gases or dust, ensuring high operational safety. Built for durability and ease of installation, it accommodates various wiring configurations. Suitable for use in demanding industrial and offshore environments.",
    image: "/product/p115-1.png?height=200&width=250",
    gallery: ["/product/p115-2.png?height=300&width=300"],

    features: [
      "Explosion protection - China Ex(GB)",
      "Application in hazardous area - Zone 1 and Zone 2, Zone 21 and Zone 22",
      "IIB and IIC type enclosure, 6 different sizes of each type",
      "Direction and size of cable entry customizable on request"
    ],
    specifications: {},
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "ST09",
    href: "/products/p115"
  },
  {
    id: 116,
    category: "AVIATION OBSTRUCTION LIGHT",
    title: "LOW INTENSITY OBSTRUCTION LIGHT",
    description: "Suitable for aircraft warning on structures below 45 meters in height. Ideal for installation on towers used in power transmission, telecommunications, and GSM networks; industrial smokestacks in power plants, coking plants, and chemical facilities; high-rise buildings; bridges; harbor and construction machinery; and wind turbines.",
    image: "/product/p116.jpeg?height=200&width=250",
    gallery: ["/product/p116.jpeg?height=300&width=300"],
    features: [
      "LED color: Red",
      "Vertical degree: ≥10°",
      "Horizontal degree: 360°",
      "Intensity: ≥32.5cd",
      "Working state: Steady burning",
      "Adjustable flicker frequency via FR104 controller: 20FPW, 30FPW, 40FPW, 60FPW",
      "Operating voltage: DC48V",
      "Power consumption - Steady: 3.8W, 20FPM: 1.1W, 30FPW: 1.4W, 40FPW: 1.9W, 60FPW: 2.7W",
      "Weight: 0.3kg",
      "IP Rate: IP66"
    ],
    specifications: {},
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "LOW-INTENSITY",
    href: "/products/p116"
  },

  {
    id: 117,
    category: "AVIATION OBSTRUCTION LIGHT",
    title: "DUAL LOW INTENSITY OBSTRUCTION LIGHT",
    description: "Designed for aircraft warning purposes on various structures such as power transmission towers, telecom and GSM towers, industrial smokestacks (including those at power plants, coking plants, and chemical facilities), high-rise buildings, bridges, harbor equipment, construction machinery, wind turbines, and similar installations.",
    image: "/product/p117.jpeg?height=200&width=250",
    gallery: ["/product/p117.jpeg?height=300&width=300"],
    features: [
      "Light Source: LED",
      "LED life: ≥100,000h",
      "Vertical degree: ≥10°",
      "Color: Red",
      "Horizontal degree: 360°",
      "Intensity: ≥32.5cd",
      "On/off level: 500Lux",
      "Flashing rate: Steady burning (flashing can be customized)",
      "Input voltage: AC110-240V / DC48V / DC12V",
      "Power consumption: 4W",
      "Storage temperature: -40˚C ~ +55˚C",
      "IP Rate: IEC60529 IP65",
      "Reference weight: 2.3kg"
    ],
    specifications: {},
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "DUAL-LOW-INTENSITY",
    href: "/products/p117"
  },
  {
    id: 118,
    category: "AVIATION OBSTRUCTION LIGHT",
    title: "AVIATION OBSTRUCTION LIGHT",
    description: "Designed for use on moving ground obstructions at airports—such as various types of service and maintenance vehicles—excluding aircraft.",
    image: "/product/p118.jpeg?height=200&width=250",
    gallery: ["/product/p118.jpeg?height=300&width=300"],
    features: [
      "Light source: LED",
      "LED color: Amber / Blue (other colors can be customized)",
      "Vertical degree: ≥12°",
      "Peak intensity angle: +2.5°",
      "Horizontal degree: 360°",
      "Flashing rate: 60–90/min (customizable)",
      "LED life: ≥100,000h",
      "Intensity: ≥50cd",
      "Power consumption: 1.5W (flash)",
      "Material - Base: Die-casting aluminum, Housing: PC",
      "Operating temperature: -40˚C ~ +70˚C",
      "Weight: 0.5kg",
      "IP code: IP65"
    ],
    specifications: {},
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "AIRPORT-LIGHT",
    href: "/products/p118"
  },

  {
    id: 119,
    category: "AVIATION OBSTRUCTION LIGHT",
    title: "OJ5 SERIES",
    description: "OJ5 Series is a medium-intensity Type A/B obstruction light for marking tall structures to ensure aviation safety. It flashes white during the day and red with infrared at night. The system combines advanced LED, optics, and smart control for reliable performance. Ideal for structures 105–150m tall, including towers, chimneys, buildings, bridges, and wind turbines.",
    image: "/product/p119.jpeg?height=200&width=250",
    gallery: ["/product/p119.jpeg?height=300&width=300"],
    features: [
      "Light source: LED",
      "Working state: Flashing",
      "Flash rate: Daytime/Twilight: 20/30/40/60FPM, Night: 20/30/40/60FPM (Default: 40FPM)",
      "Flash duration: Daytime/Twilight: 95ms, Night: 670ms",
      "Light color: White, Red, Red+IR",
      "Operating voltage: 100-240VAC / 48VDC / 24VDC",
      "Frequency: 50/60Hz",
      "Peak power consumption: 350W",
      "IP rate: IEC60529 IP66"
    ],
    specifications: {},
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "OJ5",
    href: "/products/p119"
  },
  {
    id: 120,
    category: "AVIATION OBSTRUCTION LIGHT",
    title: "OJ102",
    description: "OJ102 is a medium-intensity Type B obstruction light for marking tall structures to ensure aircraft safety. It operates with red flashing or steady light at night and features advanced LED, optical, and control technology. Suitable for towers, chimneys, high buildings, bridges, construction and port machinery, wind turbines, and other outdoor structures—even in high-salinity environments.",
    image: "/product/p120.jpeg?height=200&width=250",
    gallery: ["/product/p120.jpeg?height=300&width=300"],
    features: [
      "Light source: LED",
      "Color: Red",
      "Voltage input: AC100V~AC240V / DC48V",
      "Average Power Consumption: ≤16W (40FPM)",
      "Maximum power: 32W",
      "IP Rate: IP66"
    ],
    specifications: {},
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "OJ102",
    href: "/products/p120"
  },
  {
    id: 121,
    category: "AVIATION OBSTRUCTION LIGHT",
    title: "OJ100",
    description: "OJ100 is a medium-intensity obstruction light used for air traffic warning on structures such as telecom and GSM towers, industrial smokestacks (power plants, coking plants, chemical facilities), high-rise buildings, port equipment, construction machinery, and wind turbines.",
    image: "/product/p121.jpeg?height=200&width=250",
    gallery: ["/product/p121.jpeg?height=300&width=300"],
    features: [
      "Light color: Red (white could be customized)",
      "Voltage: AC100V~AC240V / DC48V",
      "Power consumption: <65W (steady burning)",
      "IP protection: IP65"
    ],
    specifications: {},
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "OJ100",
    href: "/products/p121"
  },
  {
    id: 122,
    category: "AVIATION OBSTRUCTION LIGHT",
    title: "OJ403A",
    description: "OJ403A is a medium-intensity Type A&B aviation obstruction light featuring 20,000 cd white flashing in daytime, 2,000 cd white at night, with optional red steady/flashing mode. It uses advanced LED, optical, and control technology for high-demand applications. Suitable for towers, chimneys, buildings, bridges, large machinery, and wind turbines. Built for outdoor and hazardous environments.",
    image: "/product/p122.jpeg?height=200&width=250",
    gallery: ["/product/p122.jpeg?height=300&width=300"],
    features: [
      "Light source: LED",
      "Work mode: Flashing",
      "Light color: White / White + Red",
      "Voltage input: AC110V, AC220V, DC48V",
      "Average Power Consumption: 45W",
      "IP Rate: IP66"
    ],
    specifications: {},
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "OJ403A",
    href: "/products/p122"
  },
  {
    id: 123,
    category: "AVIATION OBSTRUCTION LIGHT",
    title: "OJ40",
    description: "OJ40 Series Type A aviation obstruction lights, ICAO certified, provide white light by day and white or optional red at night to warn aircraft of tall structures. Featuring advanced LED, optical, and control technology, they are ideal for towers, chimneys, high buildings, large bridges, port and construction machinery, and wind turbines from 105 to 150 m in height. Suitable for high-salinity and harsh outdoor environments.",
    image: "/product/p123.jpeg?height=200&width=250",
    gallery: ["/product/p123.jpeg?height=300&width=300"],
    features: [
      "Light source: LED",
      "Light color: White / White + Red",
      "Input Voltage: DC48V",
      "Power Consumption: Day - 20FPM≤50W, 30FPM≤75W, 40FPM≤100W; Night - 20FPM≤15W, 30FPM≤23W, 40FPM≤30W, 60FPM≤45W, Steady burning ≤60W",
      "IP Rate: IP65"
    ],
    specifications: {},
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "OJ40",
    href: "/products/p123"
  },
  {
    id: 124,
    category: "AVIATION OBSTRUCTION LIGHT",
    title: "OJ101",
    description: "OJ101 is a medium-intensity obstruction light used for air traffic warning on structures such as telecom and GSM towers, industrial smokestacks (power, coking, and chemical plants), buildings, port equipment, construction machinery, and wind turbines.",
    image: "/product/p124.jpeg?height=200&width=250",
    gallery: ["/product/p124.jpeg?height=300&width=300"],
    features: [
      "Light source: LED",
      "Color: Red",
      "Supply voltage: AC100–240V / DC48V",
      "Power consumption: <60W (steady burning)",
      "IP Protection: IP65"
    ],
    specifications: {},
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "OJ101",
    href: "/products/p124"
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
  {
    id: 126,
    category: "AVIATION OBSTRUCTION LIGHT",
    title: "OJ864",
    description: "OJ864: Medium-intensity Type B aviation obstruction lights are used to mark structures that pose a risk to aircraft, operating in red flashing or steady mode at night. Featuring advanced LED, optical, and control technology, they perform reliably in demanding conditions. Suitable for towers, chimneys, high-rise buildings, bridges, port equipment, construction machinery, and wind turbines. Recommended for obstacles between 45–105 meters or for building installations at that height range. Also suitable for high-salinity environments.",
    image: "/product/p126.jpeg?height=200&width=250",
    gallery: ["/product/p126.jpeg?height=300&width=300"],
    features: [
      "Light source: LED",
      "Color: Red (others can be customized)",
      "Power supply: 18V 12W silicon solar panel, 12V 12AH battery",
      "Power consumption: 30W",
      "IP Rate: IP65"
    ],
    specifications: {},
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "OJ864",
    href: "/products/p126"
  },
  {
    id: 127,
    category: "AVIATION OBSTRUCTION LIGHT",
    title: "OJD101",
    description: "OJD101 is a solar-powered aviation warning light designed for marking masts and tower-type obstacles such as telecommunication, GSM, radio and TV towers, tall cranes, chimneys, high-rise buildings, sports stadiums, lighting pylons, high-voltage towers, and other structures that may pose a hazard to air traffic.",
    image: "/product/p127.jpeg?height=200&width=250",
    gallery: ["/product/p127.jpeg?height=300&width=300"],
    features: [
      "LED source: LED",
      "Color: Red",
      "Solar Battery power consumption: 1.8W",
      "Battery Capacity: 3.6V / 8AH (Maintenance-free) NiMH",
      "IP Protection: IP65"
    ],
    specifications: {},
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "OJD101",
    href: "/products/p127"
  },
  {
    id: 128,
    category: "AVIATION OBSTRUCTION LIGHT",
    title: "OJ60",
    description: "OJ60 Applicable to towers (power transmission, communication, microwave), chimneys (power plants, coking plants, chemical facilities), high-rise buildings, bridges, port equipment, large construction machinery, and wind turbines—where aircraft warning is required.",
    image: "/product/p128.jpeg?height=200&width=250",
    gallery: ["/product/p128.jpeg?height=300&width=300"],
    features: [
      "Light source: LED",
      "Light color: Red",
      "Rated power consumption: 6W / 10V",
      "Battery capacity: 3.6V / 8AH × 2",
      "IP Rate: IP65"
    ],
    specifications: {},
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "OJ60",
    href: "/products/p128"
  },
  {
    id: 129,
    category: "AVIATION OBSTRUCTION LIGHT",
    title: "OJ810A",
    description: "OJ810A Obstruction light suitable for various crane types in harbors and metallurgical sites, as well as telecom towers, GSM towers, smokestacks, buildings, and other potential air traffic hazards. Operates with a steady or flashing red safety light.",
    image: "/product/p129.jpeg?height=200&width=250",
    gallery: ["/product/p129.jpeg?height=300&width=300"],
    features: [
      "Light source: LED",
      "Light color: Red",
      "Battery capacity: 3.6V / 8AH NiMH",
      "Solar panel: 4W / 5V",
      "IP degree: IP65"
    ],
    specifications: {},
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "OJ810A",
    href: "/products/p129"
  },
  {
    id: 130,
    category: "Hexlon LIGHTS",
    title: "Explosion Proof Lighting Fixture",
    description: "Wattage: 60W\nLumens: 160lms/watt\nTotal Lumens: 9600 lms, 220V/50Hz\npower factor Cosp ≥ 0.95, IP66\nEx d IICT6 Gb / Ex tD A21 Ip66, T80ºC\nⅡA, ⅡB, and ⅡC, Zone 1 and 2, Zone 21 and 22\nWarranty: 1 Year",
    image: "/product/p130.png?height=200&width=250",
    // gallery: ["/product/p15-2.png?height=300&width=300"],

    features: [],
    specifications: {},
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "HEX-LIGHT-60W",
    href: "/products/p130"
  },
  {
    id: 131,
    category: "Terminal Box",
    title: "ST01-Series Explosion-proof Terminal Boxes",
    description: "The ST01-Series explosion-proof terminal boxes are designed for secure cable termination in hazardous areas with flammable gases or dust. Constructed with a flameproof enclosure, they ensure safe electrical connections and prevent external ignition. These terminal boxes offer high durability, corrosion resistance, and easy installation. Suitable for use in demanding industrial environments requiring certified explosion protection.",
    image: "/product/p131-1.png?height=200&width=250",
    gallery: ["/product/p131-2.png?height=300&width=300"],

    features: [
      "Explosion protection - China Ex(GB)",
      "Application in hazardous area - Zone 1 and Zone 2, Zone 21 and Zone 22",
      "This series product has 6 types for selection: A, B, C, D, E and d",
      "Please specify when ordering if the cable inlet should be reduced"
    ],
    specifications: {},
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "ST01",
    href: "/products/p131"
  },
  {
    id: 132,
    category: "Terminal Box",
    title: "ST02-Series Explosion-proof Terminal Boxes",
    description: "The ST02-Series explosion-proof terminal boxes are built for safe and reliable cable termination in hazardous locations. With a rugged flameproof enclosure, they prevent the ignition of explosive gases or dust in the surrounding environment. These boxes offer excellent durability, corrosion resistance, and flexible wiring options. Ideal for industrial settings requiring certified explosion protection.",
    image: "/product/p132-1.png?height=200&width=250",
    // gallery: ["/product/p15-2.png?height=300&width=300"],

    features: [
      "Explosion Protection: Ex d IIB / IIC T6 Gb, Ex tD A21 IP66 T80°C",
      "Certificate: ATEX / IECEx / Other relevant certifications",
      "Rated Voltage: Up to 690V AC / 250V DC",
      "Rated Current: Up to 63A (varies by terminal and configuration)",
      "Ingress Protection: IP66 / IP67",
      "Ambient Temperature Range: -40°C to +60°C",
      "Enclosure Material: Copper-free aluminum alloy / Stainless steel / GRP (Glass Reinforced Polyester)",
      "Surface Finish: Epoxy powder-coated / Anti-corrosive treatment",
      "Cable Entries: Metric / NPT / G, Sizes: M20 – M63, Quantity configurable",
      "Terminal Types: Screw or spring-loaded terminals",
      "Mounting: Wall or pole mounting with optional accessories",
      "Internal Configuration: Customizable terminal arrangement and quantity",
      "Applications: Oil & gas, chemical plants, offshore platforms, refineries, hazardous dust zones",
      "Application in hazardous area - Zone 1 and Zone 2, Zone 21 and Zone 22"
    ],
    specifications: {},
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "ST02",
    href: "/products/p132"
  },
  {
    id: 133,
    category: "Terminal Box",
    title: "ST03-Series Explosion-proof Terminal Box",
    description: "The ST03-Series explosion-proof terminal box is designed for secure and reliable cable terminations in hazardous environments. Its flameproof enclosure prevents the ignition of flammable gases or dust, ensuring safe operation. Built for durability and corrosion resistance, it supports various wiring configurations. Ideal for use in demanding industrial zones requiring certified explosion protection.",
    image: "/product/p133-1.png?height=200&width=250",
    gallery: ["/product/p133-2.png?height=300&width=300", "/product/p133-3.png?height=300&width=300"],

    features: [
      "Explosion protection - IECEx (IEC), ATEX (CENELEC, EN), China Ex(GB)",
      "Application in hazardous area - Zone 1 and Zone 2, Zone 21 and Zone 22",
      "Aluminum alloy enclosure",
      "Two types of explosion protection: Ex eb, Ex ib and Ex tb IIC",
      "There are 11 types of enclosure",
      "Current, number of terminals, size and direction of cable entry can be customized",
      "Stainless steel exposed fastener, anti-dropping structure, easy installation and maintenance"
    ],
    specifications: {},
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "ST03",
    href: "/products/p133"
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
    id: 135,
    category: "Plug and Sockets",
    title: "BS02-Series Explosion-proof Plug and Sockets",
    description: "The BS02-Series explosion-proof plug and sockets are designed for secure electrical connections in hazardous areas with flammable gases or dust. Featuring robust flameproof construction, they offer high resistance to impact, corrosion, and environmental stress. These units ensure safe and reliable operation in demanding industrial settings. Ideal for power distribution in explosive atmospheres.",
    image: "/product/p135-1.png?height=200&width=250",
    // gallery: ["/product/p15-2.png?height=300&width=300"],

    features: [
      "Explosion protection - China Ex(GB)",
      "Application in hazardous area - Zone 1 and Zone 2, Zone 21 and Zone 22",
      "Increased safety type enclosure, four types of enclosure",
      "Current ratings: 16A, 32A, 63A",
      "Pole options: 3P, 4P, 5P",
      "Reliable interlocking function: plug removal only after switch off; power on only after plug insertion",
      "Elastic shutter spring sleeve ensures reliable contact, low resistance, low-temperature rise",
      "Self-cleaning design, reduces insertion and extraction force",
      "Timing function with different voltage colors to prevent misinsertion",
      "Padlock-equipped socket for locking when not in use"
    ],
    specifications: {},
    price: "N/A",
    originalPrice: "N/A",
    availability: "IN STOCK",
    sku: "BS02",
    href: "/products/p135"
  },

















  // All ST01–ST09 entries complete.


]

const categories = [
  "All",
  "Air Conditioner",
  "Circuit Breakers",
  "Control Button Switch",
  "Coupler",
  "Distribution Cabinets",
  "EV Charger",
  "Distribution Box (hexlon DBs)", // Updated name
  "Exhaust Fan",
  "Lights",
  "Pipe Fittings",
  "Plug and Sockets",
  "Isolators",
  "MV AVR",
  "Terminal Box",
  "AVIATION OBSTRUCTION LIGHT",
  // New category
]

const categoryMapping: { [key: string]: string } = {
  "air-conditioner": "Air Conditioner",
  "circuit-breakers": "Circuit Breakers",
  "control-button-switch": "Control Button Switch",
  coupler: "Coupler",
  "distribution-cabinets": "Distribution Cabinets",
  "ev-charger": "EV Charger",
  "distribution-box": "Distribution Box (hexlon DBs)", // Updated
  "exhaust-fan": "Exhaust Fan",
  lights: "Lights",
  "Plug-and-Sockets": "Plug and Sockets",
  "Pipe-Fittings": "Pipe Fittings",
  isolators: "Isolators",
  "mv-avr": "MV AVR",
  "Terminal-Box": "Terminal Box",
  "AVIATION-OBSTRUCTION-LIGHT": "AVIATION OBSTRUCTION LIGHT",
  "explosion-proof": "All",
}


// Update Distribution Box categories
allProducts.forEach((product) => {
  if (product.category === "Distribution Box" && product.id >= 43 && product.id <= 54) {
    product.category = "Distribution Box (hexlon DBs)"
  }
})

interface ProductModalProps {
  product: (typeof allProducts)[0] | null
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
                  className="w-full h-80 object-contain rounded-lg border"
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





export default function ProductsPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedProduct, setSelectedProduct] = useState<(typeof allProducts)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const searchParams = useSearchParams()

  // Load categories from URL
  useEffect(() => {
    const categoryParam = searchParams.get("category")
    if (categoryParam) {
      const categoriesFromURL = categoryParam
        .split(",")
        .map((key) => categoryMapping[key]) // convert to display names
        .filter((label) => label) // remove undefined
      setSelectedCategories(categoriesFromURL)
    }
  }, [searchParams])

  // Filtered Products
  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes("All") ||
      selectedCategories.includes(product.category)

    const matchesSearch =
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesCategory && matchesSearch
  })

  // Optional: You can remove this if not using dropdown selection anymore
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setSelectedCategories([value])
  }

  // Modal open handler
  const openModal = (product: (typeof allProducts)[0], e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  // Modal close handler
  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }


  return (
    <>
      <div className="pt-14">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Explosion-Proof Equipment</h1>
            <p className="text-base max-w-2xl mx-auto">
              Professional explosion-proof electrical equipment designed for hazardous areas and industrial safety
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-6 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="w-full md:w-80">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                />
              </div>

              {/* Category Filter */}
              {/* <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-gray-600" />
                <select
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm min-w-[200px]"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div> */}
              {/* Category Tabs */}


            </div>
            {/* <div className="flex flex-wrap gap-2 mt-4 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category
                    ? "bg-primary-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-primary-100"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div> */}
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              {categories.map((label) => (
                <button
                  key={label}
                  onClick={() =>
                    setSelectedCategories((prev) =>
                      prev.includes(label)
                        ? prev.filter((c) => c !== label) // toggle off
                        : [...prev, label] // toggle on
                    )
                  }
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${selectedCategories.includes(label)
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-blue-100"
                    }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Results Info */}
            {/* <div className="mt-4 text-center text-gray-600 text-sm">
              {selectedCategory === "All"
                ? `Showing all ${filteredProducts.length} products`
                : `Showing ${filteredProducts.length} products in "${selectedCategory}"`}
            </div> */}
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <Link
                  key={product.id}
                  href={product.href}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={product.image || "/product/p15-1.png"}
                      alt={product.title}
                      width={250}
                      height={200}
                      className="w-full h-40 object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* <div className="absolute top-2 left-2 bg-secondary-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      -15%
                    </div> */}
                    <div className="absolute top-2 right-2 bg-primary-600 text-white px-2 py-1 rounded text-xs">
                      {product.category}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-bold mb-2 group-hover:text-primary-600 transition-colors line-clamp-1">
                      {product.title}
                    </h3>

                    <p className="text-gray-600 mb-3 text-sm line-clamp-2">{product.description}</p>
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
                        <span className="text-gray-400 line-through text-sm">₹{product.originalPrice}</span>
                        <span className="text-base font-bold text-primary-600 ml-2">₹{product.price}</span>
                      </div>
                    </div> */}
                    <div className="flex space-x-2">
                      <button
                        onClick={(e) => openModal(product, e)}
                        className="flex-1 bg-primary-500 hover:bg-primary-600 text-white px-3 py-1.5 rounded-full transition-colors text-xs flex items-center justify-center"
                      >
                        <Eye className="h-3 w-3 mr-1" />
                        Quick View
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSelectedCategory("Circuit Breakers")
                    setSearchTerm("")
                  }}
                  className="mt-4 bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors"
                >
                  Show All Products
                </button>
              </div>
            )}
          </div>
        </section>
      </div>

      <ProductModal product={selectedProduct} isOpen={isModalOpen} onClose={closeModal} />

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  )
}
