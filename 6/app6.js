/*
Crear una función esImpar que tome como argumento un número y 
devuelva true si dicho números es impar o false si no lo es

TIP: un número es impar si divido por 2 el resto (o módulo) de esa operación no es 0

esImpar(2) // false
esImpar(3) // true
*/

let ingresoNumero = Number(prompt ("Ingrese un numero para saber si es impar o par"));

const esImpar = (numero) =>{
    if (numero % 2 == 1){
        return true;
    } else {
        return false;
    };
};

const esImparOpar = esImpar (ingresoNumero);

if (esImparOpar == true){
    alert ("El numero es impar");
} else {
    alert ("el numero es par");
};