import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="min-h-[90vh] w-full flex items-center py-32 bg-gray-100 relative overflow-hidden relative">
      <div className="container mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6">
              Transform Your Data into
              <span className="block text-gray-600">Actionable Insights</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Expert data science freelancer helping businesses unlock the power of their data through advanced analytics, machine learning, and business intelligence solutions.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex gap-4"
            >
              <RouterLink
                to="/contact"
                className="inline-block bg-gray-900 text-white px-8 py-3 hover:bg-gray-800 hover:scale-105 transform transition-all duration-300 cursor-pointer hover:shadow-lg"
              >
                Get Started
              </RouterLink>
              <RouterLink
                to="/services"
                className="inline-block bg-white text-gray-900 px-8 py-3 border-2 border-gray-900 hover:bg-gray-900 hover:text-white hover:scale-105 transform transition-all duration-300 cursor-pointer hover:shadow-lg"
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
            <div className="relative h-[400px] lg:h-[500px] w-full">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
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
