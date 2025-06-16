import ReportHero from '../components/reports/ReportHero';
import ReportCategories from '../components/reports/ReportCategories';
import ReportGrid from '../components/reports/ReportGrid';
import ReportCTA from '../components/reports/ReportCTA';

const ReportsPage = () => {
  return (
    <div className="pt-16">
      <ReportHero />
      <ReportCategories />
      <ReportGrid />
      <ReportCTA />
    </div>
  );
};

export default ReportsPage;
