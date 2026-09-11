import Body from "./cv-components/body/body";
import Header from "./cv-components/header/header";

function App() {
  return (
    <main className="mx-auto w-full max-w-300 bg-[#434343] px-5 py-5 ">
      <div className=" rounded-3xl overflow-hidden">
        {" "}
        <Header />
        <Body />
      </div>
    </main>
  );
}

export default App;
