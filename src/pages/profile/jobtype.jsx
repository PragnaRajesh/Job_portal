import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import stepIcon from "../../assets/step3.png";
import { ArrowLeft } from "lucide-react";

const JobType = () => {
  const navigate = useNavigate();

  const [preferredShifts, setPreferredShifts] = useState([]);
  const [preferredWorkplace, setPreferredWorkplace] = useState([]);
  const [employmentType, setEmploymentType] = useState([]);

  const toggleSelection = (item, categorySetter, currentState) => {
    if (currentState.includes(item)) {
      categorySetter(currentState.filter((i) => i !== item));
    } else {
      categorySetter([...currentState, item]);
    }
  };

  const handleNext = () => {
    if (
      preferredShifts.length === 0 &&
      preferredWorkplace.length === 0 &&
      employmentType.length === 0
    ) {
      alert("Please select at least one option.");
      return;
    }

    localStorage.setItem("preferredShifts", JSON.stringify(preferredShifts));
    localStorage.setItem("preferredWorkplace", JSON.stringify(preferredWorkplace));
    localStorage.setItem("employmentType", JSON.stringify(employmentType));

    navigate("/profile/experiencedecision");
  };

  return (
    <div className="h-screen bg-white px-4 pt-6 pb-24 flex flex-col justify-between overflow-hidden pt-safe pb-safe">
       {/* Main Content */}
      <div className="flex-1 flex flex-col justify-start">
        <ArrowLeft className="w-6 h-6 sm:w-7 sm:h-7" onClick={() => navigate(-1)}/>
        <h2 className="text-xl font-bold text-center mb-4">Preferred Job Type</h2>
      {/* Step Image */}
      <div className="w-full flex justify-center -mt-0 mb-6">
        <img
          src={stepIcon}
          alt="Progress Step 3"
          className="object-contain"
        />
      </div>
        {/* Preferred Shifts */}
        <div className="mb-6">
          <h3 className="text-md font-semibold mb-2">Preferred Shifts</h3>
          <div className="space-y-2">
            {["Night Shift", "Day Shift"].map((shift) => (
              <label key={shift} className="flex items-center justify-between">
                <span>{shift}</span>
                <input
                  type="checkbox"
                  checked={preferredShifts.includes(shift)}
                  onChange={() =>
                    toggleSelection(shift, setPreferredShifts, preferredShifts)
                  }
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
              </label>
            ))}
          </div>
        </div>

        {/* Preferred Workplace */}
        <div className="mb-6">
          <h3 className="text-md font-semibold mb-2">Preferred Workplace</h3>
          <div className="space-y-2">
            {["Work from Home", "Work from Office", "Field Job"].map((place) => (
              <label key={place} className="flex items-center justify-between">
                <span>{place}</span>
                <input
                  type="checkbox"
                  checked={preferredWorkplace.includes(place)}
                  onChange={() =>
                    toggleSelection(place, setPreferredWorkplace, preferredWorkplace)
                  }
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
              </label>
            ))}
          </div>
        </div>

        {/* Preferred Employment Type */}
        <div className="mb-6">
          <h3 className="text-md font-semibold mb-2">Preferred Employment Type</h3>
          <div className="space-y-2">
            {["Full Time", "Part Time"].map((type) => (
              <label key={type} className="flex items-center justify-between">
                <span>{type}</span>
                <input
                  type="checkbox"
                  checked={employmentType.includes(type)}
                  onChange={() =>
                    toggleSelection(type, setEmploymentType, employmentType)
                  }
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-4">
        <button
          onClick={handleNext}
          className="w-full bg-blue-700 text-white py-3 rounded-full text-sm font-semibold"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default JobType;
