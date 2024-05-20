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
  fechaCulminacionActividad: "......",
  direccionTrabajoAltura: "......",
  horaInicioActividad: "......",
  horaCulminacionActividad: "......",
  actividadRutinaria: "......",
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
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        visualizacionFormularioAlturas =
          doc.data().impresionFormularioTrabajoAltura;
        contenedorCiudadTA.textContent =
          visualizacionFormularioAlturas.ciudadTrabajoAltura;
      }
    });
  });

// Direccion

const contenedorDireccionTA = document.getElementById("direccionTrabajoAltura");

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorDireccionTA.textContent = usuarioTA.direccionTrabajoAltura;
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
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorFechaInicioTA.textContent = usuarioTA.fechaInicioActividad;
      }
    });
  });

// Fecha Culminacion Actividad

const contenedorCulminacionTA = document.getElementById("fechaCulminacionTA");

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorCulminacionTA.textContent =
          usuarioTA.fechaCulminacionActividad;
      }
    });
  });

// Hora Inicio Actividad

const contenedorHoraInicioTA = document.getElementById("horaInicioActividad");

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorHoraInicioTA.textContent = usuarioTA.horaInicioActividad;
      }
    });
  });
// Hora Culminacion Actividad

const contenedorCulminacionInicioTA = document.getElementById(
  "horaCulminacionActividad"
);

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorCulminacionInicioTA.textContent =
          usuarioTA.horaCulminacionActividad;
      }
    });
  });

//Altura de la actividad

const contenedorAlturaActividadTA = document.getElementById("alturaActividad");

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorAlturaActividadTA.textContent = usuarioTA.alturaActividad;
      }
    });
  });
// Actividad Rutinaria

const contenedorActividadRutinariaTA =
  document.getElementById("actividadRutinaria");

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorActividadRutinariaTA.textContent =
          usuarioTA.actividadRutinaria;
      }
    });
  });

// Descripcion y procedimiento de la tarea

const contenedorDescripcionTareaTA =
  document.getElementById("descripcionTarea");

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorDescripcionTareaTA.textContent =
          usuarioTA.descripcionProcedimientoTarea;
      }
    });
  });

// Casco Burbuquejo

const contenedorCascoBurbuquejoTA =
  document.getElementById("cascoBurbuquejoAt");

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorCascoBurbuquejoTA.textContent = usuarioTA.cascoBurbuquejoAt;
      }
    });
  });

// Gafas de Seguridad

const contenedorGafasSeguridadTA = document.getElementById("gafasSeguridadAt");

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorGafasSeguridadTA.textContent = usuarioTA.gafasSeguridadAt;
      }
    });
  });

// Protector Respiratorio

const contenedorProtectorRespiratorioTA = document.getElementById(
  "protectorRespiratorioAt"
);

baseDatos
  .collection("formulaTrabajoAlturas")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.id == "klAmeuHhhVc15tplU1rz") {
        usuarioTA = doc.data().impresionFormularioTrabajoAltura;
        contenedorProtectorRespiratorioTA.textContent =
          usuarioTA.protectorRespiratorioAt;
      }
    });
  });
