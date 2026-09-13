const Languages = () => {
  return (
    <section id="languages" className="text-[#2D1F1E] bg-stone-100 py-8 px-4 ">
      <div className="flex flex-col items-center">
        <h3 className="text-2xl pb-4 sm:text-3xl sm:pb-8 lg:text-4xl">
          Languages
        </h3>
        <ul className="flex flex-col gap-y-3 text-base border p-5 rounded-2xl sm:text-xl lg:text-2xl">
          <li>Georgian - Native Language</li>
          <li>
            English - C1&#40;EPAM English Language{" "}
            <span className="pl-17 min-[460px]:pl-0">
              Test Result -{" "}
              <span className="min-[460px]:pl-17 min-[561px]:pl-0">
                taken in 2026&#41;
              </span>
            </span>{" "}
            <br />
            <span className="pl-17 min-[640px]:pl-20 lg:pl-25">
              6.5&#40;IELTS - taken in 2014&#41;
            </span>
          </li>
          <li>Russian - A2-B1</li>
        </ul>
      </div>
    </section>
  );
};

export default Languages;
