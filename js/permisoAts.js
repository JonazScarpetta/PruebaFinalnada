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

// Manejo del Canvas para la firma digital
// codigo sin importar la psicion

const canvas = document.getElementById("signatureCanvas");
const ctx = canvas.getContext("2d");
let drawing = false;

canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("touchstart", startDrawing);
canvas.addEventListener("touchend", stopDrawing);
canvas.addEventListener("touchmove", draw);

document.getElementById("clearButton").addEventListener("click", clearCanvas);
document.getElementById("saveButton").addEventListener("click", saveSignature);

function startDrawing(event) {
  drawing = true;
  ctx.beginPath();
  ctx.moveTo(getX(event), getY(event));
  event.preventDefault();
}

function stopDrawing(event) {
  drawing = false;
}

function draw(event) {
  if (!drawing) return;
  ctx.lineTo(getX(event), getY(event));
  ctx.stroke();
  event.preventDefault();
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function saveSignature() {
  const dataURL = canvas.toDataURL("image/png");
  const file = dataURLtoBlob(dataURL);
  const storageRef = storage.ref("signatures/" + new Date().getTime() + ".png");

  storageRef.put(file).then(function (snapshot) {
    snapshot.ref.getDownloadURL().then(function (downloadURL) {
      firestore
        .collection("signatures")
        .add({
          url: downloadURL,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(function () {
          alert("Firma guardada con éxito.");
        })
        .catch(function (error) {
          console.error("Error al guardar la firma: ", error);
        });
    });
  });
}

function getX(event) {
  const rect = canvas.getBoundingClientRect();
  if (event.touches && event.touches.length > 0) {
    return event.touches[0].clientX - rect.left;
  } else {
    return event.clientX - rect.left;
  }
}

function getY(event) {
  const rect = canvas.getBoundingClientRect();
  if (event.touches && event.touches.length > 0) {
    return event.touches[0].clientY - rect.top;
  } else {
    return event.clientY - rect.top;
  }
}

function dataURLtoBlob(dataURL) {
  const parts = dataURL.split(";base64,");
  const contentType = parts[0].split(":")[1];
  const raw = window.atob(parts[1]);
  const rawLength = raw.length;
  const uInt8Array = new Uint8Array(rawLength);

  for (let i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i);
  }

  return new Blob([uInt8Array], { type: contentType });
}
