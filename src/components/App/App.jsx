import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps.js";
import ContactForm from "../ContactForm/ContactForm.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import ContactList from "../ContactList/ContactList.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import { List } from "react-content-loader";
import clsx from "clsx";
import css from "./App.module.css";
import { contactsSlice } from "../../redux/selectors.js";

const MyListLoader = () => <List />;

function App() {
    const dispatch = useDispatch();
    const { items, isLoading, error } = useSelector(contactsSlice);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <>
            <header className="header">
                <div className="container">
                    <h1 className={clsx(css.siteHeader)}>Phonebook</h1>
                </div>
            </header>
            <div className="section">
                <div className="container">
                    <ContactForm />
                </div>
            </div>
            {items.length > 0 && <SearchBox />}
            {isLoading && <MyListLoader />}
            {error && <ErrorMessage />}
            {items.length > 0 && <ContactList />}
        </>
    );
}

export default App;
