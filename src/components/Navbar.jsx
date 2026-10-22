import { useState } from "react";
import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "./../constants";

import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width justify-center items-center">
        <img src={appleImg} alt="Apple" width={14} height={18} />
        <div
          id="primary-navigation"
          className={`flex flex-1 justify-center items-center ${
            nav ? "mobileNav" : "max-sm:hidden"
          }`}
        >
          {navLists.map((item) => (
            <span
              key={item}
              className="px-5 text-sm text-gray transition-colors hover:text-white"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <button
            type="button"
            className="max-sm:block hidden text-white"
            aria-label={nav ? "Close navigation" : "Open navigation"}
            aria-expanded={nav}
            aria-controls="primary-navigation"
            onClick={() => setNav((open) => !open)}
          >
            <GiHamburgerMenu size={18} aria-hidden="true" />
          </button>
          <img
            src={searchImg}
            alt=""
            aria-hidden="true"
            width={18}
            height={18}
            draggable={false}
          />
          <img
            src={bagImg}
            alt=""
            aria-hidden="true"
            width={18}
            height={18}
            draggable={false}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
