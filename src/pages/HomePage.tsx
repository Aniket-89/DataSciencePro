import Hero from '../components/home/Hero';
import CTA from '../components/CTA';
import ServicesOverview from '../components/home/ServicesOverview';
import IndustriesGrid from '../components/home/IndustriesGrid';
// import LatestReports from '../components/home/LatestReports';
import WhyChooseUs from '../components/home/WhyChooseUs';
import FastFacts from '../components/home/FastFacts';
import Testimonials from '../components/home/Testimonials';
import About from '../components/home/About';

const HomePage = () => {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <IndustriesGrid />
      {/* <LatestReports /> */}
      <About />
      <Testimonials />
      <WhyChooseUs />
\      <FastFacts />
      <CTA />
    </>
  );
};

export default HomePage;
