import React from "react";
import ReactDOM from "react-dom/client";

const heading = (<h1 className="head">Hello from JSX</h1>)
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);