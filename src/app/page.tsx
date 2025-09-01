import Landing from "./layouts/Landing";
import Shop from "./layouts/Shop";
import Services from "./layouts/Services";
import AboutUs from "./layouts/AboutUs";
import OurTeam from "./layouts/OurTeam";
import Blog from "./layouts/Blog";
import GetInTouch from "./layouts/GetInTouch";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white relative">
      <div className="absolute top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div id="landing">
        <Landing />
      </div>
      <div id="shop">
        <Shop />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="about-us">
        <AboutUs />
      </div>
      <div id="our-team">
        <OurTeam />
      </div>
      <div id="blog">
        <Blog />
      </div>
      <div id="contact">
        <GetInTouch />
      </div>
      <hr className="border-t border-[#CECECE]" />
      <NewsLetter />
      <Footer />
    </div>
  );
}
