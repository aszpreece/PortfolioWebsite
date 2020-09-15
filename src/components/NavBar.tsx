import React from "react";
import NavButton from "./NavButton";
import homeIcon from "../assets/home3.svg";

const navButtons = [
  {
    name: "Home",
    icon: homeIcon,
    onclick: undefined,
  },
  {
    name: "Blog",
    icon: homeIcon,
    onclick: undefined,
  },
  {
    name: "Projects",
    icon: homeIcon,
    onclick: undefined,
  },
].map((navButton) => <NavButton {...navButton}></NavButton>);

const NavBar = () => {
  return <ol className="Nav-bar">{navButtons}</ol>;
};

export default NavBar;
