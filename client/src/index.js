import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ParentAuthContextProvider } from "./Auth/AAuthContex";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <ParentAuthContextProvider>
      <Router>
        <App />
      </Router>
    </ParentAuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
