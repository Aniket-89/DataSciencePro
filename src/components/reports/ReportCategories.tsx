import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  BanknotesIcon
} from '@heroicons/react/24/outline';
// import { INDUSTRY_SECTORS } from '../../types/reports';
import { Link } from 'react-router-dom';

const industryData = [
  {
    icon: BuildingStorefrontIcon,
    title: 'Industrial Automation',
    focus: 'Smart factories, robotics, predictive maintenance',
    deliverables: [
      'Adoption rates for cobots (collaborative robots) by industry',
      'ROI analysis of AI-driven quality control systems',
      'Supply chain resilience scoring for machinery components',
    ],
  },
  {
    icon: BeakerIcon,
    title: 'Food, Beverages & Nutrition',
    focus: 'Alt-protein, functional foods, sustainable packaging',
    deliverables: [
      'Consumer sentiment tracking for novel ingredients (e.g., cricket protein)',
      'Private-label vs. brand pricing power analysis',
      'Regulatory pathways for novel foods (FDA/EFSA)',
    ],
  },
  {
    icon: BoltIcon,
    title: 'Energy & Power',
    focus: 'Energy storage, microgrids, hydrogen economy',
    deliverables: [
      'Levelized cost comparisons (solar/wind/hydrogen)',
      'Grid modernization investment hotspots',
      'Policy risk scoring for fossil fuel divestment',
    ],
  },
  {
    icon: ShoppingBagIcon,
    title: 'Consumer & Retail',
    focus: 'D2C strategies, experiential retail, Gen Z spending',
    deliverables: [
      'E-commerce vs. brick-and-mortar profitability models',
      'Social commerce trend forecasting (TikTok Shop, live selling)',
      'Returns fraud mitigation strategies',
    ],
  },
  {
    icon: TruckIcon,
    title: 'Automotive',
    focus: 'EV charging ecosystems, autonomous trucking, V2X tech',
    deliverables: [
      'Battery chemistry adoption timelines (LFP vs. NMC)',
      'Subscription model viability analysis',
      'Used EV pricing volatility forecasts',
    ],
  },
  {
    icon: DeviceTabletIcon,
    title: 'Semiconductor & Electronics',
    focus: 'Chiplet design, compound semiconductors, 6G RF',
    deliverables: [
      'Fab capacity vs. demand gap analysis',
      'Geopolitical risk ratings for chip supply chains',
      'Edge AI processor benchmarking',
    ],
  },
  {
    icon: Square3Stack3DIcon,
    title: 'Agriculture',
    focus: 'Precision agtech, carbon farming, biofertilizers',
    deliverables: [
      'Drone vs. satellite imagery cost-benefit studies',
      'Regenerative agriculture ROI timelines',
      'Commodity price-shock early warning systems',
    ],
  },
  {
    icon: RocketLaunchIcon,
    title: 'Aerospace & Defense',
    focus: 'Hypersonics, MRO digitization, space logistics',
    deliverables: [
      'Aftermarket parts pricing elasticity models',
      'Counter-UAS technology competitive landscape',
      'Satellite constellation bandwidth demand forecasts',
    ],
  },
  {
    icon: GlobeAltIcon,
    title: 'ICT',
    focus: 'AI governance, quantum networking, post-5G',
    deliverables: [
      'Enterprise AI adoption pain point analysis',
      'Data sovereignty compliance cost projections',
      'Network-as-a-service monetization strategies',
    ],
  },
  {
    icon: CubeIcon,
    title: 'Packaging & Transport',
    focus: 'Reusable logistics, smart labels, bio-PET',
    deliverables: [
      'E-commerce packaging waste reduction solutions',
      'Pallet pooling economic models',
      'RFID vs. computer vision tracking accuracy tests',
    ],
  },
  {
    icon: BuildingOfficeIcon,
    title: 'Construction',
    focus: 'Modular housing, 3D printing, embodied carbon',
    deliverables: [
      'Cross-laminated timber vs. steel cost curves',
      'Migrant labor availability impact studies',
      'Disaster-resilient materials adoption rates',
    ],
  },
  {
    icon: BanknotesIcon,
    title: 'BFSI',
    focus: 'Embedded finance, parametric insurance, CBDCs',
    deliverables: [
      'Neobank churn rate predictors',
      'Climate risk underwriting models',
      'Real-time payments infrastructure gaps',
    ],
  },
];

const ReportCategories = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-18 bg-[#F3F3E0]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-[#183B4E} mb-12 text-center"
        >
          Industry Sectors
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {industryData.map((sector, idx) => (
            <motion.button
              key={sector.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-white group flex flex-col items-start gap-2 hover:bg-gray-100 transition-colors"
              onClick={() => setActive(idx)}
            >
              {/* <div className="flex gap-2"> */}
              <sector.icon className="h-10 w-10 text-gray-900 transform group-hover:scale-110 transition-transform" />

              <div className="text-[#183B4E] font-medium text-left">{sector.title}</div>
              {/* </div> */}
              <div className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                Click for details
              </div>
            </motion.button>
          ))}
        </div>
        <AnimatePresence>
          {active !== null && (() => {
            const Icon = industryData[active].icon;
            return (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
                onClick={() => setActive(null)}
              >
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white p-8 max-w-lg w-full rounded-none shadow-xl relative"
                  onClick={e => e.stopPropagation()}
                >
                  <button
                    className="absolute top-4 right-4 text-gray-400 hover:text-[#183B4E} text-2xl"
                    onClick={() => setActive(null)}
                    aria-label="Close"
                  >
                    ×
                  </button>
                  <div className="flex items-center mb-6">
                    <Icon className="h-10 w-10 text-[#183B4E} mr-4" />
                    <h3 className="text-2xl font-semibold text-[#183B4E}">
                      {industryData[active].title}
                    </h3>
                  </div>
                  <div className="mb-4">
                    <span className="font-medium text-lg text-gray-700">Focus:</span>
                    <span className="ml-2 text-gray-600">{industryData[active].focus}</span>
                  </div>
                  <div>
                    <span className="font-medium text-lg   text-gray-700">Key Deliverables:</span>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                      {industryData[active].deliverables.map((item, i) => (
                        <li key={i} className="text-gray-600">{item}</li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to='/contact'
                    className="mt-6 inline-block px-6 py-2 bg-[#27548A] text-white hover:bg-blue-500 transition-colors"
                    >Learn More</Link>
                </motion.div>
              </motion.div>
            );
          })()}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ReportCategories;
