import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {

  return (
    <div className="bg-white dark:bg-[#1B2937] shadow-md h-16 sticky top-0 z-[99999]">
      <div className="flex justify-between mx-auto px-[6%] py-4">
        <div className=" font-bold dark:text-[#CFD8D8] ">
          <h1>TECHNext</h1>
        </div>
      <div className="">
        <ThemeSwitcher />
      </div>
      </div>
    </div>
  );
};

export default Header;
