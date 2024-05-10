const trabajadorDatos = document.getElementById("enviar-inf-trabajador");
trabajadorDatos.addEventListener("click", function () {
  const impresionTrabajadorDatos = {};

  impresionTrabajadorDatos.nombrePT =
    document.getElementById("nombre-pt").value;

  impresionTrabajadorDatos.apellidoPT =
    document.getElementById("apellido-pt").value;

  impresionTrabajadorDatos.seleccionDocumentoTrabajador =
    document.getElementById("seleccion-documento-trabajador").value;

  impresionTrabajadorDatos.numeroDocumentoTrabajadorPT =
    document.getElementById("numero-documento-trabajador-pt").value;
  impresionTrabajadorDatos.cargoPT = document.getElementById("cargo-pt").value;

  impresionTrabajadorDatos.numeroCelularTrabajador = document.getElementById(
    "numero-de-celular-trabajador"
  ).value;

  impresionTrabajadorDatos.contactoEmergencia = document.getElementById(
    "contacto-emergencia"
  ).value;
  impresionTrabajadorDatos.numeroCelularEmergencia = document.getElementById(
    "numero-celular-emergencia"
  ).value;
  impresionTrabajadorDatos.planillaSeguridadSocial = document.getElementById(
    "planilla-seguridad-social"
  ).value;
  impresionTrabajadorDatos.fechaVencimientoPlanilla = document.getElementById(
    "fecha-vencimiento-planilla"
  ).value;
  impresionTrabajadorDatos.cursoAlturas =
    document.getElementById("curso-alturas").value;
  impresionTrabajadorDatos.fechaVencimientoCursoAlturas =
    document.getElementById("fecha-vencimiento-curso-alturas").value;
  impresionTrabajadorDatos.examenMedico =
    document.getElementById("examen-medico").value;
  impresionTrabajadorDatos.fechaVencimientoExamenMedico =
    document.getElementById("fecha-vencimiento-examen-medico").value;
  impresionTrabajadorDatos.nombreArl =
    document.getElementById("nombre-arl").value;
  impresionTrabajadorDatos.nombreEps =
    document.getElementById("nombre-eps").value;
  impresionTrabajadorDatos.nombreFondoPensiones = document.getElementById(
    "nombre-fondo-pensiones"
  ).value;
  impresionTrabajadorDatos.registroFotograficoTrabajador =
    document.getElementById("registro-fotografico-trabajador").value;
  impresionTrabajadorDatos.firmaDigitalTrabajador = document.getElementById(
    "firma-digital-trabajador"
  ).value;

  console.log(impresionTrabajadorDatos);
});
