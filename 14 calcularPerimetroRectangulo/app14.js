/*
calcularPerimetroRectangulo(ancho, alto)
Crear una función calcularAreaTriangulo que tome como 
argumentos el ancho y el alto de un rectángulo y devuelva su perímetro

calcularPerimetroRectangulo(3.2, 5) // 16.4
calcularPerimetroRectangulo(10, 20) // 60
*/

let anchoIngresado = prompt (" ingrese el ancho, para calcular el perimetro del rectangulo");
let altoIngresado = prompt (" ingrese el alto, para calcular el perimetro del rectangulo");


const calcularAreaTriangulo = (ancho, alto) =>{
    return ((ancho * 2) + (alto * 2));
};

const areaCalculada = calcularAreaTriangulo (anchoIngresado, altoIngresado);
alert (calcularAreaTriangulo (anchoIngresado, altoIngresado));
