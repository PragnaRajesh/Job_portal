import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Edit2,
  Trash2,
  Paperclip,
  CheckSquare,
} from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import attachIllustration from "../../assets/attach documents.png";


const SubmitDocuments = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const jobTitle = location.state?.jobTitle || "Job Application";

  const [coverLetter, setCoverLetter] = useState(
    "Dear Sir,\nHope you are doing well,\nI am interested in this job post and I think am good fit.\nPlease check my application.\n\nRegards & Thank you,\nXYZ"
  );
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const lastJob = localStorage.getItem("lastAppliedJob");
    if (!lastJob) {
      localStorage.setItem("lastAppliedJob", jobTitle);
    }
  }, [jobTitle]);

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    const updated = [...documents, ...newFiles];
    setDocuments(updated);
  };

  const handleDelete = (index) => {
    const updated = documents.filter((_, i) => i !== index);
    setDocuments(updated);
  };

  const handleSubmit = () => {
    if (!coverLetter.trim()) {
      toast.error("Cover letter cannot be empty.");
      return;
    }
    if (documents.length === 0) {
      toast.error("Please attach at least one document.");
      return;
    }
    toast.success("Documents submitted successfully!");
    setTimeout(() => navigate("/jobs/verified"), 1000);
  };

  return (
    <div className="min-h-screen bg-white px-5 pt-6 pb-28 text-sm font-sans text-gray-800 pt-safe pb-safe">
      <ToastContainer position="top-center" autoClose={2000} />
      <h2 className="text-xl font-semibold text-center mb-6">
        Submit Documents
      </h2>

      {/* Cover Letter */}
      <div className="relative mb-4">
        <label className="text-sm font-medium text-gray-800">Cover Letter</label>
        <textarea
          value={coverLetter}
          onChange={(e) => setCoverLetter(e.target.value)}
          className="w-full text-gray-700 text-sm mt-1 resize-none outline-none p-2 rounded bg-transparent"
          rows={6}
        />
        <Edit2 className="w-4 h-4 text-blue-600 absolute right-1 top-1 cursor-pointer" />
      </div>
      <hr className="border-gray-300 mb-4" />

      {/* Documents Section */}
      <div className="mb-4">
        <label className="text-sm font-medium text-gray-800">Documents</label>
        <div className="mt-3 space-y-3 transition-all duration-300 ease-in-out">
          {documents.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white p-3 rounded-lg border border-gray-300 animate-fade-in"
            >
              <div className="flex items-center gap-2">
                <CheckSquare className="text-blue-600 w-4 h-4" />
                <div>
                  <p className="text-sm text-blue-700 font-medium">{file.name}</p>
                  <p className="text-xs text-gray-500">
                    {(file.size / (1024 * 1024)).toFixed(2)} MB
                  </p>
                </div>
              </div>
              <Trash2
                className="w-4 h-4 text-red-500 cursor-pointer hover:scale-110 transition"
                onClick={() => handleDelete(index)}
              />
            </div>
          ))}

          {/* Attach more documents button like screenshot */}
          <label className="flex items-center justify-center gap-2 w-full mt-2 bg-[#EAF0FB] text-[#0046AD] text-sm py-2 rounded-full font-medium cursor-pointer hover:bg-[#d9e6fa] transition">
            <Paperclip className="w-4 h-4" />
            Attach more documents
            <input
              type="file"
              multiple
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        </div>
      </div>
      <hr className="border-gray-300 mb-5" />

      {/* Upload Illustration */}
      <div className="flex justify-center mt-6">
        <img
        src={attachIllustration}
        alt="Attach Documents"
        className="w-48 h-auto"
        />
      </div>

      {/* Apply Now Button */}
      <div className="fixed bottom-4 left-0 w-full px-5">
        <button
          onClick={handleSubmit}
          className="w-full bg-[#0046AD] text-white py-3 rounded-full font-semibold text-sm tracking-wide hover:bg-[#003a93] transition"
        >
          Submit
        </button>
      </div>

      {/* Animations */}
      <style>
        {`
          .animate-fade-in {
            animation: fade-in 0.3s ease-in-out;
          }

          @keyframes fade-in {
            from { opacity: 0; transform: translateY(6px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default SubmitDocuments;
