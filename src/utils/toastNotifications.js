import toast from "react-hot-toast";

export const notifySuccess = (message) =>
    toast.success(message, {
        className: ``,
        style: {
            border: "1px solid green",
            padding: "16px",
            color: "green",
        },
    });

export const notifyError = (message) =>
    toast.error(message, {
        className: ``,
        style: {
            border: "1px solid red",
            padding: "16px",
            color: "red",
        },
    });
