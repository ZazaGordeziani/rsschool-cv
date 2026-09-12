const Nav = () => {
  return (
    <nav className=" bg-[#D5DACE]  py-4 text-[#343A3D] ">
      <ul className="justify-center max-[361px]:text-[13px]  text-[14px] min-[440px]:text-base flex flex-row gap-x-3 sm:text-xl sm:gap-x-6  lg:text-3xl lg:gap-x-10 ">
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#codewars">Codewars</a>
        </li>
        <li>
          <a href="#languages">Languages</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
