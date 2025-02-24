import React from "react";
import Navigation from "../Navigation/Navigation.jsx";
import { UserMenu } from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { AuthNav } from "../AuthNav/AuthNav";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import clsx from "clsx";
import css from "./AppBar.module.css";

export const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <div className="hero">
            <div className={clsx("container", css.heroNav)}>
                <Navigation />
                <nav className={clsx(css.authMenu)}>
                    {isLoggedIn ? <UserMenu /> : <AuthNav />}
                </nav>
            </div>
        </div>
    );
};
