export const industryReports = {
  semiconductors: [{
    id: 'semiconductors-1',
    title: "Temperature Data Logger Market Report: Size, Trends & Forecast (2025–2034)",
    industry: "Semiconductors & Electronics",
    slug: "semiconductor-electronics",
    // image: "/images/industryReports/semiconductors.jpg",
    overview: "The Temperature Data Logger Market is expected to grow from USD XX.X million in 2025 to USD XX.X million by 2034, registering a CAGR of XX.X%. These devices track temperature fluctuations over time and are crucial for industries where temperature control is critical—such as pharmaceuticals, food, research, and manufacturing. Available with internal or external sensors, they support USB, wireless, and cloud-based solutions.",
    executiveSummary: "Market growth is driven by real-time cold chain tracking, regulatory requirements in healthcare and food sectors, and technological advancements such as IoT-enabled devices and cloud storage. Industries increasingly rely on these systems for maintaining product integrity and operational compliance.",
    droc: {
      drivers: "Stricter regulations (FDA, WHO, EU); rising demand in healthcare, food, logistics for real-time tracking.",
      restraints: "High upfront and maintenance costs; integration and training challenges for SMEs.",
      opportunities: "IoT and cloud integration; GPS-enabled devices and AI-driven data insights.",
      challenges: "Environmental interference; sensor inaccuracy; calibration and battery-related issues.",
    },
    segmentation: {
      type: ["Single-use Data Loggers", "Multi-use Data Loggers", "USB Data Loggers", "Wireless Data Loggers", "Web-based Data Loggers"],
      sensor: ["Internal Sensor Loggers", "External Sensor Loggers"],
      application: ["Pharmaceutical & Biotechnology", "Food & Beverage", "Cold Chain Logistics", "Environmental Monitoring", "Industrial Processes"]
    },
    players: [
        "Omega Engineering Inc.", 
        "Testo SE & Co. KGaA", 
        "Rotronic AG", 
        "Onset Computer Corp.", 
        "Cryopak", 
        "Hioki EE Corp.", 
        "Elpro-Buchs AG", 
        "Emerson Electric Co.", 
        "DeltaTrak Inc.", 
        "Sensitech Inc."
    ],
    recentDevelopments: [
      "Nov 2024: HOBO MX20L launched (Bluetooth logger);",
      "Nov 2024: Onset acquired by Battery Ventures;",
      "Nov 2024: Vaisala invests in Finland logistics center;",
      "Oct 2024: Nevis Tech joins Vaisala;",
      "Sep 2024: DicksonOne launched in EMEA."
    ],
    regionalOutlook: {
      "North America":	"Leads the market; strong regulatory and tech infrastructure.",
      "Europe":	"high adoption due to EU regulations; strong presence in Germany, UK, France.",
      "Asia Pacific":	"Fast growth in China, India, Japan; driven by pharma and export industries.",
      "Latin America & MEA":	"Emerging demand in urban healthcare and food sectors; slower rural adoption.",
    }

  },

  ],
  automotive: [{
    id: 'automotive-1',
    title: "Electric Vehicle Battery Recycling Market Report: Size, Trends & Forecast (2025–2034)",
    industry: "Automotive",
    slug: "automotive",
    // image: "/images/industryReports/automotive.jpg",
    overview: "The Electric Vehicle Battery Recycling Market is projected to grow from USD XX.X million in 2025 to USD XX.X million by 2034, at a CAGR of XX.X%. This market focuses on the recycling of lithium-ion batteries used in electric vehicles (EVs), which is crucial for sustainability and resource recovery.",
    executiveSummary: "The growth of the EV battery recycling market is driven by increasing EV adoption, stringent environmental regulations, and the need for sustainable resource management. The market is characterized by technological advancements in battery recycling processes and the establishment of dedicated recycling facilities.",
    droc: {
      drivers: "Rising EV adoption; government incentives; environmental regulations; resource scarcity.",
      restraints: "High initial investment; complex recycling processes; limited consumer awareness.",
      opportunities: "Technological advancements; partnerships with automakers; expansion into emerging markets.",
      challenges: "Regulatory compliance; competition from new technologies; supply chain disruptions."
    },
    segmentation: {
      type: ["Lithium-ion Batteries", "Lead-acid Batteries", "Nickel-metal Hydride Batteries"],
      application: ["Passenger Vehicles", "Commercial Vehicles", "Two-wheelers"],
      process: ["Hydrometallurgical", "Pyrometallurgical", "Direct Recycling"]
    },
    players: [
        "Umicore N.V.", 
        "Li-Cycle Corp.", 
        "Redwood Materials Inc.", 
        "American Battery Technology Company", 
        "Battery Solutions LLC"
    ],
    recentDevelopments: [
      "Nov 2024: Redwood Materials expands into Europe;",
      "Oct 2024: Li-Cycle partners with Ford for battery recycling;",
      "Sep 2024: Umicore opens new facility in Germany;",
      "Aug 2024: American Battery Technology Company raises $50M for expansion."
    ],
    regionalOutlook: {
      "North America":	"Strong growth due to EV adoption and regulatory support.",
      "Europe":	"Leading region with stringent recycling laws and high EV penetration.",
      "Asia Pacific":	"Rapidly growing market driven by China and Japan's EV policies.",
      "Latin America & MEA":
      "Emerging markets with increasing EV adoption; slower growth due to infrastructure challenges.",
    }
  }],
};  // Add 11 more industries here..

export const industryList = [
  { slug: 'semiconductors', name: 'Semiconductors & Electronics' },
  { slug: 'automotive', name: 'Automotive' },
  { slug: 'healthcare', name: 'Healthcare' },
  { slug: 'foodAndBeverage', name: 'Food & Beverage' },
  { slug: 'pharmaceuticals', name: 'Pharmaceuticals' },
  { slug: 'logistics', name: 'Logistics & Supply Chain' },
  { slug: 'energy', name: 'Energy & Utilities' },
  { slug: 'agriculture', name: 'Agriculture' },
  { slug: 'retail', name: 'Retail' },
  { slug: 'telecommunications', name: 'Telecommunications' },
  { slug: 'construction', name: 'Construction & Real Estate' },
  { slug: 'aerospace', name: 'Aerospace & Defense' }
];