/*
saludar(nombre)
Crear una función saludar que tome como argumentos 
un nombre y devuelva un saludo que lo incluya.

saludar('Ada') // 'Hola Ada, un gusto conocerte'
*/
let nombreIngresado = prompt ("ingrese su nombre");

const saludar = (nombre) =>{
    return `Hola ${nombre}, un gusto conocerte`;
};

const saludoConNombre = saludar (nombreIngresado);

alert (saludar (nombreIngresado));
