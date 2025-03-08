import React from "react";

const ProjectCard = ({ imgUrl, title, description, tags }) => {
  return (
    <div className="h-full bg-white rounded-xl overflow-hidden shadow-md mx-2">
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-72 md:h-80 object-cover"
      />
      <div className="h-full px-4 py-5 bg-linear-to-t from-[#ECFAFCFF] to-[#ffffff]">
        <h3 className="text-base font-semibold line-clamp-2 overflow-hidden text-ellipsis">
          {title}
        </h3>
        <p className="text-sm mt-2 leading-6">{description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-[#ECFAFCFF] text-blue-500 rounded px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
