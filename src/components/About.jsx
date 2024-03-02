import React from "react";
const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hello, I'm Vaibhav, a final-semester Computer Science student with a
          consistent CGPA above 8.5. I'm deeply passionate about coding and web
          development, constantly exploring new technologies and frameworks to
          create innovative solutions.
        </p>
        <br />
        <p className="text-xl">
          When I'm not immersed in code, you can find me on the cricket field,
          where I enjoy the thrill of competition and teamwork. Off the field, I
          unwind by diving into the captivating worlds of video games, where
          strategic thinking and quick reflexes keep me engaged and entertained.
        </p>
      </div>
    </div>
  );
};

export default About;
