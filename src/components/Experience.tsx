import { motion } from 'framer-motion';
import { FaClock, FaProjectDiagram, FaSmile, FaAws } from 'react-icons/fa';
import { 
  SiPython, 
  SiR, 
  SiTensorflow
} from 'react-icons/si';

const statsData = [
  {
    icon: FaClock,
    value: '8+',
    label: 'Years of Experience',
  },
  {
    icon: FaProjectDiagram,
    value: '150+',
    label: 'Projects Completed',
  },
  {
    icon: FaSmile,
    value: '95%',
    label: 'Client Satisfaction',
  },
];

const techStack = [
  {
    icon: SiPython,
    label: 'Python',
    color: '#3776AB',
  },
  {
    icon: SiR,
    label: 'R',
    color: '#276DC3',
  },
  {
    icon: SiTensorflow,
    label: 'TensorFlow',
    color: '#FF6F00',
  },
  {
    icon: FaAws,
    label: 'AWS',
    color: '#232F3E',
  },
];

const Experience = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-semibold text-gray-900 mb-4">Experience & Expertise</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Delivering excellence in data science solutions with proven expertise and cutting-edge technology
          </p>
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >

              <h3 className="text-5xl font-medium text-gray-900 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 group"
            >
              <div className="inline-block p-4 bg-white transition-colors duration-300 mb-4">
                <tech.icon 
                  className="w-12 h-12 transition-transform duration-300 group-hover:scale-110" 
                  style={{ color: tech.color }}
                />
              </div>
              <p className="text-gray-900 font-medium">{tech.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
