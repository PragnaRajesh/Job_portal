import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Documents = () => {
  const navigate = useNavigate();
  const [selectedDocs, setSelectedDocs] = useState([]);

  const documents = ["PAN Card", "Aadhar Card", "Bank Account", "None of these"];

  const toggleDoc = (doc) => {
    if (selectedDocs.includes(doc)) {
      setSelectedDocs(selectedDocs.filter((item) => item !== doc));
    } else {
      if (doc === "None of these") {
        setSelectedDocs(["None of these"]);
      } else {
        setSelectedDocs(
          selectedDocs.filter((d) => d !== "None of these").concat(doc)
        );
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col pt-safe pb-safe">
      <div className="text-center py-5 border-b">
        <h2 className="text-xl font-semibold text-indigo-900">Category Details</h2>
      </div>

      <div className="flex-1 p-4">
        <div className="max-w-md mx-auto bg-white rounded-xl border shadow p-4">
          <h3 className="text-md font-semibold mb-3 text-indigo-900">
            Category Details
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Which of these IDs/documents do you have?
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {documents.map((doc, index) => (
              <button
                key={index}
                onClick={() => toggleDoc(doc)}
                className={`px-3 py-1 rounded-full border text-sm font-medium transition-all
                  ${
                  selectedDocs.includes(doc)
                    ? "bg-blue-100 text-blue-900 border-blue-300"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
              >
                {doc} {selectedDocs.includes(doc) && "✓"}
              </button>
            ))}
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t">
            <button
              onClick={() => navigate(-1)}
              className="px-5 py-1.5 border rounded-full text-sm text-blue-700 border-blue-600"
            >
              Cancel
            </button>
            <button
              onClick={() => navigate("/myprofilesection/myprofile")}
              className="px-6 py-1.5 bg-blue-700 text-white text-sm rounded-full"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
