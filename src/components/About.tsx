import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[400px] w-full">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Team collaboration"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gray-900/10"></div>
            </div>
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-gray-100 -z-10"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">About Us</h2>
            <p className="text-lg text-gray-600 mb-6">
              DataSciencePro is a leading data science consultancy dedicated to helping businesses
              harness the power of their data. With our expert team of data scientists and analysts,
              we transform complex data challenges into actionable insights.
            </p>
            <p className="text-lg text-gray-600">
              Our approach combines cutting-edge technology with deep industry expertise,
              ensuring that every solution we deliver creates real business value.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
