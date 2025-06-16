import { motion } from 'framer-motion';

const ReportHero = () => {
  return (
    <section className="relative bg-gray-900 text-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-light mb-6"
          >
            Market Intelligence Reports
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-300 mb-8"
          >
            Access comprehensive industry analyses, market forecasts, and strategic insights
            across multiple sectors.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <input
              type="search"
              placeholder="Search reports by industry, technology, or market..."
              className="w-full max-w-xl px-6 py-3 text-gray-900 bg-white"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReportHero;
