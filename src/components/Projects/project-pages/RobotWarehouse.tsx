import React, { Fragment } from "react";

export interface RobotWarehouseProps {}

const RobotWarehouse = () => {
  return (
    <Fragment>
      <h1>Robotic Warehouse</h1>
      <h2>Our Brief</h2>
      <p>
        In a team of 10, design a robotic warehouse system. The layout of the
        warehouse is pre-defined with black lines indicating paths. The
        warehouse will have up to 3 robots and can be controlled by a central
        server. The server will take in a text file indicating tasks and item
        locations as well as drop off zones. Each task is worth a certain amount
        of points. The system will be judged by the amount of points earned. The
        system must support deleting tasks and adding tasks dynamically.
      </p>

      <h2>The Result</h2>
      <ul>
        <li>Among the top 3 projects in the year</li>
        <li>
          One of the only teams to get multiple robots working simultaneously
        </li>
        <li>Scored 96/100</li>
        <li>A 26 hour stint in the lab!</li>
      </ul>
      <h2>Summary</h2>
      <p>
        My role in this project was the networking/central robot control and
        path-finding components.
      </p>
      <h3>Path-finding and Cooperative Path-finding</h3>
      <p>
        For my level at the time these were a challenging set of algorithms to
        implement. With this risk in mind, I chose to implement the{" "}
        <a href="https://en.wikipedia.org/wiki/A*_search_algorithm">A-star</a>{" "}
        algorithm to ensure that the team were able to at least have a single
        robot system working.
      </p>
      <p>
        One a single robot system was working I began work on a Cooperative
        A-star algorithm. This worked by having a reservation table to store
        'booking' of a path node on time periods where a robot would be using
        it. However, it was not that straight forward. I had to consider and
        prevent situations where robots would try and drive through each other
        as well as edge cases where robots may be forced to unexpectedly remain
        stationary on a point (due to not being able to find a new path as they
        may have been trapped). Luckily the final system worked perfectly!
      </p>
      <h3>Networking</h3>
      <p>
        The networking worked by keeping all of the robots moving in lockstep.
        The robots would declare when they were at a junction and the central
        server would give out new instructions when they were all ready.
      </p>
      <h3>Video</h3>

      <div className="Video-wrapper">
        <iframe
          title="Robot Warehouse"
          width="1280"
          height="480"
          src="https://www.youtube.com/embed/9HiKoeoH1I8"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
      <p></p>
    </Fragment>
  );
};

export default RobotWarehouse;
