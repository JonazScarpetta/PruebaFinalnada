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
  apellido: ".......",
  correo: ".......",
  celular: "........",
  opcionDocumento: ".............",
  numeroIdentificacion: "..........",
};
// nombre;
const nombreIngreso = document.getElementById("nombreIngreso");

baseDatos
  .collection("usuario")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "s62RiHOi9ZA8SoBHcPzy") {
        usuario = doc.data().paginaRegistroingreso;
        nombreIngreso.textContent = usuario.nombrePaginaRegistro;
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
      if (doc.id == "s62RiHOi9ZA8SoBHcPzy") {
        usuario = doc.data().paginaRegistroingreso;
        apellidoIngreso.textContent = usuario.apellidoPaginaRegistro;
      }
    });
  });

// celular

const celularIngreso = document.getElementById("celularIngreso");
baseDatos
  .collection("usuario")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "s62RiHOi9ZA8SoBHcPzy") {
        usuario = doc.data().paginaRegistroingreso;
        celularIngreso.textContent = usuario.numeroTelefonico;
      }
    });
  });

// correo

const contenedorCorreo = document.getElementById("correo-ingreso");
baseDatos
  .collection("usuario")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "s62RiHOi9ZA8SoBHcPzy") {
        usuario = doc.data().paginaRegistroingreso;
        contenedorCorreo.textContent = usuario.correoRegistro;
      }
    });
  });

// Tipo Documento

const contenedorTipoDocumento = document.getElementById(
  "tipoDocumento-ingreso"
);
baseDatos
  .collection("usuario")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "s62RiHOi9ZA8SoBHcPzy") {
        usuario = doc.data().paginaRegistroingreso;
        contenedorTipoDocumento.textContent = usuario.opcionDocumento;
      }
    });
  });
// Numero Documento Documento

const contenedorNumeroDocumento = document.getElementById(
  "numeroDocumento-ingreso"
);
baseDatos
  .collection("usuario")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "s62RiHOi9ZA8SoBHcPzy") {
        usuario = doc.data().paginaRegistroingreso;
        contenedorNumeroDocumento.textContent = usuario.numeroIdentificacion;
      }
    });
  });

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
