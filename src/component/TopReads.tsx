import imgRetro from "../images/image-retro-pcs.jpg";
import imgTopLaptops from "../images/image-top-laptops.jpg";
import imgGaming from "../images/image-gaming-growth.jpg";

const TopReads = () => {
  const topReadsList = [
    {
      img: imgRetro,
      rank: "01",
      title: "Reviving Retro PCs",
      subtitle: "What happens when old PCs are given modern upgrades?",
    },
    {
      img: imgTopLaptops,
      rank: "02",
      title: "Top 10 Laptops of 2022",
      subtitle: "Our best picks for various needs and budgets.",
    },
    {
      img: imgGaming,
      rank: "03",
      title: "The Growth of Gaming",
      subtitle: "How the pandemic has sparked fresh opportunities.",
    },
  ];

  return (
    <section
      aria-label="Top Reads"
      className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
    >
      {topReadsList.map((read) => (
        <div className="flex gap-6">
          <img className="w-[6.25rem] object-cover" src={read.img} alt="" />
          <div className="flex flex-col justify-between">
            <span className="font-bold text-[2rem] text-grayishBlue">
              {read.rank}
            </span>
            <h3 className="text-[1.125rem] font-extrabold text-veryDarkBlue hover:text-softRed cursor-pointer">
              {read.title}
            </h3>
            <p className="leading-[170%]">{read.subtitle}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TopReads;
