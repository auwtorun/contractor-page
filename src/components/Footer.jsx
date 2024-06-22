import React from "react";
import Copyright from "./Copyright";
import FooterLink from "./FooterLink";
import Icon from "./Icon";

const Footer = () => {
  return (
    <>
      <div className="bg-primary w-screen text-white px-8 md:px-16 py-6 h-full md:flex md:flex-row justify-between">
        <div className="w-full py-6">
          <h1 className="text-xl font-bold mb-4">Constructions</h1>
          <p className="mb-6">
            Your imagination sets the blueprint, and our inspiration constructs
            it into reality.
          </p>
          <div className="gap-6 my-2 flex flex-row">
            <a href="">
              <Icon.Whatsapp size="xl" />
            </a>
            <a href="">
              <Icon.Instagram size="xl" />
            </a>
            <a href="">
              <Icon.Linkedin size="xl" />
            </a>
            <a href="">
              <Icon.XTwitter size="xl" />
            </a>
          </div>
        </div>
      <FooterLink></FooterLink>
      </div>
      <Copyright></Copyright>
    </>
  );
};

export default Footer;
