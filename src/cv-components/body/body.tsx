import Nav from "./components/nav";
import ContactInfo from "./components/contact";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Education from "./components/education";
import Codewars from "./components/codewars";
import Languages from "./components/languages";

const Body = () => {
  return (
    <>
      <Nav />
      <ContactInfo />
      <Experience />
      <Skills />
      <Education />
      <Codewars />
      <Languages />
    </>
  );
};

export default Body;
