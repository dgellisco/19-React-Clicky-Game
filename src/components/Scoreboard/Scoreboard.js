import React from "react";
import "./Scoreboard.css";

const Scoreboard = (props) => (
    <div class="row">
        <div class="col-md-6">
            <img src="../assets/images/Star-Wars-Logo.png" id="header-logo" alt="Star Wars Logo"></img>
        </div>
        <div class="col-md-6">
            <div class="row">
                <div class="col-md-6">
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">Contact</a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <ul>
                        <li>Score: {props.score}</li>
                        <li>High Score: {props.highScore}</li>
                        <li className={props.messageClass}>{props.message}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

export default Scoreboard;