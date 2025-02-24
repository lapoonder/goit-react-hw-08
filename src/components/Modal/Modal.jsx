import React, { useEffect } from "react";
import clsx from "clsx";
import css from "./Modal.module.css";

const Modal = ({ children, title = "Default modal", closeModal }) => {
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                closeModal();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [closeModal]);

    return (
        <div className={clsx(css.wrapper)} onClick={handleBackdropClick}>
            <div className={clsx(css.content)}>
                <>
                    <h1>{title}</h1>
                    <hr />
                </>
                <button onClick={closeModal} className={clsx(css.closeBtn)}>
                    ×
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
