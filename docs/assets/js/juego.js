
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
        deck = crearDeck();
        puntosJugadores = [];

        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);       
        }
        puntajeJugador.forEach(elem=> elem.innerText = 0);
        divCartasJugadores.forEach(elem=> elem.innerHTML = '');
        btnPedir.disabled = false;
        btnDetener.disabled = false;
        
    }

    // la funcion nos crea un nuevo deck
    const crearDeck = ()=>{
        deck = []
        for(let i = 2;i <= 10;i++){
            for(let tipo of tiposCartas){
                deck.push(i + tipo)
            }
        }
        for (let tipo of tiposCartas) {
            for (const espcial of especiales) {
                deck.push(espcial + tipo)
            }
        }
        return _.shuffle(deck);
    }

    // funcion para tomar una carta
    const pedirCarta =()=>{
        if(deck.length === 0){
            throw 'no hay cartas en el deck'
        }
        return deck.pop();
    }

    const valorCarta=(carta)=>{
        const valor = carta.substring(0,carta.length-1);
        return (isNaN(valor)) ? ((valor === 'A') ? 11:10) : valor*1
    }


    // turno: 0=primer ugador , el ultimo sea la computadora
    const acumularPuntos = ( carta,turno )=>{
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        puntajeJugador[turno].innerText = puntosJugadores[turno]
        return puntosJugadores[turno]
    }

    const crearCarta = ( carta,turno)=>{

        const cartaHTML = document.createElement('img');
        cartaHTML.src = `assets/cartas/cartas/${carta}.png`
        cartaHTML.classList.add('carta');
        divCartasJugadores[turno].appendChild(cartaHTML);

    }

    const detetminarGanador =()=>{
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

    // tueno computadora
    const turnoComputadora = (puntosMinimos)=>{
        let puntosComputadora = 0;
        do {
        const carta = pedirCarta();
        puntosComputadora = acumularPuntos(carta,puntosJugadores.length - 1);
        crearCarta(carta,puntosJugadores.length - 1);
        } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));
        detetminarGanador();        
    }

    // eventoss
    btnPedir.addEventListener('click',event=>{
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(carta,0);
        crearCarta(carta,0);
        
        if(puntosJugador > 21){
            btnPedir.disabled =true;
            btnDetener.disabled = true
            turnoComputadora( puntosJugador);
        }else if( puntosJugador === 21){
            console.log('21, genial')
            turnoComputadora( puntosJugador);
            btnDetener.disabled = true
            
        }
    })

    btnDetener.addEventListener('click',()=>{
        btnPedir.disabled   = true
        btnDetener.disabled = true
        turnoComputadora(puntosJugadores[0])
    })

    // btnNuevo.addEventListener('click',()=>{
    //     inicializarJuego();
    // });

    return {
        nuevoJuego:inicializarJuego
    };

})();



