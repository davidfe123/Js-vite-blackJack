
/**
 * nos crea la carta en uestro html
 * @param {String} carta nos da la carta que hay que crear
 * @param {Number} turno esto para identificar a que jugador se le asigna dicha carta
 */
export const crearCarta = ( carta,turno)=>{

    const divCartasJugadores = document.querySelectorAll('.divCartas')

    const cartaHTML = document.createElement('img');
    cartaHTML.src = `assets/cartas/cartas/${carta}.png`
    cartaHTML.classList.add('carta');
    divCartasJugadores[turno].appendChild(cartaHTML);
}