import { valorCarta } from "./valor-carta";

/**
 * turno: 0=primer ugador , el ultimo sea la computadora
 * @param {String} carta nostrae la carta
 * @param {Number} turno corresponde al turno del jugador
 * @param {Array<Number>} puntosJugadores donde se guardaran los puntajes
 * @returns {Number} retorna puntos del jugador al turno correspondiente
 */
export const acumularPuntos = ( carta,turno,puntosJugadores )=>{
    
    const puntajeJugador = document.querySelectorAll('small')

    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntajeJugador[turno].innerText = puntosJugadores[turno]
    return puntosJugadores[turno]
}