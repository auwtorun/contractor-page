import React from "react";
import { ArrowOutward } from "@mui/icons-material";

const ProjectCard = ({image, title, desc, link}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <>
      <div
        className="relative w-full md:max-w-xl overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={image}
          className={`w-full h-auto object-cover object-center transform transition-transform duration-300 ${
            isHovered ? "scale-110" : ""
          }`}
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        <a
          href=""
          className="w-10 h-10 absolute top-0 right-0 m-4 bg-secondary rounded-full flex justify-center items-center"
        >
          <ArrowOutward fontSize="medium"></ArrowOutward>
        </a>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h1 className="text-xl font-bold">{title}</h1>
          <p className="text-sm">{desc}</p>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
