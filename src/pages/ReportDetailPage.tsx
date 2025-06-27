import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const TABS = [
  { key: 'description', label: 'Report Description' },
  { key: 'scope', label: 'Report Scope' },
  { key: 'methodology', label: 'Methodology' },
  { key: 'region', label: 'Major Region' },
];

const ReportDetailPage = () => {
  const { reportId } = useParams();
  const [report, setReport] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('description');

  

  useEffect(() => {
    const fetchReportBySlug = async () => {
      try {
        const reportsRef = collection(db, 'reports');
        const q = query(reportsRef, where('slug', '==', reportId));
        const snapshot = await getDocs(q);

        if (!snapshot.empty) {
          const doc = snapshot.docs[0];
          setReport(doc.data());
        } else {
          setReport(null);
        }
      } catch (err) {
        console.error('Error fetching report:', err);
        setReport(null);
      } finally {
        setLoading(false);
      }
    };

    fetchReportBySlug();
  }, [reportId]);

  if (loading) return <div className="p-8 text-center text-lg">Loading report...</div>;
  if (!report) return <div className="p-8 text-center text-lg">Report not found.</div>;

  return (
    <div className="w-full bg-[#F3F3E0] text-gray-900">
      <div className="flex gap-8 lg:p-8 p-2 mx-auto md:my-12 my-4 max-w-7xl">
        <div className="flex-1 min-w-0">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-xl md:text-3xl font-bold text-[#27548A] mb-2">{report.title}</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 bg-[#27548A] mb-8 mt-4">
              {TABS.map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`p-2 text-base text-left text-sm font-medium border-b-2 transition-all duration-200 focus:outline-none ${
                    activeTab === tab.key
                      ? 'border-[#DDA853] text-[#DDA853] bg-gray-50 shadow-sm'
                      : 'border-transparent text-gray-50 hover:bg-blue-400'
                  }`}
                  style={{ borderRadius: 0 }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="bg-white p-2 lg:p-12 min-h-[400px] rounded-none shadow-sm">
              {activeTab === 'description' && (
                <div className="animate-fadein">
                  <p className="mb-6 text-gray-700 text-lg">{report.overview}</p>
                  <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Executive Summary</h2>
                    <p>{report.executiveSummary}</p>
                  </section>
                  <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Drivers, Restraints, Opportunities</h2>
                    <ul className="list-disc ml-6">
                      <li><strong>Drivers:</strong> {report.droc?.drivers}</li>
                      <li><strong>Restraints:</strong> {report.droc?.restraints}</li>
                      <li><strong>Opportunities:</strong> {report.droc?.opportunities}</li>
                      <li><strong>Challenges:</strong> {report.droc?.challenges}</li>
                    </ul>
                  </section>
                  <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Segmentation</h2>
                    <ul className="list-disc ml-6">
                      {report.segmentation &&
                        Object.entries(report.segmentation).map(([key, value]) => (
                          <li key={key}>
                            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{' '}
                            {Array.isArray(value) ? value.join(', ') : String(value)}
                          </li>
                        ))}
                    </ul>
                  </section>
                  <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Key Players</h2>
                    <ul className="list-disc ml-6">
                      {report.players?.map((p: string, i: number) => <li key={i}>{p}</li>)}
                    </ul>
                  </section>
                  <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Recent Developments</h2>
                    <ul className="list-disc ml-6">
                      {report.recentDevelopments?.map((d: string, i: number) => <li key={i}>{d}</li>)}
                    </ul>
                  </section>
                  <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Regional Outlook</h2>
                    <ul className="list-disc ml-6">
                      {report.regionalOutlook &&
                        Object.entries(report.regionalOutlook).map(([region, outlook]) => (
                          <li key={region}>
                            <strong>{region}:</strong> {String(outlook)}
                          </li>
                        ))}
                    </ul>
                  </section>
                </div>
              )}

              {activeTab === 'scope' && (
                <div className="animate-fadein">
                  <table className="border-2 lg:p-4 w-full" cellPadding="8">
                    <thead>
                      <tr className="bg-yellow-300 text-black font-semibold">
                        <th>Attribute</th>
                        <th>Details</th>
                      </tr>
                    </thead>
                    <tbody className="bg-[#F3F3E0]">
                      <tr><td>Market Size (2025)</td><td>USD XX.X million</td></tr>
                      <tr><td>Revenue Forecast (2034)</td><td>USD XX.X million</td></tr>
                      <tr><td>Growth Rate</td><td>CAGR of XX.X% (2025–2034)</td></tr>
                      <tr><td>Base Year</td><td>2024</td></tr>
                      <tr><td>Historical Data</td><td>2020–2023</td></tr>
                      <tr><td>Forecast Period</td><td>2025–2034</td></tr>
                      <tr><td>Quantitative Units</td><td>Revenue in USD million/billion, CAGR</td></tr>
                      <tr><td>Report Coverage</td><td>Revenue forecast, trends, competitive analysis, and growth drivers</td></tr>
                      <tr><td>Segments Covered</td><td>-</td></tr>
                      <tr><td>Regional Scope</td><td>North America, Europe, Asia-Pacific, Latin America, Middle East & Africa</td></tr>
                      <tr><td>Country Scope</td><td>U.S., Canada, Mexico, Germany, UK, France, China, India, Japan, South Korea, Brazil, Saudi Arabia, UAE</td></tr>
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === 'methodology' && (
                <div className="animate-fadein">
                  <h2 className="text-2xl font-bold mb-6 text-[#27548A]">Our Research Methodology</h2>
                  <div className="space-y-4 text-gray-700">
                    <div>
                      <h3 className="text-xl font-semibold">1.2 Secondary Research</h3>
                      <p>
                        Our team conducts secondary research using trusted sources to identify market trends and gather supporting data. These include:
                        company filings, regulatory bodies, national stats, and paid databases.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">1.3 Primary Research</h3>
                      <p>
                        Interviews with stakeholders (executives, suppliers, consultants) validate and enhance our findings through real-world insight.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">1.4 Forecasting Methods</h3>
                      <p>
                        We use forecasting models, historical data, and expert validation to estimate trends and values for future market growth.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'region' && (
                <div className="animate-fadein">
                  <h2 className="text-2xl font-bold text-[#27548A] mb-6">Regions & Countries Covered</h2>
                  <table className="min-w-full table-auto border border-gray-300 text-left text-sm text-gray-700">
                    <thead className="bg-yellow-300 text-black font-semibold">
                      <tr>
                        <th className="px-4 py-3 border">Region</th>
                        <th className="px-4 py-3 border">Countries Covered</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="border px-4 py-2">North America</td><td className="border px-4 py-2">U.S., Canada, Mexico, Others</td></tr>
                      <tr><td className="border px-4 py-2">Europe</td><td className="border px-4 py-2">Germany, UK, France, Others</td></tr>
                      <tr><td className="border px-4 py-2">Asia Pacific</td><td className="border px-4 py-2">China, India, Japan, South Korea, Others</td></tr>
                      <tr><td className="border px-4 py-2">Central & South America</td><td className="border px-4 py-2">Brazil, Argentina, Colombia, Others</td></tr>
                      <tr><td className="border px-4 py-2">Middle East & Africa</td><td className="border px-4 py-2">Saudi Arabia, UAE, Others</td></tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportDetailPage;
