import React from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { Toaster } from "react-hot-toast";
import { notifyError } from "../../utils/toastNotifications.js";
import clsx from "clsx";
import css from "./LoginForm.module.css";

const LoginFormSchema = Yup.object().shape({
    email: Yup.string()
        .email("Input correct email") // Проверяет наличие @ и формат email
        .required("Email is required"),

    password: Yup.string()
        .matches(
            /[A-Z]/,
            "The password must contain at least one capital letter"
        )
        .matches(
            /[a-z]/,
            "The password must contain at least one lowercase letter"
        )
        .matches(/\d/, "The password must contain at least one number")
        .matches(
            /[@$!%*?&]/,
            "The password must contain at least one special character (@$!%*?&)"
        )
        .min(8, "Password must be at least 8 characters long")
        .required("Password is required"),
});

const initialValues = {
    email: "",
    password: "",
};

export const LoginForm = () => {
    const dispatch = useDispatch();
    const emailFieldId = useId();
    const passwordFieldId = useId();

    const handleSubmit = (values, actions) => {
        dispatch(logIn(values))
            .unwrap() //unwrap() используется при dispatch(register(values)), чтобы ошибки из rejectWithValue не попадали в fulfilled-состояние.
            .then(() => {
                actions.resetForm();
            })
            .catch((error) => {
                notifyError(error);
            });
    };

    return (
        <>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={LoginFormSchema}
            >
                <Form className={clsx(css.form)} autoComplete="off">
                    <div className={clsx(css.fieldForm)}>
                        <label
                            htmlFor={emailFieldId}
                            className={clsx(css.label)}
                        >
                            Email:
                        </label>
                        <Field type="email" name="email" id={emailFieldId} />
                        <ErrorMessage name="email" component="span" />
                    </div>

                    <div className={clsx(css.fieldForm)}>
                        <label
                            htmlFor={passwordFieldId}
                            className={clsx(css.label)}
                        >
                            Password:
                        </label>
                        <Field
                            type="password"
                            name="password"
                            id={passwordFieldId}
                        />
                        <ErrorMessage name="password" component="span" />
                    </div>

                    <button type="submit" className={clsx(css.btnForm)}>
                        Log In
                    </button>
                </Form>
            </Formik>
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
};
