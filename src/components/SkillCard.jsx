import React, { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

const SkillCard = ({ icon, skillName }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div className="bg-linear-to-t from-cyan-400 to-blue-400 rounded-2xl">
      <motion.div
        className="relative w-36 h-36 flex gap-1 justify-center items-center"
        onHoverStart={() => setShowOverlay(true)}
        onHoverEnd={() => setShowOverlay(false)}
      >
        <div className="flex items-center justify-center">{icon}</div>
        <AnimatePresence>
          {showOverlay && (
            <motion.div
              className="absolute inset-0 z-10 flex justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="absolute bg-blue-900 rounded-2xl pointer-events-none opacity-50 h-full w-full" />
              <motion.h1
                className="bg-white font-semibold text-sm z-10 px-3 py-2 rounded-full flex items-center gap-[0.5ch]"
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                exit={{ y: 0 }}
              >
                <span className="text-blue-600">{skillName}</span>
              </motion.h1>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default SkillCard;
