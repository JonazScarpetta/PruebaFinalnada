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

const iniciarSesionAutorizado = document.getElementById(
  "iniciar-sesion-autorizado"
);

// funcion validacion

function validarContrasenasIngresoAutorizado(
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

iniciarSesionAutorizado.addEventListener("click", function (event) {
  event.preventDefault();

  const usuarioAutorizado = {};
  var visualizacionFormularioAutorizado = {};

  usuarioAutorizado.correoElectronicoRegistro = document.getElementById(
    "correo-electronico-autorizado"
  ).value;
  usuarioAutorizado.usuarioRegistroChecked = document.getElementById(
    "usuario-autorizado-Check"
  ).checked;
  usuarioAutorizado.claveRegistro = document.getElementById(
    "clave-autorizado-inicio"
  ).value;

  //console.log(usuarioRegistro);

  //iniciar sesion registro
  var siguiente = false;
  baseDatos
    .collection("usuario")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        visualizacionFormularioAutorizado = doc.data().paginaRegistroingreso;

        if (visualizacionFormularioAutorizado.cargo == "usuario-autorizador") {
          siguiente = validarContrasenasIngresoAutorizado(
            usuarioAutorizado.correoElectronicoRegistro,
            usuarioAutorizado.claveRegistro,
            visualizacionFormularioAutorizado.correoRegistro,
            visualizacionFormularioAutorizado.claveRegistro
          );

          if (siguiente) {
            alert("Contraseñas coinciden. ¡Bienvenido!");
            window.location.href = "../html/ingresoAutorizado.html";
          }
        } else {
          alert(
            "Parece que no eres un usuario Autorizado, intentemoslo como Registrador"
          );
          window.location.href = "../html/iniciar-sesion-registro.html";
        }
      });
      console.log(siguiente);
      if (!siguiente) {
        //alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
        const alertaError = document.getElementById("alertaErrorA");
        alertaError.innerHTML =
          '<h4 class="bg-danger">Las contraseñas no coinciden. Por favor, inténtalo de nuevo.</h4>';
      }
    });
});
