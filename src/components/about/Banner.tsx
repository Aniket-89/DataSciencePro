import { motion } from 'framer-motion';
import { GrainyGradient } from '../../assets/assets';

const Banner = () => {
  return (
    <section className="overflow-hidden py-24 md:py-32 relative bg-no-repeat bg-cover bg-center">
        <img src={GrainyGradient} alt="" className='w-full h-fit bg-cover absolute top-0 left-0 -z-50 opacity-85'/>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-normal text-white mb-6"
          >
            Know More About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-50 leading-relaxed"
          >
            Transforming businesses through data-driven insights and innovative solutions
          </motion.p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </section>
  );
};

export default Banner;
