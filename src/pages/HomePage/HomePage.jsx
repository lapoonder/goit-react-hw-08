import React from "react";
import { useSearchParams } from "react-router-dom";
import clsx from "clsx";
import css from "./HomePage.module.css";

const HomePage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialSort = searchParams.get("period") || "day"; // Если в URL нет параметра, используем "day"

    return (
        <>
            <div className="section">
                <div className={clsx("container")}>
                    <div className={clsx(css.searchTrand)}>
                        <h2>Welcome to website:</h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;
