/*
calcularFPS(fps, minutos)
FPS son cuadros por segundo (frames per second). 
Crear una una función calcularFPS que tome como argumentos una cantidad de 
cuadros por segundo y una cantidad de minutos, y devuelva cuántos cuadros 
hubo en esa cantidad de minutos

calcularFPS(1, 1) // 60
calcularFPS(10, 2) // 1200
calcularFPS(2, 3) // 360
*/

let ingreseCantidadCuadrosSegundos = prompt(" ingrese la cantidad de cuadros por segundos");
let ingreseCantidadMinutos = prompt(" ingrese la cantidad de minutos, para calcular cuántos cuadros hubo en esa cantidad de minutos");


const calcularFPS = (cantidadCuadrosSegundos, cantidadMinutos) => {
    return ((cantidadCuadrosSegundos * 60)) * cantidadMinutos;
};

const calculoFPS = calcularFPS (ingreseCantidadCuadrosSegundos, ingreseCantidadMinutos);

alert (calcularFPS (ingreseCantidadCuadrosSegundos, ingreseCantidadMinutos));