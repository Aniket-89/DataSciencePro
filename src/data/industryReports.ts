export const industryReports = {
  semiconductors: {
    title: "Temperature Data Logger Market Report: Size, Trends & Forecast (2025–2034)",
    industry: "Semiconductors & Electronics",
    slug: "semiconductors",
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
      "North America":	"U.S., Canada, Mexico, Others",
      "Europe":	"Germany, UK, France, Others",
      "Asia Pacific":	"China, India, Japan, South Korea, Others",
      "Central & South America":	"Brazil, Argentina, Colombia, Others",
      "Middle East & Africa":	"Saudi Arabia, UAE, Others"
    }

  },
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