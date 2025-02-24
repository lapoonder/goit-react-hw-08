import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import "modern-normalize";
import "./index.css";
import App from "./components/App/App.jsx";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";

const rootElement = document.getElementById("root");
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <StrictMode>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </PersistGate>
            </Provider>
        </StrictMode>
    );
} else {
    console.error("Element with id 'root' not found.");
}
