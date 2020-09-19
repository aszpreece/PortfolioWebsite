import React, { Fragment, useState } from "react";
import "./style/App.css";
import { PageEnum } from "./types/pages";

import homeIcon from "./assets/home3.svg";
import octopusIcon from "./assets/octopus-icon.svg";
import cvIcon from "./assets/cv-icon.svg";
import codeIcon from "./assets/code-icon.svg";

import NavBar from "./components/NavBar";
import Page from "./components/Page";
import NavButton from "./components/NavButton";
import Projects from "./components/projects/Projects";
import HomePage from "./components/Home/HomePage";

const pages: {
  [key in PageEnum]: JSX.Element;
} = {
  Home: <HomePage></HomePage>,
  CV: (
    <Fragment>
      <Page />
    </Fragment>
  ),
  Projects: <Projects></Projects>,
};

const App = () => {
  const [pageState, setPageState] = useState<PageEnum>("Home");

  const navButtons = [
    {
      name: "Home",
      icon: homeIcon,
      onClick: () => setPageState("Home"),
    },
    {
      name: "Projects",
      icon: codeIcon,
      onClick: () => setPageState("Projects"),
    },
    {
      name: "CV",
      icon: cvIcon,
      description: "My CV",
      onClick: () => setPageState("CV"),
    },
    {
      name: "Octopus (Snake game)",
      icon: octopusIcon,
      description: "Play my snake clone! ",
      onClick: () => {
        window.location.href = "http://octopus.tomaszpreece.com/";
      },
    },
  ].map((navButton) => <NavButton {...navButton}></NavButton>);

  return (
    <div className="App">
      <header className="App-header">
        <div className="Main-navbar">
          <NavBar<PageEnum> {...{ navButtons: navButtons }}></NavBar>
        </div>
        <div className="Main">{pages[pageState]}</div>
      </header>
    </div>
  );
};

export default App;
