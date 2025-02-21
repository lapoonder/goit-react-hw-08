import React from "react";
import Contact from "../Contact/Contact.jsx";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/selectors.js";
import clsx from "clsx";
import css from "./ContactList.module.css";

function ContactList() {
    const getFilteredContacts = useSelector(selectFilteredContacts);

    return (
        <div className="section">
            <ul className={clsx("container", css.contactList)}>
                {getFilteredContacts.map((contact) => {
                    return (
                        <li
                            className={clsx(css.contactListItem)}
                            key={contact.id}
                        >
                            <Contact contact={contact} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default ContactList;
