import React from "react";

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full text-white text-sm h-full bg-primary flex justify-center">
      <div className="w-full mx-8 md:mx-16 text-center border-t-[1px] py-8">&copy; {currentYear} Your Company Name. All Rights Reserved.</div>
    </div>
  );
};

export default Copyright;
