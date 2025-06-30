import Hero from "../components/home/Hero";
import CTA from "../components/CTA";
import ServicesOverview from "../components/home/ServicesOverview";
import IndustriesGrid from "../components/home/IndustriesGrid";
import LatestReports from "../components/home/LatestReports";
import WhyChooseUs from "../components/home/WhyChooseUs";
import FastFacts from "../components/home/FastFacts";
import Testimonials from "../components/home/Testimonials";
import About from "../components/home/About";

const HomePage = () => {
  return (
    <>
      <Hero />
      {/* <h1 className="text-h1 max-w-7xl font-bold text-left mx-auto">
        Our cutting-edge research, predictive analytics, and expert perspectives
        empower businesses to navigate trends, outpace competitors, and seize
        growth opportunities.
      </h1> */}
      <ServicesOverview />
      <IndustriesGrid />
      <About />
      <FastFacts />
      <Testimonials />
      <WhyChooseUs />
      <LatestReports />
      <CTA />
    </>
  );
};

export default HomePage;
