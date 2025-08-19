import { motion } from "framer-motion";
import BookButton from "../BookButton";
import Button from "../Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="rounded-3xl shadow-sm m-2 min-h-[90vh] flex items-center relative overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay (optional for dark tint) */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className="container mx-auto max-w-[1600px] px-4 py-16 relative z-20">
        <div className="w-full gap-12 justify-between items">
          <div className="z-50">
            <h1 className="text-hero text-white text-center leading-thin md:text-6xl font-normal mb-8">
              Data-Driven Insights for <br />
              Smarter Decisions
            </h1>

            <motion.div
              initial={{ opacity: 0.7, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="text-xl text-gray-200 mb-12 text-center"
            >
              Unlock actionable market intelligence tailored to your industry.
            </motion.div>

            <div className="flex gap-4 justify-center">
              <BookButton text={"Book a call"} />

              <Button to="/services" variant="outline" color="white">
                View Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
