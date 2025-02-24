import React from "react";
import clsx from "clsx";
import css from "./FormAddEditeContact.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";

const ContactFormSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    number: Yup.string()
        .matches(
            /^\d{3}-\d{3}-\d{4}$/,
            "Phone number is not valid. Format requared: 123-682-9087"
        )
        .required("Required"),
});

function FormAddEditeContact({ initialValues, handleSubmit, textOnButton }) {
    const nameFieldId = useId();
    const numberFieldId = useId();

    return (
        <>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={ContactFormSchema}
            >
                <Form className={clsx(css.dataContactForm)}>
                    <div className={clsx(css.fieldForm)}>
                        <label htmlFor={nameFieldId}>Name:</label>
                        <Field type="text" name="name" id={nameFieldId} />
                        <ErrorMessage name="name" component="span" />
                    </div>

                    <div className={clsx(css.fieldForm)}>
                        <label htmlFor={numberFieldId}>Number:</label>
                        <Field
                            type="tel"
                            name="number"
                            id={numberFieldId}
                            placeholder="555-666-7777"
                        />
                        <ErrorMessage name="number" component="span" />
                    </div>

                    <button type="submit" className={clsx(css.btnForm)}>
                        {textOnButton}
                    </button>
                </Form>
            </Formik>
        </>
    );
}

export default FormAddEditeContact;
