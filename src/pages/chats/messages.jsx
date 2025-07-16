import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HomeIcon, Briefcase, PlusCircle, FileBarChart, User2 } from "lucide-react";

const Messages = () => {
  const navigate = useNavigate();
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("dmChats")) || [];
    setChats(saved);
  }, []);

  const openChat = (index) => {
    navigate(`/messages/chat`, { state: { chatIndex: index } });
  };

  return (
    <div className="min-h-screen bg-white px-4 pt-6 pb-32">
      <h2 className="text-lg font-semibold mb-4">Messages</h2>

      {chats.map((chat, index) => (
        <div
          key={index}
          onClick={() => openChat(index)}
          className="flex items-center justify-between border-b py-3 cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <img
              src={chat.profile || "https://i.pravatar.cc/100?img=3"}
              alt="profile"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">{chat.name}</p>
              <p className="text-sm text-gray-600 truncate w-52">{chat.messages.at(-1)?.text || ""}</p>
            </div>
          </div>
          <span className="text-xs text-gray-400">{chat.time || "now"}</span>
        </div>
      ))}

      {/* Bottom Nav */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t flex justify-around items-center py-2 z-50">
        <HomeIcon size={22} className="text-gray-600 cursor-pointer" onClick={() => navigate("/")} />
        <Briefcase size={22} className="text-gray-600 cursor-pointer" onClick={() => navigate("/jobs/joblist")} />
        <div className="-mt-5 bg-white rounded-full shadow-md p-1">
          <PlusCircle size={32} className="text-blue-500" />
        </div>
        <FileBarChart size={22} className="text-gray-600 cursor-pointer" onClick={() => navigate("/applications")} />
        <User2 size={22} className="text-blue-600 cursor-pointer" onClick={() => navigate("/myprofilesection/myprofile")} />
      </div>
    </div>
  );
};

export default Messages;
