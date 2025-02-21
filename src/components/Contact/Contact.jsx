import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps.js";
import clsx from "clsx";
import css from "./Contact.module.css";
import PropTypes from "prop-types";

const Contact = ({ contact }) => {
    const dispatch = useDispatch();
    const delContact = (ContactId) => {
        dispatch(deleteContact(ContactId));
    };

    return (
        <>
            <div className={clsx(css.dataContact)}>
                <p>{contact.name}</p>
                <p>{contact.number}</p>
            </div>
            <button
                className={clsx(css.btnContact)}
                onClick={() => {
                    delContact(contact.id);
                }}
            >
                Delete
            </button>
        </>
    );
};

Contact.propTypes = {
    contact: PropTypes.array.isRequired,
};

export default Contact;
