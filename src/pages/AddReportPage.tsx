import { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
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

const AddReportPage = () => {
  const [title, setTitle] = useState("");
  const [industry, setIndustry] = useState("");
  const [industryslug, setIndustryslug] = useState("");
  const [content, setContent] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleIndustryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = INDUSTRY_OPTIONS.find(
      (option) => option.label === e.target.value
    );
    if (selected) {
      setIndustry(selected.label);
      setIndustryslug(selected.slug);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      await addDoc(collection(db, "reports"), {
        title,
        industry,
        industryslug,
        content,
        thumbnail, // ✅ Save the thumbnail URL
        createdAt: new Date().toISOString(),
      });

      setSuccess(true);
      setTitle("");
      setIndustry("");
      setIndustryslug("");
      setContent("");
    } catch (err: any) {
      setError(err.message || "Error adding report");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-[1600px] mt-28 my-24 mx-auto p-2 text-white lg:p-6 bg-[#183B4E] rounded shadow">
      <h1 className="text-3xl font-bold mb-4">Add New Report</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
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
          className="w-1/3 block border bg-white text-[#183B4E] font-bold p-2  rounded-lg"
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
          className="w-1/3 border p-2 bg-white text-[#183B4E] font-bold  rounded-lg"
        />
        <TinyEditor value={content} onChange={setContent} />
        <button
          type="submit"
          className="bg-blue-700 text-white px-6 py-2 rounded disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Report"}
        </button>
        {success && (
          <div className="text-green-600">Report added successfully!</div>
        )}
        {error && <div className="text-red-600">{error}</div>}
      </form>
    </div>
  );
};

export default AddReportPage;
