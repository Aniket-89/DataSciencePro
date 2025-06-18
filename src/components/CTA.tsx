import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-light mb-6">
            Ready to Transform Your Data Strategy?
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            Schedule a consultation with our experts or reach out to learn more about how we can help your business succeed.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-[#27548A] font-normal text-white hover:bg-blue-400 transition-colors"
              >
                Book a Consultation
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border font-normal border-white text-white hover:bg-white hover:text-gray-900 transition-colors"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
