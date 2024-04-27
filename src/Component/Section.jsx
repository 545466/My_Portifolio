import { useEffect, useRef } from "react";
import images from "./Images";
import { motion, useAnimation, useInView } from "framer-motion";
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
    "ReatJs",
    "Tailwind css",
    "Git/Github",
    "Responsive Design",
  ];
  return (
    <div ref={ref} className=" text-left py-20 px-10 lg:px-20">
      <motion.div
        className="flex flex-col lg:flex-row "
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <div className="lg:mr-10">
          <h1 className=" text-Mid-Blue text-xl font-bold">ABOUT ME</h1>
          <p className="pt-1 pb-5 lg:text-xl">
            In this section you will find more information about me and my
            skills in programming
          </p>
          <p className="lg:text-xl">
            I'm a Frontend Web Developer building the frontend of websites and
            web applications that brings about the success of the project.{" "}
            <br /> I'm open to job opportunities and collaboration where I can
            contribute, learn and grow. if you have a good opportunity that
            matches my skills then don't hesitate to contact me. <br /> Check
            outsome of my work in the projects section.
          </p>
        </div>
        <div className="flex flex-wrap ">
          <h1 className="text-Mid-Blue text-xl font-bold pt-10 lg:pt-0">
            Skills
          </h1>
          <div className="flex flex-wrap">
            {skills.map((skills) => {
              return (
                <p key={skills} className="text-White bg-Mid-Blue mt-5 mr-5 px-5 py-1 rounded-2xl lg:h-10">
                  {skills}
                </p>
              );
            })}
          </div>
        </div>
      </motion.div>
      <h1 className="text-Mid-Blue text-xl font-bold pt-20 pb-5">Projects</h1>
      <div className=" lg:wrap lg:justify-between">
        {images.map((image) => {
          return (
            <motion.div
                ref={ref}
                className="flex lg:items-center flex-col bg-Mid-Blue text-White mb-12 p-5 rounded-xl border-Mid-Blue border-2 lg:flex-row"
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
                <a href={image.Link}>
                  {" "}
                  <img className="rounded-xl lg:w-4/5" src={image.img} />{" "}
                </a>
                <div className="lg:pl-10">
                  <h1 className=" font-semibold pt-5 lg:text-2xl">
                    {image.head}
                  </h1>
                  <p className="py-3 lg:text-xl">{image.body}</p>
                  <p className="font-semibold">{image.lang}</p>
                  <div className="flex pt-3">  
                    <a href={image.Link}><p className="text-Mid-Blue my-5 font-semibold bg-White px-5 lg:px-10 py-1 rounded-3xl mr-5 lg:mr-5 lg:mt-10">
                      Live Site
                    </p></a>
                    <button className="text-Mid-Blue my-5 font-semibold bg-White px-3 lg:px-10 py-1 rounded-3xl lg:mt-10">
                      Repository
                    </button>
                  </div>
                </div>
              </motion.div>
          )
        })}
      </div>
    </div>
  );
};

export default Section;
