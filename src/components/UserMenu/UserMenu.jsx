import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";
import React from "react";
import { clearAllContactsFromState } from "../../redux/contacts/operations.js";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const cleanAll = () => {
        dispatch(logOut());
        dispatch(clearAllContactsFromState()); // Очистка списка контактов в state
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
