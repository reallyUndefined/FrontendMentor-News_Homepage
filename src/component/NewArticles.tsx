const NewArticles = () => {
  const articlesList = [
    {
      title: "Hydrogen VS Electric Cars",
      subtitle: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
      title: "The Downsides of AI Artistry",
      subtitle:
        "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      title: "Is VC Funding Drying Up?",
      subtitle:
        "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];

  return (
    <div className="bg-veryDarkBlue px-5 py-6 lg:px-6 lg:py-8">
      <h2 className="text-softOrange font-extrabold text-[2rem] mb-9">New</h2>
      {articlesList.map((article) => (
        <div className="pb-[1.8125rem] mb-[1.625rem] border-b border-b-darkGrayishBlue last:border-none last:p-0 last:m-0">
          <a
            href="/"
            className="inline-block mb-[0.625rem] font-extrabold text-[1.25rem] text-grayishBlue hover:text-softOrange cursor-pointer"
          >
            {article.title}
          </a>
          <p className="leading-[170%] text-grayishBlue/70">
            {article.subtitle}
          </p>
        </div>
      ))}
    </div>
  );
};

export default NewArticles;
