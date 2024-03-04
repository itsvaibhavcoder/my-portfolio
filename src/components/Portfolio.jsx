
// import React from "react";
// import cashFlow from "../assets/portfolio/cashFlow.png";
// import weatherApp from "../assets/portfolio/weatherApp.png";
// import Ecommerce from "../assets/portfolio/e-Commerce.png";
// import superHero from "../assets/portfolio/superHero.png";
// import netFlix from "../assets/portfolio/netFlix.png";

// const Portfolio = () => {
//   const portfolios = [
//     {
//       id: 1,
//       title: "E-Commerce App",
//       src: Ecommerce,
//       demoLink: "#",
//       codeLink: "https://github.com/itsvaibhavcoder/E-Commerce-App"
//     },
//     {
//       id: 2,
//       title: "Cash Flow Minimization",
//       src: cashFlow,
//       demoLink: "https://minimize-cashflow.netlify.app/",
//       codeLink: "https://github.com/itsvaibhavcoder/Web-Development-Projects/tree/main/Splitwise%20Cashflow%20Minimization"
//     },
//     {
//       id: 3,
//       title: "Weather App",
//       src: weatherApp,
//       demoLink: "https://skyinsight.netlify.app/",
//       codeLink: "https://github.com/itsvaibhavcoder/Web-Development-Projects/tree/main/Weather%20App"
//     },
//     {
//       id: 4,
//       title: "Superhero Search",
//       src: superHero,
//       demoLink: "https://search-superhero.netlify.app/",
//       codeLink: "https://github.com/itsvaibhavcoder/Javascript-Mastery/tree/main/Superhero%20App"
//     },
//     {
//       id: 5,
//       title: "Netflix Clone",
//       src: netFlix,
//       demoLink: "https://netflix-clonne.netlify.app/",
//       codeLink: "https://github.com/itsvaibhavcoder/Javascript-Mastery/tree/main/Netflix%20Clone"
//     }
//   ];

//   return (
//     <div
//       name="projects"
//       className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
//     >
//       <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
//         <div className="pb-8">
//           <p className="text-4xl font-bold inline border-b-4 border-gray-500">
//             Projects
//           </p>
//           <p className="py-6">Check out some of my work right here</p>
//         </div>

//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
//           {portfolios.map(({ id, title, src, demoLink, codeLink }) => (
//             <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
//               <img
//                 src={src}
//                 alt=""
//                 className="rounded-md duration-200 hover:scale-105"
//               />
//               <div className="flex flex-col items-center justify-center">
//                 <p className="my-2 text-lg font-semibold">{title}</p>
//                 <div className="flex items-center justify-center">
//                   <a href={demoLink} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
//                     Demo
//                   </a>
//                   <a href={codeLink} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
//                     Code
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;

import React from "react";
import cashFlow from "../assets/portfolio/cashFlow.png";
import weatherApp from "../assets/portfolio/weatherApp.png";
import Ecommerce from "../assets/portfolio/e-Commerce.png";
import superHero from "../assets/portfolio/superHero.png";
import netFlix from "../assets/portfolio/netFlix.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "E-Commerce App",
      src: Ecommerce,
      demoLink: "#",
      codeLink: "https://github.com/itsvaibhavcoder/E-Commerce-App"
    },
    {
      id: 2,
      title: "Cash Flow Minimization",
      src: cashFlow,
      demoLink: "https://minimize-cashflow.netlify.app/",
      codeLink: "https://github.com/itsvaibhavcoder/Web-Development-Projects/tree/main/Splitwise%20Cashflow%20Minimization"
    },
    {
      id: 3,
      title: "Weather App",
      src: weatherApp,
      demoLink: "https://skyinsight.netlify.app/",
      codeLink: "https://github.com/itsvaibhavcoder/Web-Development-Projects/tree/main/Weather%20App"
    },
    {
      id: 4,
      title: "Superhero Search",
      src: superHero,
      demoLink: "https://search-superhero.netlify.app/",
      codeLink: "https://github.com/itsvaibhavcoder/Javascript-Mastery/tree/main/Superhero%20App"
    },
    {
      id: 5,
      title: "Netflix Clone",
      src: netFlix,
      demoLink: "https://netflix-clonne.netlify.app/",
      codeLink: "https://github.com/itsvaibhavcoder/Javascript-Mastery/tree/main/Netflix%20Clone"
    }
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-0 pt-0">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 pb-20">
          {portfolios.map(({ id, title, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex flex-col items-center justify-center">
                <p className="my-2 text-lg font-semibold">{title}</p>
                <div className="flex items-center justify-center">
                  <a href={demoLink} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </a>
                  <a href={codeLink} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
