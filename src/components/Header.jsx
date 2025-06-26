import { useState } from "react";
import HeaderJpg from "../assets/Header.png";
import Logo from "../assets/logo3.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Header() {
  const [click, setClick] = useState(false);

  const textVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay },
    }),
  };

  return (
    <header className="relative w-full overflow-hidden">
      {/* Background Image */}
      <img src={HeaderJpg} className="absolute -z-10 w-full h-[120%] object-cover" alt="" />

      {/* Navbar */}
      <nav className="dark:bg-gray-900 bg-transparent">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <img src={Logo} className="h-[25px] w-28 md:w-52 md:h-full" alt="Logo" />

          <button
            type="button"
            onClick={() => setClick(!click)}
            className="inline-flex items-center p-2 w-7 h-7 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div className={`w-full md:block md:w-auto ${click ? "block" : "hidden"}`}>
            <ul className="font-medium absolute flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 mt-4 md:mt-0 text-white text-lg">
              {["Home", "News", "Projects", "About", "Contact"].map((item, i) => (
                <li key={i}>
                  <p className="px-1 py-3 font-semibold hover:scale-105 transition duration-300">
                    {item === "News" ? <Link to="/posts">{item}</Link> : item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Text & Button */}
      <div className="text-center mt-16 md:mt-24 xl:mt-56 px-4 pb-32">
        <motion.h1
          className="xl:text-5xl md:text-3xl text-sm font-bold text-white"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          custom={0}
          viewport={{ once: true }}
        >
          Your English Journey Starts Here
        </motion.h1>

        <motion.p
          className="xl:text-5xl md:text-3xl text-[10px] w-[60%] mx-auto md:pt-10 pt-2 font-thin text-white"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          custom={0.3}
          viewport={{ once: true }}
        >
          English courses with native speakers for adults and children
        </motion.p>

        <motion.button
          className="mt-5 pb-10 bg-orange-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-md text-[10px] md:text-xl font-bold hover:scale-105 transition duration-300"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          custom={0.6}
          viewport={{ once: true }}
        >
          Start Learning
        </motion.button>
      </div>
    </header>
  );
}
