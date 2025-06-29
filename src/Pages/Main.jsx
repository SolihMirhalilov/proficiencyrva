import Header from "../components/Header.jsx";
import Posts from "../components/Posts.jsx";
import VideoAndProgres from "../components/VideoAndProgres.jsx";
import About from "../components/About.jsx";
import Sing from "../components/Sing.jsx";
import Slider from "../components/Slider.jsx";
import Footer from "../components/Footer.jsx";
import Part from "../components/Part.jsx";
import NewsPage from "../Pages/News.jsx";
import MyAdmin from "./MyAdmin.jsx";
import { useRef } from "react";
export default function Main() {
  const aboutRef = useRef(null);
  const singRef = useRef(null);

  return (
    <>
      <Posts />
      <VideoAndProgres />
      <div id="about">
        <About />
      </div>

      <Slider />
      <div id="contact">
        <Sing />
      </div>

      <Part />
    </>
  );
}
