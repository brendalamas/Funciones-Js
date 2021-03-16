/*
saludarGritando(nombre, apellido)
Usando las funciones anteriores 
(obtenerNombreCompleto, saludar y gritar), 
crear una función saludarGritando que tome como argumentos un nombre y 
un apellido y devuelva un saludo con signos de exclamación.

saludarGritando('Ada', 'Lovelace') // ¡Hola Ada Lovelace, un gusto conocerte!
*/

let nombreUsuario1 = prompt ("Ingrese su nombre");
let apellidoUsuario1 = prompt ("Ingrese su apellido");


const saludarGritando = (nombre, apellido) =>{
    return `¡Hola ${nombre} ${apellido}, un gusto conocerte!`
};

const saludo = saludarGritando (nombreUsuario1, apellidoUsuario1);

alert (saludarGritando (nombreUsuario1, apellidoUsuario1));