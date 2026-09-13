import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-[#E5E3E6] flex flex-col items items-center py-6 px-4 text-[#2D1F1E]"
    >
      <h2 className="text-2xl sm:text-3xl lg:text-4xl py-6  ">Experience</h2>
      <div className="flex flex-col py-6 gap-5 ">
        <div className="border rounded-2xl p-4 flex flex-col gap-y-2">
          <h3 className="text-base sm:text-xl lg:text-2xl">
            Redberry Educational Project
          </h3>
          <p className="text-sm sm:text-base lg:text-xl">Spring 2026</p>
          <a
            href="https://github.com/ZazaGordeziani/Redberry-E-learning"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-x-2 lg:text-xl"
          >
            <FaRegArrowAltCircleRight />
            Project link
          </a>
        </div>
        <div className="border rounded-2xl p-4 flex flex-col gap-y-2">
          <h3 className="text-base sm:text-xl lg:text-2xl">
            Redberry Educational Project
          </h3>
          <p className="text-sm sm:text-base lg:text-xl">Autumn 2025</p>
          <a
            href="https://github.com/ZazaGordeziani/RedSeam-Clothing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-x-2 lg:text-xl"
          >
            <FaRegArrowAltCircleRight />
            Project link
          </a>
        </div>
        <div className="border rounded-2xl p-4 flex flex-col gap-y-2">
          <h3 className="text-base sm:text-xl lg:text-2xl">
            Freelance Logistics Support and Technical Assistance
          </h3>
          <p className="text-sm sm:text-base lg:text-xl">2022 - Present</p>
        </div>
        <div className="border rounded-2xl p-4 flex flex-col gap-y-2">
          <h3 className="text-base sm:text-xl lg:text-2xl">
            Network Development Manager at Cryptomat, Tbilisi
          </h3>
          <p className="text-sm sm:text-base lg:text-xl">
            September 2024 — December 2024
          </p>
        </div>
        <div className="border rounded-2xl p-4 flex flex-col gap-y-2">
          <h3 className="text-base sm:text-xl lg:text-2xl">
            Intern at Ministry of Economy and Sustainable Development of Georgia
            , Tbilisi{" "}
          </h3>
          <p className="text-sm sm:text-base lg:text-xl">
            June 2017 — December 2017
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
