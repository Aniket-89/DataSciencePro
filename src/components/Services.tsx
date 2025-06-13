import { motion } from 'framer-motion';
import { ChartBarIcon, CpuChipIcon, PresentationChartLineIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Data Analysis',
    description: 'Transform raw data into meaningful insights with our advanced analytics solutions.',
    icon: ChartBarIcon,
  },
  {
    title: 'Machine Learning',
    description: 'Implement cutting-edge ML models to automate and optimize your business processes.',
    icon: CpuChipIcon,
  },
  {
    title: 'Business Intelligence',
    description: 'Make data-driven decisions with our comprehensive BI solutions and dashboards.',
    icon: PresentationChartLineIcon,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <service.icon className="w-12 h-12 text-gray-900 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
