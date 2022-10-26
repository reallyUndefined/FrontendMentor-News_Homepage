import Header from "./component/Header";
import MainHeadline from "./component/MainHeadline";

function App() {
  return (
    <div className="min-h-screen bg-offWhite text-darkGrayishBlue text-[0.9375rem] font-inter px-4">
      <div className="max-w-[69.375rem] mx-auto lg:pt-[3.75rem]">
        <Header />
        <main className="mt-1 lg:mt-6">
          <MainHeadline />
        </main>
      </div>
    </div>
  );
}

export default App;
