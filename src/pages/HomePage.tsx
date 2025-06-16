import Hero from '../components/Hero';
import Services from '../components/Services';
import Experience from '../components/Experience';
import Testimonials from '../components/Testimonials';
import Industries from '../components/Industries';
import About from '../components/About';
import Contact from '../components/Contact';
import CTA from '../components/CTA';


const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Experience />
      <Testimonials />
      <Industries />
      <Contact />
      <CTA />
    </>
  );
};

export default HomePage;
