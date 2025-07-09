import { motion } from "framer-motion";
import CountUp from "../../blocks/TextAnimations/CountUp/CountUp";

const stats = [
  { value: 90, symbol: "%", label: "Primary Research-Driven" },
  { value: 200, symbol: "+", label: "Industries Covered Annually" },
  { value: 30, symbol: "%", label: "Repeat Clients" },
  { value: 500, symbol: "K+", label: "Professional Survey Panel" },
  {
    value: 100,
    symbol: "%",
    label: "Free Analyst Briefing Included",
  },
];

const FastFacts = () => {
  return (
    <section className="py-8 lg:py-20 bg-[#183B4E] m-2 my-12 rounded-3xl max-w-[1600px] 2xl:mx-auto">
      <div className="px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-h3 font-medium text-white">
            Quick Facts About DATABITZY
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-8 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4 transition-colors">
              {/* <div className="text-4xl mb-4 transform transition-transform">
                {stat.icon}
              </div> */}
              <CountUp
                from={0}
                to={stat.value}
                separator=","
                direction="up"
                duration={0.5}
                className="count-up-text text-h1 mb-4 font-semibold text-[#DDA853] transform transition-transform"
              />
              <span className="text-h3 text-white font-semibold">
                {stat.symbol}
              </span>
              <div className="text-gray-100 text-sm md:text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FastFacts;
