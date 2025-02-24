import React from "react";
import clsx from "clsx";
import css from "./ModalDelConfirm.module.css";

const ModalDelConfirm = ({ handleSubmitYes, handleSubmitNo }) => {
    return (
        <>
            <div className={clsx(css.wrapper)}>
                <button className={clsx(css.btnYes)} onClick={handleSubmitYes}>
                    Yes
                </button>
                <button className={clsx(css.btnNo)} onClick={handleSubmitNo}>
                    No
                </button>
            </div>
        </>
    );
};

export default ModalDelConfirm;
