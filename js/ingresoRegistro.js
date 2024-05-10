// const contenedor = document.getElementById("prueba");
// const texto = document.createElement("h1"); // crear Elemento

// ejTexto = document.createTextNode("este es el ejemplo"); //crear el texto
// texto.appendChild(ejTexto); // uniendo texto con etiqueta
// contenedor.appendChild(texto); // uniendo el contenedor don el texto

const usuario = {
  nombre: "Luisa Fernanda ",
  apellido: "Valbuena",
  correo: "soporte.tecnico@gmail.com",
  celular: 34132976801,
};

//Nombre

const contenedorNombre = document.getElementById("nombre-ingreso");
const etiquetaNombre = document.createElement("h3"); // crear Elemento

let textoNombre = document.createTextNode(usuario.nombre); //crear el texto
etiquetaNombre.appendChild(textoNombre); // uniendo texto con etiqueta
contenedorNombre.appendChild(etiquetaNombre); // uniendo el contenedor don el texto

//apellido

const contenedorApellido = document.getElementById("apellido-ingreso");
const etiquetaApellido = document.createElement("h3"); // crear Elemento

let textoApellido = document.createTextNode(usuario.apellido); //crear el texto
etiquetaApellido.appendChild(textoApellido); // uniendo texto con etiqueta
contenedorApellido.appendChild(etiquetaApellido); // uniendo el contenedor don el texto

// celular

const contenedorCelular = document.getElementById("numero-celular");
const etiquetaCelular = document.createElement("h4"); // crear Elemento

let textoCelular = document.createTextNode(usuario.celular); //crear el texto
etiquetaCelular.appendChild(textoCelular); // uniendo texto con etiqueta
contenedorCelular.appendChild(etiquetaCelular); // uniendo el contenedor don el texto

// correo

const contenedorCorreo = document.getElementById("correo-ingreso");
const etiquetaCorreo = document.createElement("h4"); // crear Elemento

let textoCorreo = document.createTextNode(usuario.correo); //crear el texto
etiquetaCorreo.appendChild(textoCorreo); // uniendo texto con etiqueta
contenedorCorreo.appendChild(etiquetaCorreo); // uniendo el contenedor don el texto

// descripcion si es usuario autroizado o registro

var autorizado = false;
var registro = true;

function ingresoRegistroAutorizado() {
  if (autorizado === true) {
    const contenedor3 = document.getElementById("usuarioIngresado-a-r");
    const texto3 = document.createElement("h4"); // crear Elemento

    usuariaIngresadoAR = document.createTextNode(
      "Ingreso de Usuario Autorizado"
    ); //crear el texto
    texto3.appendChild(usuariaIngresadoAR); // uniendo texto con etiqueta
    contenedor3.appendChild(texto3); // uniendo el contenedor don el texto
  }
  if (registro === true) {
    const contenedor3 = document.getElementById("usuarioIngresado-a-r");
    const texto3 = document.createElement("h4"); // crear Elemento

    usuariaIngresadoAR = document.createTextNode("Ingreso de Usuario registro"); //crear el texto
    texto3.appendChild(usuariaIngresadoAR); // uniendo texto con etiqueta
    contenedor3.appendChild(texto3); // uniendo el contenedor don el texto
  }
}
ingresoRegistroAutorizado();
