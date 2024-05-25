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

const iniciarSesionRegistro = document.getElementById(
  "iniciar-sesion-registro"
);

// Funcion validacion

function validarContrasenasIngresoRegistro(
  correoIngreso,
  contraseñaIngreso,
  correoBD,
  contraseñaBD
) {
  if (correoIngreso === correoBD && contraseñaIngreso === contraseñaBD) {
    return true;
    //alert("Contraseñas coinciden. ¡Bienvenido!");
    //window.location.href = "../html/ingresoRegistro.html";
  } else {
    return false;
    //alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
  }
}

iniciarSesionRegistro.addEventListener("click", function (event) {
  event.preventDefault();

  const usuarioRegistro = {};
  var visualizacionFormularioUsuario = {};

  usuarioRegistro.correoElectronicoRegistro = document.getElementById(
    "correo-electronico-registro"
  ).value;
  usuarioRegistro.usuarioRegistroChecked = document.getElementById(
    "usuario-registro-Check"
  ).checked;
  usuarioRegistro.claveRegistro = document.getElementById(
    "clave-registro-inicio"
  ).value;

  //console.log(usuarioRegistro);

  //iniciar sesion registro
  var siguiente = false;
  baseDatos
    .collection("usuario")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        visualizacionFormularioUsuario = doc.data().paginaRegistroingreso;

        if (visualizacionFormularioUsuario.cargo == "usuario-registrador") {
          siguiente = validarContrasenasIngresoRegistro(
            usuarioRegistro.correoElectronicoRegistro,
            usuarioRegistro.claveRegistro,
            visualizacionFormularioUsuario.correoRegistro,
            visualizacionFormularioUsuario.claveRegistro
          );

          if (siguiente) {
            alert("Contraseñas coinciden. ¡Bienvenido!");
            window.location.href = "../html/ingresoRegistro.html";
          }
        } else {
          alert(
            "Parece que no eres un usuario registrador, intentemoslo como administrador"
          );
          window.location.href = "../html/iniciar-sesion-autorizador.html";
        }
      });
      console.log(siguiente);
      if (!siguiente) {
        //alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
        const alertaError = document.getElementById("alertaError");
        alertaError.innerHTML =
          '<h4 class="bg-danger">Las contraseñas no coinciden. Por favor, inténtalo de nuevo.</h4>';
      }
    });
});
