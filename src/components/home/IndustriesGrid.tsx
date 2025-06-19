import { motion } from 'framer-motion';
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

const industries = [
  { icon: BuildingStorefrontIcon, name: 'Industrial Automation' },
  { icon: BeakerIcon, name: 'Food, Beverages & Nutrition' },
  { icon: BoltIcon, name: 'Energy & Power' },
  { icon: ShoppingBagIcon, name: 'Consumer & Retail' },
  { icon: TruckIcon, name: 'Automotive' },
  { icon: DeviceTabletIcon, name: 'Semiconductors & Electronics' },
  { icon: Square3Stack3DIcon, name: 'Agriculture' },
  { icon: RocketLaunchIcon, name: 'Aerospace & Defense' },
  { icon: GlobeAltIcon, name: 'ICT' },
  { icon: CubeIcon, name: 'Packaging & Transport' },
  { icon: BuildingOfficeIcon, name: 'Construction' },
  { icon: BanknotesIcon, name: 'BFSI' }
];

const IndustriesGrid = () => {
  return (
    <section className="py-24 bg-[#F3F3E0]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-semibold text-[#183B4E] mb-4">
            Industries We Cover
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto place-content-center">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-white group flex items-center gap-2 hover:bg-gray-100 transition-colors"
            >
            <industry.icon className="h-10 w-10 text-gray-900 transform group-hover:scale-110 transition-transform" />

              <h3 className="text-[#183B4E] font-light">
                {industry.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesGrid;
