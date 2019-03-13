import React from "react";
import "./Header.css";

const Header = (props) => (
    <div>
        <span className={props.messageClass}>{props.message}</span>
    </div>
);

export default Header;