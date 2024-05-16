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

const usuarioTA = {
  nombreTA: "Luis ",
  apellidoTA: "Valbuena",
  correoTA: "soporte.tecnico@gmail.com",
  celularTA: 34132976801,
  tipoDocumentoTA: "cedula",
  numeroDocumentoTA: "80927548",
  cargoTA: "Soldador",
  infEmeTA: "luisa Valbuena",
  celInfEmeTA: "3233052419",
  planillaTA: "link planilla",
  venPlanillaTA: "05/06/2024",
};

// inicio traer dato

// baseDatos
//   .collection("trabajagorAutorizado")
//   .get()
//   .then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       console.log(doc.data());
//     });
//   });

// baseDatos
//   .collection("trabajagorAutorizado")
//   .where("numeroDocumentoTrabajadorPT==20654798")
//   .limit(1)
//   .get()
//   .then((querySnapshot) => {
//     if (!querySnapshot.empty) {
//       querySnapshot.forEach((doc) => {
//         console.log(doc.data());
//       });
//     } else {
//       console.log("no se encontro el documento");
//     }
//   })
//   .catch((error) => {
//     console.error(error);
//   });

//Nombre

const contenedorNombreTA = document.getElementById("nombreTA");

contenedorNombreTA.textContent = usuarioTA.nombreTA;
// const etiquetaNombreTA = document.createElement("h5"); // crear Elemento

// let textoNombreTA = document.createTextNode(usuarioTA.nombreTA); //crear el texto
// etiquetaNombreTA.appendChild(textoNombreTA); // uniendo texto con etiqueta
// contenedorNombreTA.appendChild(etiquetaNombreTA); // uniendo el contenedor don el texto

//apellido

const contenedorApellidoTA = document.getElementById("apellidoTA");
const etiquetaApellidoTA = document.createElement("h5"); // crear Elemento

let textoApellidoTA = document.createTextNode(usuarioTA.apellidoTA); //crear el texto
etiquetaApellidoTA.appendChild(textoApellidoTA); // uniendo texto con etiqueta
contenedorApellidoTA.appendChild(etiquetaApellidoTA); // uniendo el contenedor don el texto

// celular

const contenedorCelularTA = document.getElementById("celularTA");
const etiquetaCelularTA = document.createElement("h5"); // crear Elemento

let textoCelularTA = document.createTextNode(usuarioTA.celularTA); //crear el texto
etiquetaCelularTA.appendChild(textoCelularTA); // uniendo texto con etiqueta
contenedorCelularTA.appendChild(etiquetaCelularTA); // uniendo el contenedor don el texto

// correo

const contenedorCorreoTA = document.getElementById("correoTA");
const etiquetaCorreoTA = document.createElement("h5"); // crear Elemento

let textoCorreoTA = document.createTextNode(usuarioTA.correoTA); //crear el texto
etiquetaCorreoTA.appendChild(textoCorreoTA); // uniendo texto con etiqueta
contenedorCorreoTA.appendChild(etiquetaCorreoTA); // uniendo el contenedor don el texto

// tipo documento

const contenedorTipoDocumentoTA = document.getElementById("tipoDocumentoTA");
const etiquetaTipoDocumentoTA = document.createElement("h5"); // crear Elemento

let textoTipoDocumentoTA = document.createTextNode(usuarioTA.tipoDocumentoTA); //crear el texto
etiquetaTipoDocumentoTA.appendChild(textoTipoDocumentoTA); // uniendo texto con etiqueta
contenedorTipoDocumentoTA.appendChild(etiquetaTipoDocumentoTA); // uniendo el contenedor don el texto

// numero documento

const contenedorNumeroDocumentoTA =
  document.getElementById("numeroDocumentoTA");
const etiquetaNumeroDocumentoTA = document.createElement("h5"); // crear Elemento

let textoNumeroDocumentoTA = document.createTextNode(
  usuarioTA.numeroDocumentoTA
); //crear el texto
etiquetaNumeroDocumentoTA.appendChild(textoNumeroDocumentoTA); // uniendo texto con etiqueta
contenedorNumeroDocumentoTA.appendChild(etiquetaNumeroDocumentoTA); // uniendo el contenedor don el texto

// Cargo

const contenedorCargoTA = document.getElementById("CargoTA");
const etiquetaCargoTA = document.createElement("h5"); // crear Elemento

let textoCargoTA = document.createTextNode(usuarioTA.cargoTA); //crear el texto
etiquetaCargoTA.appendChild(textoCargoTA); // uniendo texto con etiqueta
contenedorCargoTA.appendChild(etiquetaCargoTA); // uniendo el contenedor don el texto

//Informacion Emergencia

const contenedorInfEmeTA = document.getElementById("infEmeTA");
const etiquetaInfEmeTA = document.createElement("h5"); // crear Elemento

let textoinfEmeTA = document.createTextNode(usuarioTA.infEmeTA); //crear el texto
etiquetaInfEmeTA.appendChild(textoinfEmeTA); // uniendo texto con etiqueta
contenedorInfEmeTA.appendChild(etiquetaInfEmeTA); // uniendo el contenedor don el texto

//Informacion Emergencia

const contenedorCelInfEmeTA = document.getElementById("celInfEmeTA");
const etiquetaCelInfEmeTA = document.createElement("h5"); // crear Elemento

let textoCelInfEmeTA = document.createTextNode(usuarioTA.celInfEmeTA); //crear el texto
etiquetaCelInfEmeTA.appendChild(textoCelInfEmeTA); // uniendo texto con etiqueta
contenedorCelInfEmeTA.appendChild(etiquetaCelInfEmeTA); // uniendo el contenedor don el texto

//planilla seguridad social

const contenedorPlanillaTA = document.getElementById("planillaTA");
const etiquetaPlanillaTA = document.createElement("h5"); // crear Elemento

let textoPlanillaTA = document.createTextNode(usuarioTA.planillaTA); //crear el texto
etiquetaPlanillaTA.appendChild(textoPlanillaTA); // uniendo texto con etiqueta
contenedorPlanillaTA.appendChild(etiquetaPlanillaTA); // uniendo el contenedor don el texto

// Vencimiento planilla seguridad social

const contenedorVenPlanillaTA = document.getElementById("venPlanillaTA");
const etiquetaVenPlanillaTA = document.createElement("h5"); // crear Elemento

let textoVenPlanillaTA = document.createTextNode(usuarioTA.venPlanillaTA); //crear el texto
etiquetaVenPlanillaTA.appendChild(textoVenPlanillaTA); // uniendo texto con etiqueta
contenedorVenPlanillaTA.appendChild(etiquetaVenPlanillaTA); // uniendo el contenedor don el texto
