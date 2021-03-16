/*
gritar(str)
Crear una función gritar que tome como argumento un string y 
devuelva el mismo string con un signo de exclamación al principio y al final del mismo

gritar('hola') // ¡hola!
gritar('aaaaaa') // ¡aaaaaa!
*/

let signo = prompt ("ingrese una palabra");

const gritar = (str) =>{
    return (`¡${str}!`);
};

const gritarConSigno = gritar (signo);

alert (`¡${signo}!`);