import obtenerPuntaje from "./puntaje.js";

describe("Puntaje de Tenis", () => {
  it("debería empezar en Love,Love", () => {
    expect(obtenerPuntaje(0, 0)).toEqual("Love,Love");
  });

});
