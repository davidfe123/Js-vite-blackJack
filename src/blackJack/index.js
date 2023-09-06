
import {crearDeck,pedirCarta,
        turnoComputadora,
        crearCarta,acumularPuntos} from './usecases'


const miModulo = (()=>{
    'use strict'
    let deck           = [];
    const tiposCartas  = ['C','D','H','S'],
            especiales = ['A','K','Q','K'];
    
    let puntosJugadores = []; 

    // referencia html
    const btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevo = document.querySelector('#btnNuevo');

    const divCartasJugadores = document.querySelectorAll('.divCartas'),
        puntajeJugador = document.querySelectorAll('small');


    // funcion inicializa el juego
    const inicializarJuego = (numJugadores = 2)=>{
        deck = crearDeck(tiposCartas,especiales);
        puntosJugadores = [];
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);       
        }
        puntajeJugador.forEach(elem=> elem.innerText = 0);
        divCartasJugadores.forEach(elem=> elem.innerHTML = '');
        btnPedir.disabled = false;
        btnDetener.disabled = false;
    }


    // eventoss
    btnPedir.addEventListener('click',event=>{
        const carta = pedirCarta(deck);
        const puntosJugador = acumularPuntos(carta,0,puntosJugadores);
        crearCarta(carta,0);
        
        if(puntosJugador > 21){
            btnPedir.disabled =true;
            btnDetener.disabled = true
            turnoComputadora( puntosJugador,puntosJugadores,deck);
        }else if( puntosJugador === 21){
            console.log('21, genial')
            turnoComputadora( puntosJugador,puntosJugadores,deck);
            btnDetener.disabled = true
            
        }
    })

    btnDetener.addEventListener('click',()=>{
        btnPedir.disabled   = true
        btnDetener.disabled = true
        turnoComputadora(puntosJugadores[0],puntosJugadores,deck);
    })

    btnNuevo.addEventListener('click',()=>{
        inicializarJuego();
    });

    return {
        nuevoJuego:inicializarJuego
    };

})();




