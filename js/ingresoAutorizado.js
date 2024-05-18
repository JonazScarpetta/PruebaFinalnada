const usuario = {
  nombre: "Jonathan",
  apellido: "Lopez",
  tipoDocumento: "cedula",
  correo: "scarpetta_1985@gmail.com",
  celular: 3142976801,
  numeroDocumento: 80927548,
};

//Nombre

const contenedorNombre = document.getElementById("nombre-ingresoA");
const etiquetaNombre = document.createElement("h6"); // crear Elemento

let textoNombre = document.createTextNode(usuario.nombre); //crear el texto
etiquetaNombre.appendChild(textoNombre); // uniendo texto con etiqueta
contenedorNombre.appendChild(etiquetaNombre); // uniendo el contenedor don el texto
//apellido
const contenedorApellido = document.getElementById("apellido-ingresoA");
const etiquetaApellido = document.createElement("h6"); // crear Elemento

let textoApellido = document.createTextNode(usuario.apellido); //crear el texto
etiquetaApellido.appendChild(textoApellido); // uniendo texto con etiqueta
contenedorApellido.appendChild(etiquetaApellido); // uniendo el contenedor don el texto

// celular

const contenedorCelular = document.getElementById("numero-celularA");
const etiquetaCelular = document.createElement("h6"); // crear Elemento

let textoCelular = document.createTextNode(usuario.celular); //crear el texto
etiquetaCelular.appendChild(textoCelular); // uniendo texto con etiqueta
contenedorCelular.appendChild(textoCelular); // uniendo el contenedor don el texto

// correo

const contenedorCorreo = document.getElementById("correo-ingresoA");
const etiquetaCorreo = document.createElement("h6"); // crear Elemento

let textoCorreo = document.createTextNode(usuario.correo); //crear el texto
etiquetaCorreo.appendChild(textoCorreo); // uniendo texto con etiqueta
contenedorCorreo.appendChild(textoCorreo); // uniendo el contenedor don el texto

// Tipo Documento

const contenedorTipoDocumento = document.getElementById(
  "tipoDocumento-ingresoA"
);
const etiquetaTipoDocumento = document.createElement("h6"); // crear Elemento

let textoTipoDocumento = document.createTextNode(usuario.tipoDocumento); //crear el texto
etiquetaTipoDocumento.appendChild(textoTipoDocumento); // uniendo texto con etiqueta
contenedorTipoDocumento.appendChild(textoTipoDocumento); // uniendo el contenedor don el texto

// Numero Documento

const contenedorNumeroDocumento = document.getElementById(
  "numeroDocumento-ingresoA"
);
const etiquetaNumeroDocumento = document.createElement("h6"); // crear Elemento

let textoNumeroDocumento = document.createTextNode(usuario.numeroDocumento); //crear el texto
etiquetaNumeroDocumento.appendChild(textoNumeroDocumento); // uniendo texto con etiqueta
contenedorNumeroDocumento.appendChild(textoNumeroDocumento); // uniendo el contenedor don el texto

// descripcion si es usuario autroizado o registro

var autorizado = true;
var registro = false;

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
