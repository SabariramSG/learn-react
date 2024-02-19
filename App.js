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

// What is the difference between React and ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
