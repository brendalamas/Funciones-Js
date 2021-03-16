/*
obtenerNombreCompleto(nombre, apellido)

Crear una función obtenerNombreCompleto que tome 
como argumento un nombre y un apellido y devuelva un string con la unión de ambos valores

obtenerNombreCompleto('Ada', 'Lovelace') // 'Ada Lovelace'
*/

let nombreUsuario = prompt ("ingrese su nombre");
let apellidoUsuario = prompt ("ingrese su apellido");

const obtenerNombreCompleto = (nombre, apellido) =>{
    return `${nombre} ${apellido}`;
};

const nombreCompleto = obtenerNombreCompleto (nombreUsuario, apellidoUsuario);

alert (obtenerNombreCompleto (nombreUsuario, apellidoUsuario));