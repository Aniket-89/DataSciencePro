import Banner from '../components/about/Banner';
import Brief from '../components/about/Brief';
import Founders from '../components/about/Founders';
import Team from '../components/about/Team';
import WhatWeDo from '../components/about/WhatWeDo';
import Stats from '../components/about/Stats';
import WhyChooseUs from '../components/about/WhyChooseUs';
import CTA from '../components/CTA';

const AboutPage = () => {
  return (
    <div className="pt-16">
      <Banner />
      <Brief />
      <WhatWeDo />
      <Stats />
      <WhyChooseUs />
      <Founders />
      <Team />
      <CTA />
    </div>
  );
};

export default AboutPage;
