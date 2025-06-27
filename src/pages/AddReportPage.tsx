import { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

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

  const handleChange = (e: any) => {
  const { name, value } = e.target;
  setForm({ ...form, [name]: value });
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
    <div className="max-w-2xl mx-auto p-8 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-6">Add New Report</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="slug"
        value={form.slug}
        onChange={handleChange}
        placeholder="Slug (e.g. electric-vehicle-battery-market)"
        className="w-full border p-2"
        required
      />
      <input name="title" value={form.title} onChange={handleChange} placeholder="Title" className="w-full border p-2" required />
        <input name="industry" value={form.industry} onChange={handleChange} placeholder="Industry" className="w-full border p-2" required />
        {/* <input name="industryslug" value={form.industryslug} onChange={handleChange} placeholder="Industry Slug (e.g. automotive)" className="w-full border p-2" required /> */}
        <textarea name="overview" value={form.overview} onChange={handleChange} placeholder="Overview" className="w-full border p-2" required />
        <textarea name="executiveSummary" value={form.executiveSummary} onChange={handleChange} placeholder="Executive Summary" className="w-full border p-2" required />
        <div className="grid grid-cols-2 gap-2">
          <input name="droc.drivers" value={form.droc.drivers} onChange={handleChange} placeholder="Drivers" className="border p-2" />
          <input name="droc.restraints" value={form.droc.restraints} onChange={handleChange} placeholder="Restraints" className="border p-2" />
          <input name="droc.opportunities" value={form.droc.opportunities} onChange={handleChange} placeholder="Opportunities" className="border p-2" />
          <input name="droc.challenges" value={form.droc.challenges} onChange={handleChange} placeholder="Challenges" className="border p-2" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <h2 className="font-semibold">Segmentation</h2>
          {Object.entries(form.segmentation).map(([key, values], index) => (
            <div key={index} className="mb-2 border p-2">
              <input
                type="text"
                className="border p-1 w-full mb-1"
                value={key}
                disabled
              />
              <input
                type="text"
                className="border p-1 w-full"
                placeholder="Comma separated values"
                value={(values as string[]).join(', ')}
                onChange={e =>
                  updateSegmentationKey(key, e.target.value.split(',').map(s => s.trim()))
                }
              />
              <button
                type="button"
                className="text-red-600 text-sm mt-1"
                onClick={() => removeSegmentationKey(key)}
              >
                Remove
              </button>
            </div>
          ))}

          {/* Add New Segmentation */}
          <div className="flex gap-2 my-2">
            <input
              type="text"
              className="border p-1 flex-1"
              placeholder="New Segmentation Key (e.g. By Type)"
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
        <textarea name="players" value={form.players} onChange={handleChange} placeholder="Players (comma separated)" className="w-full border p-2" />
        <textarea name="recentDevelopments" value={form.recentDevelopments} onChange={handleChange} placeholder="Recent Developments (one per line)" className="w-full border p-2" />
        <div className="grid grid-cols-2 gap-2">
          <h2 className="font-semibold">Regional Outlook</h2>
          {Object.entries(form.regionalOutlook).map(([region, text], index) => (
            <div key={index} className="mb-2 border p-2">
              <input
                type="text"
                className="border p-1 w-full mb-1"
                value={region}
                disabled
              />
              <textarea
                className="border p-1 w-full"
                placeholder="Outlook"
                value={String(text)}
                onChange={e => updateRegionalOutlook(region, e.target.value)}
              />
              <button
                type="button"
                className="text-red-600 text-sm mt-1"
                onClick={() => removeRegionalOutlook(region)}
              >
                Remove
              </button>
            </div>
          ))}

          {/* Add New Region */}
          <div className="flex gap-2 my-2">
            <input
              type="text"
              className="border p-1 flex-1"
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
        <button type="submit" className="bg-[#27548A] text-white px-6 py-2 rounded disabled:opacity-50" disabled={loading}>{loading ? 'Adding...' : 'Add Report'}</button>
        {success && <div className="text-green-600">Report added successfully!</div>}
        {error && <div className="text-red-600">{error}</div>}
      </form>
    </div>
  );
};

export default AddReportPage;
