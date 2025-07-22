import { motion } from "framer-motion";
import BookButton from "./BookButton";
import Button from "./Button";

const CTA = () => {
  return (
    <div className="w-full bg-[#313335] py-1 rounded-t-3xl">
      <section className="py-24 bg-white rounded-3xl m-2">
        <div className=" mx-auto px-4">
          <div className="max-w-7xl font-semibold text-h3 mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-h3 font-bold text-[#183B4E] mb-6"
            >
              Ready to Transform Your Data Strategy?
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-gray-400  mb-12 mx-auto"
            >
              Schedule a consultation with our experts or{" "}
              <span className="text-gray-500">
                reach out to learn more about how{" "}
              </span>
              <span className="text-gray-600">
                we can help your business succeed.
              </span>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-6 items-center">
              <BookButton text="Book a Call" gradient={false} />

              <Button to="/contact" color="[#DDA853]" vibe="dark">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTA;
