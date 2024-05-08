const iniciarSesionRegistro = document.getElementById(
  "iniciar-sesion-registro"
);
iniciarSesionRegistro.addEventListener("click", function () {
  let correoElectronicoRegistro = document.getElementById(
    "correo-electronico-registro"
  ).value;
  let usuarioRegistroCheck = document.getElementById(
    "usuario-registro-Check"
  ).checked;
  let claveRegistro = document.getElementById("clave-registro-inicio").value;
  console.log(correoElectronicoRegistro);
  console.log(usuarioRegistroCheck);
  console.log(claveRegistro);
});
