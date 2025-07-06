import { motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/24/outline";

const reasons = [
  "Unmatched Depth & Accuracy",
  "Future-Focused Forecasting (10-Year Predictive Models)",
  "Real-Time Market Alerts via Dynamic Intelligence Hub",
  "Transparent Methodologies",
  "Scenario Planning Expertise",
  "Direct Access to Analysts",
  "24/5 Support",
  "100% Secure Transactions",
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-gray-50 max-w-7xl mx-auto m-2 rounded-3xl">
      <div className="px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-light text-gray-900">Why Choose Us</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto bg-blue-400 rounded-3xl soft-shadow grid grid-cols-1 md:grid-cols-2 gap-2 p-4 md:p-8 lg:p-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start group "
            >
              <CheckIcon className="h-6 w-6 text-gray-900 mr-3 flex-shrink-0 " />
              <span className="text-white font-bold text-lg">{reason}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
