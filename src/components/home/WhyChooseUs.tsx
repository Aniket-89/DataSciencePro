import { motion } from "framer-motion";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";

const reasons = [
  "Unmatched Depth & Accuracy",
  "Primary Research-First Approach",
  "Emerging Markets Expertise",
  "Scenario Planning + Forecasting (10-year models)",
  "Data Triangulation from Verified Sources",
  "Strategic Frameworks for Decision-Making",
  "Customization at Scale",
  "Transparent, Evidence-Based Methodology",
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 max-w-5xl m-2 2xl:mx-auto bg-white">
      <div className="flex flex-col md:flex-row gap-8 w-full justify-between">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-left mb-16 md:w-fit"
        >
          <h2 className="text-h3 font-normal text-[#183B4E]">
            Why Clients Choose{" "}
            <span className="block text-h1 font-bold">DATAbitzy</span>
          </h2>
        </motion.div>
        <div className="grid gap-2 mx-auto bg-[#00A0DC] p-4 md:p-8 rounded-3xl shadow-sm">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.01 }}
              viewport={{ once: true }}
              className="flex group transition-colors font-semibold"
            >
              <CheckBadgeIcon className="h-6 w-6 text-white mr-3 flex-shrink-0 transform group-hover:scale-110 transition-transform" />
              <span className="text-white text-sm md:text-md lg:text-lg">
                {reason}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
