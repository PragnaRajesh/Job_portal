import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MapPin,
  Star,
  Bookmark,
  Share2,
  ArrowLeft,
} from "lucide-react";
import companyBanner from "../../assets/company-logo.jpg";
import googleLogo from "../../assets/job-logo.jpeg";

const JobDetails = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("job");
  const [applying, setApplying] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const jobTitle = "UI/UX Designer";

  const handleApply = () => {
    setApplying(true);
    setTimeout(() => {
      navigate("/jobs/submitdocuments", { state: { jobTitle } });
    }, 1000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "UI/UX Designer at Google",
          text: "Check out this job at Google!",
          url: window.location.href,
        })
        .catch((error) => console.log("Share failed:", error));
    } else {
      alert("Sharing is not supported on this device.");
    }
  };

  return (
    <div className="min-h-screen bg-white pb-32 relative rounded-t-3xl overflow-hidden pt-safe pb-safe">
      {/* Banner Image */}
      <div className="relative">
        <img
          src={googleLogo}
          alt="Google Banner"
          className="w-full h-56 object-cover"
        />

        {/* Back Button */}
        <div className="absolute top-3 left-3">
          <button
            onClick={() => navigate(-1)}
            className="bg-white p-1.5 rounded-full shadow"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        </div>

        {/* Company Logo */}
        <div className="absolute -bottom-6 left-4 w-14 h-14 rounded-xl bg-white p-1 shadow-md border border-blue-700">
          <img
            src={companyBanner}
            alt="Company"
            className="w-full h-full rounded-xl object-contain"
          />
        </div>
      </div>

      {/* Job Info */}
      <div className="mt-8 px-4 relative">
        {/* Bookmark + Share */}
        <div className="absolute top-0 right-12 flex gap-6">
          <button onClick={() => setBookmarked(!bookmarked)}>
            <Bookmark
              className={`w-5 h-5 transition ${
                bookmarked ? "text-blue-600 fill-blue-600" : "text-gray-400"
              }`}
            />
          </button>
          <button onClick={handleShare}>
            <Share2 className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        <h2 className="text-xl font-semibold">UI/UX Designer</h2>
       <div className="flex justify-between items-start text-sm mt-1">
  <p className="text-gray-700">Google | 10k–20k</p>
  <div className="flex items-center gap-1 text-yellow-400 mr-4">
    <Star className="w-4 h-4 fill-yellow-400" />
    <span className="text-gray-400">4.9</span>
    <span className="text-gray-400">(250)</span>
  </div>
</div>

<div className="flex justify-between items-start text-sm mt-1 text-gray-400">
  <p>Deadline: 21 March 2021</p>
  <p>20+ Applicants</p>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu enim
              tortor duis quis eget viverra netus. Ut sed dui eu, massa justo
              pretium in sit. Sit elit, penatibus nam donec ut sed sit tempor.
              Morbi eu lectus morbi nunc elementum.{" "}
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
            <ul className="ml-4 space-y-1 text-gray-700">
              <li>Minimum 1–2 Years of experience as a UI/UX Designer.</li>
              <li>Strong visual design background.</li>
              <li>A good portfolio that shows your design process. Strong
                command of Adobe XD or Figma.{" "}
                <span className="text-blue-600">Read more.....</span>
              </li>
            </ul>
          </div>
        )}

        {activeTab === "company" && (
          <div className="bg-white rounded-xl border p-4 space-y-4">
            <h3 className="font-semibold">Overview</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu enim
              tortor duis quis eget viverra netus. Ut sed dui eu, massa justo
              pretium in sit. Sit elit, penatibus nam donec ut sed sit tempor.
              Morbi eu lectus morbi nunc elementum.{" "}
              <span className="text-blue-600">Read more.....</span>
            </p>

            <h3 className="font-semibold mt-3">Headquarters</h3>
            <p className="flex items-center gap-1 text-gray-700">
              <MapPin className="w-4 h-4 text-blue-600" />
              HSR Layout Sec 3, Bengaluru
            </p>

            <iframe
  title="Company Location"
  className="w-full h-40 rounded-xl mt-2"
  style={{ border: 0 }}
  loading="lazy"
  allowFullScreen
  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NP7lSemQeJ0fPfFnfyCxs_X0kg137F4&q=HSR+Layout+Bengaluru">
</iframe>

          </div>
        )}

        {activeTab === "reviews" && (
          <div className="bg-white rounded-xl border p-4 space-y-4">
            <h3 className="font-semibold">110 Reviews</h3>
            {[1, 2].map((i) => (
              <div key={i} className="border-b pb-3 mb-3">
                <div className="flex justify-between">
                  <p className="font-semibold">Jhon</p>
                  <div className="flex gap-1 text-yellow-400">
                    {[...Array(5)].map((_, idx) => (
                      <Star
                        key={idx}
                        className={`w-4 h-4 ${
                          idx === 4 ? "text-gray-300" : "fill-yellow-400"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-gray-500">20 May, 2021</p>
                <p className="text-sm text-gray-700 mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
                  turpis elementum aliquam amet urna, enim. Urna vel amet sed
                  non aliquam. Cursus id sed ultrices velit sed pharetra nunc
                  sed etiam. Volutpat pretium, sodales massa amet sed venenatis.
                  Nullam in adipiscing id aliquam, felis integer amet. Cursus
                  porta nam quam id placerat.
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
              : "bg-blue-700 text-white hover:bg-blue-800"
          }`}
        >
          {applying ? "Applying..." : "APPLY NOW"}
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
