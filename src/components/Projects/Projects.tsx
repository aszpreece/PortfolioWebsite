import React, { useState } from "react";
import { ProjectEnum } from "../../types/projects";
import NavBar, { NavBarProps } from "../NavBar";
import NavButton, { NavButtonProps } from "../NavButton";
import undeadHorsesIcon from "../../assets/undead-banner.png";
import safeSellyScreenShot from "../../assets/safe_selly_map_screenshot.png";

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
      description: "A popular Minecraft server plugin I made when I was 14",
    },
    {
      name: "Multiplayer RTS game",
      onClick: () => setViewProject("Dungeon"),
      description:
        "In a team of 5 we created a fully networked Real-Time-Strategy game",
    },
    {
      name: "Safe Selly",
      onClick: () => setViewProject("SafeSelly"),
      description: "A fully working 24hr hackathon project to track crime",
      icon: safeSellyScreenShot,
    },
    {
      name: "Web-controlled LED Cube",
      onClick: () => setViewProject("LEDCube"),
      description:
        "A hardware project to create a web-controlled LED cube. Try it out!",
    },
    {
      name: "No Man's Sea Game",
      onClick: () => setViewProject("NoMansSea"),
      description: "Play as a pirate in a randomly generated world",
    },
    {
      name: "Robot Warehouse",
      onClick: () => setViewProject("RoboticsFinal"),
      description: "A 10-person project to create a robotic warehouse",
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
      <h1>Projects</h1>
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
