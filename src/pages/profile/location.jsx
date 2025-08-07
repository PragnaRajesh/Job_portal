import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import stepIcon from "../../assets/step5.png";
import { ArrowLeft } from "lucide-react";
import StepImage from "../../components/StepImage";
import EnhancedProgressBar from "../../components/EnhancedProgressBar";

const containerStyle = {
  width: "100%",
  height: "16rem",
  borderRadius: "0.75rem",
  overflow: "hidden",
};

const center = {
  lat: 12.9668,
  lng: 77.6017,
};

const LocationScreen = () => {
  const navigate = useNavigate();

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyB2NP7lSemQeJ0fPfFnfyCxs_X0kg137F4",
  });

  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-purple-50 via-white to-indigo-50 pt-6 pb-24 flex flex-col justify-between overflow-hidden pt-safe pb-safe">
      {/* Main Content */}
      <div className="flex-1">
        <ArrowLeft className="w-6 h-6 sm:w-7 sm:h-7 mb-2" onClick={() => navigate(-1)} />

        {/* Enhanced Progress Bar */}
        <EnhancedProgressBar currentStep={6} totalSteps={7} />

        <h2 className="text-center text-lg font-bold mb-4">Location</h2>

      {/* Step Image */}
      <div className="w-full flex justify-center -mt-0 mb-6">
        <StepImage
          stepNumber={5}
          src={stepIcon}
          alt="Progress Step 5"
          className="object-contain"
          animationType="progressive"
          threshold={0.2}
          delay={100}
        />
      </div>

      

        <h3 className="text-md font-semibold mb-2">Discover the best jobs near you!</h3>
        <p className="text-sm text-gray-500 mb-4">
          This will help us find the best jobs for you in your current city
        </p>

        {/* Dynamic Google Map */}
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={14}
          >
            {/* Optional markers or overlays can go here */}
          </GoogleMap>
        ) : (
          <p className="text-center text-sm text-gray-500">Loading map...</p>
        )}
      </div>

      {/* Next Button */}
      <div className="mt-4">
        <button
          onClick={() => navigate("/profile/uploadresume")}
          className="w-full bg-blue-700 text-white py-3 rounded-full text-sm font-medium"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default LocationScreen;
