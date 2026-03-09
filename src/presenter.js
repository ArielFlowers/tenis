import obtenerPuntaje from "./puntaje.js";

let p1 = 0;
let p2 = 0;

const scoreDiv = document.querySelector("#resultado-div");
const btnP1 = document.querySelector("#p1");
const btnP2 = document.querySelector("#p2");
const btnReset = document.querySelector("#reset");

function actualizarMarcador() {
  scoreDiv.innerHTML = `<p>${obtenerPuntaje(p1, p2)}</p>`;
}

btnP1.addEventListener("click", () => {
  p1++;
  actualizarMarcador();
});

btnP2.addEventListener("click", () => {
  p2++;
  actualizarMarcador();
});

btnReset.addEventListener("click", () => {
  p1 = 0;
  p2 = 0;
  actualizarMarcador();
});

// Inicializa el marcador
actualizarMarcador();