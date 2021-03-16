/*
esMayorDeEdad(edad)
Crear una función esMayorDeEdad que tome como argumento un número edad 
y devuelva true si es mayor de edad (18 o más) o false de lo contrario

esMayorDeEdad(15) // false
esMayorDeEdad(18) // true
esMayorDeEdad(27) // true
*/

let ingreseEdad = Number(prompt("ingrese su edad"));

const esMayorDeEdad = (edad) =>{
    if (edad >= 18){
        return true;
    }else{
        return false;
    };
};

const mayorEdad = esMayorDeEdad (ingreseEdad);
alert (esMayorDeEdad (ingreseEdad));