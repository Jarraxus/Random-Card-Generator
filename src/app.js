/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let randomNumber = Math.floor(Math.random() * 13);
  let randomSuit = Math.floor(Math.random() * 4);
  let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  let suits = ["&#9824", "&#9827", "&#9829", "&#9830"];

  document.querySelector(".top").innerHTML = suits[randomSuit];
  document.querySelector(".middle").innerHTML = numbers[randomNumber];
  document.querySelector(".bottom").innerHTML = suits[randomSuit];

  if (suits[randomSuit] == "&#9829" || suits[randomSuit] == "&#9830") {
    document.querySelector(".top").style.color = "red";
    document.querySelector(".middle").style.color = "red";
    document.querySelector(".bottom").style.color = "red";
  }
};
