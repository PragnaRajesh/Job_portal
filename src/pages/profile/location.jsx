import React from "react";
import { useNavigate } from "react-router-dom";

const LocationScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-4 bg-white flex flex-col justify-between">
      {/* Header */}
      <div>
        <h2 className="text-center text-lg font-semibold mb-4">Location</h2>

        {/* Progress bar */}
        <div className="w-full h-1 bg-gray-200 rounded-full mb-6">
          <div className="h-1 bg-blue-700 rounded-full w-4/5"></div>
        </div>

        {/* Title + Description */}
        <h3 className="text-md font-semibold mb-2">Discover the best jobs near you!</h3>
        <p className="text-sm text-gray-500 mb-4">
          This will help us find the best jobs for you in your current city
        </p>

        {/* Map iframe */}
        <div className="rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4110.83297559045!2d77.60172657531959!3d12.96682988734811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae154439c62b9d%3A0xaf37a3484e8a06da!2sHeadsup%20HR%20Solutions%20Pvt%20Ltd%C2%AE%20-%20Staffing%20and%20Recruitment%20Services!5e1!3m2!1sen!2sin!4v1751890144372!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          ></iframe>
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={() => navigate("/uploadresume")}
        className="w-full bg-blue-700 text-white py-3 mt-6 rounded-full text-sm font-medium"
      >
        Next
      </button>
    </div>
  );
};

export default LocationScreen;
