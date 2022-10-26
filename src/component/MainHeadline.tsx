import web3Mobile from "../images/image-web-3-mobile.jpg";
import web3Desktop from "../images/image-web-3-desktop.jpg";

const MainHeadline = () => {
  return (
    <div className="">
      <img
        className="h-[18.75rem] w-full object-cover block md:hidden"
        src={web3Mobile}
        alt="article"
      />
      <img
        className="h-[18.75rem] w-full object-cover hidden md:block"
        src={web3Desktop}
        alt="article"
      />
      <div className="mt-6 md:mt-7 grid gap-4 md:grid-cols-2">
        <h1 className="text-[2.5rem] lg:text-[3.5rem] font-extrabold">
          The Bright Future of Web 3.0?
        </h1>
        <div className="">
          <p className="leading-[170%] lg:leading-[163%] mb-6 lg:mb-9">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfillign its promise?
          </p>
          <button className="bg-softRed tracking-[4.5px] font-bold text-sm text-offWhite px-8 py-4 hover:bg-veryDarkBlue">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainHeadline;
