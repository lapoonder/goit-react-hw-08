import React, { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute.jsx";
import { RestrictedRoute } from "../RestrictedRoute/RestrictedRoute.jsx";
import { Layout } from "../Layout/Layout.jsx";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import clsx from "clsx";
import css from "./App.module.css";

const NotFoundPage = lazy(() =>
    import("../../pages/NotFoundPage/NotFoundPage.jsx")
);
const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const RegistrationPage = lazy(() =>
    import("../../pages/RegistrationPage/RegistrationPage.jsx")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage.jsx"));
const ContactsPage = lazy(() =>
    import("../../pages/ContactsPage/ContactsPage.jsx")
);

function App() {
    const dispatch = useDispatch();
    const isRefreshing = useSelector(selectIsRefreshing);

    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]); // эффект будет срабатывать только один раз при монтировании компонента (поскольку dispatch не изменяется).

    return isRefreshing ? (
        <b>Refreshing user...</b>
    ) : (
        <>
            <header className="header">
                <div className="container">
                    <h1 className={clsx(css.siteHeader)}>Phonebook</h1>
                </div>
            </header>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route
                        path="/register"
                        element={
                            <RestrictedRoute
                                redirectTo="/contacts"
                                component={<RegistrationPage />}
                            />
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <RestrictedRoute
                                redirectTo="/contacts"
                                component={<LoginPage />}
                            />
                        }
                    />
                    <Route
                        path="/contacts"
                        element={
                            <PrivateRoute
                                redirectTo="/login"
                                component={<ContactsPage />}
                            />
                        }
                    />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Layout>
            <footer className="footer"></footer>
        </>
    );
}

export default App;
