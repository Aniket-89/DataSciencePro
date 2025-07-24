import { motion } from "framer-motion";
import BookButton from "../BookButton";
import Button from "../Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="rounded-3xl shadow-sm m-2 min-h-[90vh] flex items-center relative overflow-hidden relative"
    >
      <div className="container mx-auto max-w-[1600px] px-4 py-16">
        <div className="w-full gap-12 justify-between items">
          <div className="z-50">
            <h1 className="text-hero text-black text-center leading-thin md:text-6xl font-normal text-primary mb-8">
              <div className="">
                Data-Driven Insights for <br />
                Smarter Decisions
              </div>
            </h1>
            <motion.div
              initial={{ opacity: 0.7, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="text-xl text-gray-700 mb-12 text-center"
            >
              Unlock actionable market intelligence tailored to your industry.
            </motion.div>
            {/* <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: 1.3,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              }}
              className="flex gap-4 justify-center"
            > */}
            <div className="flex gap-4 justify-center">
              <BookButton text={"Book a call"} />

              <Button to="/services" variant="outline" color="black">
                View Services
              </Button>
            </div>
            {/* </motion.div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
