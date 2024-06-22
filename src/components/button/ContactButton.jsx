import React, { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { IoLogoWhatsapp } from "react-icons/io";
import { ArrowOutward } from "@mui/icons-material";

const ContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const button = {
    name: "Contact Us",
  };

  const window = {
    title: "Start Contact With Us",
    button: [
      {
        name: "Email Us",
        link: "mailto:info@example.com",
        logo: <IoLogoWhatsapp />,
        target: "_blank",
      },
      {
        name: "Visit Website",
        link: "https://www.example.com",
        logo: <IoLogoWhatsapp />,
        target: "_blank",
      },
    ],
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="flex items-center rounded-full bg-secondary p-2 px-5 font-bold text-white text-sm focus:outline-none"
      >
        {button.name}
        <ArrowOutward fontSize="small" className="ml-1" />
      </button>
      {isOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-80 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <h1 className="text-2xl font-semibold">{window.title}</h1>
            {window.button.map((button, index) => (
              <button
                key={index}
                className="flex justify-between items-center bg-secondary w-full my-1 text-white font-bold py-2 px-4 rounded"
              >
                <a href={button.link} target={button.target}>
                  {button.name}
                </a>
                <span>{button.logo}</span>
              </button>
            ))}
          </div>
          <XMarkIcon
            onClick={handleClose}
            className="absolute top-4 right-4 w-6 h-6 text-white cursor-pointer"
          ></XMarkIcon>
        </div>
      )}
    </>
  );
};

export default ContactButton;
