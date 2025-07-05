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

const industries = [
  { icon: BuildingStorefrontIcon, name: "Industrial Automation" },
  { icon: BeakerIcon, name: "Food, Beverages & Nutrition" },
  { icon: BoltIcon, name: "Energy & Power" },
  { icon: ShoppingBagIcon, name: "Consumer & Retail" },
  { icon: TruckIcon, name: "Automotive" },
  { icon: DeviceTabletIcon, name: "Semiconductors & Electronics" },
  { icon: CubeIcon, name: "Packaging & Transport" },
  { icon: RocketLaunchIcon, name: "Aerospace & Defense" },
  { icon: GlobeAltIcon, name: "ICT" },
  { icon: Square3Stack3DIcon, name: "Agriculture" },
  { icon: BuildingOfficeIcon, name: "Construction" },
  { icon: BanknotesIcon, name: "BFSI" },
];

const IndustriesGrid = () => {
  return (
    <section className="py-12 lg:py-16 bg-[#F3F3E0] m-4 2xl:mx-auto soft-shadow rounded-3xl max-w-[1600px] ">
      <div className="px-4">
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
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
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
