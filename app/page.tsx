import Image from "next/image";
// import { DockDemo } from "./components/Dock";
import ContactMe from "./components/ContactMe";
import Dock from "./components/Dock" 
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";
import NumberTickers from "./components/Stats";
import Particles from "@/components/magicui/particles";
import AboutMe from "./components/AboutMe";
import TechStack from "./components/TechStack";
import OpenSourceProjs from "./components/OpenSourceProjs";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Particles className='h-full w-full fixed' quantity={500}/>
      {/* <DockDemo /> */}
      <Dock />
      <div className="pr-6 grid grid-cols-6">
        <div className="hidden md:flex md:col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-5 ">
          {/* everything else - main content */}
          <AboutMe />
          <TechStack/>
          <NumberTickers/>
          {/* <Projects /> */}
          <Projects />
          <OpenSourceProjs />

          <ContactMe />
        </div>

      </div>
    </div>
  );
}
