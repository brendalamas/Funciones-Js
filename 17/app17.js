/*
restarPorcentaje(numero, porcentaje)
Crear una función restarPorcentaje que tome como argumentos un número y un porcentaje 
y devuelva la resta de dicho número con la de su porcentaje. 
Usar la función calcularPorcentaje para obtener el porcentaje a restar

restarPorcentaje(100, 15) // 85
restarPorcentaje(10, 40) // 6
restarPorcentaje(200, 10) // 180
*/

let ingreseNumero = prompt ("ingrese un numero");
let ingresePorcentaje = prompt ("ingrese el porcentaje a restar");

const restarPorcentaje = (numero, porcentaje) => {
    return ((numero * porcentaje)/100) - numero ;
};

const calcularPorcentaje = restarPorcentaje (ingreseNumero, ingresePorcentaje);

alert (restarPorcentaje (ingreseNumero, ingresePorcentaje));