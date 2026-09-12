const Education = () => {
  return (
    <section id="education" className="flex-col flex py-6 px-6 bg-[#cdcdcc]">
      <h3 className="text-2xl pb-6 text-center">Education</h3>
      <div className="flex flex-col py-6 gap-5 ">
        <div className="border rounded-2xl p-4 flex flex-col gap-y-2">
          <h3 className="text-base">TBC IT Academy</h3>
          <p className="text-sm">React Accelerator</p>
          <p className="text-sm">Autumn 2024</p>
        </div>
        <div className="border rounded-2xl p-4 flex flex-col gap-y-2">
          <h3 className="text-base">Master's, University of Tartu, Tartu</h3>
          <p className="text-sm">Social Science</p>
          <p className="text-sm">2014-2016</p>
        </div>
        <div className="border rounded-2xl p-4 flex flex-col gap-y-2">
          <h3 className="text-base">
            Exchange Program Student, Tallinn University of Technology, Tallinn
          </h3>
          <p className="text-s,">January 2013-June2013</p>
        </div>
        <div className="border rounded-2xl p-4 flex flex-col gap-y-2">
          <h3 className="text-base">Bachelor, Caucasus University, Tbilisi</h3>
          <p className="text-sm">International Relations</p>
          <p className="text-sm">2010-2014</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
