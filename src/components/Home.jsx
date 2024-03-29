import React from 'react';
import Image from '../assets/selfImg.png';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';
import Typewriter from './Typewriter';

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-3"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h4 className="text-2xl sm:text-7xl font-bold text-white">
            <Typewriter text="I'm a Frontend Developer and Programmer." />
          </h4>
          <p className="text-gray-500 py-4 max-w-md">
            I love to work on web applications using technologies like React,
            Tailwind, HTML, CSS, and JavaScript, REST APIs.
          </p>

          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={Image}
            alt="my profile"
            className="rounded-3xl mx-auto w-4/5 md:w-full pb-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
