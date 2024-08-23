/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#theName").innerHTML = generateName();
  });
};

const generateName = () => {
  let first = ["Luna", "Amber", "Leo", "Iris", "Asher"];
  let connectors = [
    "Van der",
    "Del",
    "De",
    "Von",
    "O'",
    "Di",
    "Mc",
    "Mac",
    "La"
  ];
  let last = [
    "Unicorn",
    "Ice Cream",
    "Rainbow",
    "Shooting Stars",
    "Cotton Candy"
  ];

  let firstIndex = Math.floor(Math.random() * first.length);
  let connectorIndex = Math.floor(Math.random() * connectors.length);
  let lastIndex = Math.floor(Math.random() * last.length);

  let fullName =
    first[firstIndex] +
    " " +
    connectors[connectorIndex] +
    " " +
    last[lastIndex];
  document.querySelector("#theName").innerHTML = fullName;

  return fullName;
};
