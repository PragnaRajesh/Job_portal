import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import stepIcon from "../../assets/step4.png";


const ExperienceDetails2 = () => {
  const [companyName, setCompanyName] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const navigate = useNavigate();

  const suggestedSkills = [
    "Programming",
    "Design",
    "Marketing",
    "Sales",
    "Data Analysis",
    "Teamwork"
  ];

  const toggleSkill = (skill) => {
    setSelectedSkills((prevSkills) =>
      prevSkills.includes(skill)
        ? prevSkills.filter((s) => s !== skill)
        : [...prevSkills, skill]
    );
  };

  const handleNext = () => {
    if (!companyName) {
      alert("Please enter a company name");
      return;
    }

    console.log({ companyName, selectedSkills });
    navigate("/profile/experiencedetails3");
  };

  return (
    <div className="min-h-screen p-4 bg-white flex flex-col justify-between pt-safe pb-safe">
      <div>
        <h2 className="text-center text-lg font-semibold mb-4">Experience Details</h2>

        {/* Step Image */}
              <div className="w-full flex justify-center -mt-0 mb-6">
                <img
                  src={stepIcon}
                  alt="Progress Step 4"
                  className="object-contain"
                />
              </div>

        {/* Company Dropdown */}
        <label className="font-semibold mb-1 block">Company information</label>
        <p className="text-sm text-gray-600 mb-2">Add your company details</p>
        <select
          className="w-full border border-gray-300 rounded-lg p-3 mb-4"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        >
          <option value="">Company name</option>
          <option value="Google">Google</option>
          <option value="Microsoft">Microsoft</option>
          <option value="Amazon">Amazon</option>
        </select>

        {/* Skills */}
        <label className="font-semibold mb-1 block">Skills</label>
        <p className="text-sm text-gray-600 mb-2">Add your skills</p>

        <select className="w-full border border-gray-300 rounded-lg p-3 mb-4">
          <option value="">Search for skills</option>
          <option value="Adobe XD">Adobe XD</option>
          <option value="Agile">Agile</option>
          <option value="C#">C#</option>
          <option value="C++">C++</option>
          <option value="CRM">CRM</option>
          <option value="Collaboration">Collaboration</option>
          <option value="Content Marketing">Content Marketing</option>
          <option value="Email Marketing">Email Marketing</option>
          <option value="Excel">Excel</option>
          <option value="Figma">Figma</option>
          <option value="Go">Go</option>
          <option value="Google Ads">Google Ads</option>
          <option value="Graphic Design">Graphic Design</option>
          <option value="Java">Java</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Lead Generation">Lead Generation</option>
          <option value="Negotiation">Negotiation</option>
          <option value="Power BI">Power BI</option>
          <option value="Project Management">Project Management</option>
          <option value="Python">Python</option>
          <option value="Python (Pandas)">Python (Pandas)</option>
          <option value="Ruby">Ruby</option>
          <option value="SEO">SEO</option>
          <option value="SQL">SQL</option>
          <option value="Salesforce">Salesforce</option>
          <option value="Scrum">Scrum</option>
          <option value="Sketch">Sketch</option>
          <option value="Tableau">Tableau</option>
          <option value="UI/UX Design">UI/UX Design</option>
        </select>

        <p className="font-semibold mb-2">Suggested Skills</p>
        <div className="grid grid-cols-2 gap-2">
          {suggestedSkills.map((skill) => (
            <button
              key={skill}
              className={`border rounded-lg py-2 px-4 text-sm font-medium justify-center ${
                selectedSkills.includes(skill)
                  ? "bg-blue-100 text-black border-blue-500"
                  : "bg-white text-black border-gray-300"
              }`}
              onClick={() => toggleSkill(skill)}
            >
              {skill}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={handleNext}
        className="w-full bg-blue-700 text-white py-3 mt-6 rounded-full text-sm font-medium"
      >
        Next
      </button>
    </div>
  );
};

export default ExperienceDetails2;
