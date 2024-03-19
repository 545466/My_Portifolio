import React from "react";
import Dev from "../assets/images/Dev.svg";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className=" bg-Mid-Blue py-20 lg:px-20 lg:py-0">
      <motion.div className="flex flex-col items-center lg:items-center lg:flex-row lg:justify-between"
      initial= {{ translateX:500}}
      whileInView = {{opacity: 1, translateX:0}}
      transition = {{duration: 1}}>
        <div className="text-center lg:text-left">
          <h1 className="text-3xl text-Lemon font-bold lg:text-6xl">
            <span className="text-Gray">Hi, I'm Tony</span><br /> a Frontend{" "}
            <br /> Web Developer
          </h1>
          <p className="text-sm text-White pt-2 lg:pt-5 lg:text-xl">
            Bringing your idea to life through coding
          </p>
          <button className="text-Dark_Blue my-5 bg-White px-10 py-2 rounded-3xl lg:mt-10">
            Let's Talk
          </button>
        </div>
        <img className="w-3/4 lg:w-3/6" src={Dev} alt=""/>
      </motion.div>
    </div>
  );
};

export default Hero;
