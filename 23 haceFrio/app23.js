/*
haceFrio(temperatura)
Crear una función haceCalor que tome como argumento un 
número temperatura y devuelva true si hace frio (12 grados o menos) 
o false de lo contrario

haceFrio(12) // true
haceFrio(22) // false
haceFrio(3) // true
haceFrio(-2) // true
*/

let ingreseTemperatura = prompt ("ingrese temperatura");

const haceCalor = (temperatura)=>{
    if (temperatura <= 12){
        return true;
    }else{
        return false;
    };
};

const haceFrio = haceCalor (ingreseTemperatura);

alert (haceCalor(ingreseTemperatura));
