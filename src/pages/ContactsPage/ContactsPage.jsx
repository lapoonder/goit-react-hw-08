import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations.js";
import ContactForm from "../../components/ContactForm/ContactForm.jsx";
import SearchBox from "../../components/SearchBox/SearchBox.jsx";
import ContactList from "../../components/ContactList/ContactList.jsx";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";
import { List } from "react-content-loader";
import { contactsSlice } from "../../redux/contacts/selectors.js";

const MyListLoader = () => <List />;

function ContactsPage() {
    const dispatch = useDispatch();
    const { items, isLoading, error } = useSelector(contactsSlice);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <>
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

export default ContactsPage;
