/*
aceptaDeposito(monto)
Crear una función aceptaDeposito que tome como 
argumento un número monto y devuelva true si el monto es 
divisible por 10 o false si no lo es

aceptaDeposito(440) // true
aceptaDeposito(123) // false
aceptaDeposito(500.50) // false
aceptaDeposito(1000) // true
*/

let ingreseMonto = Number (prompt("ingrese el monto, para saber si es divisible por 10"));

const aceptaDeposito = (monto)=>{
    if (monto % 10 == 0){
        return true;
    }else{
        return false;
    };
};

const depositoAceptado = aceptaDeposito (ingreseMonto);
alert (aceptaDeposito (ingreseMonto));