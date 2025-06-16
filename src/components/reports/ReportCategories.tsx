import { motion } from 'framer-motion';
import { INDUSTRY_SECTORS } from '../../types/reports';

const ReportCategories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-light text-gray-900 mb-12 text-center"
        >
          Industry Sectors
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {INDUSTRY_SECTORS.map((sector, index) => (
            <motion.button
              key={sector}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-4 bg-white text-left group hover:bg-gray-100 transition-colors"
            >
              <div className="font-light text-lg text-gray-900">{sector}</div>
              <div className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                View Reports →
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReportCategories;
