import React from "react";
import Checklist from "./Checklist";

const Company = () => {
  const RatingList = {
    projects: {
      number: "100+",
      title: "Succesful projects",
    },
    clients: {
      number: "50+",
      title: "Happy clients",
    },
    employees: {
      number: "20+",
      title: "Team members",
    },
    satisfaction: {
      number: "90%",
      title: "Satisfaction rate",
    },
  };
  return (
    <>
      <div className="grid grid-cols-2 md:flex md:flex-row md:justify-between gap-4 p-4 md:px-14 w-full">
        {Object.keys(RatingList).map((key, index) => (
          <div key={index} className="flex flex-col items-center px-4 md:px-8">
            <p className="w-full text-center md:text-left text-secondary text-4xl font-bold">
              {RatingList[key].number}
            </p>
            <p className="w-full text-center md:text-left ">
              {RatingList[key].title}
            </p>
          </div>
        ))}
      </div>
      <Checklist></Checklist>
    </>
  );
};

export default Company;
