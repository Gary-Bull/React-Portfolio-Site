import React from "react";

import { FaReact, FaHtml5, FaSwift } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";

const HeroIcon = ({ iconName }) => {
  let Icon;
  let classes;

  switch (iconName) {
    case "FaReact":
      Icon = FaReact;
      classes = "left-[110px] md:left-[150px] -bottom-6 rotate-[3.75deg]";
      break;
    case "FaHtml5":
      Icon = FaHtml5;
      classes = "-left-10 bottom-20 rotate-[1.75deg]";
      break;
    case "FaSwift":
      Icon = FaSwift;
      classes =
        "left-[200px] md:left-[255px] -bottom-9 md:-bottom-10 rotate-[4.75deg]";
      break;
    case "BiLogoJavascript":
      Icon = BiLogoJavascript;
      classes = "left-5 md:left-10 -bottom-2 rotate-[2.75deg]";
      break;
    default:
      Icon = FaReact;
      break;
  }

  return (
    <div className={`icon-img ${classes}`}>
      <Icon color="white" fontSize="42px" />
    </div>
  );
};

export default HeroIcon;
