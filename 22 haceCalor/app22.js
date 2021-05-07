/*
haceCalor(temperatura)
Crear una función haceCalor que tome como argumento un
número temperatura y devuelva true si hace calor 
(22 grados o más) o false de lo contrario

haceCalor(12) // false
haceCalor(22) // true
haceCalor(32) // true
*/

let ingreseTemperatura = prompt ("ingrese la temperatura, para saber si hace calor");


const haceCalor = (temperatura) =>{
    if (temperatura >= 22){
        return true;
    }else{
        return false;
    };
}

const temperaturaCalor = haceCalor (ingreseTemperatura);
alert(haceCalor(ingreseTemperatura));