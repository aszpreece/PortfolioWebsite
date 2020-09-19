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
      <div className="Description">
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
      <img className="Icon" src={icon} alt={name}></img>
      <p className="Button-text">{name}</p>
    </div>
  );
};

export default NavButton;
