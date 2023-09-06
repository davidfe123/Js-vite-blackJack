/**
 * obtener el valor de la carta
 * @param {String} carta Ejemplo: AD o 8H
 * @returns {Number} me tiene que devolver el valor de la carta
 */
export const valorCarta=(carta)=>{

    if(!carta || carta === '')
    throw new Error('la carta es obligatorio como un string');

    const valor = carta.substring(0,carta.length-1);
    return (isNaN(valor)) ? ((valor === 'A') ? 11:10) : valor*1
}