import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  Phone,
  Video,
  SendHorizonal,
  HomeIcon,
  Briefcase,
  PlusCircle,
  FileBarChart,
  User2,
} from "lucide-react";

const Chat = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { chatIndex } = location.state || {};
  const [chats, setChats] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("dmChats")) || [];
    setChats(saved);
  }, []);

  const handleSend = () => {
    if (!message.trim()) return;

    const updatedChats = [...chats];
    updatedChats[chatIndex].messages.push({
      from: "user",
      text: message,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    });

    localStorage.setItem("dmChats", JSON.stringify(updatedChats));
    setChats(updatedChats);
    setMessage("");
  };

  const chat = chats[chatIndex];

  if (!chat) return <div className="p-4">Invalid chat index</div>;

  return (
    <div className="min-h-screen bg-white pb-28">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3 border-b shadow-sm">
        <div className="flex items-center gap-3">
          <ChevronLeft className="cursor-pointer" onClick={() => navigate(-1)} />
          <img
            src={chat.profile || "https://i.pravatar.cc/100?img=3"}
            alt="user"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-sm">{chat.name}</p>
            <p className="text-xs text-green-600">Online</p>
          </div>
        </div>
        <div className="flex gap-2 text-blue-600">
          <Phone className="cursor-pointer" />
          <Video className="cursor-pointer" />
        </div>
      </div>

      {/* Messages */}
      <div className="p-4 space-y-3">
        {chat.messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[75%] px-4 py-2 rounded-xl text-sm ${
                msg.from === "user"
                  ? "bg-blue-600 text-white rounded-br-none"
                  : "bg-gray-200 text-gray-900 rounded-bl-none"
              }`}
            >
              {msg.text}
              <div className="text-[10px] text-white/60 mt-1 text-right">
                {msg.time}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="fixed bottom-14 left-0 w-full bg-white px-4 py-2">
        <div className="flex items-center border rounded-full px-3 py-1.5 shadow-sm">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            placeholder="Write your message"
            className="flex-1 outline-none text-sm"
          />
          <button onClick={handleSend}>
            <SendHorizonal size={20} className="text-blue-600 ml-2" />
          </button>
        </div>
      </div>

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

export default Chat;
