import Banner from '../components/about/Banner';
import Brief from '../components/about/Brief';
import Founders from '../components/about/Founders';
import Team from '../components/about/Team';

const AboutPage = () => {
  return (
    <div className="pt-16">
      <Banner />
      <Brief />
      <Founders />
      <Team />
    </div>
  );
};

export default AboutPage;
