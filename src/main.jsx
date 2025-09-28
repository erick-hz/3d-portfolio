import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

console.log(
  "%c /\\_/\\  \n( o.o ) \n > ^ <   ~ Yerick",
  "color: purple; font-size: 14px; font-weight: bold;"
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
