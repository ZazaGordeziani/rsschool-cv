import {
  AiOutlineCalendar,
  AiOutlinePhone,
  AiOutlineLinkedin,
  AiOutlineDiscord,
} from "react-icons/ai";
import { PiAddressBookTabs } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";

const Body = () => {
  return (
    <section className="flext text-center px-6 ">
      <h2 className="text-2xl">Contact Information</h2>
      <ul className="grid grid-cols-2  px-3 gap-y-5 pt-8 text-xs">
        <li className="flex items-center gap-1">
          <AiOutlineCalendar />
          <span>June 2nd 1992</span>
        </li>
        <li className="flex items-center gap-1">
          <PiAddressBookTabs />
          <span>Tbilisi, Georgia</span>
        </li>

        <li className="flex items-center gap-1">
          <AiOutlinePhone />
          <span>+995 591 23 03 14</span>
        </li>
        <li className="flex  items-center gap-1">
          <a
            href="https://www.linkedin.com/in/zaza-gordeziani-589b91359/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex  items-center gap-1"
          >
            <AiOutlineLinkedin />
            <span>LinkedIn</span>
          </a>
        </li>
        <li className="flex items-center gap-1">
          <AiOutlineDiscord />
          <span>@zazagordeziani</span>
        </li>
        <li className="flex items-center gap-1">
          <MdOutlineEmail />
          <span>zg.gordeziani@gmail.com</span>
        </li>
      </ul>
    </section>
  );
};

export default Body;
