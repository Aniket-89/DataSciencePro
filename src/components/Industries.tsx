import { motion } from 'framer-motion';
import { 
  FaIndustry, 
  FaHospital, 
  FaShoppingCart, 
  FaUniversity, 
  FaChartLine, 
  FaCar 
} from 'react-icons/fa';

const industries = [
  { name: 'Manufacturing', icon: FaIndustry },
  { name: 'Healthcare', icon: FaHospital },
  { name: 'Retail', icon: FaShoppingCart },
  { name: 'Education', icon: FaUniversity },
  { name: 'Finance', icon: FaChartLine },
  { name: 'Automotive', icon: FaCar },
];

const Industries = () => {
  return (
    <section id="industries" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Industries We Serve
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <industry.icon className="w-12 h-12 text-gray-900 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 text-center">{industry.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
