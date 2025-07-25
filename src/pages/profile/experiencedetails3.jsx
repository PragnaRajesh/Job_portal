import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ExperienceDetails3 = () => {
  const navigate = useNavigate();
  const [isCurrentCompany, setIsCurrentCompany] = useState(null);
  const [noticePeriod, setNoticePeriod] = useState("");
  const [startMonth, setStartMonth] = useState("");
  const [startYear, setStartYear] = useState("");

  const noticeOptions = [
    "Immediate",
    "Less than 15 days",
    "1 month",
    "2 months",
    "3 months",
    "3 or more months",
  ];

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  const years = Array.from({ length: 30 }, (_, i) => `${new Date().getFullYear() - i}`);

  const handleNext = () => {
    if (isCurrentCompany === null || !noticePeriod || !startMonth || !startYear) {
      alert("Please fill in all fields");
      return;
    }
    navigate("/profile/location");
  };

  return (
    <div className="min-h-screen bg-white p-4 flex flex-col justify-between pt-safe pb-safe">
      <div>
        <h2 className="text-center text-base font-semibold mb-3">Experience Details</h2>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-gray-200 rounded-full mb-6">
          <div className="h-1 bg-blue-700 rounded-full w-[85%]"></div>
        </div>

        <h3 className="font-semibold mb-2 text-sm">
          Are you currently working in this company?
        </h3>

        <div className="flex mb-4 rounded-xl overflow-hidden border">
          <button
            className={`flex-1 py-2 text-sm font-medium ${
              isCurrentCompany === true
                ? "bg-blue-700 text-white"
                : "bg-white text-blue-700"
            }`}
            onClick={() => setIsCurrentCompany(true)}
          >
            Yes
          </button>
          <button
            className={`flex-1 py-2 text-sm font-medium ${
              isCurrentCompany === false
                ? "bg-blue-700 text-white"
                : "bg-white text-blue-700"
            }`}
            onClick={() => setIsCurrentCompany(false)}
          >
            No
          </button>
        </div>

        {/* Notice Period */}
        <h3 className="font-semibold mb-2 text-sm">Notice Period</h3>
        <div className="grid grid-cols-2 gap-2 mb-4">
          {noticeOptions.map((option) => (
            <button
              key={option}
              className={`border rounded-lg px-3 py-2 text-sm font-semibold ${
                noticePeriod === option ? "bg-blue-100 border-blue-700 text-black" : "bg-white"
              }`}
              onClick={() => setNoticePeriod(option)}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Start Date */}
        <h3 className="font-semibold mb-2 text-sm">Start Date</h3>
        <div className="flex gap-4 mb-6">
          <select
            value={startMonth}
            onChange={(e) => setStartMonth(e.target.value)}
            className="w-1/2 border border-gray-300 rounded-lg p-2 text-sm"
          >
            <option value="">Month</option>
            {months.map((month) => (
              <option key={month} value={month}>{month}</option>
            ))}
          </select>

          <select
            value={startYear}
            onChange={(e) => setStartYear(e.target.value)}
            className="w-1/2 border border-gray-300 rounded-lg p-2 text-sm"
          >
            <option value="">Year</option>
            {years.map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={handleNext}
        className="bg-blue-700 text-white py-3 rounded-full text-sm font-semibold"
      >
        Next
      </button>
    </div>
  );
};

export default ExperienceDetails3;
