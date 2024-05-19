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

let visualizacionFormularioAts = {
  desProTarAts: "........",
  TipoHerramientaAts: "........",
  descripcionHerramientaAts: ".............",
  escaleraSencillaAts: "...........",
  escaleraDobleAts: "...........",
  escaleraTijeraAts: "........",
};

// Descripcion y procedimiento tarea

// const contenedorDesProTarAts = document.getElementById("desProTarAts");html

const contenedorDesProTarAts = document.getElementById("desProTarAts");

baseDatos
  .collection("permisoATS")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "VfnJtv9HpW6m02JKQ9QB") {
        visualizacionFormularioAts = doc.data().impresionFormularioAts;
        contenedorDesProTarAts.textContent =
          visualizacionFormularioAts.descripcionProcedimientoTarea;
      }
    });
  });

//tipo de herramienta

const contenedorTipoHeramienta = document.getElementById("tipoHerranientaAts");
contenedorTipoHeramienta.textContent =
  visualizacionFormularioAts.TipoHerramientaAts;

// descripcion de la herramienta

const contenedorDescripcionHerramientaAts = document.getElementById(
  "descripcionHerramientaAts"
);
contenedorDescripcionHerramientaAts.textContent =
  visualizacionFormularioAts.descripcionHerramientaAts;

// escalera sencilla

const contenedorEscaleraSencillaAts = document.getElementById(
  "escaleraSencillaAts"
);
baseDatos
  .collection("permisoATS")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "VfnJtv9HpW6m02JKQ9QB") {
        visualizacionFormularioAts = doc.data().impresionFormularioAts;
        contenedorEscaleraSencillaAts.textContent =
          visualizacionFormularioAts.descripcionProcedimientoTarea;
      }
    });
  });

// escalera Doble

const contenedorEscaleraDobleAts = document.getElementById("escaleraDobleAts");
contenedorEscaleraDobleAts.textContent =
  visualizacionFormularioAts.escaleraDobleAts;

// escalera Tijera

const contenedorEscaleraTijeraAts =
  document.getElementById("escaleraTijeraAts");
contenedorEscaleraTijeraAts.textContent =
  visualizacionFormularioAts.escaleraTijeraAts;
