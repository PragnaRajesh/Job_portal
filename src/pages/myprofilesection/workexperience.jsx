import React from 'react';
import { useNavigate } from 'react-router-dom';

const WorkExperience = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f5f5fa] flex items-center justify-center px-4">
      <div className="bg-white shadow-md rounded-xl w-full max-w-sm p-6">
        <h2 className="text-xl font-semibold text-center text-[#1a1444] mb-4">Work Experience</h2>

        <label className="block text-sm text-[#1a1444] font-medium mb-1">Job Title</label>
        <input
          type="text"
          placeholder="e.g Executive Sales Manager"
          className="w-full mb-3 border border-gray-300 rounded-lg px-3 py-2 text-sm"
        />

        <label className="block text-sm text-[#1a1444] font-medium mb-1">Job Role</label>
        <select className="w-full mb-3 border border-gray-300 rounded-lg px-3 py-2 text-sm">
          <option>Select Job Role</option>
        </select>

        <label className="block text-sm text-[#1a1444] font-medium mb-1">Company Name</label>
        <select className="w-full mb-3 border border-gray-300 rounded-lg px-3 py-2 text-sm">
          <option>e.g Amazon</option>
        </select>

        <label className="block text-sm text-[#1a1444] font-medium mb-1">Experience in this company</label>
        <div className="flex gap-2 mb-3">
          <select className="w-1/2 border border-gray-300 rounded-lg px-3 py-2 text-sm">
            <option>Years</option>
          </select>
          <select className="w-1/2 border border-gray-300 rounded-lg px-3 py-2 text-sm">
            <option>Months</option>
          </select>
        </div>

        <label className="block text-sm text-[#1a1444] font-medium mb-1">Current/Last Salary</label>
        <input
          type="text"
          placeholder="$15,0000"
          className="w-full mb-2 border border-gray-300 rounded-lg px-3 py-2 text-sm"
        />

        <div className="flex items-center mb-4">
          <input type="checkbox" id="currentlyWorking" className="mr-2" />
          <label htmlFor="currentlyWorking" className="text-sm text-[#1a1444]">
            I am currently working here
          </label>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            className="px-5 py-2 rounded-full border border-[#1a1444] text-[#1a1444] text-sm"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
          <button
            className="px-5 py-2 rounded-full bg-[#0047AB] text-white text-sm"
            onClick={() => alert('Saved')}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
