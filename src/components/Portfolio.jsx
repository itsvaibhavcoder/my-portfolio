import React from "react";
import cashFlow from "../assets/portfolio/cashFlow.png";
import noteKeeper from "../assets/portfolio/noteKeeper.png";
import weatherApp from "../assets/portfolio/weatherApp.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: cashFlow,
      demoLink: "https://minimize-cashflow.netlify.app/",
      codeLink: "https://github.com/itsvaibhavcoder/Web-Development-Projects/tree/main/Splitwise%20Cashflow%20Minimization"
    },
    {
      id: 2,
      src: weatherApp,
      demoLink: "https://skyinsight.netlify.app/",
      codeLink: "https://github.com/itsvaibhavcoder/Web-Development-Projects/tree/main/Weather%20App"
    },
    {
      id: 3,
      src: noteKeeper,
      demoLink: "https://keep-safe.netlify.app/",
      codeLink: "https://github.com/itsvaibhavcoder/ReactProjects/tree/main/keeperapp"
    }
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demoLink} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </a>
                <a href={codeLink} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
