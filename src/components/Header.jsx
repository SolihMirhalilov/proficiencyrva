import { useState } from "react";
import HeaderJpg from "../assets/Header.png";
import Logo from "../assets/logo3.png";
import { Link } from "react-router-dom";


export default function Header() {

    const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [Click , setClick] = useState("")
  

  function HandleClcik(){
    setClick(!Click)
  }
    
  return (
    <>
      <header className=" relative w-full ">
        {/* NAVBAR */}
        <img src={HeaderJpg} className="absolute -z-10" alt="" />
        <div className="">
          <nav className=" dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
             
        
                <img src={Logo} className="h-[10px] w-16 md:w-52 md:h-full" alt="Flowbite Logo" />
            
              <button
                data-collapse-toggle="navbar-default"
                type="button"
                className="inline-flex items-center p-2 w-7 h-7 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default"
                aria-expanded="false"
                onClick={HandleClcik}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
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



              <div
                className="hidden w-full md:block md:w-auto"
                id="navbar-default"
              >
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 borde  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                    <p className="text-white   px-1 py-3  text-lg font-semibold hover:scale-105 hover: hover: transition duration-300">
                      Home
                    </p>
                  </li>
                  <li>
                    <p className="text-white   px-1 py-3  text-lg font-semibold hover:scale-105 hover: hover: transition duration-300">
                    <Link to="/posts" >
                      News
                    </Link>
                    </p>
                  </li>
                  <li>
                    <p className="text-white   px-1 py-3  text-lg font-semibold hover:scale-105 hover: hover: transition duration-300">
                      Projects
                    </p>
                  </li>
                  <li>
                    <p
                    onClick={() => handleScroll("about")}
                    className="text-white cursor-pointer   px-1 py-3  text-lg font-semibold hover:scale-105 hover: hover: transition duration-300">
                      About
                    </p>
                  </li>
                  <li>
                    <p 
                     onClick={() => handleScroll("contact")}
                    className="text-white cursor-pointer  px-1 py-3  text-lg font-semibold hover:scale-105 hover: hover: transition duration-300">
                      Contact
                      
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div 
          className={`  ${!Click ? "hidden" : "flex"}`}
          >
                            <ul className=" absolute font-medium flex justify-between items-center w-full px-2 ">
                  <li>
                    <p className="text-white  text-xs font-semibold hover:scale-105 hover: hover: transition duration-300">
                      Home
                    </p>
                  </li>
                  <li>
                    <p className="text-white  text-xs font-semibold hover:scale-105 hover: hover: transition duration-300">
                    <Link to="/posts" >
                      News
                    </Link>
                    </p>
                  </li>
                  <li>
                    <p className="text-white  text-xs font-semibold hover:scale-105 hover: hover: transition duration-300">
                      Projects
                    </p>
                  </li>
                  <li>
                    <p className="text-white  text-xs font-semibold hover:scale-105 hover: hover: transition duration-300">
                      About
                    </p>
                  </li>
                  <li>
                    <p className="text-white  text-xs font-semibold hover:scale-105 hover: hover: transition duration-300">
                      Contact
                    </p>
                  </li>
                </ul>
          </div>

          <div>
            <h1 className="xl:text-5xl md:text-3xl text-sm font-bold xl:mt-56 md:mt-7 mt-10 text-center  text-white ">
              Your English Journey Starts Here{" "}
            </h1>
            <p className="xl:text-5xl md:text-3xl text-[10px] w-[60%] m-auto md:pt-10 :pt-2 font-thin text-center text-white">
              {" "}
              English courses with native speakers for adults and children
            </p>

            <button className="block bg-orange-600 md:px-4 px-3 md:mt-5 md:py-3 py-0.5  md:rounded-lg md:text-xl rounded-sm text-[8px] mt-2 text-white md:font-bold mx-auto md:x`mt-10  hover:scale-105 hover: hover: transition duration-300">
              Start Learning
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
