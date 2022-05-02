import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import "core-js/stable";
import "regenerator-runtime/runtime";
import { BrowserRouter as Router } from "react-router-dom";

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <Router>
        <App />
    </Router>
);
