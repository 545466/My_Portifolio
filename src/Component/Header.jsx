import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import cv from "../assets/Oloriogun_Tony _Frontend_Developer_Resume.pdf"

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <div className=" border-b-2 border-White bg-Mid-Blue flex justify-between items-center h-20 font-bold text-White lg:text-Violet px-20">
        <div className="flex justify-between">
          <h1 className="text-xl pl-10 lg:pl-20 lg:text-3xl">
            Dev <span className="text-Lemon">Tony</span>{" "}
          </h1>
        </div>

        <div
          className={
            open
              ? "absolute h-screen lg:h-20 w-full px-10 top-20 text-lg bg-White text-Mid-Blue   block text-center "
              : "hidden lg:flex"
          }
        >
          <div className="flex flex-col items-center mt-40 lg:mt-0 list-none lg:ml-10 lg:flex-row lg:text-xl ">
            <li className="mx-4 py-5 lg:py-0">
              <a href="">About</a>
            </li>
            <li className="mx-4 pb-5 lg:pb-0">
              <a href="">Contact</a>
            </li>
            <li className="mx-4 pb-5 lg:pr-20 lg:pb-0">
              <a download={cv} href={cv}>Resume</a>
            </li>
          </div>
        </div>

        {open ? (
          <FaTimes
            onClick={() => setOpen(!open)}
            className="text-Violet text-3xl mr-10 lg:hidden"
          />
        ) : (
          <FaBars
            onClick={() => setOpen(!open)}
            className="text-Violet text-3xl mr-10 lg:hidden"
          />
        )}
      </div>
    </header>
  );
};

export default Header;
