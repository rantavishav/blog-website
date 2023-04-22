"use client";

import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

import CustomMobileLink from "./CustomMobileLink";
import { headerLinks } from "./WebHeader";

import "./mobileHeader.css";

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isOpen]);

  return (
    <>
      <button
        className=" flex-col justify-center items-center hidden md:flex px-5 py-4 h-[104px]"
        onClick={handleClick}
      >
        <span
          className={`bg-white bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-white bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          } `}
        ></span>
        <span
          className={`bg-white bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          } `}
        ></span>
      </button>

      {isOpen && (
        <div className="nav-mobile-overlay modal-open transition-all duration-300 ease-out">
          <nav className="flex items-center flex-col justify-center">
            {headerLinks.map((link) => (
              <CustomMobileLink
                key={uuid()}
                href={link.href}
                title={link.title}
                className={link.className}
                toggle={handleClick}
              />
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default MobileHeader;
