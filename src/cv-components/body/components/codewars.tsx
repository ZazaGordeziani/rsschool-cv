const Codewars = () => {
  return (
    <section id="codewars" className="py-6 bg-olive-400 px-4">
      <h3 className="text-2xl pb-6 text-center sm:text-3xl">
        Codewars Example & Solution
      </h3>
      <div>
        <h3 className="text-base p-4 sm:text-xl">
          Given an integer, return a string with dash '-' marks before and after
          each odd digit, but do not begin or end the string with a dash mark.
          Ex:
        </h3>

        <p className="text-sm sm:text-xl pl-4">
          Input: 274 -&gt; Output: '2-7-4'
        </p>
        <p className="text-sm sm:text-xl pl-4">
          Input: 6815 -&gt; Output: '68-1-5'
        </p>
        <h3 className="text-2xl pb-6 text-center py-6 lg:text-3xl">Solution</h3>
        <div className="flex flex-col gap-y-2 sm:text-xl sm:pl-10">
          <p>function dashatize(num) &#123;</p>
          <p className="pl-2">
            const digits = String(Math.abs(num)).split('');
          </p>
          <p className="pl-2">let result = '';</p>
          <p className="pl-4">digits.forEach&#40;(digit, index) =&gt; &#123;</p>
          <p className="pl-6"> if (Number(digit) % 2 !== 0) &#123;</p>
          <p className="pl-8">
            if (result && result[result.length - 1] !== '-') &#123;"
          </p>
          <p className="pl-8">result += '-';</p>
          <p className="pl-8">{"}"}</p>
          <p className="pl-8 pt-2 pb-4">result += digit;</p>
          <p className="pl-8">
            {" "}
            if &#40;index &lt; digits.length - 1&#41; &#123;
          </p>
          <p className="pl-10">result += '-';</p>
          <p className="pl-8">&#125;</p>
          <p className="pl-6">&#125; else &#123;</p>
          <p className="pl-8">result += digit;</p>
          <p className="pl-6">&#125;</p>
          <p className="pl-4">&#125;&#41;</p>
          <p className="pl-4">return result;</p>
          <p className="pl-2">&#125;</p>
        </div>
      </div>
    </section>
  );
};

export default Codewars;
