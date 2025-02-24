import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";
import React from "react";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const cleanAll = () => {
        dispatch(logOut());
    };

    return (
        <div className={css.wrapper}>
            <p className={css.username}>Welcome, {user.name}</p>
            <button type="button" onClick={cleanAll}>
                Logout
            </button>
        </div>
    );
};
