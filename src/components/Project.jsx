import React, { useState, useEffect } from "react";
import ProjectCard from "./card/ProjectCard";

const Project = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const projectCards = [
    {
      img: "https://asset.kompas.com/crops/lWrZbH0v0bJJUZlSVW3uld74mgY=/0x0:1000x667/750x500/data/photo/2019/10/25/5db2be84bcd68.jpg",
      title: "Project 1 Jakarta",
      desc: "Our biggest Project in Jakarta",
    },
    {
      img: "https://asset.kompas.com/crops/lWrZbH0v0bJJUZlSVW3uld74mgY=/0x0:1000x667/750x500/data/photo/2019/10/25/5db2be84bcd68.jpg",
      title: "Project 1 Jakarta",
      desc: "Our biggest Project in Jakarta",
    },
  ];

  const visibleCards = isMobile ? projectCards.slice(0, 1) : projectCards;

  return (
    <>
      <div className="relative w-full h-full">
        <div className="absolute inset-0 bg-secondary h-4/5"></div>
        <div className="relative z-10 text-white px-8 md:px-14 py-12 flex flex-col">
          <div className="md:flex md:flex-row">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 md:w-1/2">
              Shaping the Future with Inspiration and Precision
            </h1>
            <p className="mb-6 md:w-1/2">
              We specialize in high-quality construction projects across
              residential, commercial, and industrial sectors. Our expertise
              spans general contracting, design and build, renovations, project
              management, and sustainable building. Explore our portfolio for
              innovative solutions that exceed expectations.
            </p>
          </div>
          <div className="mb-12 my-6 flex flex-row justify-between">
            <h1 className="text-2xl font-bold">Our projects</h1>
            <a href="" className="text-white">
              View All
            </a>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between">
            {visibleCards.map((card, index) => (
              <ProjectCard
                key={index}
                image={card.img}
                title={card.title}
                desc={card.desc}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
