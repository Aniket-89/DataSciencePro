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
    <section className="py-24 bg-[#F3F3E0] m-2 my-12 rounded-3xl max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-medium text-[#183B4E]">
            Quick Facts About DATABITZY
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-8 transition-colors">
              {/* <div className="text-4xl mb-4 transform transition-transform">
                {stat.icon}
              </div> */}
              <CountUp
                from={0}
                to={stat.value}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text text-5xl mb-4 font-semibold text-[#183B4E] transform transition-transform"
              />
              <span className="text-2xl font-semibold">{stat.symbol}</span>
              <div className="text-gray-600 text-2xl">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FastFacts;
