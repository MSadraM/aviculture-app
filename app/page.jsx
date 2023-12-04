import Footer from "./src/components/mainPage/Footer";
import HeroSection from "./src/components/mainPage/HeroSection";
import Navbar from "./src/components/mainPage/Navbar";
import { AuthProvider } from "./src/contexts/AuthContext";
// import { Provider } from "react-redux";
// import store from "../store";

export default function Home() {
  return (
    // <AuthProvider>
    <main className="flex flex-col items-center bg-gradient-to-tr from-emerald-100 to-white w-full min-h-screen relative">
      <Navbar />
      <div className="flex flex-col gap-y-8 w-full">
        <HeroSection />
      </div>
      <Footer />
    </main>
    // </AuthProvider>
  );
}
