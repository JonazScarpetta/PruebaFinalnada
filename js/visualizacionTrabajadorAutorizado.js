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
  nombreTA: "Jean ",
  apellidoTA: "Valbuena",
  correoTA: "soporte.tecnico@gmail.com",
  celularTA: 34132976801,
  tipoDocumentoTA: "cedula",
  numeroDocumentoTA: "80927548",
  cargoTA: "Soldador",
  conEmeTA: "luisa Valbuena",
  celInfEmeTA: "3233052419",
  planillaTA: "link planilla",
  venPlanillaTA: "05/06/2024",
  curAlturasTA: "link Curso Alturas",
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

//apellido

const contenedorApellidoTA = document.getElementById("apellidoTA");
contenedorApellidoTA.textContent = usuarioTA.apellidoTA;

// celular

const contenedorCelularTA = document.getElementById("celularTA");
contenedorCelularTA.textContent = usuarioTA.celularTA;

// correo

const contenedorCorreoTA = document.getElementById("correoTA");
contenedorCorreoTA.textContent = usuarioTA.correoTA;

// tipo documento

const contenedorTipoDocumentoTA = document.getElementById("tipoDocumentoTA");
contenedorTipoDocumentoTA.textContent = usuarioTA.tipoDocumentoTA;

// numero documento

const contenedorNumeroDocumentoTA =
  document.getElementById("numeroDocumentoTA");
contenedorNumeroDocumentoTA.textContent = usuarioTA.numeroDocumentoTA;

// Cargo

const contenedorCargoTA = document.getElementById("CargoTA");
const etiquetaCargoTA = document.createElement("h5"); // crear Elemento

let textoCargoTA = document.createTextNode(usuarioTA.cargoTA); //crear el texto
etiquetaCargoTA.appendChild(textoCargoTA); // uniendo texto con etiqueta
contenedorCargoTA.appendChild(etiquetaCargoTA); // uniendo el contenedor don el texto

//Contacto Emergencia

const contenedorConEmeTA = document.getElementById("conEmeTA");
contenedorConEmeTA.textContent = usuarioTA.conEmeTA;

//Celular Contacto Emergencia

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

// Curos de Alturas

const contenedorCurAlturasTA = document.getElementById("curAlturasTA");
contenedorCurAlturasTA.textContent = usuarioTA.curAlturasTA;
