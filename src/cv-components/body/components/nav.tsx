const Nav = () => {
  return (
    <nav className=" bg-[#D5DACE] sm:hidden py-4 text-[#343A3D] ">
      <ul className="justify-center flex flex-row gap-x-5">
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#codewars">Codewars</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
