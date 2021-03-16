/*
esPar(numero)
Crear una función esPar que tome como argumento un número 
y devuelva true si dicho números es par o false si no lo es

TIP: un número es par si divido por 2 el resto (o módulo) de esa operación es 0

esPar(2) // true
esPar(3) // false
*/

let numero = Number(prompt("Ingrese un numero para saber si es par o impar"));

const esPar = (talNumero) => {
    if (talNumero % 2 == 0) {
        return true;
    } else {
        return false;
    };
}

const numeroParOimpar = esPar (numero);
    if (numeroParOimpar == true){
        console.log("el numero ingresado es par");
    } else {
        console.log("el numero ingresado es impar");
    };
