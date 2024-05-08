const iniciarSesionAutorizado = document.getElementById(
  "iniciar-sesion-autorizado"
);
iniciarSesionAutorizado.addEventListener("click", function (event) {
  event.preventDefault();

  const usuarioAutorizado = {};

  usuarioAutorizado.correoElectronico = document.getElementById(
    "correo-electronico-autorizado"
  ).value;
  usuarioAutorizado.checked = document.getElementById(
    "usuario-autorizado-Check"
  ).checked;
  usuarioAutorizado.clave = document.getElementById(
    "clave-autorizado-inicio"
  ).value;
  console.log(usuarioAutorizado);
});
