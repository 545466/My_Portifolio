import { useEffect, useRef } from "react";
import images from "./Images";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaArrowAltCircleUp, FaArrowUp } from "react-icons/fa";
import { FaArrowTurnUp } from "react-icons/fa6";
import { TbArrowUpRight } from "react-icons/tb";
const Section = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  const skills = [
    "Html5",
    "Css3",
    "Javascript",
    "ReactJs",
    "NextJs",
    "Firebase",
    "Tailwind css",
    "Git/Github",
    "Framer Motion",
    "Responsive Design",
  ];
  return (
    <div ref={ref} className=" text-left py-20 px-10 lg:px-20">
      <motion.div
        className="flex flex-col lg:flex-row lg:mx-20 gap-10"
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <div className="lg:mr-10 w-full">
          <h1 className=" text-Mid-Blue text-xl font-bold">ABOUT ME</h1>
          <p className="pt-1 pb-5 lg:text-xl">
            In this section you will find more information about me and my
            skills in programming
          </p>
          <p className="lg:text-xl">
            An enthusiastic Frontend Developer dedicated to creating user-friendly web
interfaces. Has 4 years of experience in developing interactive, responsive, and
search engine optimized web applications. I am committed to staying up-to-date with
the latest industry trends and technologies to deliver innovative and effective web
solution.
          </p>
        </div>
        <div className="flex flex-wrap items-start lg:w-4/5">
          <h1 className="text-Mid-Blue text-xl font-bold pt-10 lg:pt-0">
            Skills
          </h1>
          <div className="flex flex-wrap">
            {skills.map((skills) => {
              return (
                <p key={skills} className="text-White bg-Mid-Blue mt-5 mr-5 px-5 lg:px-7 flex items-center lg:rounded-full py-1 rounded-2xl lg:h-10">
                  {skills}
                </p>
              );
            })}
          </div>
        </div>
      </motion.div>
      <h1 className="text-Mid-Blue text-xl font-bold pt-20 pb-5 lg:mx-20">Projects</h1>
      <div className=" lg:wrap lg:justify-between">
        {images.map((image) => {
          return (
            <motion.div
                ref={ref}
                className="flex lg:items-center flex-col bg-Mid-Blue text-White mb-12 p-5 rounded border-Mid-Blue border-2 lg:flex-row lg:mx-20"
                key={images.id}
                {...images}
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                <img className="rounded lg:w-[30rem] lg:h-[20rem] object-contain" src={image.img} />{" "}
                <div className="lg:pl-10">
                  <a href={image.Link} className="flex">
                    <h1 className="flex items-center font-semibold pt-5 lg:text-4xl gap-4">
                      {image.head}
                      <TbArrowUpRight size={20}/>
                    </h1>
                  </a>
                  <p className="py-3 lg:text-xl">{image.body}</p>
                  <p className="font-semibold text-sm lg:text-lg">{image.lang}</p>
                </div>
              </motion.div>
          )
        })}
      </div>
    </div>
  );
};

export default Section;
