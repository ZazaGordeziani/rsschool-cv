import Body from "./cv-components/body/body";
import Footer from "./cv-components/footer/footer";
import Header from "./cv-components/header/header";

function App() {
  return (
    <main className="mx-auto w-full max-w-350 bg-[#434343] px-3.5 py-5 ">
      <div className=" rounded-3xl overflow-hidden">
        {" "}
        <Header />
        <Body />
        <Footer />
      </div>
    </main>
  );
}

export default App;
