import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import clsx from "clsx";
import css from "./Navigation.module.css";

const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <nav className={clsx(css.nav)}>
            <NavLink to="/" className={buildLinkClass}>
                Home
            </NavLink>
            {isLoggedIn && (
                <NavLink to="/contacts" className={buildLinkClass}>
                    Contacts
                </NavLink>
            )}
        </nav>
    );
};

export default Navigation;
