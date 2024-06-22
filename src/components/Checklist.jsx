import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Checklist = () => {
  const projects = {
    text: [
      "project scenario review",
      "service overview",
      "client testimonial",
      "contact and asking question",
    ],
  };
  projects.capitalizedText = projects.text.map((item) => {
    return item.charAt(0).toUpperCase() + item.slice(1);
  });
  return (
    <>
      <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row lg:justify-between gap-4 p-4 px-8 md:px-14 w-full">
        {projects.capitalizedText.map((item, index) => (
          <div
            key={index}
            className="flex flex-row items-center border-2 border-secondary rounded-full text-base lg:text-base px-4 py-2 w-auto h-auto lg:w-1/5 text-wrap"
          >
            <CheckCircleIcon className="text-secondary mr-2"></CheckCircleIcon>
            <p className="text-secondary mr-2">{item}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Checklist;
