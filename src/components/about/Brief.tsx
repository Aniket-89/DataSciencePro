import { motion } from 'framer-motion';

const Brief = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto space-y-12"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative p-8 bg-gray-100"
          > <h4 className='text-2xl font-semibold text-gray-900 mb-4'>
            Who We Are
          </h4>
            <div className="absolute top-0 left-0 transform -translate-y-1/2 translate-x-6">
              <svg className="w-12 h-12 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              At DataSciencePro, we believe in the transformative power of data. Founded in 2018, 
              we've been at the forefront of helping businesses harness their data potential through 
              advanced analytics and machine learning solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative p-8 bg-gray-100"
          ><h4 className='text-2xl font-semibold text-gray-900 mb-4'>Mission</h4>
            <div className="absolute top-0 right-0 transform -translate-y-1/2 -translate-x-6">
              <svg className="w-12 h-12 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our mission is to democratize data science, making advanced analytics accessible to 
              businesses of all sizes. With a team of expert data scientists and analysts, we 
              deliver actionable insights that drive real business value.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Brief;
