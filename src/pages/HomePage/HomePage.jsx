import React from "react";
import clsx from "clsx";
import css from "./HomePage.module.css";

const HomePage = () => {
    return (
        <>
            <div className="section">
                <div className={clsx("container")}>
                    <div className={clsx(css.searchTrand)}>
                        <h2>Welcome!</h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;
