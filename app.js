import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (<h1 className="head">Hello from JSX</h1>);
console.log(Title);

const Heading = () => (
    <div className="container">
        <Title />
        <h2>This from Component !!</h2>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);