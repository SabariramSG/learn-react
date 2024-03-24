import React from "react";
import ReactDOM from "react-dom";

// Creating react element using createElement() method

const heading1 = React.createElement(
  "h1",
  {
    id: "heading1",
  },
  "Hello buddy"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "heading2",
  },
  "Keep practising"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2]
);

// Creating react element using JSX

const jsxReactElement = <h1>Hey I am a JSX react element</h1>;

// React functional components

const Title = () => {
  return (
    <div>
      <h1>{"Hey I am React functional component"}</h1>

      <h2>
        {"I can include react objects into myself as well"}
        {heading1}
      </h2>
    </div>
  );
};

// What is the difference between React and ReactDOM

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(container);

// root.render(jsxReactElement);

root.render(<Title></Title>);
