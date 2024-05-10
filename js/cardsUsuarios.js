const usuario = {
  nombre: "Luisa Fernanda ",
  apellido: "Valbuena",
  profesion: "soldador",
  celular: 34132976801,
  arl: "Colpatria",
  eps: "Compensar",
};

//Nombre

const contenedorNombre = document.getElementById("nombre-ingreso");
const etiquetaNombre = document.createElement("h5"); // crear Elemento

let textoNombre = document.createTextNode(usuario.nombre); //crear el texto
etiquetaNombre.appendChild(textoNombre); // uniendo texto con etiqueta
contenedorNombre.appendChild(etiquetaNombre); // uniendo el contenedor don el texto

// //apellido
const contenedorApellido = document.getElementById("apellido-ingreso");
const etiquetaApellido = document.createElement("h5"); // crear Elemento

let textoApellido = document.createTextNode(usuario.apellido); //crear el texto
etiquetaApellido.appendChild(textoApellido); // uniendo texto con etiqueta
contenedorApellido.appendChild(etiquetaApellido); // uniendo el contenedor don el texto

// celular

const contenedorCelular = document.getElementById("numero-celular");
const etiqutaCelular = document.createElement("h5"); // crear Elemento

let textoCelular = document.createTextNode(usuario.celular); //crear el texto
etiqutaCelular.appendChild(textoCelular); // uniendo texto con etiqueta
contenedorCelular.appendChild(etiqutaCelular); // uniendo el contenedor don el texto

// // correo

const contenedorProfesion = document.getElementById("profesion-ingreso");
const etiquetaProfesion = document.createElement("h5"); // crear Elemento

let textoProfesion = document.createTextNode(usuario.profesion); //crear el texto
etiquetaProfesion.appendChild(textoProfesion); // uniendo texto con etiqueta
contenedorProfesion.appendChild(etiquetaProfesion); // uniendo el contenedor don el texto

// // Arl usuario

const contenedorArl = document.getElementById("arl-ingreso");
const etiquetaArl = document.createElement("h5"); // crear Elemento

let textoArl = document.createTextNode(usuario.arl); //crear el texto
etiquetaArl.appendChild(textoArl); // uniendo texto con etiqueta
contenedorArl.appendChild(etiquetaArl); // uniendo el contenedor don el texto

// // eps usuario

const contenedorEps = document.getElementById("eps-ingreso");
const etiquetaEps = document.createElement("h5"); // crear Elemento

let textoEps = document.createTextNode(usuario.eps); //crear el texto
etiquetaEps.appendChild(textoEps); // uniendo texto con etiqueta
contenedorEps.appendChild(etiquetaEps); // uniendo el contenedor don el texto

ingresoRegistroAutorizado();
