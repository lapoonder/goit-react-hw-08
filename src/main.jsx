import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import "modern-normalize";
import "./index.css";
import App from "./components/App/App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const rootElement = document.getElementById("root");
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </StrictMode>
    );
} else {
    console.error("Element with id 'root' not found.");
}
