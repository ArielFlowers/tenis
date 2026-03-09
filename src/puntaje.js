function obtenerPuntaje(p1,p2) {
    const puntos = ["Love","15"];
    if(p1==1) return "15,Love"
    return `${puntos[p1]},${puntos[p2]}`;
  }
  
export default obtenerPuntaje;