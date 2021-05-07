/*
obtenerDatosDeCiudad(nombre, poblacion, pais)
Crear una función obtenerDatosDeCiudad que tome como argumentos un string nombre, 
un número poblacion y un string pais y devuelva string con el siguiente formato: 
La ciudad de NOMBRE tiene una población de POBLACION habitantes y está ubicada en PAIS

obtenerDatosDeCiudad('Santa Fe', 545606, 'Argentina') // 
'La ciudad de Santa Fe tiene una población de 545606 habitantes y está ubicada en Argentina
*/

let ingresarNombre = prompt ("ingrese una ciudad");
let ingresarPoblacion = Number(prompt ("ingrese la cantidad de habitantes de esa ciudad"));
let ingresarPais = prompt ("ingrese en que pais queda");

const obtenerDatosDeCiudad = (nombre, poblacion, pais) =>{
    return `La ciudad de ${nombre} tiene una población de ${poblacion} habitantes y está ubicada en ${pais}`;
};

const datosIngresados = obtenerDatosDeCiudad(ingresarNombre, ingresarPoblacion, ingresarPais);

alert (obtenerDatosDeCiudad(ingresarNombre, ingresarPoblacion, ingresarPais));
