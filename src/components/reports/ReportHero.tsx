import { motion } from 'framer-motion';
import { GrainyGradient1 } from '../../assets/assets';

const ReportHero = () => {
  return (
    <section className="relative bg-transparent text-white py-24 overflow-hidden">
      <img src={GrainyGradient1} alt="" className='absolute bottom-0 left-0 object-cover -z-10'/>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-light mb-6 text-[#183B4E]"
          >
            Market Research Reports
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-700 mb-8"
          >
            Access comprehensive industry analyses, market forecasts, and strategic insights
            across multiple sectors.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ReportHero;
