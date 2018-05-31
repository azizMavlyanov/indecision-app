"use strict";

console.log("Hi");

var template = React.createElement(
  "p",
  null,
  "Changed"
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
