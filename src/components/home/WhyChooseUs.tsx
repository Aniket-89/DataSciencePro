import { motion } from 'framer-motion';
import { CheckBadgeIcon } from '@heroicons/react/24/outline';

const reasons = [
  'Unmatched Depth & Accuracy',
  'Primary Research-First Approach',
  'Emerging Markets Expertise',
  'Scenario Planning + Forecasting (10-year models)',
  'Data Triangulation from Verified Sources',
  'Strategic Frameworks for Decision-Making',
  'Customization at Scale',
  'Transparent, Evidence-Based Methodology'
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-light text-[#183B4E]">
            Why Clients Choose DATABITZY
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start p-4 bg-white group hover:bg-gray-100 transition-colors"
            >
              <CheckBadgeIcon className="h-6 w-6 text-[#183B4E] mr-3 flex-shrink-0 transform group-hover:scale-110 transition-transform" />
              <span className="text-gray-700">{reason}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
