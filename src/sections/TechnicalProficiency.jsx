import React, { useEffect } from "react";
import { SKILLS } from "../utils/data";
import SkillCard from "../components/SkillCard";

const TechnicalProficiency = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);
      });
    }
  }, []);

  return (
    <section
      id="skills"
      className="container max-w-7xl mt-20 mx-auto px-8 py-8 bg-linear-to-b from-[#ECFAFCFF] to-[#ffffff] rounded-2xl scroll-mt-14"
    >
      <div className="container mx-auto p-10">
        <div className="w-full mx-auto">
          <h4 className="section-title">Technical Proficiency</h4>
          <p className="text-sm text-center mt-4 leading-6">
            I am a versatile developer with a strong foundation in front-end and
            modern technologies. I have experience in building web applications
            using HTML, CSS, JavaScript, BootStrap, React, and Tailwind CSS. I
            also have experience in building mobile applications using Swift,
            SwiftUI, Flutter and Dart. I am always eager to learn new
            technologies and improve my skills.
          </p>
        </div>
        <div className="container max-w-7xl mx-auto scroller pt-4">
          <div className="scroller-inner">
            {[...SKILLS, ...SKILLS].map((skill) => (
              <div key={skill.id} className="flex flex-row">
                <SkillCard
                  icon={<skill.icon className="w-16 h-16 text text-white" />}
                  skillName={skill.skill}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalProficiency;
