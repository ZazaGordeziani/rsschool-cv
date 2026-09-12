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
      <h2 className="text-[#2D1F1E] text-2xl">Skills</h2>
      <ul className="grid grid-cols-2 w-fit mx-auto gap-x-8 gap-y-5 pt-8 text-l">
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
