import React from "react";

const ContactInfoCard = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-5 bg-[#f3fdff] rounded border border-cyan-500 px-4 py-3 mb-5">
      <div className="w-10 h-10 text-xl text-white flex items-center justify-center bg-linear-to-r from-cyan-300 to-blue-300 rounded-lg">
        {icon}
      </div>
      <p className="text-blue-500 text-xs md:text-sm">{text}</p>
    </div>
  );
};

export default ContactInfoCard;
