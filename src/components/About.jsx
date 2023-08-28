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
          Coding isn't just lines of text and commands; it's a language that
          speaks to computers and brings ideas to life in the digital realm. For
          me, it's a journey of creativity, problem-solving,and continuous
          learning. As I embark on this path, I've come to realize that coding
          isn't just a skill—it's a passion that drives me to explore new
          horizons and create innovative solutions.
        </p>

        <br />

        <p className="text-xl">
          My love for coding began with a single "Hello, World!" program. The
          moment I saw those words appear on the screen, I was hooked. The idea
          that I could communicate with machines, instruct them to perform
          tasks, and shape the virtual world around me was exhilarating. With
          each project I undertook, whether it was a simple website or a complex
        </p>
      </div>
    </div>
  );
};

export default About;
