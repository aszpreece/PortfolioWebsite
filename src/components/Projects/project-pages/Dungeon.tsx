import React, { Fragment } from "react";

export interface DungeonProps {}

const Dungeon = () => {
  return (
    <Fragment>
      <h1>Dungeon Game</h1>
      <h2>Our Brief</h2>
      <p>In a team of 5, design and create a game with few constraints: </p>
      <ul>
        <li>Must use Java</li>
        <li>Must feature multiplayer</li>
        <li>Must feature graphics and sound</li>
      </ul>
      <h2>The Result</h2>
      <ul>
        <li>One of the top 3 projects in the year</li>
        <li>Invited by the University to demo the game at an open day</li>
        <li>Scored 85/100</li>
      </ul>
      <h2>Summary</h2>
      <p>
        We designed and implemented a multiplayer top down real time strategy
        game. It supported having hundreds of units on screen at once with
        little network overhead. It featured an animated user interface, a
        custom music score (by me!), path-finding and randomly generating
        dungeons.
      </p>
      <p>
        I was mainly responsible for the networking model and game engine but I
        was ultimately involved in most areas of the game.
      </p>

      <p>
        The networking worked using a deterministic networking model. Each
        client would gather instructions from the user (such as unit movements
        and actions) and send them to the server. The server would then
        distribute the commands to each client in the same order. The clients
        would then execute all of the commands once they had received a 'done'
        message. As the game logic was deterministic this resulted in the same
        game state being replicated across all the clients. Cool huh!
      </p>
      <p>Overall, this was a fun and extremely rewarding project.</p>
    </Fragment>
  );
};

export default Dungeon;
