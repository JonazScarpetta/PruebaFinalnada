const usuario = {
  nombre: "Jonathan",
  apellido: "Lopez",
  correo: "scarpetta_1985@gmail.com",
  celular: 3142976801,
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

const contenedor1 = document.getElementById("numero-celular");
const texto1 = document.createElement("h4"); // crear Elemento

numeroCelular = document.createTextNode("3233052419"); //crear el texto
texto1.appendChild(numeroCelular); // uniendo texto con etiqueta
contenedor1.appendChild(texto1); // uniendo el contenedor don el texto

// correo

const contenedor2 = document.getElementById("correo-ingreso");
const texto2 = document.createElement("h4"); // crear Elemento

correoIngreso = document.createTextNode("tecnimundoseguridad@gmail.com"); //crear el texto
texto2.appendChild(correoIngreso); // uniendo texto con etiqueta
contenedor2.appendChild(texto2); // uniendo el contenedor don el texto

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
