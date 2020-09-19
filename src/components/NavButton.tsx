import React from "react";

export interface NavButtonProps {
  name: string;
  icon?: string;
  description?: string;
  onClick?: () => void;
}

const NavButton = (props: NavButtonProps) => {
  const { name, icon, description, onClick } = props;
  return (
    <div className="Nav-button" id={name} onClick={onClick}>
      <img className="Icon" src={icon} alt={name}></img>
      <p className="Button-text">{name}</p>
      <div className="Description">
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default NavButton;
