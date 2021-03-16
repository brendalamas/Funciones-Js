/*
obtenerCompetencia(a, b)
Crear una función obtenerCompetencia que tome 
como argumentos dos strings a y b y devuelva un string con el formato a vs. b

obtenerRivales('JavaScript', 'Python') // `JavaScript vs. Python`
obtenerRivales('Coca', 'Pepsi') // `Coca vs. Pepsi`
obtenerRivales('Perros', 'Gatos') // `Perros vs. Gatos`
*/

let ingreseA = prompt ("ingrese el primer rival");
let ingreseB = prompt ("ingrese el segundo rival");

const obtenerCompetencia = (a,b) =>{
return `${a} vs ${b}`;
};

const obtenerRivales = obtenerCompetencia (ingreseA,ingreseB);
alert (obtenerCompetencia (ingreseA,ingreseB));
