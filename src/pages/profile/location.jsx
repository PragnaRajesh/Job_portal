import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import stepIcon from "../../assets/step3.png";

const containerStyle = {
  width: "100%",
  height: "250px",
  borderRadius: "12px",
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
    <div className="h-screen p-4 bg-white pt-6 pb-24 flex flex-col justify-between overflow-hidden pt-safe pb-safe">

      {/* Step Image */}
      <div className="w-full flex justify-center -mt-2 mb-3">
        <img
          src={stepIcon}
          alt="Progress Step 3"
          className="object-contain"
        />
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <h2 className="text-center text-lg font-bold mb-4">Location</h2>

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
