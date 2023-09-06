

/**
 * esta funcion nos da una unica carta de nuestro deck
 * @param {Array<String>} deck Ejemplo: ['QD', '2S', 'KC', 'QS', 'AD', '5D', '4H', '8S', 'KD'...]
 * @returns {String} me retorna una carta del deck
 */
export const pedirCarta =(deck)=>{

    if(!deck || deck === 0)
    throw new Error('deck es obligatorio como un arreglo de string');

    if(deck.length === 0){
        throw 'no hay cartas en el deck'
    }
    return deck.pop();
}