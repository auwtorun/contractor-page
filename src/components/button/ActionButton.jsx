import React from "react";

const ActionButton = ({ icon, iconSize, title, buttonColor, textColor, width, height }) => {
  return (
    <button
      className={`w-${width} h-${height} flex truncate items-center rounded-full py-4 px-4 md:px-6 font-bold focus:outline-none bg-${buttonColor} text-${textColor} text-sm ${icon ? 'justify-evenly' : 'justify-center'}`}
    >
        <p className="truncate">{title}</p>
        {icon && React.createElement(icon, { fontSize: iconSize})}
    </button>
  );
};

export default ActionButton;
