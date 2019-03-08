import React from "react";
import "./GameItem.css";

const GameItem = ({name, image, onClick}) =>
        <img
        className="gameitem"
        src={image}
        name={name}
        alt={name}
        onClick={ () => onClick(name) }
        />
    ;


export default GameItem;