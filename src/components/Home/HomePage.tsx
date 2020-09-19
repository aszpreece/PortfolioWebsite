import React from "react";

export interface HomePageProps {}

const HomePage = () => {
  return (
    <div className="Home-page">
      <h1>Home</h1>
      <p>
        Hello! My name is Tom and I am a final year Computer Science student at
        the University of Birmingham. I have just completed my industry year and
        continue to work part time at{" "}
        <a href="http://www.griffiths-waite.co.uk/">Griffiths Waite</a> where I
        work on back-end systems. Currently I primarly work with Typescript,
        Node, Java and SQL/PLSQL professionally but I have experience with C#,
        C/C++, MIPS Assembly, Haskell, OCaml, Python and many others. Please
        feel free to look around and take a look at some of the projects I have
        worked on.
      </p>
      <p>
        If you would like to mildly annoy me, feel free to change the pattern on
        my LED cube by using the Nav Bar on the left to go to 'LED Cube'. Or if
        you'd prefer a game of snake, go to 'Octopus Snake'
      </p>
      <p>
        This is the first ever website I have made, so go easy on me! It is made
        in React using Typescript and is hosted on Azure.
      </p>
    </div>
  );
};

export default HomePage;
