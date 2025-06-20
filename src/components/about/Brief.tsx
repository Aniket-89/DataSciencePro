import { motion } from 'framer-motion';

const Brief = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto space-y-12"
        >
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative p-8 bg-transparent "
          ><h4 className='text-2xl md:text-3xl font-semibold text-center mb-6'>Who We Are</h4>
            <div className="absolute top-0 right-0 transform -translate-y-1/2 -translate-x-6">
              {/* <svg className="w-12 h-12 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg> */}
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              DATABITZY is a powerful service-driven platform that delivers data-powered insights, market intelligence, 
              and tailored business solutions. We help organizations of all sizes—from agile startups to established enterprises—make smarter, 
              faster, and more confident decisions in a rapidly evolving marketplace. 
              <br />
              <br />
              Our platform offers a wide range of services including 
              custom market research reports, competitive analysis, customer behavior insights, business forecasting, and end-to-end data solutions. 
              At DATABITZY, we transform data into direction—empowering your business to lead with clarity and precision.
            </p>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative p-8 bg-[#F3F3E0]"
          > <h4 className='text-2xl font-semibold text-gray-900 mb-4'>
            Values
          </h4>
            <div className="absolute top-0 left-0 transform -translate-y-1/2 translate-x-6">
              <svg className="w-12 h-12 text-[#27548A]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="text-lg text-gray-700 font-medium leading-relaxed">
              At DataSciencePro, we believe in the transformative power of data. Founded in 2018, 
              we've been at the forefront of helping businesses harness their data potential through 
              advanced analytics and machine learning solutions.
            </p>
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative p-8 bg-[#F3F3E0]"
          ><h4 className='text-2xl font-semibold text-gray-900 mb-4'>Mission</h4>
            <div className="absolute top-0 right-0 transform -translate-y-1/2 -translate-x-6">
              <svg className="w-12 h-12 text-[#27548A]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
Our mission is to deliver unparalleled research quality and consulting excellence, equipping clients with the tools to make confident, evidence-based decisions in an ever-evolving business landscape.            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Brief;
