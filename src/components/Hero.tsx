import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { Dashboard } from '../assets/assets';

const Hero = () => {
  return (
    <section id="home" className="min-h-[90vh] w-full flex items-center py-32 bg-gray-100 relative overflow-hidden relative">
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl leading-thin md:text-6xl font-normal text-primary mb-8 font-sans">
              Data-Driven Insights for
              <span className="text-[#27548A] text-5xl pl-2"> Smarter Decisions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Unlock actionable market intelligence tailored to your industry. Our cutting-edge research, predictive analytics, and expert perspectives empower businesses to navigate trends, outpace competitors, and seize growth opportunities.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex gap-4"
            >
              <RouterLink
                to="/contact"
                className="inline-block bg-[#27548A] text-white px-8 py-3 hover:bg-blue-500 transition-all duration-300 cursor-pointer"
              >
                Get Started
              </RouterLink>
              <RouterLink
                to="/services"
                className="inline-block bg-white text-gray-900 px-8 py-3 border-2 border-gray-900 hover:bg-gray-900 hover:text-white transform transition-all duration-300 cursor-pointer"
              >
                View Portfolio
              </RouterLink>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[320px] lg:h-[320px] w-auto overflow-hidden rounded-lg">
              <img
                src={Dashboard}
                alt="Data Analytics Visualization"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gray-900/10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
