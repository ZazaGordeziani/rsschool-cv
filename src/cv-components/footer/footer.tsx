import { FaGithub } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import rslogo from "../../assets/rss-logo.c19ce1b4.svg";

const Footer = () => {
  return (
    <section className="p-6 py-8 bg-gray-300">
      <div>
        <ul className="flex flex-col text-base sm:text-xl gap-y-6">
          <li className="flex items-center gap-4">
            <FaGithub />
            <a
              href="https://github.com/ZazaGordeziani
            
"
              target="_blank"
            >
              https://github.com/ZazaGordeziani
            </a>
          </li>
          <li className="flex items-center gap-4">
            <IoIosCreate />
            <p>© {new Date().getFullYear()}</p>
          </li>
          <li className="flex items-center gap-4">
            <img src={rslogo} alt="RS School logo" className="w-4 sm:w-5" />
            <a href="https://rs.school/courses/short-track" target="_blank">
              https://rs.school/courses/short-track
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
