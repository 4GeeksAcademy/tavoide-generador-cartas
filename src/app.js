/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// window.onload = function() {
//   //write your code here
// };
let palos = ["♠️", "♥️", "♦️", "♣️"];
let valores = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
let generarCarta = () => {
  let palo = palos[Math.floor(Math.random() * palos.length)];
  let valor = valores[Math.floor(Math.random() * valores.length)];
  let figura = ` ${palo}`;
  let numero = `${valor} ${palo}`;
  document.getElementById("figura").textContent = figura;
  document.getElementById("numero").textContent = numero;
};
generarCarta();
