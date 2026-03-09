import obtenerPuntaje from "./puntaje.js";

describe("Puntaje de Tenis", () => {
  it("debería empezar en Love,Love", () => {
    expect(obtenerPuntaje(0, 0)).toEqual("Love,Love");
  });
  it("debería mostrar 15,Love cuando P1 anota un punto", () => {
    expect(obtenerPuntaje(1, 0)).toEqual("15,Love");
  });

});
