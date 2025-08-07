import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import stepIcon from "../../assets/step2.png";
import { ArrowLeft } from "lucide-react";
import StepImage from "../../components/StepImage";


const degreeOptions = {
  Graduate: ["B.E", "B.Tech", "BA", "BSc", "B.Com", "BBA"],
  "Post Graduate": ["M.E", "M.Tech", "MA", "MSc", "M.Com", "MBA"],
  Diploma: ["Diploma in Computer", "Diploma in Electrical", "Diploma in Mechanical"],
  ITI: ["Electrician", "Fitter", "Welder", "Mechanic"],
  "10th or Below 10th": ["SSLC", "CBSE", "ICSE", "Other"],
  "12th Pass": ["Science", "Commerce", "Arts"],
};

const specializationOptions = {
  "B.E": ["Computer Science", "Electronics", "Mechanical", "Civil"],
  "B.Tech": ["IT", "Electronics", "AI/ML", "Data Science"],
  "BA": ["English", "Political Science", "History"],
  "BSc": ["Maths", "Physics", "Biology"],
  "B.Com": ["Accounting", "Finance"],
  "BBA": ["Marketing", "HR"],
  "M.E": ["Embedded Systems", "Power Electronics", "VLSI"],
  "M.Tech": ["Embedded Systems", "Power Electronics", "VLSI"],
  "MA": ["English", "Sociology"],
  "MSc": ["Physics", "Biochemistry"],
  "M.Com": ["Accounting", "Finance"],
  "MBA": ["Marketing", "HR", "Finance"],
  "Diploma in Computer": ["Computer Applications"],
  "Diploma in Electrical": ["Circuit Theory"],
  "Diploma in Mechanical": ["Thermodynamics"],
  "Electrician": ["Electrical Maintenance"],
  "Fitter": ["Machine Tools"],
  "Welder": ["Arc Welding"],
  "Mechanic": ["Automobile"],
  "SSLC": ["General"],
  "CBSE": ["General"],
  "ICSE": ["General"],
  "Other": ["General"],
  "Science": ["Physics", "Biology", "Maths"],
  "Commerce": ["Accountancy", "Business Studies"],
  "Arts": ["History", "Political Science"]
};

const EducationDetails2 = () => {
  const navigate = useNavigate();
  const [educationLevel, setEducationLevel] = useState("");
  const [degree, setDegree] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [college, setCollege] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [medium, setMedium] = useState("");

  const handleNext = () => {
    if (!educationLevel || !degree || !specialization || !college || !month || !year || !medium) {
      alert("Please fill in all fields");
      return;
    }

    localStorage.setItem("educationLevel", educationLevel);
    localStorage.setItem("degree", degree);
    localStorage.setItem("specialization", specialization);
    localStorage.setItem("college", college);
    localStorage.setItem("month", month);
    localStorage.setItem("year", year);
    localStorage.setItem("medium", medium);

    navigate("/profile/jobtype");
  };

  const currentDegrees = degreeOptions[educationLevel] || [];
  const currentSpecializations = specializationOptions[degree] || [];

  return (
    <div className="min-h-screen bg-white p-4 flex flex-col justify-between pt-safe pb-safe">
      <div>
        <ArrowLeft className="w-6 h-6 sm:w-7 sm:h-7" onClick={() => navigate(-1)}/>
                  <h2 className="text-xl font-bold text-center mb-4">Education Details</h2>
        {/* Step Image */}
              <div className="w-full flex justify-center -mt-0 mb-6">
                <StepImage
                  stepNumber={2}
                  src={stepIcon}
                  alt="Progress Step 2"
                  className="object-contain"
                  animationType="progressive"
                  threshold={0.2}
                  delay={150}
                />
              </div>
        <h3 className="font-semibold mb-2">Select your highest education level</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {Object.keys(degreeOptions).map((option) => (
            <button
              key={option}
              className={`px-3 py-1 rounded-md border text-sm ${
                educationLevel === option
                  ? "bg-white border-blue-700 text-blue-700"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => {
                setEducationLevel(option);
                setDegree("");
                setSpecialization("");
              }}
            >
              {option}
            </button>
          ))}
        </div>

        <label className="text-sm font-medium block mb-1">Degree</label>
        <select
          value={degree}
          onChange={(e) => {
            setDegree(e.target.value);
            setSpecialization("");
          }}
          className="w-full border border-gray-300 rounded-lg p-2 mb-4 text-sm"
        >
         <select>
          <option value="">Select degree</option>
          </select> 
          {currentDegrees.map((deg) => (
            <option key={deg} value={deg}>
              {deg}
            </option>
          ))}
        </select>

        <label className="text-sm font-medium block mb-1">Specialization</label>
        <select
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 mb-4 text-sm"
        >
          <option value="">Select specialization</option>
          {currentSpecializations.map((spec) => (
            <option key={spec} value={spec}>
              {spec}
            </option>
          ))}
        </select>

        <label className="text-sm font-medium block mb-1">College Name</label>
        <input
          type="text"
          placeholder="e.g. St. Stephens"
          value={college}
          onChange={(e) => setCollege(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 mb-4 text-sm"
        />

        <div className="flex gap-3 mb-4">
          <select
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="w-1/2 border border-gray-300 rounded-lg p-2 text-sm"
          >
            <option value="">Month</option>
            {[
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ].map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>

          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-1/2 border border-gray-300 rounded-lg p-2 text-sm"
          >
            <option value="">Year</option>
            {Array.from({ length: 30 }, (_, i) => 2025 - i).map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>

        <label className="text-sm font-medium block mb-1">School Medium</label>
        <select
          value={medium}
          onChange={(e) => setMedium(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 mb-4 text-sm"
        >
          <option value="">Select option</option>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Kannada">Kannada</option>
          <option value="Telugu">Telugu</option>
        </select>
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

export default EducationDetails2;
