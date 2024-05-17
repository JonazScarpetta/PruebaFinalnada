// const contenedor = document.getElementById("prueba");
// const texto = document.createElement("h1"); // crear Elemento

// ejTexto = document.createTextNode("este es el ejemplo"); //crear el texto
// texto.appendChild(ejTexto); // uniendo texto con etiqueta
// contenedor.appendChild(texto); // uniendo el contenedor don el texto

// inicio De codigo firebase

const firebaseConfig = {
  apiKey: "AIzaSyCFOE9HABPO98q4CalVCisoVM7TIVo2czI",
  authDomain: "bd-appconnet.firebaseapp.com",
  projectId: "bd-appconnet",
  storageBucket: "bd-appconnet.appspot.com",
  messagingSenderId: "749439432233",
  appId: "1:749439432233:web:861541de33ed615b9fce38",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const baseDatos = firebase.firestore();

// fin de codigo firebase

const usuario = {
  nombre: "Jean ",
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
