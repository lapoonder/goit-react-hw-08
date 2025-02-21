import React from "react";
import clsx from "clsx";
import css from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/filtersSlice.js";
import { useDispatch } from "react-redux";

function SearchBox() {
    const dispatch = useDispatch();

    const setSearchName = (name) => {
        dispatch(selectNameFilter(name));
    };

    return (
        <div className="section">
            <div className="container">
                <p>Find contacts by name</p>
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
