const paginaRegistro = document.getElementById(
  "iniciar-sesion-pagina-registro"
);
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
    document.getElementById("Cargar-imagen").value;
  paginaRegistroingreso.claveRegistro =
    document.getElementById("clave-de-registro").value;
  paginaRegistroingreso.confirmacionClaveRegistro = document.getElementById(
    "confirmacion-clave-de-registro"
  ).value;

  console.log(paginaRegistroingreso);
});
