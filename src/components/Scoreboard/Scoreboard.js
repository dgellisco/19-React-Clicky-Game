import React from "react";
import "./Scoreboard.css";

const Scoreboard = (props) => (
    <div class="row">
        <div class="col-md-6 scoreboard-img">
            <img src="../assets/images/Star-Wars-Logo.png" id="header-logo" alt="Star Wars Logo"></img>
        </div>
        <div class="col-md-6 scoreboard-text">
            <ul class="scoreboard-div-text-text">
                <li>Score: {props.score}</li>
                <li>High Score: {props.highScore}</li>
                <p></p>
                <li className={props.messageClass}>{props.message}</li>
            </ul>
        </div>
    </div>
);

export default Scoreboard;