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
  desProTarAts: "......",
  tipoHerramienta: "......",
  descripcionHerramienta: "......",
  escaleraSencillaAts: "...........",
  escaleraDobleAts: "......",
  escaleraTijeraAts: "......",
  escDobExtAts: "......",
  andModAts: "......",
  andColAts: "......",
  elePerAts: "......",
  otroAts: "......",
  salEmerAts: "......",
  ruiTraAts: "......",
  iluminacionAts: "......",
  pelResAts: "......",
  pasDetActAts: "......",
  pelExiPotAts: "......",
  conAts: "......",
  contReqAts: "......",
  archivoFirmaDigitalSstAts: "......",
  registroFotograficoAts: "......",
  seleccionPersonalAts: "......",
  seleccionAutorizadorAts: "......",
};

// Descripcion y procedimiento tarea

const contenedorDesProTarAts = document.getElementById("desProTarAts");

baseDatos
  .collection("permisoATS")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "CwM5xHjBQBbOItOumue1") {
        visualizacionFormularioAts = doc.data().impresionFormularioAts;
        contenedorDesProTarAts.textContent =
          visualizacionFormularioAts.descripcionProcedimientoTarea;
      }
    });
  });

//tipo de herramienta

const contenedorTipoHeramienta = document.getElementById("tipoHerranientaAts");

baseDatos
  .collection("permisoATS")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "CwM5xHjBQBbOItOumue1") {
        visualizacionFormularioAts = doc.data().impresionFormularioAts;
        contenedorTipoHeramienta.textContent =
          visualizacionFormularioAts.tipoHerramienta;
      }
    });
  });

// descripcion de la herramienta

const contenedorDescripcionHeramienta = document.getElementById(
  "descripcionHerramientaAts"
);

baseDatos
  .collection("permisoATS")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "CwM5xHjBQBbOItOumue1") {
        visualizacionFormularioAts = doc.data().impresionFormularioAts;
        contenedorDescripcionHeramienta.textContent =
          visualizacionFormularioAts.descripcionHerramienta;
      }
    });
  });

// escalera sencilla

const contenedorEscaleraSencillaAts = document.getElementById(
  "escaleraSencillaAts"
);
baseDatos
  .collection("permisoATS")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "CwM5xHjBQBbOItOumue1") {
        visualizacionFormularioAts = doc.data().impresionFormularioAts;
        contenedorEscaleraSencillaAts.textContent =
          visualizacionFormularioAts.escSenAts;
      }
    });
  });

// escalera Doble Extendible

const contenedorEscaleraDobleAts = document.getElementById("escDobExtAts");
baseDatos
  .collection("permisoATS")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "CwM5xHjBQBbOItOumue1") {
        visualizacionFormularioAts = doc.data().impresionFormularioAts;
        contenedorEscaleraDobleAts.textContent =
          visualizacionFormularioAts.escDobExtAts;
      }
    });
  });

// escalera Tijera

const contenedorEscaleraTijeraAts =
  document.getElementById("escaleraTijeraAts");
baseDatos
  .collection("permisoATS")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "CwM5xHjBQBbOItOumue1") {
        visualizacionFormularioAts = doc.data().impresionFormularioAts;
        contenedorEscaleraTijeraAts.textContent =
          visualizacionFormularioAts.escTipTijAts;
      }
    });
  });

// Andamio Modular

const contenedorAndamioModularAts = document.getElementById("andModAts");
baseDatos
  .collection("permisoATS")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "CwM5xHjBQBbOItOumue1") {
        visualizacionFormularioAts = doc.data().impresionFormularioAts;
        contenedorAndamioModularAts.textContent =
          visualizacionFormularioAts.andModAts;
      }
    });
  });

// Andamio Colgante

const contenedorAndamioColganteAts = document.getElementById("andColAts");
baseDatos
  .collection("permisoATS")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "CwM5xHjBQBbOItOumue1") {
        visualizacionFormularioAts = doc.data().impresionFormularioAts;
        contenedorAndamioColganteAts.textContent =
          visualizacionFormularioAts.andColAts;
      }
    });
  });

// Elevador Personal

const contenedorElevadorPersonalAts = document.getElementById("elePerAts");
baseDatos
  .collection("permisoATS")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "CwM5xHjBQBbOItOumue1") {
        visualizacionFormularioAts = doc.data().impresionFormularioAts;
        contenedorElevadorPersonalAts.textContent =
          visualizacionFormularioAts.elePerAts;
      }
    });
  });

// Otro / cual

const contenedorOtroCualAts = document.getElementById("otroAts");
baseDatos
  .collection("permisoATS")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "CwM5xHjBQBbOItOumue1") {
        visualizacionFormularioAts = doc.data().impresionFormularioAts;
        contenedorOtroCualAts.textContent = visualizacionFormularioAts.otroAts;
      }
    });
  });

// ¿Existen, están despejadas y señalizadas las rutas, salidas

