import { motion } from "framer-motion";
import {
  BuildingStorefrontIcon,
  BeakerIcon,
  BoltIcon,
  ShoppingBagIcon,
  TruckIcon,
  DeviceTabletIcon,
  Square3Stack3DIcon,
  RocketLaunchIcon,
  GlobeAltIcon,
  CubeIcon,
  BuildingOfficeIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";
// import { INDUSTRY_SECTORS } from '../../types/reports';
import { Link } from "react-router-dom";

const industryData = [
  {
    icon: BuildingStorefrontIcon,
    title: "Industrial Automation",
    slug: "industrial-automation",
    focus: "Smart factories, robotics, predictive maintenance",
    deliverables: [
      "Adoption rates for cobots (collaborative robots) by industry",
      "ROI analysis of AI-driven quality control systems",
      "Supply chain resilience scoring for machinery components",
    ],
  },
  {
    icon: BeakerIcon,
    title: "Food, Beverages & Nutrition",
    slug: "food-beverages-nutrition",
    focus: "Alt-protein, functional foods, sustainable packaging",
    deliverables: [
      "Consumer sentiment tracking for novel ingredients (e.g., cricket protein)",
      "Private-label vs. brand pricing power analysis",
      "Regulatory pathways for novel foods (FDA/EFSA)",
    ],
  },
  {
    icon: BoltIcon,
    title: "Energy & Power",
    slug: "energy-power",
    focus: "Energy storage, microgrids, hydrogen economy",
    deliverables: [
      "Levelized cost comparisons (solar/wind/hydrogen)",
      "Grid modernization investment hotspots",
      "Policy risk scoring for fossil fuel divestment",
    ],
  },
  {
    icon: ShoppingBagIcon,
    title: "Consumer & Retail",
    slug: "consumer-retail",
    focus: "D2C strategies, experiential retail, Gen Z spending",
    deliverables: [
      "E-commerce vs. brick-and-mortar profitability models",
      "Social commerce trend forecasting (TikTok Shop, live selling)",
      "Returns fraud mitigation strategies",
    ],
  },
  {
    icon: TruckIcon,
    title: "Automotive",
    slug: "automotive",
    focus: "EV charging ecosystems, autonomous trucking, V2X tech",
    deliverables: [
      "Battery chemistry adoption timelines (LFP vs. NMC)",
      "Subscription model viability analysis",
      "Used EV pricing volatility forecasts",
    ],
  },
  {
    icon: DeviceTabletIcon,
    title: "Semiconductor & Electronics",
    slug: "semiconductor_electronics",
    focus: "Chiplet design, compound semiconductors, 6G RF",
    deliverables: [
      "Fab capacity vs. demand gap analysis",
      "Geopolitical risk ratings for chip supply chains",
      "Edge AI processor benchmarking",
    ],
  },
  {
    icon: Square3Stack3DIcon,
    title: "Agriculture",
    slug: "agriculture",
    focus: "Precision agtech, carbon farming, biofertilizers",
    deliverables: [
      "Drone vs. satellite imagery cost-benefit studies",
      "Regenerative agriculture ROI timelines",
      "Commodity price-shock early warning systems",
    ],
  },
  {
    icon: RocketLaunchIcon,
    title: "Aerospace & Defense",
    slug: "aerospace-defense",
    focus: "Hypersonics, MRO digitization, space logistics",
    deliverables: [
      "Aftermarket parts pricing elasticity models",
      "Counter-UAS technology competitive landscape",
      "Satellite constellation bandwidth demand forecasts",
    ],
  },
  {
    icon: GlobeAltIcon,
    title: "ICT",
    slug: "ict",
    focus: "AI governance, quantum networking, post-5G",
    deliverables: [
      "Enterprise AI adoption pain point analysis",
      "Data sovereignty compliance cost projections",
      "Network-as-a-service monetization strategies",
    ],
  },
  {
    icon: CubeIcon,
    title: "Packaging & Transport",
    slug: "packaging-transport",
    focus: "Reusable logistics, smart labels, bio-PET",
    deliverables: [
      "E-commerce packaging waste reduction solutions",
      "Pallet pooling economic models",
      "RFID vs. computer vision tracking accuracy tests",
    ],
  },
  {
    icon: BuildingOfficeIcon,
    title: "Construction",
    slug: "construction",
    focus: "Modular housing, 3D printing, embodied carbon",
    deliverables: [
      "Cross-laminated timber vs. steel cost curves",
      "Migrant labor availability impact studies",
      "Disaster-resilient materials adoption rates",
    ],
  },
  {
    icon: BanknotesIcon,
    title: "BFSI",
    slug: "bfsi",
    focus: "Embedded finance, parametric insurance, CBDCs",
    deliverables: [
      "Neobank churn rate predictors",
      "Climate risk underwriting models",
      "Real-time payments infrastructure gaps",
    ],
  },
];

const ReportCategories = () => {
  return (
    <section className="py-12 mb-24 lg:py-16 bg-[#F3F3E0] m-4 2xl:mx-auto soft-shadow rounded-3xl max-w-[1600px] ">
      <div className="px-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-h3 font-semibold text-[#183B4E] mb-4">
            Industries We Cover
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-6 max-w-6xl mx-auto place-content-center">
          {industryData.map((industry, index) => (
            <Link to={`/reports/semiconductor_electronics`}>
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, scale: 0.5 }}
                // animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-4 aspect-[2] md:p-6 rounded-3xl bg-white group flex items-center gap-2 hover:bg-gray-100 hover:shadow-lg transition-colors"
              >
                <industry.icon className="hidden md:block size-4 md:size-10 text-gray-900 transform group-hover:scale-110 transition-transform" />

                <h3 className="text-[#183B4E] text-sm font-light">
                  {industry.title}
                </h3>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReportCategories;
