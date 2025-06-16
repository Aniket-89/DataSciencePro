import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';

const reasons = [
  'Unmatched Depth & Accuracy',
  'Future-Focused Forecasting (10-Year Predictive Models)',
  'Real-Time Market Alerts via Dynamic Intelligence Hub',
  'Transparent Methodologies',
  'Scenario Planning Expertise',
  'Direct Access to Analysts',
  '24/5 Support',
  '100% Secure Transactions'
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-light text-gray-900">
            Why Choose Us
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start bg-white p-4 group hover:bg-gray-100 transition-colors"
            >
              <CheckIcon className="h-6 w-6 text-gray-900 mr-3 flex-shrink-0 transform group-hover:scale-110 transition-transform" />
              <span className="text-gray-700">{reason}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
