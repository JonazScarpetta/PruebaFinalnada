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

let usuarioTA = {
  nombrePT: "...... ",
  apellidoPT: "......",
  correoElectronicoTA: "......",
  celularTA: "......",
  seleccionDocumentoTrabajador: "......",
  numeroDocumentoTrabajadorPT: "......",
  cargoPT: "......",
  numeroCelularEmergencia: "......",
  celInfEmeTA: "......",
  planillaSeguridadSocial: "......",
  fechaVencimientoPlanilla: "......",
  cursoAlturas: "......",
  fechaVencimientoCursoAlturas: "......",
  fechaVencimientoCursoAlturas: "......",
  examenMedico: "......",
  fechaVencimientoExamenMedico: "......",
  nombreArl: "......",
  nombreEps: "......",
  nombreFondoPensiones: "......",
  registroFotograficoTrabajador: "......",
  firmaDigitalTrabajador: "......",
};

const contenedorNombreTA = document.getElementById("nombreTA");

baseDatos
  .collection("trabajagorAutorizado")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "73DWhcUxS9E93wyMnbSd") {
        usuarioTA = doc.data().impresionTrabajadorDatos;
        contenedorNombreTA.textContent = usuarioTA.nombrePT;
      }
    });
  });

//apellido

const contenedorApellidoTA = document.getElementById("apellidoTA");
baseDatos
  .collection("trabajagorAutorizado")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "73DWhcUxS9E93wyMnbSd") {
        usuarioTA = doc.data().impresionTrabajadorDatos;
        contenedorApellidoTA.textContent = usuarioTA.apellidoPT;
      }
    });
  });

// tipo documento

const contenedorTipoDocumentoTA = document.getElementById("tipoDocumentoTA");
baseDatos
  .collection("trabajagorAutorizado")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "73DWhcUxS9E93wyMnbSd") {
        usuarioTA = doc.data().impresionTrabajadorDatos;
        contenedorTipoDocumentoTA.textContent =
          usuarioTA.seleccionDocumentoTrabajador;
      }
    });
  });

// numero documento

const contenedorNumeroDocumentoTA =
  document.getElementById("numeroDocumentoTA");
baseDatos
  .collection("trabajagorAutorizado")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "73DWhcUxS9E93wyMnbSd") {
        usuarioTA = doc.data().impresionTrabajadorDatos;
        contenedorNumeroDocumentoTA.textContent =
          usuarioTA.numeroDocumentoTrabajadorPT;
      }
    });
  });

// Cargo

const contenedorCargoTA = document.getElementById("CargoTA");
baseDatos
  .collection("trabajagorAutorizado")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "73DWhcUxS9E93wyMnbSd") {
        usuarioTA = doc.data().impresionTrabajadorDatos;
        contenedorCargoTA.textContent = usuarioTA.cargoPT;
      }
    });
  });

// celular

const contenedorCelularTA = document.getElementById("celularTA");
baseDatos
  .collection("trabajagorAutorizado")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "73DWhcUxS9E93wyMnbSd") {
        usuarioTA = doc.data().impresionTrabajadorDatos;
        contenedorCelularTA.textContent = usuarioTA.numeroCelularTrabajador;
      }
    });
  });

// correo

const contenedorCorreoTA = document.getElementById("correoElectronicoTA");
baseDatos
  .collection("trabajagorAutorizado")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "73DWhcUxS9E93wyMnbSd") {
        usuarioTA = doc.data().impresionTrabajadorDatos;
        contenedorCorreoTA.textContent = usuarioTA.correoElectronicoTA;
      }
    });
  });

//Contacto Emergencia

const contenedorConEmeTA = document.getElementById("conEmeTA");
baseDatos
  .collection("trabajagorAutorizado")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "73DWhcUxS9E93wyMnbSd") {
        usuarioTA = doc.data().impresionTrabajadorDatos;
        contenedorConEmeTA.textContent = usuarioTA.contactoEmergencia;
      }
    });
  });

//Celular Contacto Emergencia

const contenedorCelInfEmeTA = document.getElementById("celInfEmeTA");
baseDatos
  .collection("trabajagorAutorizado")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "73DWhcUxS9E93wyMnbSd") {
        usuarioTA = doc.data().impresionTrabajadorDatos;
        contenedorCelInfEmeTA.textContent = usuarioTA.numeroCelularEmergencia;
      }
    });
  });

//planilla seguridad social

