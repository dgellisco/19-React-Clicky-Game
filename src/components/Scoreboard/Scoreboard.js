import React from "react";
import "./Scoreboard.css";

const Scoreboard = (props) => (
    <div>
        THIS IS THE SCOREBOARD
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>Score: {props.score}</li>
            <li>High Score: {props.highScore}</li>
            <li className={props.messageClass}>{props.message}</li>
        </ul>
    </div>
);

export default Scoreboard;