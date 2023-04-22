import React from "react";

const WebHeader = () => {
  return (
    <nav className="md:hidden flex justify-center items-center px-5 py-4 bg-[#191919]">
      <a href="/" className="p-5 mr-10 text[#EEEEEE] text-2xl font-bold">
        Ranta
      </a>

      <a href="/" className="p-5 mr-10 text[#EEEEEE] font-semibold text-xl">
        Blog
      </a>

      <a href="/" className="p-5 mr-10 text[#EEEEEE] font-semibold text-xl">
        About
      </a>
    </nav>
  );
};

export default WebHeader;
