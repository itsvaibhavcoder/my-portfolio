import React from "react";
// import html from "../assets/html.png";
// import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import CPP from "../assets/C++.png";
import Java from "../assets/Java.png";
import Python from "../assets/Python.png";
import SQL from "../assets/SQL.png";
import Tailwind from "../assets/Tailwind.png";
import MySQL from "../assets/MySQL.png";
import { Link } from "react-scroll";

const Experience = () => {
  const techs = [
    // {
    //   id: 1,
    //   src: html,
    //   title: "HTML",
    //   style: "shadow-orange-500",
    // },
    // {
    //   id: 2,
    //   src: css,
    //   title: "CSS",
    //   style: "shadow-blue-500",
    // },
    {
      id: 1,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 2,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 3,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
        id: 4,
        src: CPP,
        title: "C++",
        style: "shadow-blue-500",
      },
      {
        id: 5,
        src: Java,
        title: "Java",
        style: "shadow-red-500",
      },
      {
        id: 6,
        src: Python,
        title: "Python",
        style: "shadow-yellow-500",
      },
      {
        id: 7,
        src: SQL,
        title: "SQL",
        style: "shadow-purple-500",
      },
      {
        id: 8,
        src: Tailwind,
        title: "Tailwind",
        style: "shadow-green-500",
      },
      {
        id: 9,
        src: MySQL,
        title: "MySQL",
        style: "shadow-orange-500",
      },
  ];

  return (
    <div
      name="technologies"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Technologies
          </p>
          <p className="py-6">These are the technologies I have worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <Link
              key={id}
              to="experience"
              spy={true}
              smooth={true}
              duration={500}
            >
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
