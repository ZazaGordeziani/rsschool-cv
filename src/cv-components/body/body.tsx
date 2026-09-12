import Nav from "./components/nav";
import ContactInfo from "./components/contact";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Education from "./components/education";
import Codewars from "./components/codewars";

const Body = () => {
  return (
    <>
      <Nav />
      <ContactInfo />
      <Experience />
      <Skills />
      <Education />
      <Codewars />
    </>
  );
};

export default Body;
