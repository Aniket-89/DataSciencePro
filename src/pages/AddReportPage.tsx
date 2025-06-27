import { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const initialState = {
  id: '',
  title: '',
  industry: '',
  industryslug: '',
  overview: '',
  executiveSummary: '',
  droc: { drivers: '', restraints: '', opportunities: '', challenges: '' },
  segmentation: { type: '', application: '', process: '', sensor: '' },
  players: '',
  recentDevelopments: '',
  regionalOutlook: { 'North America': '', Europe: '', 'Asia Pacific': '', 'Latin America & MEA': '' },
};

const AddReportPage = () => {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (name.startsWith('droc.')) {
      setForm({ ...form, droc: { ...form.droc, [name.split('.')[1]]: value } });
    } else if (name.startsWith('segmentation.')) {
      setForm({ ...form, segmentation: { ...form.segmentation, [name.split('.')[1]]: value } });
    } else if (name.startsWith('regionalOutlook.')) {
      setForm({ ...form, regionalOutlook: { ...form.regionalOutlook, [name.split('.')[1]]: value } });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleArrayChange = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    try {
      await addDoc(collection(db, 'reports'), {
        ...form,
        players: form.players.split(',').map((s) => s.trim()).filter(Boolean),
        recentDevelopments: form.recentDevelopments.split('\n').map((s) => s.trim()).filter(Boolean),
        segmentation: {
          type: form.segmentation.type.split(',').map((s) => s.trim()).filter(Boolean),
          application: form.segmentation.application.split(',').map((s) => s.trim()).filter(Boolean),
          process: form.segmentation.process.split(',').map((s) => s.trim()).filter(Boolean),
          sensor: form.segmentation.sensor.split(',').map((s) => s.trim()).filter(Boolean),
        },
      });
      setSuccess(true);
      setForm(initialState);
    } catch (err: any) {
      setError(err.message || 'Error adding report');
    }
    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-6">Add New Report</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="id" value={form.id} onChange={handleChange} placeholder="ID (e.g. automotive-1)" className="w-full border p-2" required />
        <input name="title" value={form.title} onChange={handleChange} placeholder="Title" className="w-full border p-2" required />
        <input name="industry" value={form.industry} onChange={handleChange} placeholder="Industry" className="w-full border p-2" required />
        <input name="industryslug" value={form.industryslug} onChange={handleChange} placeholder="Industry Slug (e.g. automotive)" className="w-full border p-2" required />
        <textarea name="overview" value={form.overview} onChange={handleChange} placeholder="Overview" className="w-full border p-2" required />
        <textarea name="executiveSummary" value={form.executiveSummary} onChange={handleChange} placeholder="Executive Summary" className="w-full border p-2" required />
        <div className="grid grid-cols-2 gap-2">
          <input name="droc.drivers" value={form.droc.drivers} onChange={handleChange} placeholder="Drivers" className="border p-2" />
          <input name="droc.restraints" value={form.droc.restraints} onChange={handleChange} placeholder="Restraints" className="border p-2" />
          <input name="droc.opportunities" value={form.droc.opportunities} onChange={handleChange} placeholder="Opportunities" className="border p-2" />
          <input name="droc.challenges" value={form.droc.challenges} onChange={handleChange} placeholder="Challenges" className="border p-2" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <input name="segmentation.type" value={form.segmentation.type} onChange={handleChange} placeholder="Segmentation Type (comma separated)" className="border p-2" />
          <input name="segmentation.application" value={form.segmentation.application} onChange={handleChange} placeholder="Segmentation Application (comma separated)" className="border p-2" />
          <input name="segmentation.process" value={form.segmentation.process} onChange={handleChange} placeholder="Segmentation Process (comma separated)" className="border p-2" />
          <input name="segmentation.sensor" value={form.segmentation.sensor} onChange={handleChange} placeholder="Segmentation Sensor (comma separated)" className="border p-2" />
        </div>
        <textarea name="players" value={form.players} onChange={handleChange} placeholder="Players (comma separated)" className="w-full border p-2" />
        <textarea name="recentDevelopments" value={form.recentDevelopments} onChange={handleChange} placeholder="Recent Developments (one per line)" className="w-full border p-2" />
        <div className="grid grid-cols-2 gap-2">
          <input name="regionalOutlook.North America" value={form.regionalOutlook['North America']} onChange={handleChange} placeholder="Regional Outlook: North America" className="border p-2" />
          <input name="regionalOutlook.Europe" value={form.regionalOutlook['Europe']} onChange={handleChange} placeholder="Regional Outlook: Europe" className="border p-2" />
          <input name="regionalOutlook.Asia Pacific" value={form.regionalOutlook['Asia Pacific']} onChange={handleChange} placeholder="Regional Outlook: Asia Pacific" className="border p-2" />
          <input name="regionalOutlook.Latin America & MEA" value={form.regionalOutlook['Latin America & MEA']} onChange={handleChange} placeholder="Regional Outlook: Latin America & MEA" className="border p-2" />
        </div>
        <button type="submit" className="bg-[#27548A] text-white px-6 py-2 rounded disabled:opacity-50" disabled={loading}>{loading ? 'Adding...' : 'Add Report'}</button>
        {success && <div className="text-green-600">Report added successfully!</div>}
        {error && <div className="text-red-600">{error}</div>}
      </form>
    </div>
  );
};

export default AddReportPage;
