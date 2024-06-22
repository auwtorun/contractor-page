import React, { useState } from "react";
import { Add, Remove } from "@mui/icons-material";

const QuestionSlideDown = () => {
  const content = [
    {
      question: "How long does a typical construction project take?",
      answer: "The duration of a construction project varies depending on factors such as the size, complexity, and scope of work involved. We will provide you with an estimated timeline during the consultation phase based on your project requirements.",
    },
    {
      question: "How do you handle changes or additions to the project scope?",
      answer: "We understand that project scopes may evolve over time. Any changes or additions to the project scope will be carefully reviewed and discussed with you to ensure transparency and agreement on adjustments to the timeline and budget.",
    },
    {
      question: "Do you provide post-construction cleanup services?",
      answer: "Yes, we offer post-construction cleanup services to ensure that your site is left clean and orderly upon project completion. Our team will take care of removing debris, leftover materials, and any other construction-related mess.",
    },
  ];

  const [openStates, setOpenStates] = useState(Array(content.length).fill(false));
  const animationDuration = "900ms"; 

  const toggleOpen = (index) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  };

  return (
    <div>
      {content.map((item, index) => (
        <div key={index} className="w-auto mb-4">
          <button
            onClick={() => toggleOpen(index)}
            className="w-full text-xl font-bold text-left flex justify-between items-center transition-transform duration-300 focus:outline-none mb-2"
          >
            <h1 className="">{item.question}</h1>
            <div
              className={`transform transition-transform duration-300 z-0   ${
                openStates[index] ? "rotate-360" : "rotate-0"
              }`}
            >
              {openStates[index] ? (
                <Remove className="w-6 h-6" />
              ) : (
                <Add className="w-6 h-6" />
              )}
            </div>
          </button>
          <div
            className={`transition-all duration-${animationDuration} ease-out ${
              openStates[index] ? "max-h-full opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden`}
            style={{
              maxHeight: openStates[index] ? "fit-content" : "0",
              opacity: openStates[index] ? "1" : "0",
            }}
          >
            <p className="">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuestionSlideDown;
