import React from "react";
import clsx from "clsx";
import css from "./SearchBox.module.css";
import { selectSearchTextFilter } from "../../redux/filters/slice.js";
import { useDispatch } from "react-redux";

function SearchBox() {
    const dispatch = useDispatch();

    const setSearchName = (name) => {
        dispatch(selectSearchTextFilter(name));
    };

    return (
        <div className="section">
            <div className="container">
                <p>Find contacts by name or number</p>
                <input
                    className={clsx(css.SearchBoxField)}
                    name="searchfield"
                    onChange={(event) => setSearchName(event.target.value)}
                ></input>
            </div>
        </div>
    );
}

export default SearchBox;
