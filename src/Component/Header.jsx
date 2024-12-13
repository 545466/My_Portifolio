import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import cv from "../assets/Oloriogun_Tony _Frontend_Developer_Resume.pdf"

const Header = () => {
  // const [open, setOpen] = useState(false);
  return (
    <header>
      <div className=" border-b-2 px-10  border-White bg-Mid-Blue flex justify-between items-center h-20 font-bold text-White lg:text-Violet lg:px-40">
          <h1 className="text-xl lg:text-3xl">
            Dev <span className="text-Lemon">Tony</span>{" "}
          </h1>
          <li className="list-none lg:text-xl">
            <a download={cv} href={cv}>Resume</a>
          </li>
      </div>
    </header>
  );
};

export default Header;
