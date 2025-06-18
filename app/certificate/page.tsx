"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Shield, Zap, Car, Plane, Award, FileCheck, Globe } from "lucide-react"

const certificationTabs = [
  {
    id: "explosion-proof",
    title: "Explosion-Proof Equipment",
    subtitle: "ATEX & IECEx",
    icon: Shield,
    color: "bg-red-500",
    content: {
      description:
        "FHS Zoom's flameproof enclosures and equipment are rigorously tested to comply with the ATEX directive 2014/34/EU and the IECEx scheme. Under ATEX, each product is evaluated for safe operation in Zone 1 and Zone 2 hazardous gas environments, with explosion protection techniques such as flamepaths and pressure-resistant design. The IECEx certification further validates design, manufacturing, and quality assurance processes to globally recognized IEC 60079 standards. Together, these certifications guarantee that our systems prevent ignition from internal faults or external flammable atmospheres, delivering peace of mind in oil & gas, petrochemical, and mining applications.",
      standards: ["ATEX 2014/34/EU", "IECEx Scheme", "IEC 60079"],
      applications: ["Oil & Gas", "Petrochemical", "Mining", "Chemical Processing"],
      zones: ["Zone 1", "Zone 2"],
      features: ["Flameproof enclosures", "Pressure-resistant design", "Ignition prevention", "Global compliance"],
    },
  },
  {
    id: "avr",
    title: "Automatic Voltage Regulators",
    subtitle: "IEC 60076 & ANSI C57.12.00",
    icon: Zap,
    color: "bg-blue-500",
    content: {
      description:
        "Our AVRs are engineered in accordance with IEC 60076 power transformer standards—ensuring optimal temperature rise limits, insulation performance, and overload capability—and meet ANSI C57.12.00 requirements for liquid-immersed distribution, power, and regulating transformers. This dual compliance confirms that FHS Zoom AVRs deliver precise voltage stabilization, low losses, and robust fault tolerance across industrial grids. Through comprehensive routine and type testing (impulse withstand, heat-run tests, winding resistance), our regulators provide consistent power quality even under fluctuating loads and harsh environments.",
      standards: ["IEC 60076", "ANSI C57.12.00"],
      applications: ["Industrial Grids", "Power Distribution", "Voltage Regulation"],
      testing: ["Impulse Withstand", "Heat-run Tests", "Winding Resistance"],
      features: [
        "Precise voltage stabilization",
        "Low losses design",
        "Robust fault tolerance",
        "Temperature rise optimization",
      ],
    },
  },
  {
    id: "ev-charger",
    title: "EV Charger Systems",
    subtitle: "EN/IEC 61851-1:2019 & 61851-21-2:2021",
    icon: Car,
    color: "bg-green-500",
    content: {
      description:
        "FHS Zoom's electric vehicle charging stations adhere to EN/IEC 61851-1:2019, which defines general requirements for conductive charging systems, including charging modes, electrical safety, and user interfaces. In addition, compliance with EN/IEC 61851-21-2:2021 ensures our chargers meet electromagnetic compatibility (EMC) criteria under dynamic load and control conditions. Together, these standards certify that our EV solutions offer safe, interoperable, and efficient charging across all vehicle makes, with features such as overcurrent protection, earth-fault detection, and digital communication for smart-grid integration.",
      standards: ["EN/IEC 61851-1:2019", "EN/IEC 61851-21-2:2021"],
      applications: ["Public Charging", "Commercial Fleets", "Residential Charging"],
      safety: ["Overcurrent Protection", "Earth-fault Detection", "EMC Compliance"],
      features: [
        "Universal vehicle compatibility",
        "Smart-grid integration",
        "Digital communication",
        "Dynamic load management",
      ],
    },
  },
  {
    id: "aviation",
    title: "Aviation Systems",
    subtitle: "ICAO, FAA & CAAC",
    icon: Plane,
    color: "bg-purple-500",
    content: {
      description:
        "For airfield and aerospace applications, FHS Zoom products are qualified under the International Civil Aviation Organization (ICAO) Annex 14 specification for aerodrome ground lighting equipment, ensuring runway and taxiway safety. Our systems also hold Federal Aviation Administration (FAA) technical standard orders (TSOs) for components like airside power distribution and control panels. Additionally, we comply with China's Civil Aviation Administration (CAAC) directives for environmental, electromagnetic, and reliability testing. These combined approvals ensure our aviation-grade equipment supports critical ground operations worldwide, from aircraft servicing to airfield lighting and navigation aids.",
      standards: ["ICAO Annex 14", "FAA TSO", "CAAC Directives"],
      applications: ["Runway Lighting", "Taxiway Systems", "Aircraft Servicing", "Navigation Aids"],
      testing: ["Environmental Testing", "Electromagnetic Testing", "Reliability Testing"],
      features: [
        "Aerodrome ground lighting",
        "Airside power distribution",
        "Critical ground operations",
        "Global aviation compliance",
      ],
    },
  },
]

