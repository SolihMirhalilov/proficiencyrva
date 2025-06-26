import logo from "../assets/logo4(1).png";
import telegram from "../assets/telegram.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-100 ">
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 max-w-[1140px] m-auto pt-16">
        <div className="">
          <div onClick={null}>
            <img src={logo} className="sm:w-64 cursor-pointer" alt="" />

            <div className="flex justify-between items-center mt-16">
              <a href="https://t.me/Proficiency_Qualifications"><img
                src={telegram}
                className="w-9 h-9 cursor-pointer"
                onClick={null}
                alt=""
              /></a>
              <a href="https://www.instagram.com/proficiency.rva/"><img
                src={instagram}
                className="w-9 h-9 cursor-pointer"
                onClick={null}
                alt=""
              /></a>

              <a href="https://www.youtube.com/@ProficiencyRVA"><img
                src={youtube}
                className="w-9 h-9 cursor-pointer"
                onClick={null}
                alt=""
              /></a>
              <a href="http://www.linkedin.com/in/proficiency-uzbekistan-415a382b8"><img
                src={linkedin}
                className="w-9 h-9 mr-10 cursor-pointer"
                onClick={null}
                alt=""
              /></a>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <ul>
            <li className=" text-xl font-bold">Website sections</li>
            <li
              className=" text-md font-medium mt-3 text-black cursor-pointer"
              onClick={null}
            >
              Home
            </li>
            <li
              className=" text-md font-medium  text-black cursor-pointer"
              onClick={null}
            >
              News
            </li>
            <li
              className=" text-md font-medium  text-black cursor-pointer"
              onClick={null}
            >
              Projects
            </li>
            <li
              className=" text-md font-medium  text-black cursor-pointer"
              onClick={null}
            >
              About
            </li>
            <li
              className=" text-md font-medium  text-black cursor-pointer"
              onClick={null}
            >
              Contact
            </li>
          </ul>
        </div>
        <div className="">
          <ul>
            <li className=" text-xl font-bold">Contact Information</li>
            <li className=" text-md mt-3 text-black  font-medium ">
              Uzbekistan , Tashkent
            </li>
            <li
              className=" text-md  text-black  font-medium cursor-pointer"
              onClick={null}
            >
              Phone:+998(33)4767661
            </li>
            <li
              className=" text-md  text-black  font-medium cursor-pointer"
              onClick={null}
            >
              Email:Proficienct@gmail.com
            </li>
            <li className=" text-md  text-black  font-medium ">
              Social media icons
            </li>
          </ul>
        </div>
        <div className="">
          <ul>
            <li className=" text-xl font-bold">
              Legal Links & Copyright Notice{" "}
            </li>
            <li className=" text-md mt-3 text-black font-medium ">
              Privacy Policy
            </li>
            <li
              className=" text-md text-black font-medium cursor-pointer"
              onClick={null}
            >
              Terms of Service
            </li>
            <li
              className=" text-md text-black font-medium cursor-pointer"
              onClick={null}
            >
              Text like “© 2025 ProficiencyRVA. All rights reserved.”
            </li>
            <li className="">
              <Link to="/myAdmin">MyAdmin</Link>
            </li>
          </ul>
        </div>
      </div>





    </footer>
  );
}
