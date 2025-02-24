import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteContact, editContact } from "../../redux/contacts/operations.js";
import clsx from "clsx";
import css from "./Contact.module.css";
import { Toaster } from "react-hot-toast";
import { notifySuccess, notifyError } from "../../utils/toastNotifications.js";
import PropTypes from "prop-types";
import Modal from "../Modal/Modal.jsx";
import ModalDelConfirm from "../ModalDelConfirm/ModalDelConfirm.jsx";
import FormAddEditeContact from "../FormAddEditeContact/FormAddEditeContact.jsx";

const Contact = ({ contact }) => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const [tipeOperation, setTipeOperation] = useState("check");

    const initialValues = {
        id: contact.id,
        name: contact.name,
        number: contact.number,
    };

    const closeModal = () => {
        setIsOpen(false);
        setTipeOperation("check");
    };

    const openModal = (tipeOperation) => {
        setTipeOperation(tipeOperation);
        setIsOpen(true);
    };

    const delContactFromModal = () => {
        delContact(contact.id);
        setIsOpen(false);
        setTipeOperation("check");
    };

    const delContact = (ContactId) => {
        dispatch(deleteContact(ContactId))
            .unwrap() //unwrap() используется при dispatch(register(values)), чтобы ошибки из rejectWithValue не попадали в fulfilled-состояние.
            .then(() => {
                notifySuccess("Contact has been deleted successfully!");
            })
            .catch((error) => {
                notifyError(error);
            });
    };

    const editContactFromModal = (values, actions) => {
        editorContact(values, actions);
        setIsOpen(false);
        setTipeOperation("check");
    };

    const editorContact = (values, actions) => {
        dispatch(editContact(values))
            .unwrap() //unwrap() используется при dispatch(register(values)), чтобы ошибки из rejectWithValue не попадали в fulfilled-состояние.
            .then(() => {
                notifySuccess("Contact has been edited successfully!");
                actions.resetForm();
                document.activeElement.blur(); // Убираем фокус с активного элемента
            })
            .catch((error) => {
                notifyError(error);
            });
    };

    return (
        <>
            <div className={clsx(css.dataContact)}>
                <p>{contact.name}</p>
                <p>{contact.number}</p>
            </div>
            <button
                className={clsx(css.btnContact)}
                onClick={() => openModal("Edit")}
            >
                Edit
            </button>
            <button
                className={clsx(css.btnContact)}
                onClick={() => openModal("Delete")}
            >
                Delete
            </button>
            <Toaster
                containerStyle={{
                    top: 60,
                    left: 20,
                    bottom: 20,
                    right: 20,
                }}
            />
            {isOpen && (
                <Modal
                    title={`${tipeOperation} contact: ${contact.name}?`}
                    closeModal={closeModal}
                >
                    {tipeOperation === "Delete" ? (
                        <ModalDelConfirm
                            handleSubmitYes={delContactFromModal}
                            handleSubmitNo={closeModal}
                        />
                    ) : tipeOperation === "Edit" ? (
                        <FormAddEditeContact
                            initialValues={initialValues}
                            handleSubmit={editContactFromModal}
                            textOnButton={"Edit contact"}
                        />
                    ) : null}
                </Modal>
            )}
        </>
    );
};

Contact.propTypes = {
    contact: PropTypes.array.isRequired,
};

export default Contact;
