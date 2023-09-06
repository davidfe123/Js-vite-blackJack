
/**
 * 
 * @param {Array<Number>} puntosJugadores en este array tenemos los puntajes de los jugadores
 */
export const detetminarGanador =(puntosJugadores)=>{
    if(!puntosJugadores) throw new Error ('puntos jugadores necesarios')
    
    const [puntosMinimos,puntosComputadora] = puntosJugadores;
    setTimeout(()=>{
        if(puntosComputadora === puntosMinimos){
            alert('nadie gana empate')
        }else if(puntosMinimos > 21){
            alert('computadora gana')
        }
        else if(puntosComputadora > 21){
            alert('gano jugador 1')
        }else{
            alert('gana la computadora ')
        }
    },100)
}