import Footer from "./src/components/mainPage/Footer";
import HeroSection from "./src/components/mainPage/HeroSection";
import PoultryDescription from "./src/components/mainPage/PoultryDescription";
import Capabilities from "./src/components/mainPage/Capabilities";
import Data from "./src/components/mainPage/Data";
import AboutUs from "./src/components/mainPage/AboutUs";
import Navbar from "./src/components/mainPage/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full relative">
      <div className="bg-gradient-to-tr from-emerald-100 to-white -z-10 fixed w-full h-full"></div>
      <Navbar />
      <div className="flex flex-col gap-y-8 w-full">
        <HeroSection />
        <PoultryDescription />
        <Capabilities />
        <Data />
        <AboutUs />
      </div>
      <Footer />
    </main>
  );
}
