function obtenerPuntaje(p1, p2) {
  const puntos = ["Love", "15", "30", "40"];

  if (p1 === 3 && p2 === 3) {
    return "Deuce";
  }

  if (p1 === 4 && p2 === 3) {
    return "Advantage P1";
  }

  return `${puntos[p1]},${puntos[p2]}`;
}

export default obtenerPuntaje;