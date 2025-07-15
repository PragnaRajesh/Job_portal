import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Star } from "lucide-react";

const JobDetails = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("job");
  const [applying, setApplying] = useState(false);
  const jobTitle = "UI/UX Designer";

  const handleApply = () => {
    setApplying(true);
    alert("Applying for the job...");

    setTimeout(() => {
      navigate("/jobs/submitdocuments", { state: { jobTitle } });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 pb-28">
      {/* Top Image */}
      <img
        src="/team.jpg"
        alt="team"
        className="w-full h-52 object-cover rounded-b-3xl"
      />

      {/* Job Header */}
      <div className="w-full bg-white rounded-xl -mt-12 p-4 shadow-lg z-10">
        <div className="flex items-start gap-4">
          <img
            src="/logo.jpeg"
            alt="logo"
            className="w-12 h-12 rounded-full border object-contain"
          />
          <div className="flex-1">
            <h2 className="text-lg font-bold">{jobTitle}</h2>
            <p className="text-sm text-gray-700">Google | 10k–20k</p>
            <p className="text-xs text-gray-500">Deadline: 21 March 2021</p>
            <div className="flex items-center gap-1 text-yellow-500 mt-1">
              <Star className="w-4 h-4 fill-yellow-400" />
              <span className="text-sm font-medium">4.9</span>
              <span className="text-sm text-gray-600">(250)</span>
              <span className="text-xs text-gray-500 ml-2">
                20+ Applicants
              </span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-around mt-4 border-b text-sm font-medium">
          {["job", "company", "reviews"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 border-b-2 ${
                activeTab === tab
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500"
              }`}
            >
              {tab === "job"
                ? "Job details"
                : tab === "company"
                ? "Company details"
                : "Reviews"}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="w-full mt-4 space-y-4">
        {activeTab === "job" && (
          <div className="bg-white p-4 rounded-xl shadow text-sm space-y-4">
            <h3 className="font-semibold mb-1">Job Description</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
              dui eu, massa justo pretium in sit.{" "}
              <span className="text-blue-600 font-medium">Read more.....</span>
            </p>
            <h3 className="font-semibold mb-1">Job Responsibilities</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Design, test, and improve user interfaces.</li>
              <li>Create wireframes and prototypes.</li>
            </ul>
            <h3 className="font-semibold mb-1">Job Requirement</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>1–2 years of UI/UX experience</li>
              <li>Strong in Figma or Adobe XD</li>
              <li>Good communication skills</li>
            </ul>
          </div>
        )}

        {activeTab === "company" && (
          <div className="bg-white p-4 rounded-xl shadow text-sm space-y-4">
            <h3 className="font-semibold mb-1">Overview</h3>
            <p>
              Google is a leading tech company based in California. Our design
              teams build intuitive, accessible products for billions of users.
            </p>
            <h3 className="font-semibold mb-1 mt-3">Headquarters</h3>
            <p className="flex items-center gap-1 text-gray-700">
              <MapPin className="w-4 h-4" />
              HSR Layout, Bengaluru
            </p>
            <div className="w-full h-40 bg-gray-200 mt-2 rounded-lg flex justify-center items-center text-gray-500">
              Google Map Placeholder
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="bg-white p-4 rounded-xl shadow text-sm space-y-4">
            <h3 className="font-semibold mb-2">110 Reviews</h3>
            {[1, 2].map((i) => (
              <div key={i} className="border-b pb-3 mb-3">
                <div className="flex justify-between">
                  <p className="font-semibold">Jhon</p>
                  <div className="flex gap-1 text-yellow-400">
                    {Array(4)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400" />
                      ))}
                  </div>
                </div>
                <p className="text-xs text-gray-500">20 May, 2021</p>
                <p className="text-sm mt-2 text-gray-700">
                  Great environment, amazing culture, and helpful team.
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Apply Button */}
      <div className="fixed bottom-4 w-full px-4">
        <button
          onClick={handleApply}
          disabled={applying}
          className={`w-full py-3 rounded-full text-sm font-semibold shadow-md transition ${
            applying
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {applying ? "Applying..." : "APPLY NOW"}
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
