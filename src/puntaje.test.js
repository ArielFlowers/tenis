import obtenerPuntaje from "./puntaje.js";

describe("Puntaje de Tenis", () => {
  it("debería empezar en Love,Love", () => {
    expect(obtenerPuntaje(0, 0)).toEqual("Love,Love");
  });
  it("debería mostrar 15,Love cuando P1 anota un punto", () => {
    expect(obtenerPuntaje(1, 0)).toEqual("15,Love");
  });
  it("debería mostrar Deuce cuando ambos tienen 40", () => {
    expect(obtenerPuntaje(3, 3)).toEqual("Deuce");
  });
  it("debería mostrar Advantage P1 cuando P1 tiene ventaja", () => {
    expect(obtenerPuntaje(4, 3)).toEqual("Advantage P1");
  });
  it("debería mostrar Advantage P2 cuando P2 tiene ventaja", () => {
    expect(obtenerPuntaje(3, 4)).toEqual("Advantage P2");
  });
  it("debería mostrar Game P1 cuando P1 gana", () => {
    expect(obtenerPuntaje(5, 3)).toEqual("Game P1");
  });
});
