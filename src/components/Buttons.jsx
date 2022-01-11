import React from "react";

const Buttons = ({ buttonText }) => {
  return (
    <button className="bg-black py-5 px-8 text-white uppercase tracking-widest font-semibold">
      {buttonText}
    </button>
  );
};

export default Buttons;
