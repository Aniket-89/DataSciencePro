import { motion } from "framer-motion";
import Button from "../Button";

const About = () => {
  return (
    <section id="about" className="pt-20 pb-12 md:pb-20 md:my-8 bg-white">
      <div className="mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 max-w-[1600px] mx-auto mb-16"
        >
          <h2 className="text-h3 font-semibold text-[#183B4E] mb-6">
            Who We Are
          </h2>
          <p
            className="text-lg text-justify
            text-gray-600 leading-relaxed mb-8"
          >
            DATABITZY is a powerful service-driven platform that delivers
            data-powered insights, market intelligence, and tailored business
            solutions. We help organizations of all sizes—from agile startups to
            established enterprises—make smarter, faster, and more confident
            decisions in a rapidly evolving marketplace. Our platform offers a
            wide range of services including custom market research reports,
            competitive analysis, customer behavior insights, business
            forecasting, and end-to-end data solutions. At DATABITZY, we
            transform data into direction—empowering your business to lead with
            clarity and precision.
          </p>
          <br />
          <Button to="/about" vibe="dark" color="blue-500">
            Learn more about us
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
