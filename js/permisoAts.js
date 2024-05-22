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

const formularioDatosAts = document.getElementById("enviar-datos-ats");
formularioDatosAts.addEventListener("click", function () {
  const impresionFormularioAts = {};

  impresionFormularioAts.ciudadTrabajoAltura = document.getElementById(
    "ciudadTrabajoAltura"
  ).value;

  impresionFormularioAts.nombreObra =
    document.getElementById("nombreObraTrAl").value;

  impresionFormularioAts.direccionTrabajoAltura = document.getElementById(
    "direccionTrabajoAltura"
  ).value;

  impresionFormularioAts.fechaInicioActividad = document.getElementById(
    "fechaInicioActividad"
  ).value;

  impresionFormularioAts.fechaCulminacionActividad = document.getElementById(
    "fechaCulminacionActividad"
  ).value;

  impresionFormularioAts.descripcionProcedimientoTarea =
    document.getElementById("descripcion-procedimiento-tarea").value;

  //acordeon 2

  impresionFormularioAts.tipoHerramienta =
    document.getElementById("tipo-herramienta").value;

  impresionFormularioAts.descripcionHerramienta = document.getElementById(
    "descripcionHerramientaAts"
  ).value;
  // acordion 3 Sistemas de Acceso
  impresionFormularioAts.escSenAts =
    document.getElementById("escSenAts").checked;

  impresionFormularioAts.escDobExtAts =
    document.getElementById("escDobExtAts").checked;

  impresionFormularioAts.escTipTijAts =
    document.getElementById("escTipTijAts").checked;

  impresionFormularioAts.andModAts =
    document.getElementById("andModAts").checked;

  impresionFormularioAts.andColAts =
    document.getElementById("andColAts").checked;

  impresionFormularioAts.elePerAts =
    document.getElementById("elePerAts").checked;

  impresionFormularioAts.otroAts = document.getElementById("otroAts").value;

  // acordeon 4 analisis de tarea

  impresionFormularioAts.salEmerAts =
    document.getElementById("salEmerAts").checked;
  impresionFormularioAts.ruiTraAts =
    document.getElementById("ruiTraAts").checked;
  impresionFormularioAts.iluminacionAts =
    document.getElementById("iluminacionAts").checked;
  impresionFormularioAts.pelResAts =
    document.getElementById("pelResAts").checked;

  //acordion 5 descripcion de la actividad

  impresionFormularioAts.pasDetActAts =
    document.getElementById("pasDetActAts").value;

  impresionFormularioAts.pelExiPotAts =
    document.getElementById("pelExiPotAts").value;

  impresionFormularioAts.conAts = document.getElementById("conAts").value;

  impresionFormularioAts.contReqAts =
    document.getElementById("contReqAts").value;

  // acordion 6 aprobacion y permiso Ats
  impresionFormularioAts.archivoFirmaDigitalSstAts = document.getElementById(
    "archivo-firma-digital-sst-ats"
  ).value;
  impresionFormularioAts.registroFotograficoAts = document.getElementById(
    "registro-fotografico-ats"
  ).value;
  impresionFormularioAts.seleccionPersonalAts = document.getElementById(
    "seleccion-personal-ats"
  ).value;

  impresionFormularioAts.seleccionAutorizadorAts = document.getElementById(
    "seleccion-autorizador-ats"
  ).value;

  console.log(impresionFormularioAts);

  baseDatos
    .collection("permisoATS")
    .add({
      impresionFormularioAts,
    })
    .then((docRef) => {
      alert("Datos Guardados correctamente");
    })
    .catch((error) => {
      alert("Error");
      console.error(error);
    });
});
