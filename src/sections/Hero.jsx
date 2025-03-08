import React from "react";

import cartoonMe from "../assets/images/cartoonMe.png";
import HeroIcon from "../components/heroIcon";
import { STATS } from "../utils/data";
import StatInforCard from "../components/StatInforCard";

const Hero = () => {
  const handleViewWork = () => {
    const projects = document.getElementById("projects");
    if (projects) {
      projects.scrollIntoView({
        behavior: "smooth",
        block: "start",
        top: -50,
      });
    }
  };
  const handleViewSkills = () => {
    const skills = document.getElementById("skills");
    if (skills) {
      skills.scrollIntoView({
        behavior: "smooth",
        block: "start",
        top: -50,
      });
    }
  };

  return (
    <section id="hero" className="container max-w-7xl mx-auto px-8">
      <div className="flex flex-col lg:flex-row gap-14 items-center justify-between mt-[80px]">
        <div className="order-2 lg:order-1 text-center lg:text-left mt-16 lg:mt-0">
          <h3 className="text-xl lf:text-2xl font-medium text-black">
            👋 Hi, I'm Gary
          </h3>
          <h1 className="w-full lg:w-[480px] text-4xl lg:text-5xl font-bold leading-[50px] lg:leading-[60px] mt-3 bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            A Frontend Developer and Aspiring Mobile Developer
          </h1>

          <p className="w-full lg:w-[500px] text-sm lg:text-base mt-4">
            I'm a passionate Frontend Developer with 4 years of experience
            building user interfaces and web applications. I specialize in
            creating responsive, user-friendly websites using modern tools and
            technologies. I'm also an aspiring Mobile Developer.
          </p>

          <div className="flex justify-center lg:justify-start gap-4 md:gap-8 mt-6">
            <button
              className="flex-1 md:flex-none action-btn-outline btn-scale-anim cursor-pointer"
              onClick={handleViewWork}
            >
              View My Work
            </button>
            <button
              className="flex-1 md:flex-none action-btn btn-scale-anim cursor-pointer"
              onClick={handleViewSkills}
            >
              View My Skills
            </button>
          </div>
        </div>
        <div className="relative order-1 lg:order-2 w-[300px] md:w-[370px] h-auto bg-linear-to-r from-cyan-300 to-blue-300 rounded-3xl shadow-2xl flex items-center justify-center">
          <img
            src={cartoonMe}
            alt="A cartoon picture of me, Gary"
            className="profile-pic rounded-3xl"
          />
          <HeroIcon iconName="FaReact" />
          <HeroIcon iconName="BiLogoJavascript" />
          <HeroIcon iconName="FaHtml5" />
          <HeroIcon iconName="FaSwift" />
        </div>
      </div>
      <div className="flex gap-12 mt-16 md:mt-24 flex-wrap justify-center">
        {STATS.map((stat) => (
          <StatInforCard key={stat.id} count={stat.count} label={stat.label} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
