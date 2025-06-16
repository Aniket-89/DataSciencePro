import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ReportCTA = () => {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-light mb-6"
          >
            Need a Custom Research Report?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg mb-12"
          >
            Our analysts can create a tailored report specific to your industry needs and requirements.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            <Link
              to="/contact"
              className="px-8 py-3 bg-white text-gray-900 hover:bg-gray-100 transition-colors"
            >
              Request Custom Report
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 border border-white text-white hover:bg-white hover:text-gray-900 transition-colors"
            >
              Contact Sales
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReportCTA;
