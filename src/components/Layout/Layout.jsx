import { Suspense } from "react";
import { AppBar } from "../AppBar/AppBar.jsx";
import React from "react";

export const Layout = ({ children }) => {
    return (
        <main>
            <AppBar />
            <Suspense fallback={<div>Завантаження інформації....</div>}>
                {children}
            </Suspense>
        </main>
    );
};