export default function CertificatePage() {
  const [activeTab, setActiveTab] = useState("explosion-proof")

  const activeTabData = certificationTabs.find((tab) => tab.id === activeTab)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Award className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Global Certifications & Standards</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              FHS Zoom products are built to meet global standards across multiple industries, ensuring performance,
              safety, and regulatory compliance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
                <Globe className="h-4 w-4 mr-2" />
                Global Standards
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
                <Shield className="h-4 w-4 mr-2" />
                Safety Certified
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
                <FileCheck className="h-4 w-4 mr-2" />
                Quality Assured
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Certification Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certificationTabs.map((cert) => {
            const IconComponent = cert.icon
            return (
              <Card key={cert.id} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`${cert.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{cert.title}</h3>
                  <p className="text-sm text-gray-600">{cert.subtitle}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Tabbed Content */}
        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-8 bg-white rounded-lg p-2 shadow-sm">
            {certificationTabs.map((tab) => {
              const IconComponent = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-4 py-3 rounded-md transition-all duration-200 m-1 ${
                    activeTab === tab.id ? `${tab.color} text-white shadow-md` : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <IconComponent className="h-5 w-5 mr-2" />
                  <span className="font-medium text-sm md:text-base">{tab.title}</span>
                </button>
              )
            })}
          </div>

          {/* Tab Content */}
          {activeTabData && (
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`${activeTabData.color} p-3 rounded-lg mr-4`}>
                    <activeTabData.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{activeTabData.title}</h2>
                    <p className="text-lg text-gray-600">{activeTabData.subtitle}</p>
                  </div>
                </div>

                <div className="prose max-w-none mb-8">
                  <p className="text-gray-700 leading-relaxed text-lg">{activeTabData.content.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Standards */}
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-lg mb-4 text-blue-900 flex items-center">
                      <FileCheck className="h-5 w-5 mr-2" />
                      Standards
                    </h3>
                    <ul className="space-y-2">
                      {activeTabData.content.standards.map((standard, index) => (
                        <li key={index} className="flex items-center text-blue-800">
                          <CheckCircle className="h-4 w-4 mr-2 text-blue-600" />
                          {standard}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Applications */}
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-lg mb-4 text-green-900 flex items-center">
                      <Globe className="h-5 w-5 mr-2" />
                      Applications
                    </h3>
                    <ul className="space-y-2">
                      {activeTabData.content.applications.map((app, index) => (
                        <li key={index} className="flex items-center text-green-800">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features */}
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-lg mb-4 text-purple-900 flex items-center">
                      <Award className="h-5 w-5 mr-2" />
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {activeTabData.content.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-purple-800">
                          <CheckCircle className="h-4 w-4 mr-2 text-purple-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Additional Info for specific tabs */}
                {activeTab === "explosion-proof" && activeTabData.content.zones && (
                  <div className="mt-6 bg-red-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-lg mb-4 text-red-900">Hazardous Zones</h3>
                    <div className="flex flex-wrap gap-2">
                      {activeTabData.content.zones.map((zone, index) => (
                        <Badge key={index} variant="secondary" className="bg-red-100 text-red-800">
                          {zone}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "avr" && activeTabData.content.testing && (
                  <div className="mt-6 bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-lg mb-4 text-blue-900">Testing Procedures</h3>
                    <div className="flex flex-wrap gap-2">
                      {activeTabData.content.testing.map((test, index) => (
                        <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800">
                          {test}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "ev-charger" && activeTabData.content.safety && (
                  <div className="mt-6 bg-green-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-lg mb-4 text-green-900">Safety Features</h3>
                    <div className="flex flex-wrap gap-2">
                      {activeTabData.content.safety.map((safety, index) => (
                        <Badge key={index} variant="secondary" className="bg-green-100 text-green-800">
                          {safety}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "aviation" && activeTabData.content.testing && (
                  <div className="mt-6 bg-purple-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-lg mb-4 text-purple-900">Testing Requirements</h3>
                    <div className="flex flex-wrap gap-2">
                      {activeTabData.content.testing.map((test, index) => (
                        <Badge key={index} variant="secondary" className="bg-purple-100 text-purple-800">
                          {test}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Need Certification Documentation?</h2>
              <p className="text-blue-100 mb-6">
                Contact our technical team for detailed certification documents and compliance reports.
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                Download Certificates
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
