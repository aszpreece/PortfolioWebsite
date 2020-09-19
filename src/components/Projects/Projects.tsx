import React, { useState } from "react";
import { ProjectEnum } from "../../types/projects";
import NavBar, { NavBarProps } from "../NavBar";
import NavButton, { NavButtonProps } from "../NavButton";
import undeadHorsesIcon from "../../assets/undead-banner.png";

export interface PageProps {}

const projectPages: {
  [key in ProjectEnum]: JSX.Element;
} = {
  Dungeon: <div>Dungeon project</div>,
  LEDCube: <div></div>,
  NoMansSea: <div></div>,
  None: <div></div>,
  RoboticsFinal: <div></div>,
  SafeSelly: <div></div>,
  UndeadHorses: <div></div>,
};

const Projects = () => {
  const [viewProject, setViewProject] = useState<ProjectEnum>("None");

  const projectButtonsProps: NavButtonProps[] = [
    {
      name: "Undead Horses",
      onClick: () => setViewProject("UndeadHorses"),
      icon: undeadHorsesIcon,
    },
    {
      name: "Dungeon Game",
      onClick: () => setViewProject("Dungeon"),
    },
    {
      name: "Safe Selly",
      onClick: () => setViewProject("SafeSelly"),
    },
  ];
  const projectButtons = projectButtonsProps.map((navButton) => (
    <NavButton {...navButton}></NavButton>
  ));

  const navBarProps: NavBarProps<ProjectEnum> = {
    navButtons: projectButtons,
  };

  NavBar(navBarProps);

  return (
    <div className="Projects">
      <p>
        Here are some of the personal projects that I have worked on. Click on a
        card to learn more.
      </p>
      <div className="Project-navbar">
        <NavBar<ProjectEnum> {...navBarProps}></NavBar>
      </div>
      {projectPages[viewProject]}
    </div>
  );
};

export default Projects;
