import profilePhoto from "../../assets/profile-photo.png";

const Header = () => {
  return (
    <section className=" pt-14  bg-olive-400 flex flex-col items-center text-center sm:items-start sm:text-left sm:flex-row">
      <img
        className="w-50  sm:w-4xs sm:ml-4 lg:w-70 "
        src={profilePhoto}
        alt="Zaza Gordeziani profile-photo"
      />
      <div className="pt-4 flex flex-col gap-2 sm:flex sm:flex-col sm:text-center sm:pt-15 sm:pb-8">
        <h1 className="text-4xl text-gray-900 lg:text-5xl  ">
          Zaza Gordeziani
        </h1>
        <p className="text-xl md:text-2xl text-gray-800 pb-6 lg:text-3xl">
          Junior Front-end Developer
        </p>
        <p className=" m-auto p-px  w-xs md:w-125 lg:w-xl text-[12px] bg-gray-200"></p>
        <p className="px-5 py-5 text-[15px]  text-gray-900 sm:text-base md:text-xl lg:text-2xl">
          Motivated and detail-oriented aspiring Front-End Developer. Completed
          a React accelerator course at TBC IT Academy, with hands-on skills in
          JavaScript, React, TypeScript, HTML5, CSS, Tailwind CSS, and Git.
          Previously contributed to projects in network development, sports
          analysis, and economic research through internships and short-term
          roles. Eager to apply technical knowledge and problem-solving skills
          to build engaging, user-friendly web applications.{" "}
        </p>
      </div>
    </section>
  );
};

export default Header;
