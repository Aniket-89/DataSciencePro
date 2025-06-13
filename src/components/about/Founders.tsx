import { motion } from 'framer-motion';
import type { FounderType } from '../../types/about';

const founders: FounderType[] = [
  {
    name: 'Anmol Sharma',
    designation: 'Chief Data Scientist & Co-founder',
    brief: 'Ph.D. in Machine Learning from MIT with 12+ years of experience in developing AI solutions for Fortune 500 companies. Specialized in deep learning and computer vision.',
    skills: ['Deep Learning', 'Computer Vision', 'Neural Networks', 'PyTorch'],
    image: '/founders/sarah.jpg'
  },
  {
    name: 'Tanya Sharma',
    designation: 'Senior ML Engineer & Co-founder',
    brief: 'Former Lead Data Architect at Google with extensive experience in building scalable data infrastructure. Expert in cloud computing and distributed systems.',
    skills: ['Cloud Architecture', 'Big Data', 'AWS', 'Kubernetes'],
    image: '/founders/michael.jpg'
  }
];

export default function Founders() {
  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl tracking-tight font-semibold text-gray-900">Our Founders</h2>
          <p className="mt-4 text-lg text-gray-500">Meet the minds behind our mission</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 shadow-sm"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/3">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full aspect-square object-cover grayscale"
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-xl font-light text-gray-900">{founder.name}</h3>
                  <p className="text-sm text-gray-600 mt-1 font-mono">{founder.designation}</p>
                  <p className="mt-4 text-gray-600">{founder.brief}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {founder.skills.map(skill => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-50 text-gray-600 text-sm font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
