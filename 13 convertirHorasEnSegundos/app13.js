/*
convertirHorasEnSegundos(horas)
Crear una función convertirHorasEnSegundos que tome 
como argumento un número de horas y devuelva la conversión a segundos de dicha cantidad de horas

convertirHorasEnSegundos(1) // 3600
convertirHorasEnSegundos(3) // 10800
convertirHorasEnSegundos(4.5) // 16200
*/

let horaIngresada = Number(prompt ("ingrese una hora"));

const convertirHorasEnSegundos = (horas) =>{
    return (horas * 3600);
};

const horasSegundos = convertirHorasEnSegundos (horaIngresada);

alert (convertirHorasEnSegundos (horaIngresada));
