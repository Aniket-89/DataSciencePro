import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { METRICS_TEMPLATE } from "../assets/assets";
import { db } from "../firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import TinyEditor from "../components/TinyEditor";

const INDUSTRY_OPTIONS = [
  { label: "Automotive", slug: "automotive" },
  { label: "Agriculture", slug: "agriculture" },
  { label: "Chemicals", slug: "chemicals" },
  { label: "Construction", slug: "construction" },
  { label: "Semiconductor & Electronics", slug: "semiconductor-electronics" },
  { label: "Aerospace & Defense", slug: "aerospace-defense" },
  { label: "BFSI", slug: "bfsi" },
  { label: "ICT", slug: "ict" },
  { label: "Energy & Power", slug: "energy-power" },
  { label: "Consumer & Retail", slug: "consumer-retail" },
  { label: "Packaging & Transport", slug: "packaging-transport" },
  { label: "Food, Beverage & Nutrition", slug: "food-beverage" },
  { label: "Industrial Automation", slug: "industrial-automation" },
];

const EditReportPage = () => {
  const { reportId } = useParams<{ reportId: string }>();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [industry, setIndustry] = useState("");
  const [industryslug, setIndustryslug] = useState("");
  const [content, setContent] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [metrics, setMetrics] = useState<Record<string, string>>({});
  const [regions, setRegions] = useState<{ name: string; countries: string }[]>(
    []
  );

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // ✅ Load existing report data
  useEffect(() => {
    const fetchReport = async () => {
      if (!reportId) return;

      try {
        const docRef = doc(db, "reports", reportId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setTitle(data.title || "");
          setIndustry(data.industry || "");
          setIndustryslug(data.industryslug || "");
          setContent(data.content || "");
          setThumbnail(data.thumbnail || "");
          setMetrics(data.metrics || {});
          setRegions(data.regions || []); // ✅ load regions
        } else {
          setError("Report not found");
        }
      } catch (err: any) {
        setError(err.message || "Error fetching report");
      }
    };

    fetchReport();
  }, [reportId]);

  const handleIndustryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = INDUSTRY_OPTIONS.find(
      (option) => option.label === e.target.value
    );
    if (selected) {
      setIndustry(selected.label);
      setIndustryslug(selected.slug);
    }
  };

  const handleMetricChange = (key: string, value: string) => {
    setMetrics((prev) => ({ ...prev, [key]: value }));
  };

  const handleRegionChange = (
    index: number,
    field: "name" | "countries",
    value: string
  ) => {
    const updated = [...regions];
    updated[index][field] = value;
    setRegions(updated);
  };

  const addRegionRow = () => {
    setRegions((prev) => [...prev, { name: "", countries: "" }]);
  };

  const removeRegionRow = (index: number) => {
    setRegions((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!reportId) return;

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const docRef = doc(db, "reports", reportId);
      await updateDoc(docRef, {
        title,
        industry,
        industryslug,
        content,
        thumbnail,
        metrics,
        regions, // ✅ save regions too
        updatedAt: new Date().toISOString(),
      });

      setSuccess(true);
      setTimeout(() => navigate("/reports"), 1000);
    } catch (err: any) {
      setError(err.message || "Error updating report");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-[1600px] mt-28 my-24 mx-auto p-2 text-white lg:p-6 bg-[#183B4E] rounded shadow">
      <h1 className="text-3xl font-bold mb-4">Edit Report</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-1/3 border bg-white text-[#183B4E] font-bold p-2 rounded-lg"
          required
        />
        <select
          value={industry}
          onChange={handleIndustryChange}
          className="w-1/3 block border bg-white text-[#183B4E] font-bold p-2 rounded-lg"
          required
        >
          <option value="">Select Industry</option>
          {INDUSTRY_OPTIONS.map((option) => (
            <option key={option.slug} value={option.label}>
              {option.label}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Thumbnail Image URL"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
          className="w-1/3 border p-2 bg-white text-[#183B4E] font-bold rounded-lg"
        />
        <TinyEditor value={content} onChange={setContent} />

        {/* Metrics Table */}
        <div className="animate-fadein mt-8">
          <h2 className="text-2xl font-bold mb-4 text-[#27548A]">
            Report Scope (Metrics)
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border border-gray-300 rounded-lg shadow-sm">
              <thead className="bg-[#27548A] text-white text-left">
                <tr>
                  <th className="px-4 py-3 border border-gray-300">
                    Attribute
                  </th>
                  <th className="px-4 py-3 border border-gray-300">Details</th>
                </tr>
              </thead>
              <tbody className="bg-gray-100 text-gray-800">
                {METRICS_TEMPLATE.map((metric) => (
                  <tr
                    key={metric.key}
                    className="hover:bg-gray-200 transition-colors"
                  >
                    <td className="px-4 py-3 border border-gray-200 font-medium">
                      {metric.label}
                    </td>
                    <td className="px-4 py-3 border border-gray-200">
                      <input
                        type="text"
                        placeholder={metric.placeholder}
                        value={metrics[metric.key] || ""}
                        onChange={(e) =>
                          handleMetricChange(metric.key, e.target.value)
                        }
                        className="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#27548A] focus:outline-none"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Regions Table */}
        <div className="animate-fadein mt-8">
          <h2 className="text-2xl font-bold mb-4 text-[#27548A]">
            Regions & Countries Covered
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 rounded-lg shadow-sm">
              <thead className="bg-[#27548A] text-white">
                <tr>
                  <th className="px-4 py-3 border border-gray-300">Region</th>
                  <th className="px-4 py-3 border border-gray-300">
                    Countries Covered
                  </th>
                  <th className="px-4 py-3 border border-gray-300">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-gray-100 text-gray-800">
                {regions.map((region, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-200 transition-colors"
                  >
                    <td className="px-4 py-3 border border-gray-200">
                      <input
                        type="text"
                        placeholder="Region Name"
                        value={region.name}
                        onChange={(e) =>
                          handleRegionChange(index, "name", e.target.value)
                        }
                        className="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#27548A] focus:outline-none"
                      />
                    </td>
                    <td className="px-4 py-3 border border-gray-200">
                      <input
                        type="text"
                        placeholder="Countries (comma separated)"
                        value={region.countries}
                        onChange={(e) =>
                          handleRegionChange(index, "countries", e.target.value)
                        }
                        className="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#27548A] focus:outline-none"
                      />
                    </td>
                    <td className="px-4 py-3 border border-gray-200 text-center">
                      <button
                        type="button"
                        onClick={() => removeRegionRow(index)}
                        className="text-red-600 hover:underline"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              type="button"
              onClick={addRegionRow}
              className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              + Add Region
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-700 text-white px-6 py-2 rounded disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Report"}
        </button>
        {success && (
          <div className="text-green-600">Report updated successfully!</div>
        )}
        {error && <div className="text-red-600">{error}</div>}
      </form>
    </div>
  );
};

export default EditReportPage;
