/*
calcularAreaTriangulo(base, altura)
Crear una función calcularAreaTriangulo que tome como argumentos la base y 
la altura de un triángulo y devuelva el área del mismo

calcularAreaTriangulo(3, 4) // 6
calcularAreaTriangulo(5, 6) // 40
*/

let valorBase = prompt ("ingresa el valor de la base");
let valorAltura = prompt ("ingresa el valor de la altura");


const calcularAreaTriangulo = (base,altura) =>{
    return ((base*altura)/2);
};

const areaCalculada = calcularAreaTriangulo(valorBase,valorAltura);
alert (`el area del triangulo es ${areaCalculada}`);