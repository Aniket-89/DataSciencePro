import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { Dashboard } from '../../assets/assets';

const Hero = () => {
  return (
    <section id="home" className="min-h-[90vh] w-full flex items-center py-32 bg-[#F3F3E0] relative overflow-hidden relative">
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-12 justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl text-[#183B4E] leading-thin md:text-6xl font-normal text-primary mb-8 font-sans">
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
                className="inline-block bg-[#27548A] text-white font-normal px-4 lg:px-8 py-3 hover:bg-blue-500 transition-all duration-300 cursor-pointer"
              >
                Book a Call
              </RouterLink>
              <RouterLink
                to="/services"
                className="inline-block bg-white text-gray-900 font-normal px-2 lg:px-8 py-3 border-2 border-[#183B4E] hover:bg-[#183B4E] hover:text-white transform transition-all duration-300 cursor-pointer"
              >
                View Services
              </RouterLink>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-fit lg:h-[360px] bg-transparent w-auto overflow-hidden rounded-lg">
              <img
                src={Dashboard}
                alt="Data Analytics Visualization"
                className="object-contain w-full h-auto"
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
