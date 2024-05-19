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

// Inicio datos formulario

let visualizacionFormularioAlturas = {
  ciudadTA: ".......",
  fechaInicioTA: ".......",
  fechaCulminacionTA: ".......",
};

// Ciudad

// const contenedorCiudadTA = document.getElementById("ciudadTA");
// contenedorCiudadTA.textContent = visualizacionFormularioAlturas.ciudadTA;

const contenedorCiudadTA = document.getElementById("ciudadTA");

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "dsYLqi4tqMdldAM7sIrb") {
        visualizacionFormularioAlturas =
          doc.data().impresionFormularioTrabajoAltura;
        contenedorCiudadTA.textContent =
          visualizacionFormularioAlturas.ciudadTrabajoAltura;
      }
    });
  });

//fecha Inicio Actividad

//const contenedorFechaInicioTA = document.getElementById("fechaInicioTA");
const contenedorFechaInicioTA = document.getElementById("fechaInicioTA");

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "dsYLqi4tqMdldAM7sIrb") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorFechaInicioTA.textContent = usuarioTA.fechaInicioActividad;
      }
    });
  });

// Fecha Culminacion Actividad

const contenedorFechaCulminacionTA =
  document.getElementById("fechaCulminacionTA");
contenedorFechaCulminacionTA.textContent =
  visualizacionFormularioAlturas.fechaCulminacionTA;
