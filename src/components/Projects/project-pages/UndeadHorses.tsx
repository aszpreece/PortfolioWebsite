import React from "react";

export interface UndeadHorsesProps {}

const UndeadHorses = () => {
  return (
    <div className="Undead-horses">
      <h1>Undead Horses</h1>
      <ul>
        <li>
          Released a server-side mod for the game Minecraft when I was 14.
        </li>
        <li>Project was to help teach myself Java.</li>
        <li>
          Released multiple updates over the course of a year, responding to
          feedback and liaising with graphic designers and youtubers to create
          content to help promote the mod.
        </li>
        <li>The mod was downloaded used by thousands of players.</li>
      </ul>
      <a href="http://www.github.com/aszpreece/UndeadHorses">GitHub</a>
      <br></br>
      <a href="https://dev.bukkit.org/projects/undead-horses">Homepage</a>
    </div>
  );
};

export default UndeadHorses;
