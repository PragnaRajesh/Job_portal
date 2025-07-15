import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Star } from "lucide-react";
import companyBanner from '../../assets/company-logo.jpg';
import googleLogo from '../../assets/job-logo.jpeg';

const JobDetails = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("job");
  const [applying, setApplying] = useState(false);
  const jobTitle = "UI/UX Designer";

  const handleApply = () => {
    setApplying(true);
    setTimeout(() => {
      navigate("/jobs/submitdocuments", { state: { jobTitle } });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white pb-32 relative">
      {/* Banner Image */}
      <div className="relative">
        <img
          src={googleLogo}
          alt="Google Logo"
          className="w-full h-56 object-cover"
        />
        <div className="absolute -bottom-6 left-4 w-14 h-14 rounded-full bg-white p-1 shadow-md">
          <img
            src={companyBanner}
            alt="Company Banner"
            className="w-full h-full rounded-full object-contain"
          />
        </div>
      </div>

      {/* Job Header */}
      <div className="mt-8 px-4">
        <h2 className="text-xl font-semibold">{jobTitle}</h2>
        <p className="text-sm text-gray-700 mt-1">Google | 10k–20k</p>
        <div className="flex justify-between items-center text-sm mt-1">
          <p className="text-gray-500">Deadline: 21 March 2021</p>
          <p className="text-gray-500">20+ Applicants</p>
        </div>
        <div className="flex items-center gap-1 mt-2 text-yellow-500 text-sm">
          <Star className="w-4 h-4 fill-yellow-400" />
          <span>4.9</span>
          <span className="text-gray-600">(250)</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-around mt-6 border-b text-sm font-medium px-4">
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

      {/* Tab Content */}
      <div className="px-4 mt-4 space-y-4 text-sm">
        {activeTab === "job" && (
          <div className="bg-white rounded-xl border p-4 space-y-4">
            <h3 className="font-semibold">Job Description</h3>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
              dui eu, massa justo pretium in sit.{" "}
              <span className="text-blue-600">Read more.....</span>
            </p>

            <h3 className="font-semibold">Job Responsibilities</h3>
            <ul className="list-decimal ml-4 space-y-1 text-gray-700">
              <li>
                Develop UI mockups and prototypes that clearly illustrate how
                sites function and look like.
              </li>
              <li>
                Illustrate design ideas using storyboards, process flows and
                sitemaps.{" "}
                <span className="text-blue-600">Read more.....</span>
              </li>
            </ul>

            <h3 className="font-semibold">Job Requirement</h3>
            <ul className="list-disc ml-4 space-y-1 text-gray-700">
              <li>Minimum 1–2 Years of experience as a UI/UX Designer.</li>
              <li>Strong visual design background.</li>
              <li>
                A good portfolio that shows your design process. Strong command
                of Adobe XD or Figma.
              </li>
            </ul>
          </div>
        )}

        {activeTab === "company" && (
          <div className="bg-white rounded-xl border p-4 space-y-4">
            <h3 className="font-semibold">Overview</h3>
            <p className="text-gray-700">
              Google is a leading tech company based in California. Our design
              teams build intuitive, accessible products for billions of users.
            </p>

            <h3 className="font-semibold mt-3">Headquarters</h3>
            <p className="flex items-center gap-1 text-gray-700">
              <MapPin className="w-4 h-4" />
              HSR Layout Sec 3, Bengaluru
            </p>

            <div className="w-full h-40 bg-gray-200 mt-2 rounded-lg flex justify-center items-center text-gray-500">
              Google Map Placeholder
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="bg-white rounded-xl border p-4 space-y-4">
            <h3 className="font-semibold">110 Reviews</h3>
            {[1, 2].map((i) => (
              <div key={i} className="border-b pb-3 mb-3">
                <div className="flex justify-between">
                  <p className="font-semibold">John</p>
                  <div className="flex gap-1 text-yellow-400">
                    {Array(4)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400" />
                      ))}
                  </div>
                </div>
                <p className="text-xs text-gray-500">20 May, 2021</p>
                <p className="text-sm text-gray-700 mt-1">
                  Great environment, amazing culture, and helpful team.
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Apply Button */}
      <div className="fixed bottom-4 left-0 w-full px-4">
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
