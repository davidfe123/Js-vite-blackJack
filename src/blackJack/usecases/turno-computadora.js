import { acumularPuntos } from "./acumular-puntos";
import { crearCarta } from "./crear-carta";
import { detetminarGanador } from "./determinar-ganador";
import { pedirCarta } from "./pedir-carta";


/**
 * 
 * @param {String} puntosMinimos puntos del jugador
 * @param {Array<Number>} puntosJugadores array donde se guardaran puntos de los jugadores
 * @param {Array<String>} deck array que contiene nuestra deck
 */
// tueno computadora
export const turnoComputadora = (puntosMinimos,puntosJugadores,deck)=>{

    let puntosComputadora = 0;
    do {
    const carta = pedirCarta(deck);
    puntosComputadora = acumularPuntos(carta,puntosJugadores.length-1,puntosJugadores);
    crearCarta(carta,puntosJugadores.length - 1);
    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));
    detetminarGanador(puntosJugadores);        
}