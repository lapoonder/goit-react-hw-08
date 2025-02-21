import React from "react";
import clsx from "clsx";
import css from "./ErrorMessage.module.css";

function ErrorMessage() {
    return (
        <div className="section">
            <div className="container">
                <p className={clsx(css.textErr)}>
                    Whoops, something went wrong! Please try again later!
                </p>
            </div>
        </div>
    );
}

export default ErrorMessage;
