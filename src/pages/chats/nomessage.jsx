import React from "react";
import { useNavigate } from "react-router-dom";
import { HomeIcon, Briefcase, PlusCircle, FileBarChart, User2 } from "lucide-react";

const NoMessages = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-6 pb-24">
      <img
        src="https://cdn-icons-png.flaticon.com/512/5611/5611049.png"
        alt="no message"
        className="w-32 h-32 mb-6"
      />
      <h2 className="font-bold text-lg">No Message</h2>
      <p className="text-sm text-gray-600 mb-6">You currently have no incoming messages</p>
      <button
        onClick={() => navigate("/messages")}
        className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium"
      >
        CREATE A MESSAGE
      </button>

      {/* Bottom Nav */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t flex justify-around items-center py-2">
        <HomeIcon size={22} className="text-gray-600 cursor-pointer" onClick={() => navigate("/")} />
        <Briefcase size={22} className="text-gray-600 cursor-pointer" onClick={() => navigate("/jobs/joblist")} />
        <div className="-mt-5 bg-white rounded-full shadow-md p-1">
          <PlusCircle size={32} className="text-blue-500" />
        </div>
        <FileBarChart size={22} className="text-gray-600 cursor-pointer" onClick={() => navigate("/applications")} />
        <User2 size={22} className="text-gray-600 cursor-pointer" onClick={() => navigate("/myprofilesection/myprofile")} />
      </div>
    </div>
  );
};

export default NoMessages;
