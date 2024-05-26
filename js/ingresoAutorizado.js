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

let usuario = {
  nombrePaginaRegistro: "......",
  apellidoPaginaRegistro: "......",
  opcionDocumento: "......",
  correoRegistro: "......",
  numeroTelefonico: "......",
  numeroIdentificacion: "......",
};

//Nombre

const contenedorNombre = document.getElementById("nombre-ingresoA");
baseDatos
  .collection("usuario")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "s3qvwbnkqbhCIkit8KZq") {
        usuario = doc.data().paginaRegistroingreso;
        contenedorNombre.textContent = usuario.nombrePaginaRegistro;
      }
    });
  });

//apellido
const contenedorApellido = document.getElementById("apellido-ingresoA");
baseDatos
  .collection("usuario")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "s3qvwbnkqbhCIkit8KZq") {
        usuario = doc.data().paginaRegistroingreso;
        contenedorApellido.textContent = usuario.apellidoPaginaRegistro;
      }
    });
  });
// celular

const contenedorCelular = document.getElementById("numero-celularA");
baseDatos
  .collection("usuario")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "s3qvwbnkqbhCIkit8KZq") {
        usuario = doc.data().paginaRegistroingreso;
        contenedorCelular.textContent = usuario.numeroTelefonico;
      }
    });
  });
// correo

const contenedorCorreo = document.getElementById("correo-ingresoA");
baseDatos
  .collection("usuario")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "s3qvwbnkqbhCIkit8KZq") {
        usuario = doc.data().paginaRegistroingreso;
        contenedorCorreo.textContent = usuario.correoRegistro;
      }
    });
  });

// Tipo Documento

const contenedorTipoDocumento = document.getElementById(
  "tipoDocumento-ingresoA"
);
baseDatos
  .collection("usuario")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "s3qvwbnkqbhCIkit8KZq") {
        usuario = doc.data().paginaRegistroingreso;
        contenedorTipoDocumento.textContent = usuario.opcionDocumento;
      }
    });
  });

// Numero Documento

const contenedorNumeroDocumento = document.getElementById(
  "numeroDocumento-ingresoA"
);
baseDatos
  .collection("usuario")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "s3qvwbnkqbhCIkit8KZq") {
        usuario = doc.data().paginaRegistroingreso;
        contenedorNumeroDocumento.textContent = usuario.numeroIdentificacion;
      }
    });
  });

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
