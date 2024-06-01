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

let paginaRegistro = document.getElementById("iniciar-sesion-pagina-registro");
paginaRegistro.addEventListener("click", function (event) {
  event.preventDefault();

  const paginaRegistroingreso = {};

  paginaRegistroingreso.nombrePaginaRegistro = document.getElementById(
    "nombre-pagina-registro"
  ).value;
  paginaRegistroingreso.apellidoPaginaRegistro = document.getElementById(
    "apellido-pagina-registro"
  ).value;
  paginaRegistroingreso.opcionDocumento =
    document.getElementById("opcion-documento").value;
  paginaRegistroingreso.numeroIdentificacion = document.getElementById(
    "numero-de-identificacion"
  ).value;
  paginaRegistroingreso.numeroTelefonico =
    document.getElementById("numero-telefonico").value;
  paginaRegistroingreso.cargo = document.getElementById("cargo").value;
  paginaRegistroingreso.correoRegistro =
    document.getElementById("correo-registro").value;
  paginaRegistroingreso.cargarImagen =
    document.getElementById("cargar-imagen").value;
  paginaRegistroingreso.claveRegistro =
    document.getElementById("clave-de-registro").value;
  paginaRegistroingreso.confirmacionClaveRegistro = document.getElementById(
    "confirmacion-clave-de-registro"
  ).value;

  console.log(paginaRegistroingreso);

  // if (validarContraseñas()) {
  baseDatos
    .collection("usuario")
    .add({
      paginaRegistroingreso,
    })
    .then((docRef) => {
      alert("Datos Guardados correctamente");
    })
    .catch((error) => {
      alert("Error");
      console.error(error);
    });
  //}
});

function validarContraseñas() {
  // Expresiones regulares para verificar las condiciones
  let validacion = false;
  var tieneMayuscula = /[A-Z]/.test(paginaRegistroingreso.claveRegistro);
  var tieneNumero = /\d/.test(paginaRegistroingreso.claveRegistro);
  var longitudValida = paginaRegistroingreso.claveRegistro.length >= 8;

  // Verificar las condiciones
  if (
    paginaRegistroingreso.claveRegistro ===
      paginaRegistroingreso.confirmacionClaveRegistro &&
    tieneMayuscula &&
    tieneNumero &&
    longitudValida
  ) {
    alert("Contraseñas coinciden. ¡Bienvenido!");
    validacion = true;
    window.location.href = "/index.html";
  } else {
    var mensajeError =
      "Las contraseñas no coinciden o no cumplen con los requisitos:\n";
    if (
      paginaRegistroingreso.claveRegistro !==
      paginaRegistroingreso.confirmacionClaveRegistro
    ) {
      mensajeError += "- Las contraseñas no coinciden.\n";
    }
    if (!tieneMayuscula) {
      mensajeError += "- Debe incluir al menos una letra mayúscula.\n";
    }
    if (!tieneNumero) {
      mensajeError += "- Debe incluir al menos un número.\n";
    }
    if (!longitudValida) {
      mensajeError += "- Debe tener al menos 8 caracteres.\n";
    }
    alert(mensajeError);
  }
  return validacion;
}
