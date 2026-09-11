import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-[#E5E3E6] flex flex-col items items-center py-4 px-4 text-[#2D1F1E]"
    >
      <h2 className="text-2xl ">Experience</h2>
      <div className="flex flex-col py-6 gap-5 ">
        <div className="border rounded-2xl p-4 flex flex-col gap-y-2">
          <h3 className="text-base">Redberry Educational Project</h3>
          <p className="text-sm">Spring 2026</p>
          <a
            href="https://github.com/ZazaGordeziani/Redberry-E-learning"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-x-2"
          >
            <FaRegArrowAltCircleRight />
            Project link
          </a>
        </div>
        <div className="border rounded-2xl p-4 flex flex-col gap-y-2">
          <h3 className="text-base">Redberry Educational Project</h3>
          <p className="text-sm">Autumn 2025</p>
          <a
            href="https://github.com/ZazaGordeziani/RedSeam-Clothing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-x-2"
          >
            <FaRegArrowAltCircleRight />
            Project link
          </a>
        </div>
        <div className="border rounded-2xl p-4 flex flex-col gap-y-2">
          <h3 className="text-base">
            Network Development Manager at Cryptomat, Tbilisi
          </h3>
          <p className="text-sm">SEPTEMBER 2024 — DECEMBER 2024</p>
        </div>
        <div className="border rounded-2xl p-4 flex flex-col gap-y-2">
          <h3 className="text-base">
            Intern at Ministry of Economy and Sustainable Development of Georgia
            , Tbilisi{" "}
          </h3>
          <p className="text-base">JUNE 2017 — DECEMBER 2017</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
