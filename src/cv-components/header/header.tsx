import profilePhoto from "../../assets/profile-photo.png";

const Header = () => {
  return (
    <section className=" pt-4 bg-olive-400 flex flex-col items-center text-center sm:items-start sm:text-left mb-6">
      <img className="w-50 sm:w-3xs" src={profilePhoto} alt="profile-photo" />
      <div className="pt-4 flex flex-col gap-2 sm:flex sm:flex-row">
        <h1 className="text-4xl text-gray-900 ">Zaza Gordeziani</h1>
        <p className="text-xl text-gray-800 pb-6">Junior Front-end Developer</p>
      </div>
    </section>
  );
};

export default Header;
