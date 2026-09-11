import profilePhoto from "../../assets/profile-photo.png";

const Header = () => {
  return (
    <section className=" pt-4 bg-olive-400 flex flex-col items-center text-center sm:items-start sm:text-left ">
      <img className="w-50 sm:w-3xs" src={profilePhoto} alt="profile-photo" />
      <div className="pt-4 flex flex-col gap-2 sm:flex sm:flex-row">
        <h1 className="text-4xl text-gray-900 ">Zaza Gordeziani</h1>
        <p className="text-xl text-gray-800 pb-6">Junior Front-end Developer</p>
        <p className=" m-auto p-px  w-xs text-[12px] bg-gray-200"></p>
        <p className="px-5 py-5 text-[15px]  text-gray-900">
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
