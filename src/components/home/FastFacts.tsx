import { motion } from 'framer-motion';

const stats = [
  { icon: '📊', value: '90%', label: 'Primary Research-Driven' },
  { icon: '🌐', value: '200+', label: 'Industries Covered Annually' },
  { icon: '🔁', value: '30%', label: 'Repeat Clients' },
  { icon: '🧠', value: '500K+', label: 'Professional Survey Panel' },
  { icon: '📞', value: '100%', label: 'Free Analyst Briefing Included' }
];

const FastFacts = () => {
  return (
    <section className="py-24 bg-[#F3F3E0]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-medium text-[#183B4E]">
            Quick Facts About DATABITZY
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-8 transition-colors"
            >
              <div className="text-4xl mb-4 transform transition-transform">
                {stat.icon}
              </div>
              <div className="text-5xl font-bold text-[#183B4E] mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-xl">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FastFacts;
