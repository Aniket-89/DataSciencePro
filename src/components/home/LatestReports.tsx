import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const reports = [
  'Livestock Animal Rehabilitation Services Market',
  'Margarine Market Size, Share & Trends Analysis Report Forecasts, 2025 - 2030',
  'Bio-based Isocyanate Market Forecasts, 2025 - 2030',
  'Decarbonization Market',
  'LNG Engine Market'
];

const LatestReports = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-light text-[#183B4E]">
              Latest Publications
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link
              to="/reports"
              className="text-[#183B4E] hover:text-gray-600 transition-colors"
            >
              View All Reports →
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reports.map((report, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-gray-50 group hover:bg-gray-100 transition-colors"
            >
              <Link
                to="/reports"
                className="block text-[#183B4E] group-hover:text-gray-600 transition-colors"
              >
                <h3 className="text-xl font-light mb-4">{report}</h3>
                <span className="text-sm">Read More →</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestReports;
