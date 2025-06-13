import { motion } from 'framer-motion';
import { 
  FaIndustry, 
  FaHospital, 
  FaChartLine, 
  FaShoppingCart 
} from 'react-icons/fa';

const industries = [
  { 
    name: 'Healthcare',
    icon: FaHospital,
    description: 'Optimizing patient care through data-driven insights'
  },
  { 
    name: 'Finance',
    icon: FaChartLine,
    description: 'Advanced analytics for financial decision making'
  },
  { 
    name: 'E-commerce',
    icon: FaShoppingCart,
    description: 'Smart retail solutions powered by data'
  },
  { 
    name: 'Manufacturing',
    icon: FaIndustry,
    description: 'Improving efficiency with predictive analytics'
  }
];

const Industries = () => {
  return (
    <section id="industries" className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold text-center text-gray-900 mb-12"
        >
          Industries We Serve
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="bg-white p-6 rounded-full mb-6 group-hover:bg-gray-100 transition-colors duration-300">
                <industry.icon className="w-12 h-12 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{industry.name}</h3>
              <p className="text-gray-600">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
