import React from "react";
import { Toaster } from "react-hot-toast";
import { notifySuccess, notifyError } from "../../utils/toastNotifications.js";
import { addContact } from "../../redux/contacts/operations.js";
import { useDispatch } from "react-redux";
import FormAddEditeContact from "../FormAddEditeContact/FormAddEditeContact.jsx";

const initialValues = {
    name: "",
    number: "",
};

function ContactForm() {
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        dispatch(addContact(values))
            .unwrap() //unwrap() используется при dispatch(register(values)), чтобы ошибки из rejectWithValue не попадали в fulfilled-состояние.
            .then(() => {
                notifySuccess("New contact has been added successfully!");
                actions.resetForm();
                document.activeElement.blur(); // Убираем фокус с активного элемента
            })
            .catch((error) => {
                notifyError(error);
            });
    };

    return (
        <>
            <FormAddEditeContact
                initialValues={initialValues}
                handleSubmit={handleSubmit}
                textOnButton={"Add contact"}
            />
            <Toaster
                containerStyle={{
                    top: 60,
                    left: 20,
                    bottom: 20,
                    right: 20,
                }}
            />
        </>
    );
}

export default ContactForm;
