import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import TechStack from "./components/TechStack";

function App() {
  return (
    <>
      <div className="min-h-screen overflow-x-hidden overflow-y-hidden selection:bg-cyan-100 selection:text-black">
        <div className="-z-10 fixed h-full w-full overflow-hidden">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-gradient-to-r from-neutral-900 to-blue-200 "></div>
          {/* bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] */}
        </div>
        <div className="mx-auto px-6 container">
          <Navbar />
        
          {/* <About/> */}
          <Hero />
          <Project />
          <TechStack />
          <Contact />
          <ToastContainer />
        </div>
        {/*  <About className="mx-0 px-0" /> */}
      </div>
    </>
  );
}

export default App;
