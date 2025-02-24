import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";
import React from "react";

export const AuthNav = () => {
    return (
        <div>
            <NavLink className={clsx(css.link)} to="/register">
                Register
            </NavLink>
            <NavLink className={clsx(css.link)} to="/login">
                Log In
            </NavLink>
        </div>
    );
};
