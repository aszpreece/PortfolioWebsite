import React, { Fragment, useState } from "react";
import "./style/App.css";
import NavBar from "./components/NavBar";
import Page from "./components/Page";
import { PageEnum } from "./types/pages";
import homeIcon from "./assets/home3.svg";
import NavButton from "./components/NavButton";
import Projects from "./components/Projects/Projects";

const pages: {
  [key in PageEnum]: JSX.Element;
} = {
  Home: (
    <Fragment>
      <Page />
      <Page />
    </Fragment>
  ),
  CV: (
    <Fragment>
      <Page />
    </Fragment>
  ),
  Projects: <Projects></Projects>,
};

function App() {
  const [pageState, setPageState] = useState<PageEnum>("Home");

  const navButtons = [
    {
      name: "Home",
      icon: homeIcon,
      onClick: () => setPageState("Home"),
    },
    {
      name: "Projects",
      icon: homeIcon,
      onClick: () => setPageState("Projects"),
    },
    {
      name: "CV",
      icon: homeIcon,
      description: "My CV",
      onClick: () => setPageState("CV"),
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
}

export default App;
