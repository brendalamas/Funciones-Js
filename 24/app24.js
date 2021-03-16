/*
calcularPuntaje(facil, normal, dificil)
Crear una función calcularPuntaje que calcule el 
puntaje de un examen que consiste en ejercicios de distinto nivel. 
Debe tomar como argumento tres que consisten en la cantidad de 
ejercicios resueltos en cada nivel y devolver un número con el 
puntaje correspondiente. El puntaje se calcula de la siguiente forma:

facil: 3 puntos
normal: 5 puntos
dificil: 10 puntos
calcularPuntaje(3, 0, 0) // 9
calcularPuntaje(0, 2, 1) // 20
calcularPuntaje(5, 1, 2) // 40
*/
const puntajeFacil = 3;
const puntajeNormal = 5;
const puntajeDificil = 10;

let ingreseFacil = Number(prompt ("cuantos ejercicios resolviste bien de la primer parte?"));
let ingreseNormal = Number(prompt ("cuantos ejercicios resolviste bien de la segunda parte?"));
let ingreseDificil = Number(prompt ("cuantos ejercicios resolviste bien de la tercer parte?"));


const calcularPuntaje = (facil, normal, dificil ) =>{
    return ((facil * puntajeFacil) + (normal * puntajeNormal) + (dificil * puntajeDificil));
};

const puntajeCalculado = calcularPuntaje (ingreseFacil, ingreseNormal, ingreseDificil);
alert (calcularPuntaje (ingreseFacil, ingreseNormal, ingreseDificil));

