import React from "react";
import { motion } from "framer-motion";

const Tabs = ({ tabList, activeTab, onTabChange }) => {
  const getActiveStyles = (value) => {
    return activeTab === value
      ? "text-white bg-linear-to-r from-cyan-500 to-blue-500"
      : "text-blue-500 bg-transparent";
  };
  return (
    <div className="flex items-center justify-center my-10">
      <div className="bg-[#dcf8fc] rounded-full flex">
        {tabList.map((tab) => (
          <motion.button
            key={tab.id}
            initial={{ opacity: 0.8, scale: 1 }}
            animate={{
              opacity: activeTab === tab.value ? 1 : 0.8,
              scale: activeTab === tab.value ? 1.05 : 1,
            }}
            transition={{ duration: 0.2 }}
            className={`text-xs md:text-[15px] ${getActiveStyles(
              tab.value
            )} rounded-full px-4 md:px-10 py-[6px] md:py-3 m-1 md:m-2 cursor-pointer border border-transparent hover:shadow-lg hover:border hover:border-cyan-300`}
            onClick={() => onTabChange(tab.value)}
          >
            {tab.label}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
