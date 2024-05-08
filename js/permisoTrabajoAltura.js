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

// enviar informacion formulario trabajo Alturas

const formularioDatosTrabajoAltura = document.getElementById(
  "enviar-datos-trabajo-alturas"
);
formularioDatosTrabajoAltura.addEventListener("click", function () {
  const impresionFormularioTrabajoAltura = {};

  impresionFormularioTrabajoAltura.ciudadTrabajoAltura =
    document.getElementById("ciudad-trabajo-altura").value;
  impresionFormularioTrabajoAltura.direccionTrabajoAltura =
    document.getElementById("direccion-trabajo-altura").value;
  impresionFormularioTrabajoAltura.fechaInicioActividad =
    document.getElementById("fecha-inicio-actividad").value;
  impresionFormularioTrabajoAltura.fechaCulminacionActividad =
    document.getElementById("fecha-culminacion-actividad").value;
  impresionFormularioTrabajoAltura.horaInicioActividad =
    document.getElementById("hora-inicio-actividad").value;
  impresionFormularioTrabajoAltura.horaCulminacionActividad =
    document.getElementById("hora-culminacion-actividad").value;
  impresionFormularioTrabajoAltura.alturaActividad =
    document.getElementById("altura-actividad").value;
  impresionFormularioTrabajoAltura.actividadRutinaria = document.getElementById(
    "actividad-rutinaria"
  ).value;
  impresionFormularioTrabajoAltura.actividadRutinaria = document.getElementById(
    "actividad-rutinaria"
  ).checked;
  impresionFormularioTrabajoAltura.descripcionProcedimientoTarea =
    document.getElementById("descripcion-procedimiento-tarea").value;
  //3 Acordeon
  impresionFormularioTrabajoAltura.acordeon3Check1 =
    document.getElementById("acordeon3-check1").checked;
  impresionFormularioTrabajoAltura.acordeon3Check2 =
    document.getElementById("acordeon3-check2").checked;
  impresionFormularioTrabajoAltura.acordeon3Check3 =
    document.getElementById("acordeon3-check3").checked;
  impresionFormularioTrabajoAltura.acordeon3Check4 =
    document.getElementById("acordeon3-check4").checked;
  impresionFormularioTrabajoAltura.acordeon3Check5 =
    document.getElementById("acordeon3-check5").checked;
  impresionFormularioTrabajoAltura.acordeon3Check6 =
    document.getElementById("acordeon3-check6").checked;
  impresionFormularioTrabajoAltura.acordeon3Check7 =
    document.getElementById("acordeon3-check7").checked;
  impresionFormularioTrabajoAltura.acordeon3Check8 =
    document.getElementById("acordeon3-check8").checked;
  impresionFormularioTrabajoAltura.acordeon3Check9 =
    document.getElementById("acordeon3-check9").checked;
  impresionFormularioTrabajoAltura.acordeon3Check10 =
    document.getElementById("acordeon3-check10").checked;
  impresionFormularioTrabajoAltura.acordeon3Check11 =
    document.getElementById("acordeon3-check11").checked;

  //4 Acordeon actividades criticas

  impresionFormularioTrabajoAltura.acordeon4Check1 =
    document.getElementById("acordeon4-check1").checked;
  impresionFormularioTrabajoAltura.acordeon4Check2 =
    document.getElementById("acordeon4-check2").checked;
  impresionFormularioTrabajoAltura.acordeon4Check3 =
    document.getElementById("acordeon4-check3").checked;

  //Acordeon 5 Identificacion de Peligros

  impresionFormularioTrabajoAltura.acordeon5Check1 =
    document.getElementById("acordeon5-check1").checked;
  impresionFormularioTrabajoAltura.acordeon5Check2 =
    document.getElementById("acordeon5-check2").checked;
  impresionFormularioTrabajoAltura.acordeon5Check3 =
    document.getElementById("acordeon5-check3").checked;
  impresionFormularioTrabajoAltura.acordeon5Check4 =
    document.getElementById("acordeon5-check4").checked;
  impresionFormularioTrabajoAltura.acordeon5Check5 =
    document.getElementById("acordeon5-check5").checked;
  impresionFormularioTrabajoAltura.acordeon5Check6 =
    document.getElementById("acordeon5-check6").checked;
  impresionFormularioTrabajoAltura.acordeon5Check7 =
    document.getElementById("acordeon5-check7").checked;
  impresionFormularioTrabajoAltura.acordeon5Check8 =
    document.getElementById("acordeon5-check8").checked;
  impresionFormularioTrabajoAltura.acordeon5Check9 =
    document.getElementById("acordeon5-check9").checked;
  impresionFormularioTrabajoAltura.acordeon5Check10 =
    document.getElementById("acordeon5-check10").checked;
  impresionFormularioTrabajoAltura.acordeon5Check11 =
    document.getElementById("acordeon5-check11").checked;
  impresionFormularioTrabajoAltura.acordeon5Check12 =
    document.getElementById("acordeon5-check12").checked;
  impresionFormularioTrabajoAltura.acordeon5Check13 =
    document.getElementById("acordeon5-check13").checked;
  impresionFormularioTrabajoAltura.acordeon5Check14 =
    document.getElementById("acordeon5-check14").checked;
  impresionFormularioTrabajoAltura.acordeon5Check15 =
    document.getElementById("acordeon5-check15").checked;
  impresionFormularioTrabajoAltura.acordeon5Check16 =
    document.getElementById("acordeon5-check16").checked;
  impresionFormularioTrabajoAltura.acordeon5Check17 =
    document.getElementById("acordeon5-check17").checked;
  impresionFormularioTrabajoAltura.acordeon5Check18 =
    document.getElementById("acordeon5-check18").checked;
  impresionFormularioTrabajoAltura.acordeon5Check19 =
    document.getElementById("acordeon5-check19").checked;
  impresionFormularioTrabajoAltura.acordeon5Check20 =
    document.getElementById("acordeon5-check20").checked;
  impresionFormularioTrabajoAltura.acordeon5Check21 =
    document.getElementById("acordeon5-check21").checked;
  impresionFormularioTrabajoAltura.acordeon5Check22 =
    document.getElementById("acordeon5-check22").checked;
  impresionFormularioTrabajoAltura.acordeon5Check23 =
    document.getElementById("acordeon5-check23").checked;
  impresionFormularioTrabajoAltura.acordeon5Check24 =
    document.getElementById("acordeon5-check24").checked;
  impresionFormularioTrabajoAltura.acordeon5Check25 =
    document.getElementById("acordeon5-check25").checked;
  impresionFormularioTrabajoAltura.acordeon5Check26 =
    document.getElementById("acordeon5-check26").checked;
  impresionFormularioTrabajoAltura.acordeon5Check27 =
    document.getElementById("acordeon5-check27").checked;
  impresionFormularioTrabajoAltura.acordeon5Check28 =
    document.getElementById("acordeon5-check28").checked;
  impresionFormularioTrabajoAltura.acordeon5Check29 =
    document.getElementById("acordeon5-check29").checked;
  // acordeon 6 Sistemas de Restriccion y Posicionamiento
  impresionFormularioTrabajoAltura.acordeon6Check1 =
    document.getElementById("acordeon6-check1").checked;
  impresionFormularioTrabajoAltura.acordeon6Check2 =
    document.getElementById("acordeon6-check2").checked;
  impresionFormularioTrabajoAltura.acordeon6Check3 =
    document.getElementById("acordeon6-check3").checked;
  impresionFormularioTrabajoAltura.acordeon6Check4 =
    document.getElementById("acordeon6-check4").checked;
  impresionFormularioTrabajoAltura.acordeon6Check5 =
    document.getElementById("acordeon6-check5").checked;
  impresionFormularioTrabajoAltura.acordeon6Check6 =
    document.getElementById("acordeon6-check6").checked;
  impresionFormularioTrabajoAltura.acordeon6Check7 =
    document.getElementById("acordeon6-check7").checked;
  impresionFormularioTrabajoAltura.acordeon6Check8 =
    document.getElementById("acordeon6-check8").checked;
  impresionFormularioTrabajoAltura.acordeon6Check9 =
    document.getElementById("acordeon6-check9").checked;
  impresionFormularioTrabajoAltura.acordeon6Check10 =
    document.getElementById("acordeon6-check10").checked;
  impresionFormularioTrabajoAltura.acordeon6Check11 =
    document.getElementById("acordeon6-check11").checked;
  impresionFormularioTrabajoAltura.acordeon6Check12 =
    document.getElementById("acordeon6-check12").checked;
  // acordeon 7 Medidas de Prevencion Contra Caidas
  impresionFormularioTrabajoAltura.acordeon7Check1 =
    document.getElementById("acordeon7-check1").checked;
  impresionFormularioTrabajoAltura.acordeon7Check2 =
    document.getElementById("acordeon7-check2").checked;
  impresionFormularioTrabajoAltura.acordeon7Check3 =
    document.getElementById("acordeon7-check3").checked;
  impresionFormularioTrabajoAltura.acordeon7Check4 =
    document.getElementById("acordeon7-check4").checked;
  impresionFormularioTrabajoAltura.acordeon7Check5 =
    document.getElementById("acordeon7-check5").checked;
  // acordeon 8 Aprobacion y validacion permiso
  impresionFormularioTrabajoAltura.archicoFirmaDigitalSst =
    document.getElementById("archivo-firma-digital-sst").value;
  impresionFormularioTrabajoAltura.registroFotograficoTrabajoAlturas =
    document.getElementById("registro-fotografico-trabajo-alturas").value;
  impresionFormularioTrabajoAltura.seleccionTrabajadorAlturas =
    document.getElementById("selecion-trabajador-alturas").value;
  impresionFormularioTrabajoAltura.seleccionAutorizadorAlturas =
    document.getElementById("seleccion-autorizador-alturas").value;

  console.log(impresionFormularioTrabajoAltura);
});
