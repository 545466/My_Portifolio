import Dev from "../assets/images/Dev.svg";
import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <div ref={ref} className=" bg-Mid-Blue py-20 lg:px-20 lg:py-0">
      <motion.div
        className="flex flex-col items-center lg:items-center lg:flex-row lg:justify-between"
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <div className="text-center lg:text-left">
          <h1 className="text-3xl text-Lemon font-bold lg:text-6xl">
            <span className="text-Gray">Hi, I'm Tony</span>
            <br /> a Frontend <br /> Web Developer
          </h1>
          <p className="text-sm text-White pb-10 pt-2 lg:pt-5 lg:text-xl">
            Bringing your idea to life through coding
          </p>
          <a
            href="https://wa.me/09078042113"
            className="text-Dark_Blue my-5 font-semibold bg-White px-10 py-2 rounded-3xl lg:mt-10"
          >
            Let's Talk
          </a>
        </div>
        <img className="w-3/4 lg:w-3/6" src={Dev} alt="" />
      </motion.div>
    </div>
  );
};

export default Hero;
