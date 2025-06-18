"use client"

import type React from "react"

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
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
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
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300"],
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
    href: "/products/ts01-explosion-proof-circuit-breakers",
  },
  {
    id: 3,
    category: "Circuit Breakers",
    title: "TS02-Series Explosion-proof Residual Current Circuit Breakers",
    description:
      "The TS02-Series explosion-proof residual current circuit breakers are designed to protect against earth faults and leakage currents in hazardous areas.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
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
    href: "/products/ts02-explosion-proof-residual-current-breakers",
  },
  {
    id: 4,
    category: "Circuit Breakers",
    title: "TS03-Series Explosion-proof AC Contactors",
    description:
      "The TS03-Series explosion-proof AC contactors are designed for safe and reliable control of electrical circuits in hazardous areas with flammable gases or dust.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
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
    href: "/products/ts03-explosion-proof-ac-contactors",
  },
  {
    id: 5,
    category: "Circuit Breakers",
    title: "TS04-Series Explosion-proof Thermal Relays",
    description:
      "The TS04-Series explosion-proof thermal relays are designed to provide reliable overload protection for motors and equipment in hazardous environments.",
    image: "/placeholder.svg?height=200&width=250",
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
    href: "/products/ts04-explosion-proof-thermal-relays",
  },
  {
    id: 6,
    category: "Circuit Breakers",
    title: "TS05-Series Explosion-proof Motor Protection Switches",
    description:
      "The TS05-Series explosion-proof motor protection switches are designed for safe starting, stopping, and protection of motors in hazardous areas.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300"],
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
    href: "/products/ts05-explosion-proof-motor-protection-switches",
  },
  {
    id: 7,
    category: "Circuit Breakers",
    title: "TS06-Series Explosion-proof Miniature Relays",
    description:
      "The TS06-Series explosion-proof miniature relays are designed for reliable signal control in hazardous areas containing flammable gases or dust.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
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
    href: "/products/ts06-explosion-proof-miniature-relays",
  },
  {
    id: 8,
    category: "Circuit Breakers",
    title: "TS07-Series Explosion-proof Time Relays",
    description:
      "The TS07-Series explosion-proof time relays are designed for precise timing control in hazardous environments with explosive gases or dust.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
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
    href: "/products/ts07-explosion-proof-time-relays",
  },
  {
    id: 9,
    category: "Circuit Breakers",
    title: "TS08-Series Explosion-proof Surge Protectors",
    description:
      "The TS08-Series explosion-proof surge protectors are designed to safeguard electrical equipment from voltage spikes in hazardous areas with explosive gases or dust.",
    image: "/placeholder.svg?height=200&width=250",
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
    href: "/products/ts08-explosion-proof-surge-protectors",
  },

  // Control Button Switch Category (25 products)
  {
    id: 10,
    category: "Control Button Switch",
    title: "AK01-Series Explosion-proof Switch Module",
    description:
      "The AK01-Series explosion-proof switch module is designed for safe and reliable control of electrical circuits in hazardous environments.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300"],
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
    href: "/products/ak01-explosion-proof-switch-module",
  },
  {
    id: 11,
    category: "Control Button Switch",
    title: "AK02-Series Explosion-proof Flash Buzzer",
    description:
      "The AK02-Series explosion-proof flash buzzer is designed to provide audible and visual alerts in hazardous areas with explosive gases or dust.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
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
    href: "/products/ak02-explosion-proof-flash-buzzer",
  },
  {
    id: 12,
    category: "Control Button Switch",
    title: "AK03-Series Explosion-proof Limit Switches",
    description:
      "The AK03-Series explosion-proof limit switches are designed for precise position detection in hazardous environments with explosive gases or dust.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
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
    href: "/products/ak03-explosion-proof-limit-switches",
  },
  {
    id: 13,
    category: "Control Button Switch",
    title: "AK04-Series Explosion-proof Illumination Control Switches",
    description:
      "The AK04-Series explosion-proof illumination control switches are designed for safely controlling lighting circuits in hazardous areas.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300"],
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
    href: "/products/ak04-explosion-proof-illumination-control-switches",
  },
  {
    id: 14,
    category: "Control Button Switch",
    title: "AK05-Series Explosion-proof Illumination Control Switches",
    description:
      "The AK05-Series explosion-proof illumination control switches are designed for safe and efficient lighting control in hazardous environments.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
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
    href: "/products/ak05-explosion-proof-illumination-control-switches",
  },
  {
    id: 15,
    category: "Control Button Switch",
    title: "AK06-Series Explosion-proof Signal Lamp (Board back cable type)",
    description:
      "The AK06-Series explosion-proof signal lamp (board back cable type) is designed to provide clear visual signaling in hazardous areas with explosive gases or dust.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
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
    href: "/products/ak06-explosion-proof-signal-lamp-board-back-cable",
  },
  {
    id: 16,
    category: "Control Button Switch",
    title: "AK07-Series Explosion-proof Button/Switch (Board back cable type)",
    description:
      "The AK07-Series explosion-proof button/switch (board back cable type) is designed for safe control operations in hazardous environments with flammable gases or dust.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300"],
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
    href: "/products/ak07-explosion-proof-button-switch-board-back-cable",
  },
  {
    id: 17,
    category: "Control Button Switch",
    title: "AK08-Series Explosion-proof Button/Switch (Board back cable type)",
    description:
      "The AK08-Series explosion-proof button/switch (board back cable type) is designed for safe and reliable operation in hazardous areas containing explosive gases or dust.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
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
    href: "/products/ak08-explosion-proof-button-switch-board-back-cable",
  },
  {
    id: 18,
    category: "Control Button Switch",
    title: "AK09-Series Explosion-proof Button With Signal Lamp (Board back cable type)",
    description:
      "The AK09-Series explosion-proof button with signal lamp (board back cable type) is designed for dual-function control and visual indication in hazardous environments.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
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
    href: "/products/ak09-explosion-proof-button-signal-lamp-board-back-cable",
  },
  {
    id: 19,
    category: "Control Button Switch",
    title: "AK10-Series Explosion-proof Button/Switch (Board back cable type)",
    description:
      "The AK10-Series explosion-proof button/switch (board back cable type) is designed for safe and efficient control operations in hazardous environments.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
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
    href: "/products/ak10-explosion-proof-button-switch-board-back-cable",
  },
  {
    id: 20,
    category: "Control Button Switch",
    title: "AK11-Series Explosion-proof Signal Lamp (Board back type)",
    description:
      "The AK11-Series explosion-proof signal lamp (board back type) is designed to deliver clear visual status indication in hazardous environments.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300"],
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
    href: "/products/ak11-explosion-proof-signal-lamp-board-back",
  },
  {
    id: 21,
    category: "Control Button Switch",
    title: "AK12-Series Explosion-proof Button/Switch (Board back type)",
    description:
      "The AK12-Series explosion-proof button/switch (board back type) is built for reliable control in hazardous areas containing flammable gases or dust.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
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
    href: "/products/ak12-explosion-proof-button-switch-board-back",
  },
  {
    id: 22,
    category: "Control Button Switch",
    title: "AK13-Series Explosion-proof Button/Switch (Board back type)",
    description:
      "The AK13-Series explosion-proof button/switch (board back type) is designed for safe and reliable control operations in hazardous environments.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
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
    href: "/products/ak13-explosion-proof-button-switch-board-back",
  },
  {
    id: 23,
    category: "Control Button Switch",
    title: "AK14-Series Explosion-proof Button/Switch (Board back type)",
    description:
      "The AK14-Series explosion-proof button/switch (board back type) is engineered for safe and dependable control functions in hazardous areas with explosive gases or dust.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
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
    href: "/products/ak14-explosion-proof-button-switch-board-back",
  },
  {
    id: 24,
    category: "Control Button Switch",
    title: "AK15-Series Explosion-proof Button With Signal Lamp (Board back type)",
    description:
      "The AK15-Series explosion-proof button with signal lamp (board back type) combines control and visual indication in one compact unit for hazardous environments.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
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
    href: "/products/ak15-explosion-proof-button-signal-lamp-board-back",
  },
  {
    id: 25,
    category: "Control Button Switch",
    title: "AK16-Series Explosion-proof Switch Module",
    description:
      "The AK16-Series explosion-proof switch module is designed for reliable circuit control in hazardous environments with explosive gases or dust.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300"],
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
    href: "/products/ak16-explosion-proof-switch-module",
  },
  {
    id: 26,
    category: "Control Button Switch",
    title: "AK17-Series Explosion-proof Control Switches",
    description:
      "The AK17-Series explosion-proof control switches are built for safe and reliable operation in hazardous areas containing flammable gases or dust.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
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
    href: "/products/ak17-explosion-proof-control-switches",
  },
  {
    id: 27,
    category: "Control Button Switch",
    title: "AK18-Series Control Switch",
    description:
      "The AK18-Series control switch is designed for reliable manual control of electrical circuits in industrial environments.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300"],
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
    href: "/products/ak18-control-switch",
  },
  {
    id: 28,
    category: "Control Button Switch",
    title: "AK19-Series Control Switch",
    description:
      "The AK19-Series control switch is a rotary-type switch designed for dependable circuit control in industrial applications.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
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
    href: "/products/ak19-control-switch",
  },
  {
    id: 29,
    category: "Control Button Switch",
    title: "AK20-Series Explosion-proof Potentiometers",
    description:
      "The AK20-Series explosion-proof potentiometers are designed for precise signal adjustment in hazardous environments with explosive gases or dust.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
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
    href: "/products/ak20-explosion-proof-potentiometers",
  },
  {
    id: 30,
    category: "Control Button Switch",
    title: "AK21-Series Explosion-proof Signal Lamp",
    description:
      "The AK21-Series explosion-proof signal lamp provides clear and reliable visual indication in hazardous areas containing explosive gases or dust.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300"],
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
    href: "/products/ak21-explosion-proof-signal-lamp",
  },
  {
    id: 31,
    category: "Control Button Switch",
    title: "AK22-Series Explosion-proof Signal Lamp",
    description:
      "The AK22-Series explosion-proof signal lamp is designed to deliver bright and reliable visual alerts in hazardous areas with flammable gases or dust.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
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
    href: "/products/ak22-explosion-proof-signal-lamp",
  },
  {
    id: 32,
    category: "Control Button Switch",
    title: "AK23-Series Explosion-proof Switch Button",
    description:
      "The AK23-Series explosion-proof switch button is designed for safe and efficient control operations in hazardous environments.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300"],
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
    href: "/products/ak23-explosion-proof-switch-button",
  },
  {
    id: 33,
    category: "Control Button Switch",
    title: "AK24-Series Explosion-proof Control Button With Signal Lamp",
    description:
      "The AK24-Series explosion-proof control button with signal lamp combines control functionality and visual indication in a single compact unit.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
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
    href: "/products/ak24-explosion-proof-control-button-signal-lamp",
  },
  {
    id: 34,
    category: "Control Button Switch",
    title: "AK25-Series Explosion-proof Switch Button",
    description:
      "The AK25-Series explosion-proof switch button is designed for safe and reliable manual control in hazardous environments with explosive gases or dust.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
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
    href: "/products/ak25-explosion-proof-switch-button",
  },

  // Coupler Category (2 products)
  {
    id: 35,
    category: "Coupler",
    title: "TS01-Series Explosion-proof Coupler",
    description:
      "The TS01-Series explosion-proof coupler is engineered for safe and reliable connection of electrical equipment in hazardous areas.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
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
    href: "/products/ts01-explosion-proof-coupler",
  },
  {
    id: 36,
    category: "Coupler",
    title: "TS02-Series Explosion-proof Coupler",
    description:
      "The TS02-Series explosion-proof couplers are designed for safe and efficient electrical connections in hazardous environments.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
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
    href: "/products/ts02-explosion-proof-coupler",
  },

  // Distribution Cabinets Category (1 product)
  {
    id: 37,
    category: "Distribution Cabinets",
    title: "TB-Series Explosion-proof Pressurized Distribution Cabinets",
    description:
      "The TB-Series explosion-proof pressurized distribution cabinets are designed for safe power distribution in hazardous locations.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
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
    href: "/products/tb-explosion-proof-pressurized-distribution-cabinets",
  },
  // EV Charger Category (5 products)
  {
    id: 38,
    category: "EV Charger",
    title: "XPD Forklift Battery Charger",
    description:
      "The XPD Series forklift battery charger is a high-efficiency, fully automatic charging solution designed for lead-acid and other industrial battery types.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300"],
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
    href: "/products/xpd-forklift-battery-charger",
  },
  {
    id: 39,
    category: "EV Charger",
    title: "BPD Lithium Battery Charger",
    description:
      "The BPD Series lithium battery charger is a smart charging solution designed for high-efficiency energy transfer and long battery life.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300"],
    features: [
      "Supports various lithium battery voltages",
      "Smart multi-stage charging (CC/CV)",
      "Built-in protections (OV, OC, temp, reverse)",
      "LED or digital status indicators",
      "High efficiency and compact design",
      "Optional CAN/RS485 communication",
    ],
    specifications: {
      batterySupport: "Various lithium battery voltages",
      chargingType: "Smart multi-stage charging (CC/CV)",
      protections: "OV, OC, temp, reverse",
      indicators: "LED or digital status indicators",
      design: "High efficiency and compact design",
      communication: "Optional CAN/RS485 communication",
    },
    price: "28,000",
    originalPrice: "32,000",
    availability: "IN STOCK",
    sku: "BPD-LC-01",
    href: "/products/bpd-lithium-battery-charger",
  },
  {
    id: 40,
    category: "EV Charger",
    title: "ACP Lithium Battery Charger",
    description:
      "The ACP Series lithium battery charger is designed for reliable, high-efficiency charging in demanding environments.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300"],
    features: [
      "Compatible with multiple lithium battery types and voltages",
      "Intelligent charging with automatic voltage/current regulation",
      "Multi-stage charging process (pre-charge, constant current, constant voltage)",
      "Comprehensive protection features",
      "Compact, durable design suitable for harsh environments",
      "High energy efficiency with low heat generation",
    ],
    specifications: {
      compatibility: "Multiple lithium battery types and voltages",
      chargingControl: "Intelligent charging with automatic voltage/current regulation",
      chargingProcess: "Multi-stage: pre-charge, constant current, constant voltage",
      protection: "Overvoltage, overcurrent, short circuit, over temperature, reverse polarity",
      design: "Compact, durable design suitable for harsh environments",
      efficiency: "High energy efficiency with low heat generation",
    },
    price: "32,000",
    originalPrice: "37,000",
    availability: "IN STOCK",
    sku: "ACP-LC-01",
    href: "/products/acp-lithium-battery-charger",
  },
  {
    id: 41,
    category: "EV Charger",
    title: "ACR Lithium Battery Charger",
    description:
      "The ACR Series lithium battery charger offers efficient and reliable charging for a wide range of lithium battery systems.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
    features: [
      "Compatible with various lithium battery chemistries",
      "Advanced charging control for voltage and current precision",
      "Multi-stage charging: pre-charge, constant current, constant voltage",
      "Built-in protection: overvoltage, overcurrent, over temperature",
      "High efficiency with minimal heat output",
      "Rugged, compact design for industrial and mobile use",
    ],
    specifications: {
      compatibility: "Various lithium battery chemistries",
      chargingControl: "Advanced charging control for voltage and current precision",
      chargingStages: "Pre-charge, constant current, constant voltage",
      protection: "Overvoltage, overcurrent, over temperature, short circuit, reverse polarity",
      efficiency: "High efficiency with minimal heat output",
      design: "Rugged, compact design for industrial and mobile use",
    },
    price: "35,000",
    originalPrice: "40,000",
    availability: "IN STOCK",
    sku: "ACR-LC-01",
    href: "/products/acr-lithium-battery-charger",
  },
  {
    id: 42,
    category: "EV Charger",
    title: "BCR DC Fast Charger",
    description:
      "The BCR DC fast charger is designed to deliver rapid, high-power charging for electric vehicles in public and commercial settings.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
    features: [
      "High-power output for rapid EV charging",
      "Compatible with major charging standards",
      "Smart charging control with dynamic power allocation",
      "Built-in safety features: overvoltage, overcurrent, short circuit",
      "User-friendly interface with touchscreen or LED indicators",
      "Remote monitoring and management via OCPP",
    ],
    specifications: {
      output: "High-power output for rapid EV charging",
      compatibility: "Compatible with major charging standards",
      chargingControl: "Smart charging control with dynamic power allocation",
      safetyFeatures: "Overvoltage, overcurrent, short circuit, overheating protection",
      interface: "User-friendly interface with touchscreen or LED indicators",
      inputACVoltage: "305~520VAC",
      oemOdmService: "Yes, customized service available",
      certificates: "CE, EN61000, IEC60146",
      applications: "Highway, parking, station, workplace, fleet",
    },
    price: "185,000",
    originalPrice: "210,000",
    availability: "IN STOCK",
    sku: "BCR-DC-01",
    href: "/products/bcr-dc-fast-charger",
  },

  // Distribution Box Category (12 products)
  {
    id: 43,
    category: "Distribution Box",
    title: "NEX51-Series Explosion Protected Distribution Box",
    description:
      "The NEX51-Series integrates a flameproof chamber with an increased safety chamber, featuring modular structure for flexible power distribution needs.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
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
    href: "/products/nex51-explosion-protected-distribution-box",
  },
  {
    id: 44,
    category: "Distribution Box",
    title: "PAX03-Series Explosion-proof Electrical Apparatus",
    description:
      "The PAX03-Series is engineered for safe and reliable power distribution in hazardous environments with robust flameproof and increased safety design.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300"],
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
    href: "/products/pax03-explosion-proof-electrical-apparatus",
  },
  {
    id: 45,
    category: "Distribution Box",
    title: "PAX23-Series Explosion-proof Electrical Apparatus",
    description:
      "The PAX23-Series is designed for safe power control and distribution in hazardous gas and dust environments with modular design.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
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
    href: "/products/pax23-explosion-proof-electrical-apparatus",
  },
  {
    id: 46,
    category: "Distribution Box",
    title: "PAX27-Series Explosion-proof Electrical Apparatus",
    description:
      "The PAX27-Series is built for reliable operation in hazardous areas with flammable gas or dust, featuring durable flameproof and increased safety designs.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300"],
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
    href: "/products/pax27-explosion-proof-electrical-apparatus",
  },
  {
    id: 47,
    category: "Distribution Box",
    title: "PAX06-Series Explosion-proof Electrical Apparatus (Magnetic Starter)",
    description:
      "The PAX06-Series is designed for safe motor control in hazardous environments, integrating flameproof and increased safety features.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
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
    href: "/products/pax06-explosion-proof-magnetic-starter",
  },
  {
    id: 48,
    category: "Distribution Box",
    title: "PAX01-Series Explosion-proof Enclosures",
    description:
      "PAX01-Series Explosion-proof Enclosures are designed to safely house electrical components in hazardous environments with flameproof structure.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300"],
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
    href: "/products/pax01-explosion-proof-enclosures",
  },
  {
    id: 49,
    category: "Distribution Box",
    title: "PAX30-Series Explosion-proof Enclosures",
    description:
      "The PAX30-Series are designed to safely house electrical and control components in hazardous environments with durable flameproof construction.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
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
    href: "/products/pax30-explosion-proof-enclosures",
  },
  {
    id: 50,
    category: "Distribution Box",
    title: "NEX52-S Series Explosion-proof Illumination (Power) Distribution Box",
    description:
      "The NEX52-S Series is designed for safe power and lighting distribution in hazardous environments with modular configuration.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300"],
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
    href: "/products/nex52-explosion-proof-illumination-distribution-box",
  },
  {
    id: 51,
    category: "Distribution Box",
    title: "NEX53-g Series Explosion-proof Illumination (Power) Distribution Box",
    description:
      "The NEX53 Series is built for reliable lighting and power distribution in explosive gas or dust environments with robust flameproof enclosure.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
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
    href: "/products/nex53-explosion-proof-illumination-distribution-box",
  },
  {
    id: 52,
    category: "Distribution Box",
    title: "PAX32 Series Explosion-proof Pressurized Control Systems",
    description:
      "The PAX32 Series are designed to safely operate electrical equipment in hazardous areas by maintaining protective overpressure within the enclosure.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
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
    href: "/products/pax32-explosion-proof-pressurized-control-systems",
  },
  {
    id: 53,
    category: "Distribution Box",
    title: "PAX53-Series Explosion-proof Emergency Power Distribution Box",
    description:
      "The PAX53 Series is designed to provide reliable backup power in hazardous environments with flameproof enclosure and integrated protection components.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300"],
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
    href: "/products/pax53-explosion-proof-emergency-power-distribution-box",
  },
  {
    id: 54,
    category: "Distribution Box",
    title: "PAX05-Series Explosion-proof Electrical Apparatus (Circuit Breaker)",
    description:
      "The PAX05-Series is designed for safe power control in hazardous environments, combining flameproof and increased safety chambers.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
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
    href: "/products/pax05-explosion-proof-circuit-breaker",
  },

  // Exhaust Fan Category (4 products)
  {
    id: 55,
    category: "Exhaust Fan",
    title: "BL01-Series Explosion-proof Axial Flow Fan",
    description:
      "The BL01-Series is designed to provide efficient ventilation and air circulation in hazardous areas where flammable gases or vapors may be present.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300"],
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
    href: "/products/bl01-explosion-proof-axial-flow-fan",
  },
  {
    id: 56,
    category: "Exhaust Fan",
    title: "BL02-Series Explosion-proof Exhaust Fan",
    description:
      "The BL02-Series is engineered to safely remove flammable gases, vapors, and fumes from hazardous industrial environments.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
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
    href: "/products/bl02-explosion-proof-exhaust-fan",
  },
  {
    id: 57,
    category: "Exhaust Fan",
    title: "BL03-Series Explosion-proof Exhaust Fan (Square)",
    description:
      "The BL03-Series is designed for safe and efficient ventilation in hazardous environments with explosive gas or dust, featuring a square-frame structure.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300"],
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
    href: "/products/bl03-explosion-proof-exhaust-fan-square",
  },
  {
    id: 58,
    category: "Exhaust Fan",
    title: "BL04-Series Explosion-proof Exhaust Fan",
    description:
      "Explosion-proof axial fans designed for safe air and fume extraction in hazardous environments, compliant with ATEX Directive 2014/34/UE.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
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
    href: "/products/bl04-explosion-proof-exhaust-fan",
  },
  // Lights Category (9 products)
  {
    id: 59,
    category: "Lights",
    title: "BLB01-Series Explosion-proof LED Lightings",
    description:
      "The BLB01-Series Explosion-proof LED Lightings are engineered for high-efficiency illumination in hazardous gas and dust environments. Featuring a durable flameproof housing and energy-saving LED technology, they ensure long-lasting and safe performance. Their compact design supports easy installation across various industrial settings.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300"],
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
    href: "/products/blb01-explosion-proof-led-lightings",
  },
  {
    id: 60,
    category: "Lights",
    title: "BLB02-Series Explosion-proof LED Lightings",
    description:
      "The BLB02-Series Explosion-proof LED Lightings are designed for safe and efficient illumination in hazardous environments where flammable gases or dust are present. Engineered with a robust, corrosion-resistant housing and high-performance LED technology, they deliver long-lasting, energy-efficient lighting with minimal maintenance.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
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
    href: "/products/blb02-explosion-proof-led-lightings",
  },
  {
    id: 61,
    category: "Lights",
    title: "BLB03-Series Explosion-proof LED Lightings",
    description:
      "The BLB03-Series Explosion-proof LED Lightings offer high-efficiency illumination specifically engineered for hazardous and demanding industrial environments. Built with a durable, flameproof aluminum alloy housing and advanced thermal management, they ensure optimal performance and longevity.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300"],
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
    href: "/products/blb03-explosion-proof-led-lightings",
  },
  {
    id: 62,
    category: "Lights",
    title: "BLB04-Series Explosion-proof LED Lightings",
    description:
      "The BLB04-Series Explosion-proof LED Lightings are designed for reliable illumination in hazardous areas with the presence of flammable gases or combustible dust. Featuring a compact, flameproof structure and high-efficiency LED technology, they offer energy savings and long service life.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300"],
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
    href: "/products/blb04-explosion-proof-led-lightings",
  },
  {
    id: 63,
    category: "Lights",
    title: "BLB05-Series Explosion-proof LED Floodlights",
    description:
      "The BLB05-Series Explosion-proof LED Floodlights are engineered for powerful and safe area lighting in hazardous zones with explosive gas or dust. Featuring a rugged flameproof aluminum housing and high-lumen LED technology, they deliver wide beam coverage with excellent energy efficiency.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
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
    href: "/products/blb05-explosion-proof-led-floodlights",
  },
  {
    id: 64,
    category: "Lights",
    title: "BLB06-Series Explosion-proof LED Floodlights",
    description:
      "The BLB06-Series Explosion-proof LED Floodlights are designed for high-intensity illumination in hazardous environments where flammable gases or dust may be present. Built with a robust, corrosion-resistant aluminum alloy housing and advanced LED technology, they provide exceptional brightness, long lifespan, and low maintenance.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300"],
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
    href: "/products/blb06-explosion-proof-led-floodlights",
  },
  {
    id: 65,
    category: "Lights",
    title: "BLB07-Series Explosion-proof Sight Glass Light",
    description:
      "The BLB07-Series Explosion-proof Sight Glass Light is specifically designed for illuminating the interior of tanks, reactors, and vessels in hazardous areas. Compact and durable, it features a flameproof structure and high-efficiency LED light source for clear visibility through sight glass under extreme conditions.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300"],
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
    href: "/products/blb07-explosion-proof-sight-glass-light",
  },
  {
    id: 66,
    category: "Lights",
    title: "BLB08-Series Explosion-proof Cleanliness Fluorescent Light",
    description:
      "The BLB08-Series Explosion-proof Cleanliness Fluorescent Light is designed for cleanroom environments that require both high hygiene standards and explosion protection. Constructed with a smooth, anti-corrosive housing and sealed to prevent dust accumulation, it ensures reliable and glare-free illumination.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300"],
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
    href: "/products/blb08-explosion-proof-cleanliness-fluorescent-light",
  },
  {
    id: 67,
    category: "Lights",
    title: "BLB09-Series Explosion-proof Fluorescent Light (Emergency)",
    description:
      "The BLB09-Series Explosion-proof Fluorescent Light (Emergency) is engineered to provide reliable lighting and automatic emergency backup in hazardous environments. Featuring a flameproof, corrosion-resistant housing and built-in emergency battery system, it ensures continuous illumination during power failures.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
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
    href: "/products/blb09-explosion-proof-fluorescent-light-emergency",
  },
  {
    id: 68,
    category: "Lights",
    title: "BLB10-Series Explosion-proof Light Fittings for Fluorescent Lamp",
    description:
      "The BLB10-Series Explosion-proof Light Fittings for Fluorescent Lamps are designed for safe and efficient lighting in hazardous areas with explosive gas or dust. Built with a flameproof and anti-corrosive housing, they support various fluorescent tube configurations for uniform and stable illumination.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300"],
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
    href: "/products/blb10-explosion-proof-light-fittings-fluorescent",
  },
  {
    id: 69,
    category: "Lights",
    title: "BLB11-Series Explosion-proof Fluorescent Light",
    description:
      "The BLB11-Series Explosion-proof Fluorescent Lights are designed for use in hazardous environments requiring consistent and safe illumination. Featuring a durable, flameproof housing and high-transparency diffuser, they ensure efficient light distribution while withstanding harsh industrial conditions.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
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
    href: "/products/blb11-explosion-proof-fluorescent-light",
  },
  {
    id: 70,
    category: "Lights",
    title: "BLB12-Series Explosion-proof Light Fittings for Fluorescent Lamp",
    description:
      "The BLB12-Series Explosion-proof Light Fittings for Fluorescent Lamps are built to provide safe and reliable lighting in environments with explosive gas or dust. Featuring a robust flameproof design and corrosion-resistant construction, these fittings accommodate multiple fluorescent lamp types.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300"],
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
    href: "/products/blb12-explosion-proof-light-fittings-fluorescent",
  },
  {
    id: 71,
    category: "Lights",
    title: "BLB13-Series Explosion-proof LED Lamp Tube",
    description:
      "The BLB13-Series Explosion-proof LED Lamp Tube is designed to deliver energy-efficient and safe lighting in hazardous environments where flammable gases or dust are present. Encased in a durable, flameproof tube structure, it offers excellent thermal performance, long lifespan, and consistent illumination.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300"],
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
    href: "/products/blb13-explosion-proof-led-lamp-tube",
  },
  {
    id: 72,
    category: "Lights",
    title: "BLB14-Series Explosion-proof Lightings",
    description:
      "The BLB14-Series Explosion-proof Lightings are engineered for reliable illumination in hazardous areas with the presence of explosive gases or combustible dust. Constructed with a rugged, flameproof aluminum alloy housing and advanced lighting technology, they offer high efficiency, durability, and low maintenance.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
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
    href: "/products/blb14-explosion-proof-lightings",
  },
  {
    id: 73,
    category: "Lights",
    title: "BLB15-Series Explosion-proof Lightings",
    description:
      "The BLB15-Series Explosion-proof Lightings are designed to provide safe and efficient illumination in environments where flammable gases or dust may be present. Featuring a robust flameproof structure and high-performance LED or discharge lamp options, they ensure long-lasting operation with minimal maintenance.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300"],
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
    href: "/products/blb15-explosion-proof-lightings",
  },
  {
    id: 74,
    category: "Lights",
    title: "BLB16-Series Explosion-proof Floodlights",
    description:
      "The BLB16-Series Explosion-proof Floodlights are built for high-intensity, wide-area illumination in hazardous environments prone to explosive gases or dust. With a rugged flameproof design and high-efficiency light source, they deliver superior brightness, durability, and resistance to harsh conditions.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
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
    href: "/products/blb16-explosion-proof-floodlights",
  },
  {
    id: 75,
    category: "Lights",
    title: "BLB17-Series Explosion-proof Audio and Visual Caution Light",
    description:
      "The BLB17-Series Explosion-proof Audio and Visual Caution Light is designed to deliver clear audible and visual alerts in hazardous environments where explosive gases or dust may be present. Featuring a durable flameproof enclosure, high-intensity LED strobe, and loud sounder, it ensures effective warning signals.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300"],
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
    href: "/products/blb17-explosion-proof-audio-visual-caution-light",
  },
  {
    id: 76,
    category: "Lights",
    title: "BLB18-Series Explosion-proof Caution Light",
    description:
      "The BLB18-Series Explosion-proof Caution Light is designed to provide bright, reliable visual alerts in hazardous areas with explosive gas or dust atmospheres. Housed in a robust flameproof enclosure, it features high-intensity LED illumination for enhanced visibility in critical safety zones.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300"],
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
    href: "/products/blb18-explosion-proof-caution-light",
  },
  {
    id: 77,
    category: "Lights",
    title: "BLB19-Series Explosion-proof Aviation Obstruction Light",
    description:
      "The BLB19-Series Explosion-proof Aviation Obstruction Light is specially designed to mark tall structures in hazardous areas where explosive gases or dust may be present. Featuring a flameproof, weather-resistant enclosure and high-intensity LED beacon, it ensures visibility for aircraft navigation under all environmental conditions.",
    image: "/placeholder.svg?height=200&width=250",
    gallery: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
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
    href: "/products/blb19-explosion-proof-aviation-obstruction-light",
  },
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
  "Lights", // New category
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
  lights: "Lights", // New mapping
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
  if (!isOpen || !product) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Top Banner */}
          <div className="bg-primary-500 text-white py-2 px-6 flex justify-between items-center text-sm">
            <span>• EXPLOSION-PROOF CERTIFIED</span>
            <span>• FREE SHIPPING</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
            {/* Left Side - Product Images */}
            <div>
              <div className="relative mb-4">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  width={400}
                  height={400}
                  className="w-full h-80 object-cover rounded-lg"
                />
                <div className="absolute top-3 left-3 bg-secondary-500 text-white px-2 py-1 rounded text-sm font-semibold">
                  -15%
                </div>
              </div>

              {/* Fixed Size Thumbnail Images */}
              {product.gallery && product.gallery.length > 0 && (
                <div className="grid grid-cols-4 gap-2">
                  {product.gallery.map((img, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden">
                      <Image
                        src={img || "/placeholder.svg"}
                        alt={`${product.title} ${index + 1}`}
                        width={80}
                        height={80}
                        className="w-full h-16 object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right Side - Product Details */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-neutral-800">{product.title}</h2>

              {/* Warranty & Shipping Info */}
              <div className="mb-4">
                <div className="text-primary-600 font-semibold mb-1 text-sm">• EXPLOSION-PROOF CERTIFIED</div>
                <div className="text-primary-600 font-semibold text-sm">• FREE SHIPPING</div>
              </div>

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
              <div className="mb-6 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">AVAILABILITY:</span>
                  <span className="text-primary-600 font-semibold text-sm">{product.availability}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">SKU:</span>
                  <span className="text-sm font-medium">{product.sku}</span>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-center space-x-3">
                  <span className="text-gray-400 line-through text-lg">₹{product.originalPrice}</span>
                  <span className="text-3xl font-bold text-primary-600">₹{product.price}</span>
                </div>
                <p className="text-accent-600 font-semibold text-sm mt-1">Limited stock available - order soon.</p>
              </div>

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
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedProduct, setSelectedProduct] = useState<(typeof allProducts)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const searchParams = useSearchParams()

  useEffect(() => {
    const categoryParam = searchParams.get("category")
    if (categoryParam && categoryMapping[categoryParam]) {
      setSelectedCategory(categoryMapping[categoryParam])
    }
  }, [searchParams])

  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    const matchesSearch =
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value)
  }

  const openModal = (product: (typeof allProducts)[0], e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

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
              <div className="flex items-center space-x-2">
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
              </div>
            </div>

            {/* Results Info */}
            <div className="mt-4 text-center text-gray-600 text-sm">
              {selectedCategory === "All"
                ? `Showing all ${filteredProducts.length} products`
                : `Showing ${filteredProducts.length} products in "${selectedCategory}"`}
            </div>
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
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      width={250}
                      height={200}
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 bg-secondary-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      -15%
                    </div>
                    <div className="absolute top-2 right-2 bg-primary-600 text-white px-2 py-1 rounded text-xs">
                      {product.category}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-bold mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 mb-3 text-sm line-clamp-2">{product.description}</p>
                    <ul className="space-y-1 mb-4">
                      {product.features.slice(0, 2).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs">
                          <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <span className="text-gray-400 line-through text-sm">₹{product.originalPrice}</span>
                        <span className="text-base font-bold text-primary-600 ml-2">₹{product.price}</span>
                      </div>
                    </div>
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
                    setSelectedCategory("All")
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