const contenedorSalidaEmergenciaAts = document.getElementById("salEmerAts");
baseDatos
  .collection("permisoATS")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "CwM5xHjBQBbOItOumue1") {
        visualizacionFormularioAts = doc.data().impresionFormularioAts;
        contenedorSalidaEmergenciaAts.textContent =
          visualizacionFormularioAts.salEmerAts;
      }
    });
  });

// ¿El ruido del lugar de trabajo es tolerable y se puede controlar?

const contenedorRuidoTrabajoAts = document.getElementById("ruiTraAts");
baseDatos
  .collection("permisoATS")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "CwM5xHjBQBbOItOumue1") {
        visualizacionFormularioAts = doc.data().impresionFormularioAts;
        contenedorRuidoTrabajoAts.textContent =
          visualizacionFormularioAts.ruiTraAts;
      }
    });
  });

// ¿La iluminación de lugar es aceptable ?

const contenedorIluminacionAceAts = document.getElementById("iluminacionAts");
baseDatos
  .collection("permisoATS")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "CwM5xHjBQBbOItOumue1") {
        visualizacionFormularioAts = doc.data().impresionFormularioAts;
        contenedorIluminacionAceAts.textContent =
          visualizacionFormularioAts.iluminacionAts;
      }
    });
  });

// ¿No Hay peligro de resbalar o tropezar alrededor del área de trabajo?

const contenedorPeligroResAts = document.getElementById("pelResAts");
baseDatos
  .collection("permisoATS")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "CwM5xHjBQBbOItOumue1") {
        visualizacionFormularioAts = doc.data().impresionFormularioAts;
        contenedorPeligroResAts.textContent =
          visualizacionFormularioAts.pelResAts;
      }
    });
  });

// Pasos detallados de la actividad

const contenedorPasosDetAts = document.getElementById("pasDetActAts");
baseDatos
  .collection("permisoATS")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "CwM5xHjBQBbOItOumue1") {
        visualizacionFormularioAts = doc.data().impresionFormularioAts;
        contenedorPasosDetAts.textContent =
          visualizacionFormularioAts.pasDetActAts;
      }
    });
  });

//Peligros Existentes y Pontenciales

const contenedorPelidroExiAts = document.getElementById("pelExiPotAts");
baseDatos
  .collection("permisoATS")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "CwM5xHjBQBbOItOumue1") {
        visualizacionFormularioAts = doc.data().impresionFormularioAts;
        contenedorPelidroExiAts.textContent =
          visualizacionFormularioAts.pelExiPotAts;
      }
    });
  });

//Consecuencias

const contenedorConsecuenciasAts = document.getElementById("conAts");
baseDatos
  .collection("permisoATS")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "CwM5xHjBQBbOItOumue1") {
        visualizacionFormularioAts = doc.data().impresionFormularioAts;
        contenedorConsecuenciasAts.textContent =
          visualizacionFormularioAts.conAts;
      }
    });
  });

//Controles Requeridos

const contenedorControlesRequeridosAts = document.getElementById("contReqAts");
baseDatos
  .collection("permisoATS")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "CwM5xHjBQBbOItOumue1") {
        visualizacionFormularioAts = doc.data().impresionFormularioAts;
        contenedorControlesRequeridosAts.textContent =
          visualizacionFormularioAts.contReqAts;
      }
    });
  });
// Firma residente SST
const contenedorFirmaResidenteSstAts = document.getElementById(
  "archivo-firma-digital-sst-ats"
);
baseDatos
  .collection("permisoATS")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "CwM5xHjBQBbOItOumue1") {
        visualizacionFormularioAts = doc.data().impresionFormularioAts;
        contenedorFirmaResidenteSstAts.textContent =
          visualizacionFormularioAts.archivoFirmaDigitalSstAts;
      }
    });
  });

// Registro Fotografico
const contenedorRegistroFotograficoAts = document.getElementById(
  "registro-fotografico-ats"
);
baseDatos
  .collection("permisoATS")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "CwM5xHjBQBbOItOumue1") {
        visualizacionFormularioAts = doc.data().impresionFormularioAts;
        contenedorRegistroFotograficoAts.textContent =
          visualizacionFormularioAts.registroFotograficoAts;
      }
    });
  });

// Trabajador Registrado
const contenedorSeleccionPersonalAts = document.getElementById(
  "seleccion-personal-ats"
);
baseDatos
  .collection("permisoATS")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "CwM5xHjBQBbOItOumue1") {
        visualizacionFormularioAts = doc.data().impresionFormularioAts;
        contenedorSeleccionPersonalAts.textContent =
          visualizacionFormularioAts.seleccionPersonalAts;
      }
    });
  });

// Usuario Autorizador
const contenedorUsuarioAutorizadorAts = document.getElementById(
  "seleccion-autorizador-ats"
);
baseDatos
  .collection("permisoATS")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "CwM5xHjBQBbOItOumue1") {
        visualizacionFormularioAts = doc.data().impresionFormularioAts;
        contenedorUsuarioAutorizadorAts.textContent =
          visualizacionFormularioAts.seleccionAutorizadorAts;
      }
    });
  });
