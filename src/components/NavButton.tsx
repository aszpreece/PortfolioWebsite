import React from "react";

export interface Props {
  name: string;
  icon: string;
  onClick?: () => void;
}

export interface State {}

const NavButton = (props: Props) => {
  const { name, icon, onClick } = props;
  return (
    <div className="Nav-button" id={name} onClick={onClick}>
      <img className="Icon" src={icon} alt={name}></img>
      <p className="Button-text">{name}</p>
    </div>
  );
};

export default NavButton;
