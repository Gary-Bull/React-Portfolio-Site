import React, { useEffect, useState } from "react";
import { SKILLS, SKILLS_TABS } from "../utils/data";
import SkillCard from "../components/SkillCard";
import { animate, motion, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";

const TechnicalProficiency = () => {
  const FAST_DURATION = 35;
  const SLOW_DURATION = 75;

  const [duration, setDuration] = useState(FAST_DURATION);

  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [xTranslation, width, duration, rerender]);

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
            using HTML, CSS, JavaScript, BootStrap, React, and Tailwind CSS. I
            also have experience in building mobile applications using Swift,
            SwiftUI, Flutter and Dart. I am always eager to learn new
            technologies and improve my skills.
          </p>
        </div>
        <div className="container max-w-7xl mx-auto before:absolute before:inline-block before:bg-linear-to-r before:from-[#fff] before:to-transparent before:h-[225px] before:w-[100px] sm:before:w-[150px] before:overflow-hidden before:left-0 before:z-20 after:absolute after:inline-block after:bg-linear-to-l after:from-[#fff] after:to-transparent after:h-[225px] after:w-[100px] sm:after:w-[150px] after:overflow-hidden after:right-0 after:z-20">
          <motion.div
            className="absolute left-0 flex gap-4 py-10"
            ref={ref}
            style={{ x: xTranslation }}
            onHoverStart={() => {
              setMustFinish(true);
              setDuration(SLOW_DURATION);
            }}
            onHoverEnd={() => {
              setMustFinish(true);
              setDuration(FAST_DURATION);
            }}
          >
            {[...SKILLS, ...SKILLS, ...SKILLS].map((skill) => (
              <div key={skill.id} className="flex flex-row">
                <SkillCard
                  icon={<skill.icon className="w-16 h-16 text text-white" />}
                  skillName={skill.skill}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalProficiency;
