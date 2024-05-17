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

const visualizacionFormularioATS = {
  desProTarATS:
    "pendiente por descripcion de este campo proveniente de la base de datos creada en fire base ",
  prueba: "pruebas",
  // apellidoTA: "Valbuena",
  // correoTA: "soporte.tecnico@gmail.com",
  // celularTA: 34132976801,
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

//descripcion y procedimiento de tarea

const contenedorDesProTarATS = document.getElementById("desProTaraTS");
contenedorDesProTarATS.textContent = visualizacionFormularioATS.desProTarATS;

// //apellido

const contenedorPruebaATS = document.getElementById("prueba");
contenedorPruebaATS.textContent = visualizacionFormularioATS.prueba;

// celular

// const contenedorCelularTA = document.getElementById("celularTA");
// contenedorCelularTA.textContent = visualizacionFormularioATS.celularTA;
