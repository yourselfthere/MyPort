import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiBootstrapLine } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { TbBrandVercel } from "react-icons/tb";
import { TbBrandVisualStudio } from "react-icons/tb";
import { SiVisualbasic } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import Languages from "./Languages";

const TechStack = () => {
  return (
    <>
      <div>
        <h1 className="mt-20 mb-14 text-center text-4xl  font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-800  to-neutral-900 ">
          Tech Stack
        </h1>
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <div className="rounded-3xl border-4 p-3 hover:scale-110 transition-transform duration-300">
            <SiMongodb title="MongoDB" className="text-6xl text-green-500" />
          </div>
          {/* typescript ,postgresql visual studio, .net ,visual basic,vercel,bootstrap postman */}
          <div className="rounded-3xl border-4 p-3 hover:scale-110 transition-transform duration-300">
            <SiExpress title="Express.js" className="text-6xl text-gray-500" />
          </div>
          <div className="rounded-3xl border-4 p-3 hover:scale-110 transition-transform duration-300">
            <FaReact title="React" className="text-6xl text-[#61dafb]" />
          </div>
          <div className="rounded-3xl border-4 p-3 hover:scale-110 transition-transform duration-300">
            <FaNodeJs title="Node.js" className="text-6xl text-green-500" />
          </div>
          <div className="rounded-3xl border-4 p-3 hover:scale-110 transition-transform duration-300">
            <IoLogoJavascript
              title="JavaScript"
              className="text-6xl text-yellow-500"
            />
          </div>
          <div className="rounded-3xl border-4 p-3 hover:scale-110 transition-transform duration-300">
            <FaGitAlt title="Git" className="text-6xl text-red-500" />
          </div>
          <div className="rounded-3xl border-4 p-3 hover:scale-110 transition-transform duration-300">
            <FaGithub title="GitHub" className="text-6xl text-white" />
          </div>
          <div className="rounded-3xl border-4 p-3 hover:scale-110 transition-transform duration-300">
            <SiTailwindcss
              title="Tailwind CSS"
              className="text-6xl text-blue-700"
            />
          </div>
          <div className="rounded-3xl border-4 p-3 hover:scale-110 transition-transform duration-300">
            <FaHtml5 title="HTML5" className="text-6xl text-orange-600" />
          </div>
          <div className="rounded-3xl border-4 p-3 hover:scale-110 transition-transform duration-300">
            <SiMysql title="MySQL" className="text-6xl text-blue-700" />
          </div>
          <div className="rounded-3xl border-4 p-3 hover:scale-110 transition-transform duration-300">
            <RiBootstrapLine title="Bootstrap" className="text-6xl " />
          </div>
          <div className="rounded-3xl border-4 p-3 hover:scale-110 transition-transform duration-300">
            <SiPostman title="Postman" className="text-6xl text-pink-400" />
          </div>
          <div className="rounded-3xl border-4 p-3 hover:scale-110 transition-transform duration-300">
            <TbBrandVercel title="Vercel" className="text-6xl " />
          </div>
          <div className="rounded-3xl border-4 p-3 hover:scale-110 transition-transform duration-300">
            <TbBrandVisualStudio
              title="Visual Studio"
              className="text-6xl "
            />
          </div>{" "}
          <div className="rounded-3xl border-4 p-3 hover:scale-110 transition-transform duration-300">
            <SiTypescript 
              title="TypeScript"
              className="text-6xl text-blue-700"
            />
          </div>
          <div className="rounded-3xl border-4 p-3 hover:scale-110 transition-transform duration-300">
            <SiVisualbasic title="VisualBasic" className="text-6xl " />
          </div>
        </div>

        <Languages />
      </div>
    </>
  );
};

export default TechStack;
