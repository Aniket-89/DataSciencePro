import { motion } from "framer-motion";
import Threads from "../../blocks/Backgrounds/Threads/Threads";
import BookButton from "../BookButton";
import Button from "../Button";
// import SplitText from "../../blocks/TextAnimations/SplitText/SplitText";

const Hero = () => {
  return (
    <section
      id="home"
      className="rounded-3xl soft-shadow m-2 min-h-[90vh] flex items-center relative overflow-hidden relative"
    >
      <div className="absolute inset-0 -z-10 gradient-hero">
        <div style={{ width: "100%", height: "800px", position: "relative" }}>
          <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
        </div>
      </div>
      <div className="container mx-auto max-w-[1600px] px-4 py-16">
        <div className="w-full gap-12 justify-between items">
          <motion.div className="z-50">
            <h1 className="text-hero text-white text-center leading-thin md:text-6xl font-normal text-primary mb-8">
              <motion.div
                initial={{ opacity: 0, y: 300 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Data-Driven Insights for{" "}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 400 }}
                animate={{ opacity: 0.8, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Smarter Decisions
              </motion.div>
            </h1>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-xl text-gray-50 mb-12 text-center"
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
              <BookButton text={"Book a call"} delay={0.8} />

              <Button to="/services">View Services</Button>
            </div>
            {/* </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
