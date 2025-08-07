import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import stepIcon from "../../assets/step2.png";
import graduationImg from "../../assets/education.jpeg";
import { ArrowLeft } from "lucide-react";
import StepImage from "../../components/StepImage";

const EducationDetails = () => {
  const navigate = useNavigate();
  const [isPursuing, setIsPursuing] = useState(null); // Yes = true, No = false

  const handleNext = () => {
    if (isPursuing === null) {
      alert("Please select an option.");
      return;
    }

    localStorage.setItem("isPursuingEducation", isPursuing);
    navigate("/profile/educationdetails2");
  };

  return (
    <div className="h-screen bg-white px-4 pt-6 pb-24 flex flex-col justify-between overflow-hidden pt-safe pb-safe">

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-start">
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

      

        <img
          src={graduationImg}
          alt="Graduation"
          className="w-full h-44 object-contain mb-4"
        />

        <h3 className="font-semibold text-sm mb-2">
          Are you currently pursuing your education?
        </h3>

        <div className="flex space-x-4 mb-4">
          <button
            className={`flex-1 py-2 rounded-lg text-sm font-medium border transition-all duration-200 ${
              isPursuing === true
                ? "bg-blue-700 text-white border-blue-700"
                : "bg-white text-blue-700 border-blue-700"
            }`}
            onClick={() => setIsPursuing(true)}
          >
            Yes
          </button>
          <button
            className={`flex-1 py-2 rounded-lg text-sm font-medium border transition-all duration-200 ${
              isPursuing === false
                ? "bg-blue-700 text-white border-blue-700"
                : "bg-white text-blue-700 border-blue-700"
            }`}
            onClick={() => setIsPursuing(false)}
          >
            No
          </button>
        </div>
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

export default EducationDetails;
