import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { Placeholder } from "../assets/assets";
import Loader from "../components/Loader";

type Metrics = {
  marketSize2025?: number;
  revenueForecast2034?: number;
  growthRate?: number;
  baseYear?: number;
  historicalData?: string;
  forecastPeriod?: string;
  quantitativeUnits?: string;
  reportCoverage?: string;
  segmentsCovered?: string;
  regionalScope?: string;
  countryScope?: string;
};

type Report = {
  title: string;
  industry: string;
  industryslug: string;
  content: string; // HTML string
  thumbnail: string;
  createdAt?: string;
  metrics?: Metrics;
  regions?: { name: string; countries: string }[];
};

const TABS = [
  { key: "description", label: "Report Description" },
  { key: "scope", label: "Report Scope" },
  { key: "methodology", label: "Methodology" },
  { key: "region", label: "Major Region" },
];

const ReportDetailPage = () => {
  const { reportId } = useParams();
  const [activeTab, setActiveTab] = useState("description");
  const [report, setReport] = useState<Report | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const docRef = doc(db, "reports", reportId!);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setReport(docSnap.data() as Report);
        } else {
          setError("Report not found");
        }
      } catch (err: any) {
        setError(err.message || "Error fetching report");
      } finally {
        setLoading(false);
      }
    };

    if (reportId) fetchReport();
  }, [reportId]);

  if (loading) return <Loader />;
  if (error) return <div className="p-8 text-red-600">{error}</div>;

  const m = report?.metrics || {};

  // helper: return XX if null/undefined
  const safe = (val: any, suffix = "") => {
    if (val === null || val === undefined || val === "") return "XX";
    return `${val}${suffix}`;
  };

  return (
    <div className="max-w-5xl mt-24 mx-auto p-2">
      {/* Thumbnail */}
      <div className="rounded-3xl overflow-hidden aspect-[16/9]">
        <img
          src={report?.thumbnail ? report.thumbnail : Placeholder}
          alt=""
          className="object-cover h-full w-full"
        />
      </div>

      {/* Meta info */}
      <div className="flex gap-4">
        <span>7 min read</span>
        <span>Jan 23</span>
      </div>

      {/* Title */}
      <h1 className="text-h3 mt-8 font-bold mb-2 text-[#DDA853]">
        {report?.title}
      </h1>

      {/* Industry */}
      <div className="text-gray-500 mb-6">
        <span className="mr-2">Industry:</span>
        <span className="font-medium">{report?.industry}</span>
      </div>

      {/* Tabs */}
      <div className="grid p-2 shadow-sm grid-cols-2 gap-2 sm:grid-cols-4 w-fit bg-blue-50 rounded-2xl mb-8 mt-4">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`p-2 text-base text-left text-sm font-medium rounded-2xl border-b-2 transition-all duration-200 focus:outline-none
                      ${
                        activeTab === tab.key
                          ? "border-[#DDA853] text-[#DDA853] bg-gray-50 shadow-sm"
                          : "border-transparent text-[#183B4E] hover:bg-blue-400"
                      }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Description */}
      {activeTab === "description" && (
        <div
          className="report prose prose-lg max-w-none text-red-500"
          dangerouslySetInnerHTML={{ __html: report?.content || "" }}
        />
      )}

      {/* Scope */}
      {activeTab === "scope" && (
        <div className="animate-fadein overflow-x-auto">
          <table className="w-full border-collapse rounded-xl shadow-md overflow-hidden">
            <thead>
              <tr className="bg-blue-900 text-white">
                <th className="p-4 text-left font-semibold">Attribute</th>
                <th className="p-4 text-left font-semibold">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-100 hover:bg-gray-200">
                <td className="p-4 font-medium">Market Size (2025)</td>
                <td className="p-4">
                  USD {safe(m.marketSize2025, " million")}
                </td>
              </tr>
              <tr className="bg-white hover:bg-gray-100">
                <td className="p-4 font-medium">Revenue Forecast (2034)</td>
                <td className="p-4">
                  USD {safe(m.revenueForecast2034, " million")}
                </td>
              </tr>
              <tr className="bg-gray-100 hover:bg-gray-200">
                <td className="p-4 font-medium">Growth Rate</td>
                <td className="p-4">
                  CAGR of {safe(m.growthRate, "%")} (2025–2034)
                </td>
              </tr>
              <tr className="bg-white hover:bg-gray-100">
                <td className="p-4 font-medium">Base Year</td>
                <td className="p-4">{safe(m.baseYear)}</td>
              </tr>
              <tr className="bg-gray-100 hover:bg-gray-200">
                <td className="p-4 font-medium">Historical Data</td>
                <td className="p-4">{safe(m.historicalData)}</td>
              </tr>
              <tr className="bg-white hover:bg-gray-100">
                <td className="p-4 font-medium">Forecast Period</td>
                <td className="p-4">{safe(m.forecastPeriod)}</td>
              </tr>
              <tr className="bg-gray-100 hover:bg-gray-200">
                <td className="p-4 font-medium">Quantitative Units</td>
                <td className="p-4">{safe(m.quantitativeUnits)}</td>
              </tr>
              <tr className="bg-white hover:bg-gray-100">
                <td className="p-4 font-medium">Report Coverage</td>
                <td className="p-4">{safe(m.reportCoverage)}</td>
              </tr>
              <tr className="bg-gray-100 hover:bg-gray-200">
                <td className="p-4 font-medium">Segments Covered</td>
                <td className="p-4">{safe(m.segmentsCovered)}</td>
              </tr>
              <tr className="bg-white hover:bg-gray-100">
                <td className="p-4 font-medium">Regional Scope</td>
                <td className="p-4">{safe(m.regionalScope)}</td>
              </tr>
              <tr className="bg-gray-100 hover:bg-gray-200">
                <td className="p-4 font-medium">Country Scope</td>
                <td className="p-4">{safe(m.countryScope)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* Methodology */}
      {activeTab === "methodology" && (
        <div className="animate-fadein">
          <section className="lg:py-12 p-2 lg:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[#27548A] mb-8">
                Our Research Methodology
              </h2>
              <div className="mb-10">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  1.2 Secondary Research
                </h3>
                <div className="pl-1">
                  <p className="text-gray-700 mb-2">
                    Our team conducts secondary research using trusted sources
                    to identify market trends and gather supporting data. These
                    sources include:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-2">
                    <li>Company filings and presentations</li>
                    <li>Government and regulatory bodies</li>
                    <li>National statistics agencies</li>
                    <li>Industry journals and paid databases</li>
                  </ul>
                  <p className="text-gray-700">
                    This step helps us build the initial foundation of the
                    report.
                  </p>
                </div>
              </div>
              <div className="mb-10">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  1.3 Primary Research
                </h3>
                <p className="text-gray-700 pl-1">
                  We conduct interviews with key stakeholders across the
                  industry—such as executives, suppliers, channel partners, and
                  consultants. These interactions provide firsthand insights
                  into market performance, pricing strategies, competition, and
                  growth opportunities. Primary research also validates and
                  complements the secondary findings.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  1.4 Forecasting Methods
                </h3>
                <p className="text-gray-700 mb-2 pl-1">
                  We apply multiple forecasting models and tools to estimate
                  current and future market figures. These techniques use
                  historical trends, industry patterns, and insights from
                  experts to generate accurate market forecasts. All findings
                  are cross-verified by industry professionals to ensure
                  accuracy and relevance.
                </p>
                <p className="text-gray-700 pl-1">
                  The final step involves compiling the analyzed data into a
                  structured report, which is reviewed, finalized, and
                  distributed across various platforms.
                </p>
              </div>
            </div>
          </section>
        </div>
      )}
      {/* Major Region */}
      {activeTab === "region" && (
        <div className="animate-fadein">
          <section className="bg-white lg:py-12 lg:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[#27548A] mb-6">
                Regions & Countries Covered
              </h2>

              <div className="overflow-x-auto shadow-md rounded-lg">
                <table className="min-w-full border border-gray-300 text-left text-sm">
                  <thead className="bg-[#27548A] text-white">
                    <tr>
                      <th className="px-6 py-3 border border-gray-300">
                        Region
                      </th>
                      <th className="px-6 py-3 border border-gray-300">
                        Countries Covered
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-50 text-gray-700">
                    {report?.regions && report.regions.length > 0 ? (
                      report.regions.map(
                        (
                          region: { name: string; countries: string },
                          index: number
                        ) => (
                          <tr key={index} className="hover:bg-gray-100">
                            <td className="px-6 py-3 border border-gray-200 font-medium text-[#27548A]">
                              {region.name}
                            </td>
                            <td className="px-6 py-3 border border-gray-200">
                              {region.countries}
                            </td>
                          </tr>
                        )
                      )
                    ) : (
                      <tr>
                        <td
                          colSpan={2}
                          className="text-center py-4 text-gray-500"
                        >
                          No regions data available
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default ReportDetailPage;
