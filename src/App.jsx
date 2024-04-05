import { FaBarcode, FaBars, FaHamburger, FaIcons } from "react-icons/fa";
import "./App.css";
import { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Hero from "./Component/Hero";
import Section from "./Component/Section";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";

function App() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  const [open, setOpen] = useState(false);
  return (
    <>
      <header>
        <div className=" border-b-2 border-White bg-Mid-Blue flex justify-between items-center h-20 font-bold text-White lg:text-Violet">
          <div className="flex justify-between">
            <h1 className="text-xl pl-10 lg:pl-20 lg:text-3xl">
              Dev <span className="text-Lemon">Tony</span>{" "}
            </h1>
          </div>

          <motion.div
            ref={ref}
            className={
              open
                ? "absolute h-screen lg:h-20 w-full px-10 top-20 text-lg bg-White text-Mid-Blue   block text-center "
                : "hidden lg:flex"
            }
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <div className="flex flex-col items-center list-none lg:ml-10 lg:flex-row lg:text-xl ">
              <li className="mx-4 py-5 lg:py-0">
                <a href="">About</a>
              </li>
              <li className="mx-4 pb-5 lg:pb-0">
                <a href="">Contact</a>
              </li>
              <li className="mx-4 pb-5 lg:pr-20 lg:pb-0">
                <a href="">Resume</a>
              </li>
            </div>
          </motion.div>
          <FaBars
            onClick={() => setOpen(!open)}
            className="text-Violet text-3xl mr-10 lg:hidden"
          />
        </div>
      </header>
      <Hero />
      <Section />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
