import { FaCss3Alt, FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { IoIosGitBranch } from "react-icons/io";

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-[#D5DACE] flex flex-col text-center py-6"
    >
      <h2 className="text-[#2D1F1E] text-2xl sm:text-3xl md:text-4xl">
        Skills
      </h2>
      <ul className="grid grid-cols-2 w-fit mx-auto gap-x-8 sm:gap-x-18 gap-y-5  pt-8 min-[440px]:text-xl min-[440px]:gap-x-12 md:text-2xl md:gap-x-30">
        <li className="flex items-center gap-2">
          <FaCss3Alt />
          <span>CSS</span>
        </li>
        <li className="flex items-center gap-2">
          <FaHtml5 />
          <span>HTML</span>
        </li>
        <li className="flex items-center gap-2">
          <IoLogoJavascript />
          <span>JS</span>
        </li>
        <li className="flex items-center gap-2">
          <FaReact />
          <span>React</span>
        </li>
        <li className="flex items-center gap-2">
          <RiTailwindCssLine />
          <span>Tailwind Css</span>
        </li>
        <li className="flex items-center gap-2">
          <SiTypescript />
          <span>Typescript</span>
        </li>
        <li className="flex items-center gap-2">
          <IoIosGitBranch />
          <span>Git</span>
        </li>
      </ul>
    </section>
  );
};

export default Skills;
