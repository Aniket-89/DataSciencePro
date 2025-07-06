import Brief from "../components/about/Brief";
import Founders from "../components/about/Founders";
// import Team from '../components/about/Team';
import WhatWeDo from "../components/about/WhatWeDo";
import Stats from "../components/about/Stats";
import WhyChooseUs from "../components/about/WhyChooseUs";
import CTA from "../components/CTA";
import FAQ from "../components/about/FAQ";
import TopBanner from "../components/TopBanner";

const AboutPage = () => {
  return (
    <div className="">
      <TopBanner title="Know More About Us" />
      <Brief />
      <WhatWeDo />
      <Stats />
      <WhyChooseUs />
      <Founders />
      {/* <Team /> */}
      <FAQ />
      <CTA />
    </div>
  );
};

export default AboutPage;
