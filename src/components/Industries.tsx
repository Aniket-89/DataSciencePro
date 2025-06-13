import { motion } from 'framer-motion';
import { 
  FaIndustry, 
  FaHospital, 
  FaShoppingCart, 
  FaChartLine, 
} from 'react-icons/fa';

const industries = [
    { name: 'Healthcare', icon: FaHospital },
    { name: 'Finance', icon: FaChartLine },
    { name: 'E-commerce', icon: FaShoppingCart },
    { name: 'Manufacturing', icon: FaIndustry },
];

const Industries = () => {
  return (
    <section id="industries" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-semibold text-gray-900 mb-4">Industries We've Worked With</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Diverse experience across various industries, delivering tailored data science solutions.
          </p>
        </motion.div>
        <div className="flex flex-wrap gap-16 max-w-5xl justify-between mx-auto">
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
