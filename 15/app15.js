/*
calcularPorcentaje(numero, porcentaje)
Crear una función calcularPorcentaje que tome como argumentos 
un número y un porcentaje y devuelva el valor del porcentaje correspondiente al número

calcularPorcentaje(100, 15) // 15
calcularPorcentaje(10, 50) // 5
calcularPorcentaje(200, 10) // 20
*/


let numeroIngresado = Number (prompt ("ingrese un numero"));
let porcentajeIngresado = Number (prompt ("ingrese el porcentaje a calcular de ese numero"));


const calcularPorcentaje = (numero, porcentaje) => {
    return ((numero * porcentaje) / 100);
};

const porcentajeCalculado = calcularPorcentaje (numeroIngresado , porcentajeIngresado);
alert (calcularPorcentaje (numeroIngresado , porcentajeIngresado));