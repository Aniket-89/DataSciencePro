import { useParams, Link } from 'react-router-dom';
import { industryReports } from '../data/industryReports';

const ReportsListPage = () => {
  const { slug } = useParams();
  const reports = industryReports[slug as keyof typeof industryReports] || [];

  if (!reports.length) {
    return <div className="p-8 text-center text-lg">No reports found for this industry.</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Reports in {reports[0]?.industry}</h2>
      <ul className="grid gap-6">
        {reports.map((report, idx) => (
          <li key={idx} className="bg-white p-6 rounded-none shadow-sm border border-gray-200 flex flex-col gap-2">
            <Link
              to={`/reports/${slug}/${report.slug}`}
              className="text-lg font-semibold text-[#27548A] hover:underline"
            >
              {report.title}
            </Link>
            <p className="text-gray-700 text-sm mb-2 line-clamp-3">{report.overview}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReportsListPage;