const contenedorPlanillaTA = document.getElementById("planillaTA");
baseDatos
  .collection("trabajagorAutorizado")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "73DWhcUxS9E93wyMnbSd") {
        usuarioTA = doc.data().impresionTrabajadorDatos;
        contenedorPlanillaTA.textContent = usuarioTA.planillaSeguridadSocial;
      }
    });
  });

// Vencimiento planilla seguridad social

const contenedorVenPlanillaTA = document.getElementById("venPlanillaTA");
baseDatos
  .collection("trabajagorAutorizado")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "73DWhcUxS9E93wyMnbSd") {
        usuarioTA = doc.data().impresionTrabajadorDatos;
        contenedorVenPlanillaTA.textContent =
          usuarioTA.fechaVencimientoPlanilla;
      }
    });
  });
// Curos de Alturas

const contenedorCurAlturasTA = document.getElementById("curAlturasTA");
baseDatos
  .collection("trabajagorAutorizado")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "73DWhcUxS9E93wyMnbSd") {
        usuarioTA = doc.data().impresionTrabajadorDatos;
        contenedorCurAlturasTA.textContent = usuarioTA.cursoAlturas;
      }
    });
  });

// Vencimiento Curos de Alturas

const contenedorVencimientoAlturasTA = document.getElementById(
  "fechaVencimientoCursoAlturas"
);
baseDatos
  .collection("trabajagorAutorizado")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "73DWhcUxS9E93wyMnbSd") {
        usuarioTA = doc.data().impresionTrabajadorDatos;
        contenedorVencimientoAlturasTA.textContent =
          usuarioTA.fechaVencimientoCursoAlturas;
      }
    });
  });

// contenedorExamenMedicoTA

const contenedorExamenMedicoTA = document.getElementById("examenMedico");
baseDatos
  .collection("trabajagorAutorizado")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "73DWhcUxS9E93wyMnbSd") {
        usuarioTA = doc.data().impresionTrabajadorDatos;
        contenedorExamenMedicoTA.textContent = usuarioTA.examenMedico;
      }
    });
  });

// contenedorVencimientoExamenMedicoTA

const contenedorVencimientoExamenMedicoTA = document.getElementById(
  "fechaVencimientoExamenMedico"
);
baseDatos
  .collection("trabajagorAutorizado")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "73DWhcUxS9E93wyMnbSd") {
        usuarioTA = doc.data().impresionTrabajadorDatos;
        contenedorVencimientoExamenMedicoTA.textContent =
          usuarioTA.fechaVencimientoExamenMedico;
      }
    });
  });

// contenedorNombreArlTA

const contenedorNombreArlTA = document.getElementById("nombreArl");
baseDatos
  .collection("trabajagorAutorizado")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "73DWhcUxS9E93wyMnbSd") {
        usuarioTA = doc.data().impresionTrabajadorDatos;
        contenedorNombreArlTA.textContent = usuarioTA.nombreArl;
      }
    });
  });

// contenedorNombreEpsTA

const contenedorNombreEpsTA = document.getElementById("nombreEps");
baseDatos
  .collection("trabajagorAutorizado")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "73DWhcUxS9E93wyMnbSd") {
        usuarioTA = doc.data().impresionTrabajadorDatos;
        contenedorNombreEpsTA.textContent = usuarioTA.nombreEps;
      }
    });
  });

// contenedorFotoTrabajadorTA

const contenedorFotoTrabajadorTA = document.getElementById(
  "registroFotograficoTrabajador"
);
baseDatos
  .collection("trabajagorAutorizado")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "73DWhcUxS9E93wyMnbSd") {
        usuarioTA = doc.data().impresionTrabajadorDatos;
        contenedorFotoTrabajadorTA.textContent =
          usuarioTA.registroFotograficoTrabajador;
      }
    });
  });

// contenedorNombreFondePenTA

const contenedorNombreFondePenTA = document.getElementById(
  "nombreFondoPensiones"
);
baseDatos
  .collection("trabajagorAutorizado")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "73DWhcUxS9E93wyMnbSd") {
        usuarioTA = doc.data().impresionTrabajadorDatos;
        contenedorNombreFondePenTA.textContent = usuarioTA.nombreFondoPensiones;
      }
    });
  });

// contenedorFirmaDigitalTA

const contenedorFirmaDigitalTA = document.getElementById(
  "firmaDigitalTrabajador"
);
baseDatos
  .collection("trabajagorAutorizado")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "73DWhcUxS9E93wyMnbSd") {
        usuarioTA = doc.data().impresionTrabajadorDatos;
        contenedorFirmaDigitalTA.textContent = usuarioTA.firmaDigitalTrabajador;
      }
    });
  });
