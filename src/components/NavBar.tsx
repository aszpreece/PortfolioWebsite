import React from "react";

export interface NavBarProps<NavEnum> {
  navButtons: JSX.Element[];
}

const NavBar = <T,>({ navButtons }: NavBarProps<T>) => {
  return <ol className="Nav-bar">{navButtons}</ol>;
};

export default NavBar;
