import Header from "./component/Header";
import MainHeadline from "./component/MainHeadline";
import NewArticles from "./component/NewArticles";
import TopReads from "./component/TopReads";

function App() {
  return (
    <div className="min-h-screen bg-offWhite text-darkGrayishBlue text-[0.9375rem] font-inter px-4 leading-none">
      <div className="max-w-[69.375rem] mx-auto pb-6 lg:pt-[3.75rem] lg:pb-[6.375rem]">
        <Header />
        <main className="mt-1 lg:mt-6 grid lg:grid-cols-3 lg:[&>*:first-child]:col-span-2 gap-16 lg:gap-[1.875rem] mb-16 lg:mb-[4.5rem]">
          <MainHeadline />
          <NewArticles />
        </main>
        <TopReads />
      </div>
    </div>
  );
}

export default App;
