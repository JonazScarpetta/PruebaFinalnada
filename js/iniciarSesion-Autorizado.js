const iniciarSesionAutorizado = document.getElementById(
  "iniciar-sesion-autorizado"
);
iniciarSesionAutorizado.addEventListener("click", function (event) {
  event.preventDefault();

  const usuarioAutorizado = {};

  usuarioAutorizado.correoElectronicoAutorizado = document.getElementById(
    "correo-electronico-autorizado"
  ).value;
  usuarioAutorizado.usaurioAutorizadochecked = document.getElementById(
    "usuario-autorizado-Check"
  ).checked;
  usuarioAutorizado.claveAutorizado = document.getElementById(
    "clave-autorizado-inicio"
  ).value;
  console.log(usuarioAutorizado);

  //iniciar sesion

  function validarContrasenasIngresoAutorizado() {
    var clavePruebaAutorizado = "A123";
    var correoPruebaAutorizado = "a@gmail.com";

    if (
      clavePruebaAutorizado === usuarioAutorizado.claveAutorizado &&
      correoPruebaAutorizado ===
        usuarioAutorizado.correoElectronicoAutorizado &&
      usuarioAutorizado.usaurioAutorizadochecked === true
    ) {
      alert("Contraseñas coinciden. ¡Bienvenido!");
      window.location.href = "../html/ingresoAutorizado.html";
    } else {
      alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
    }
  }
  validarContrasenasIngresoAutorizado();
});
