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

let usuario = {
  nombre: "........ ",
  apellido: "gfdgh",
  correo: "soporte.tecnico@gmail.com",
  celular: 34132976801,
  tipoDocumento: "cedula",
  numeroDocumento: "80927548",
};
// nombre;
const nombreIngreso = document.getElementById("nombreIngreso");

baseDatos
  .collection("usuario")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "ZTd5MhN223IGe4jHJr02") {
        usuario = doc.data().paginaRegistroingreso;
        contenedorNombreTA.textContent = usuario.nombrePaginaRegistro;
      }
    });
  });

//apellido

const apellidoIngreso = document.getElementById("apellidoIngreso");

baseDatos
  .collection("usuario")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "ZTd5MhN223IGe4jHJr02") {
        usuario = doc.data().paginaRegistroingreso;
        apellidoIngreso.textContent = usuario.apellidoPaginaRegistro;
      }
    });
  });

// celular

const contenedorCelular = document.getElementById("numero-celular");
const etiquetaCelular = document.createElement("h6"); // crear Elemento

let textoCelular = document.createTextNode(usuario.celular); //crear el texto
etiquetaCelular.appendChild(textoCelular); // uniendo texto con etiqueta
contenedorCelular.appendChild(etiquetaCelular); // uniendo el contenedor don el texto

// correo

const contenedorCorreo = document.getElementById("correo-ingreso");
const etiquetaCorreo = document.createElement("h6"); // crear Elemento

let textoCorreo = document.createTextNode(usuario.correo); //crear el texto
etiquetaCorreo.appendChild(textoCorreo); // uniendo texto con etiqueta
contenedorCorreo.appendChild(etiquetaCorreo); // uniendo el contenedor don el texto

// Tipo Documento

const contenedorTipoDocumento = document.getElementById(
  "tipoDocumento-ingreso"
);
const etiquetaTipoDocumento = document.createElement("h6"); // crear Elemento

let textoTipoDocumento = document.createTextNode(usuario.tipoDocumento); //crear el texto
etiquetaTipoDocumento.appendChild(textoTipoDocumento); // uniendo texto con etiqueta
contenedorTipoDocumento.appendChild(etiquetaTipoDocumento); // uniendo el contenedor don el texto

// Numero Documento Documento

const contenedorNumeroDocumento = document.getElementById(
  "numeroDocumento-ingreso"
);
const etiquetaNumeroDocumento = document.createElement("h6"); // crear Elemento

let textoNumeroDocumento = document.createTextNode(usuario.numeroDocumento); //crear el texto
etiquetaNumeroDocumento.appendChild(textoNumeroDocumento); // uniendo texto con etiqueta
contenedorNumeroDocumento.appendChild(etiquetaNumeroDocumento); // uniendo el contenedor don el texto

// descripcion si es usuario autroizado o registro

var autorizado = false;
var registro = true;

function ingresoRegistroAutorizado() {
  if (autorizado === true) {
    const contenedor3 = document.getElementById("usuarioIngresado-a-r");
    const texto3 = document.createElement("h3"); // crear Elemento

    usuariaIngresadoAR = document.createTextNode(
      "Ingreso de Usuario Autorizado"
    ); //crear el texto
    texto3.appendChild(usuariaIngresadoAR); // uniendo texto con etiqueta
    contenedor3.appendChild(texto3); // uniendo el contenedor don el texto
  }
  if (registro === true) {
    const contenedor3 = document.getElementById("usuarioIngresado-a-r");
    const texto3 = document.createElement("h3"); // crear Elemento

    usuariaIngresadoAR = document.createTextNode("Ingreso de Usuario registro"); //crear el texto
    texto3.appendChild(usuariaIngresadoAR); // uniendo texto con etiqueta
    contenedor3.appendChild(texto3); // uniendo el contenedor don el texto
  }
}
ingresoRegistroAutorizado();
