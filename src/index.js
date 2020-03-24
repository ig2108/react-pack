import React from "react";
import ReactDOM from "react-dom";

const link = React.createElement(
  "a",
  {
    href: "http://reactjs.org",
    target: "_blank"
  },
  "react website"
);

console.log(link);

ReactDOM.render(link, document.querySelector("#root"));
