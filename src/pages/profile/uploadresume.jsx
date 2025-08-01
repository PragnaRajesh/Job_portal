import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import stepIcon from "../../assets/step6.png";
import { ArrowLeft } from "lucide-react";

const UploadResume = () => {
  const navigate = useNavigate();
  const [resume, setResume] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf" && file.size <= 5 * 1024 * 1024) {
      const timestamp = new Date();
      setResume({
        name: file.name,
        size: (file.size / 1024).toFixed(0),
        uploadedAt: timestamp.toLocaleString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      });
    } else {
      alert("Please upload a PDF file under 5 MB.");
    }
  };

  const removeFile = () => {
    setResume(null);
  };

  const handleNext = () => {
    if (!resume) {
      alert("Please upload your resume before continuing.");
      return;
    }
    navigate("/profile/successscreen");
  };

  return (
    <div className="h-screen p-4 bg-white pt-6 pb-24 flex flex-col justify-between overflow-hidden pt-safe pb-safe">
      <ArrowLeft className="w-6 h-6 sm:w-7 sm:h-7 mb-2" onClick={() => navigate(-1)} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-start">
        <h2 className="text-xl font-bold text-center mb-4">Upload Resume</h2>

      {/* Step Image */}
      <div className="w-full flex justify-center -mt-0 mb-6">
        <img
          src={stepIcon}
          alt="Progress Step 6"
          className="object-contain"
        />
      </div>

      

        <h3 className="text-md font-semibold mb-3">Add Resume</h3>

        {!resume ? (
          <label className="flex flex-col items-center justify-center border-2 border-dashed border-blue-400 rounded-xl p-6 text-center cursor-pointer">
            <input
              type="file"
              accept=".pdf"
              className="hidden"
              onChange={handleFileChange}
            />
            <span className="text-2xl mb-2">📄</span>
            <span className="text-blue-700 font-medium">Upload CV/Resume</span>
            <p className="text-xs text-gray-400 mt-2">
              Upload PDF file up to 5 MB. You can reuse this resume later.
            </p>
          </label>
        ) : (
          <div className="border border-blue-200 rounded-xl p-4 flex flex-col gap-2 bg-red-50">
            <div className="flex items-center gap-3">
              <div className="bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                PDF
              </div>
              <div className="flex flex-col text-sm">
                <span className="font-semibold">{resume.name}</span>
                <span className="text-xs text-gray-600">
                  {resume.size} Kb · {resume.uploadedAt}
                </span>
              </div>
            </div>
            <button
              className="text-red-600 text-sm font-medium flex items-center gap-1"
              onClick={removeFile}
            >
              🗑️ Remove file
            </button>
          </div>
        )}

        <p className="text-xs text-gray-400 mt-4">
          Upload files in PDF format up to 5 MB. You can reuse this for future applications.
        </p>
      </div>

      {/* CTA Button */}
      <div className="mt-4">
        <button
          onClick={handleNext}
          className="w-full bg-blue-700 text-white py-3 rounded-full text-sm font-medium"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UploadResume;
