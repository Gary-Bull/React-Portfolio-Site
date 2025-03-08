import React, { useState } from "react";
import { SKILLS, SKILLS_TABS } from "../utils/data";
import Tabs from "../components/Tabs";
import SkillCard from "../components/SkillCard";
import { motion } from "framer-motion";

const TechnicalProficiency = () => {
  const [tabData, setTabData] = useState(SKILLS);
  const [activeTab, setActiveTab] = useState("all");

  const handleTabChange = (value) => {
    if (value == "all") {
      setTabData(SKILLS);
      setActiveTab("all");
      return;
    }

    const updatedList = SKILLS.filter((skill) => skill.type === value);
    setTabData(updatedList);
    setActiveTab(value);
  };

  return (
    <section
      id="skills"
      className="container max-w-7xl mt-20 mx-auto px-8 bg-linear-to-b from-[#ECFAFCFF] to-[#ffffff] rounded-2xl scroll-mt-14"
    >
      <div className="container mx-auto p-10">
        <div className="w-full mx-auto">
          <h4 className="section-title">Technical Proficiency</h4>
          <p className="text-sm text-center mt-4 leading-6">
            I am a versatile developer with a strong foundation in front-end and
            modern technologies. I have experience in building web applications
            using React, Next.js, and Tailwind CSS. I also have experience in
            building mobile applications using Swift. I am always eager to learn
            new technologies and improve my skills.
          </p>
        </div>
        <Tabs
          tabList={SKILLS_TABS}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 min-h-[450px">
          {tabData.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <SkillCard
                icon={<skill.icon className="w-6 h-6 text text-blue-500" />}
                skillName={skill.skill}
                progress={skill.progress}
                description={skill.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalProficiency;
