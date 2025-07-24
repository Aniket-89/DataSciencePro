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
import { Link } from "react-router-dom";

const industries = [
  {
    icon: BuildingStorefrontIcon,
    name: "Industrial Automation",
    slug: "industrial-automation",
  },
  {
    icon: BeakerIcon,
    name: "Food, Beverages & Nutrition",
    slug: "food-beverage",
  },
  { icon: BoltIcon, name: "Energy & Power", slug: "energy-power" },
  { icon: ShoppingBagIcon, name: "Consumer & Retail", slug: "consumer-retail" },
  { icon: TruckIcon, name: "Automotive", slug: "automotive" },
  {
    icon: DeviceTabletIcon,
    name: "Semiconductors & Electronics",
    slug: "semiconductor-electronics",
  },
  {
    icon: CubeIcon,
    name: "Packaging & Transport",
    slug: "packaging-transport",
  },
  {
    icon: RocketLaunchIcon,
    name: "Aerospace & Defense",
    slug: "aerospace-defense",
  },
  { icon: GlobeAltIcon, name: "ICT", slug: "ict" },
  { icon: Square3Stack3DIcon, name: "Agriculture", slug: "agriculture" },
  { icon: BuildingOfficeIcon, name: "Construction", slug: "construction" },
  { icon: BanknotesIcon, name: "BFSI", slug: "bfsi" },
];

const IndustriesGrid = () => {
  return (
    <section className="py-12 lg:py-16 bg-[#CACCCE] m-4 2xl:mx-auto soft-shadow rounded-3xl max-w-[1600px] ">
      <div className="px-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-h3 font-semibold text-white mb-4">
            Industries We Cover
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-6 max-w-6xl mx-auto place-content-center">
          {industries.map((industry, index) => (
            <Link to={`/reports?industry=${industry.slug}`} key={industry.name}>
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.5 }}
                // animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.01,
                  // ease: [0, 0.71, 0.2, 1.01],
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesGrid;
