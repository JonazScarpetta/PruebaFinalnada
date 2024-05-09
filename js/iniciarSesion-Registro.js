const iniciarSesionRegistro = document.getElementById(
  "iniciar-sesion-registro"
);
iniciarSesionRegistro.addEventListener("click", function (event) {
  event.preventDefault();

  const usuarioRegistro = {};

  usuarioRegistro.correoElectronicoRegistro = document.getElementById(
    "correo-electronico-registro"
  ).value;
  usuarioRegistro.usuarioRegistroCheck = document.getElementById(
    "usuario-registro-Check"
  ).checked;
  usuarioRegistro.claveRegistro = document.getElementById(
    "clave-registro-inicio"
  ).value;

  console.log(usuarioRegistro);
});
