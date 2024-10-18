import React from "react";

function CustomButton(props) {
    return (
        <button
            type={props.type}
            onClick={props.onClick}
            className={"custom-button ${props.className}"}
        >
            {props.children}
        </button>
    );
}

export default CustomButton;