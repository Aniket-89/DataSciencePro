import { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import TinyEditor from "../components/TinyEditor";

const AddReportPage = () => {
  const [title, setTitle] = useState("");
  const [industry, setIndustry] = useState("");
  const [industryslug, setIndustryslug] = useState("");
  const [content, setContent] = useState(""); // HTML from Tiptap

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

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
    <div className="max-w-5xl mt-24 mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Add New Report</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2"
          required
        />
        <input
          type="text"
          placeholder="Industry"
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          className="w-full border p-2"
          required
        />
        <input
          type="text"
          placeholder="Industry Slug"
          value={industryslug}
          onChange={(e) => setIndustryslug(e.target.value)}
          className="w-full border p-2"
          required
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
