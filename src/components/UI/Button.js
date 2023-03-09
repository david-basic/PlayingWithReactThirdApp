import React from "react";

import styleClasses from "./Button.module.css";

const Button = (props) => {
    return (
        <button
            className={styleClasses.button}
            type={props.type || "button"}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};

export default Button;
