import React, { useState, useEffect } from "react";
import PhotoCard from "./card/PhotoCard";
import ActionButton from "./button/ActionButton";
import { ArrowOutward } from "@mui/icons-material";

const Service = () => {
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
  
  const photoCards = [
    {
      title: "Contact and Inquiry",
      img:
        "https://lh6.googleusercontent.com/o4mYvhgHRapn5vS2WktW84Mz9CzJEZfSGLGbjLpyNYDqnjrsextgGW-lor4xk8IUoAJZae9xrkvJi7hsa3ee1Z1PgESNJNFTkwQR9JDgkAZG9C1AW_BXBBM4vIeW5Vgf1vsG-L0gof3DiPc52PXLEduJ23HCNXYdNML76YoyQi3ZIwb-3pPdSwawYZPirA",
      link: "https://www.youtube.com",
      desc: "Discover our diverse portfolio, showcasing our commitment to quality and innovation."
    },
    {
      title: "Client Testimonials",
      img:
        "https://woodruffsawyer.com/sites/default/files/migrated/construction-plans_791489323.jpg",
      link: "#",
      desc: "Explore testimonials from our satisfied clients."
    },
    {
      title: "Project Showcase",
      img:
        "https://woodruffsawyer.com/sites/default/files/migrated/construction-plans_791489323.jpg",
      link: "#",
      desc: "View a selection of our prominent projects."
    },
  ];

  const visibleCards = isMobile ? photoCards.slice(0, 1) : photoCards;

  return (
    <>
      <div className="w-full px-8 md:px-14 pt-3 text-primary">
        <h1 className="text-2xl font-bold mb-4 text-secondary">Our Services</h1>
        <div className="flex flex-col md:flex-row md:grid md:grid-cols-2 gap-x-60 md:border-b-2 md:pb-6">
          <h1 className="text-3xl md:text-4xl font-bold">
            Realizing customer imagination through bespoke solutions.
          </h1>
          <div className="flex flex-row justify-between md:justify-end my-6 gap-x-4 w-full">
            <ActionButton
              title="See all services"
              width="full"
              height="12"
              buttonColor="secondary"
              textColor="white"
            />
            <ActionButton
              title="Start building"
              width="full"
              height="12"
              buttonColor="secondary"
              textColor="white"
              icon={ArrowOutward}
              iconSize="small"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between">
        {visibleCards.map((card, index) => (
            <PhotoCard
              key={index}
              title={card.title}
              img={card.img}
              link={card.link}
              desc={card.desc}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Service;
