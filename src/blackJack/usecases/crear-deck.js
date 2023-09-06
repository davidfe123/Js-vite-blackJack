import _ from 'underscore';

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} tiposCartas ejemplo: ['C','D','H','S']
 * @param {Array<String>} especiales ejemplo: ['A','K','Q','K']
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */

export const crearDeck = (tiposCartas,especiales)=>{

    if(!tiposCartas || tiposCartas === 0)
    throw new Error('TiposCartas es obligatorio como un arreglo de string');

    if(!especiales || especiales === 0)
    throw new Error('especiales es obligatorio como un arreglo de string');

    let deck = []
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