import { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const industries = [
  "Automotive",
  "Semiconductors & Electronics",
  "Consumer & Retail",
  "Aerospace & Defense",
  "Healthcare",
  "Energy & Utilities",
  "Construction",
  "Agriculture",
  "Telecommunication",
  "IT & Software",
  "Chemicals",
  "Logistics",
];


const initialState: {
  slug: string;
  title: string;
  industry: string;
  industryslug: string;
  overview: string;
  executiveSummary: string;
  droc: {
    drivers: string;
    restraints: string;
    opportunities: string;
    challenges: string;
  };
  segmentation: { [key: string]: string[] };
  players: string;
  recentDevelopments: string;
  regionalOutlook: { [region: string]: string };
} = {
  slug: '',
  title: '',
  industry: '',
  industryslug: '',
  overview: '',
  executiveSummary: '',
  droc: {
    drivers: '',
    restraints: '',
    opportunities: '',
    challenges: '',
  },
  segmentation: {},
  players: '',
  recentDevelopments: '',
  regionalOutlook: {},
};




const AddReportPage = () => {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  if (name.startsWith('droc.')) {
    setForm(prev => ({ ...prev, droc: { ...prev.droc, [name.split('.')[1]]: value } }));
  // } else if (name.startsWith('segmentation.')) {
  //   setForm(prev => ({ ...prev, segmentation: { ...prev.segmentation, [name.split('.')[1]]: value } }));
  // } else if (name.startsWith('regionalOutlook.')) {
  //   setForm(prev => ({ ...prev, regionalOutlook: { ...prev.regionalOutlook, [name.split('.')[1]]: value } }));
  } else if (name === 'industry') {
    setForm(prev => ({
      ...prev,
      industry: value,
      industryslug: value.toLowerCase().replace(/ & | /g, '-')
    }));
  } else {
    setForm(prev => ({ ...prev, [name]: value }));
  }
};

  // const handleArrayChange = (name: string, value: string) => {
  //   setForm({ ...form, [name]: value });
  // };

    
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    try {
      await addDoc(collection(db, 'reports'), {
        ...form,
        players: form.players.split(',').map(s => s.trim()).filter(Boolean),
        recentDevelopments: form.recentDevelopments.split('\n').map(s => s.trim()).filter(Boolean),
        segmentation: form.segmentation,
        regionalOutlook: form.regionalOutlook,
      });

      setSuccess(true);
      setForm(initialState);
    } catch (err: any) {
      setError(err.message || 'Error adding report');
    }
    setLoading(false);
  };

  const updateSegmentationKey = (key: string, values: string[]) => {
    setForm(prev => ({
      ...prev,
      segmentation: { ...prev.segmentation, [key]: values }
    }));
  };

  const removeSegmentationKey = (key: string) => {
    const updated = { ...form.segmentation };
    delete updated[key];
    setForm(prev => ({ ...prev, segmentation: updated }));
  };

  const updateRegionalOutlook = (region: string, value: string) => {
    setForm(prev => ({
      ...prev,
      regionalOutlook: { ...prev.regionalOutlook, [region]: value }
    }));
  };

  const removeRegionalOutlook = (region: string) => {
    const updated = { ...form.regionalOutlook };
    delete updated[region];
    setForm(prev => ({ ...prev, regionalOutlook: updated }));
  };


  return (
    <div className="w-full bg-[#F3F3E0]">

    <div className="max-w-5xl mx-auto p-8 rounded my-12">
  <h1 className="text-3xl font-bold text-[#183B4E] mb-6 border-b pb-2">Add New Report</h1>
  <form onSubmit={handleSubmit} className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-[#183B4E] rounded">
        <h2 className="text-xl font-semibold mb-2 text-white">Title & Slug</h2>
      <input
        name="slug"
        value={form.slug}
        onChange={handleChange}
        placeholder="Slug (e.g. electric-vehicle-battery-market)"
        className="border p-3 rounded bg-white"
        required
      />
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Title"
        className="border p-3 rounded  bg-white"
        required
      />
      <select
        name="industry"
        value={form.industry}
        onChange={handleChange}
        className="border p-3 rounded  bg-white"
        required
      >
        <option value="">Select Industry</option>
        {industries.map((industry) => (
          <option key={industry} value={industry}>
            {industry}
          </option>
        ))}
      </select>
    </div>
        <div className="bg-[#183B4E] p-4 rounded mt-6">
        <h2 className="text-xl font-semibold mb-2 text-white">Overview & Executive Summary</h2>
    <textarea
      name="overview"
      value={form.overview}
      onChange={handleChange}
      placeholder="Overview"
      className="w-full border p-3 rounded min-h-[100px]  bg-white"
      required
      />
    <textarea
      name="executiveSummary"
      value={form.executiveSummary}
      onChange={handleChange}
      placeholder="Executive Summary"
      className="w-full border p-3 rounded min-h-[100px] bg-white"
      required
    />
      </div>

    <div className='mt-6 bg-[#183B4E] p-4 rounded'>
      <h2 className="text-xl font-semibold mb-2 text-white">DROC</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="droc.drivers" value={form.droc.drivers} onChange={handleChange} placeholder="Drivers" className="border p-2 rounded bg-white" />
        <input name="droc.restraints" value={form.droc.restraints} onChange={handleChange} placeholder="Restraints" className="border p-2 rounded bg-white" />
        <input name="droc.opportunities" value={form.droc.opportunities} onChange={handleChange} placeholder="Opportunities" className="border p-2 rounded bg-white" />
        <input name="droc.challenges" value={form.droc.challenges} onChange={handleChange} placeholder="Challenges" className="border p-2 rounded bg-white" />
      </div>
    </div>

    <div className="mt-6 bg-[#183B4E] p-4 rounded">
      <h2 className="text-xl font-semibold mb-2 text-white">Segmentation</h2>
      <div className="space-y-4">
        {Object.entries(form.segmentation).map(([key, values], index) => (
          <div key={index} className="border p-3 rounded bg-gray-50">
            <input
              type="text"
              className="w-full font-semibold text-gray-700 mb-2 bg-white"
              value={key}
              disabled
            />
            <input
              type="text"
              className="w-full border p-2 rounded bg-white"
              placeholder="Comma separated values"
              value={(values as string[]).join(', ')}
              onChange={e =>
                updateSegmentationKey(key, e.target.value.split(',').map(s => s.trim()))
              }
            />
            <button
              type="button"
              className="text-sm text-red-600 mt-1 bg-white"
              onClick={() => removeSegmentationKey(key)}
            >
              Remove
            </button>
          </div>
        ))}
        <input
          type="text"
          className="border p-2 rounded w-full bg-white"
          placeholder="New Segmentation Key (e.g. By Application)"
          onKeyDown={(e: any) => {
            if (e.key === 'Enter' && e.target.value) {
              updateSegmentationKey(e.target.value, []);
              e.target.value = '';
              e.preventDefault();
            }
          }}
        />
      </div>
    </div>

    <div className="mt-6 bg-[#183B4E] p-4 rounded">
      <h2 className="text-xl font-semibold mb-2 text-white">Key Players</h2>
      <textarea
        name="players"
        value={form.players}
        onChange={handleChange}
        placeholder="Comma separated list of players"
        className="w-full border p-3 rounded bg-white"
      />
    </div>

    <div className="mt-6 bg-[#183B4E] p-4 rounded">
      <h2 className="text-xl font-semibold mb-2 text-white">Recent Developments</h2>
      <textarea
        name="recentDevelopments"
        value={form.recentDevelopments}
        onChange={handleChange}
        placeholder="One per line"
        className="w-full border p-3 rounded min-h-[120px] bg-white"
      />
    </div>

    <div className="mt-6 bg-[#183B4E] p-4 rounded">
      <h2 className="text-xl font-semibold mb-2 text-white">Regional Outlook</h2>
      <div className="space-y-4">
        {Object.entries(form.regionalOutlook).map(([region, text], index) => (
          <div key={index} className="border p-3 rounded bg-gray-50">
            <input
              type="text"
              className="w-full font-semibold text-gray-700 mb-1 bg-white"
              value={region}
              disabled
            />
            <textarea
              className="w-full border p-2 rounded bg-white"
              placeholder="Outlook"
              value={String(text)}
              onChange={e => updateRegionalOutlook(region, e.target.value)}
            />
            <button
              type="button"
              className="text-sm text-red-600 mt-1 bg-white"
              onClick={() => removeRegionalOutlook(region)}
            >
              Remove
            </button>
          </div>
        ))}
        <input
          type="text"
          className="border p-2 rounded w-full bg-white"
          placeholder="New Region (e.g. North America)"
          onKeyDown={(e: any) => {
            if (e.key === 'Enter' && e.target.value) {
              updateRegionalOutlook(e.target.value, '');
              e.target.value = '';
              e.preventDefault();
            }
          }}
        />
      </div>
    </div>

    <div className="pt-6">
      <button
        type="submit"
        className="bg-[#DDA853] text-white px-6 py-3 rounded shadow hover:bg-[#183B4E] transition disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Adding...' : 'Add Report'}
      </button>
      {success && <div className="text-green-600 mt-2">✅ Report added successfully!</div>}
      {error && <div className="text-red-600 mt-2">❌ {error}</div>}
    </div>
  </form>
</div>
</div>


  );
};

export default AddReportPage;
