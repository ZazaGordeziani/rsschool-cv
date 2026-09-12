const Education = () => {
  return (
    <section id="education" className="flex-col flex py-6 px-6 bg-[#cdcdcc]">
      <h2 className="text-2xl pb-6 text-center sm:text-3xl">Education</h2>
      <div className="flex flex-col py-6 gap-5  ">
        <div className="border rounded-2xl p-4 flex flex-col gap-y-2">
          <h3 className="text-base sm:text-xl lg:text-2xl">TBC IT Academy</h3>
          <p className="text-sm sm:text-base lg:text-xl">React Accelerator</p>
          <p className="text-sm sm:text-base lg:text-xl">Autumn 2024</p>
        </div>
        <div className="border rounded-2xl p-4 flex flex-col gap-y-2">
          <h3 className="text-base sm:text-xl lg:text-2xl">
            Master's, University of Tartu, Tartu
          </h3>
          <p className="text-sm sm:text-base lg:text-xl">Social Science</p>
          <p className="text-sm sm:text-base lg:text-xl">2014-2016</p>
        </div>
        <div className="border rounded-2xl p-4 flex flex-col gap-y-2">
          <h3 className="text-base sm:text-xl lg:text-2xl">
            Exchange Program Student, Tallinn University of Technology, Tallinn
          </h3>
          <p className="text-xs sm:text-base lg:text-xl">
            January 2013-June2013
          </p>
        </div>
        <div className="border rounded-2xl p-4 flex flex-col gap-y-2">
          <h3 className="text-base sm:text-xl lg:text-2xl">
            Bachelor, Caucasus University, Tbilisi
          </h3>
          <p className="text-sm sm:text-base lg:text-xl">
            International Relations
          </p>
          <p className="text-sm sm:text-base lg:text-xl">2010-2014</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
