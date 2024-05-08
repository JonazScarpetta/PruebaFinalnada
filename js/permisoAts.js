const formularioDatosAts = document.getElementById("enviar-datos-ats");
formularioDatosAts.addEventListener("click", function () {
  const impresionFormularioAts = {};

  impresionFormularioAts.descripcionProcedimientoTarea =
    document.getElementById("descripcion-procedimiento-tarea").value;
  //acordeon 2

  impresionFormularioAts.tipoHerramienta =
    document.getElementById("tipo-herramienta").value;

  impresionFormularioAts.descripcionHerramienta = document.getElementById(
    "descripcion-herramienta"
  ).value;
  // acordion 3 Sistemas de Acceso
  impresionFormularioAts.acordion3Checked1 =
    document.getElementById("acordion3checked1").checked;

  impresionFormularioAts.acordion3Checked2 =
    document.getElementById("acordion3checked2").checked;

  impresionFormularioAts.acordion3Checked3 =
    document.getElementById("acordion3checked3").checked;

  impresionFormularioAts.acordion3Checked4 =
    document.getElementById("acordion3checked4").checked;

  impresionFormularioAts.acordion3Checked5 =
    document.getElementById("acordion3checked5").checked;

  impresionFormularioAts.acordion3Checked6 =
    document.getElementById("acordion3checked6").checked;

  impresionFormularioAts.acordion3Otro =
    document.getElementById("acordeon3-otro").value;

  // acordeon 4 analisis de tarea

  impresionFormularioAts.acordion4Checked1 =
    document.getElementById("acordion4checked1").checked;
  impresionFormularioAts.acordion4Checked2 =
    document.getElementById("acordion4checked2").checked;
  impresionFormularioAts.acordion4Checked3 =
    document.getElementById("acordion4checked3").checked;
  impresionFormularioAts.acordion4Checked4 =
    document.getElementById("acordion4checked4").checked;
  impresionFormularioAts.acordion4Checked5 =
    document.getElementById("acordion4checked5").checked;

  //acordion 5 descripcion de la actividad

  impresionFormularioAts.pasosDetalladosActividad = document.getElementById(
    "pasos-detallados-actividad"
  ).value;

  impresionFormularioAts.peligrosExistentesPotenciales =
    document.getElementById("peligros-existentes-potenciales").value;

  impresionFormularioAts.consecuencias =
    document.getElementById("consecuencias").value;

  impresionFormularioAts.controlesRequeridos = document.getElementById(
    "controles-requeridos"
  ).value;

  // acordion 6 aprobacion y permiso Ats
  impresionFormularioAts.archivoFirmaDigitalSstAts = document.getElementById(
    "archivo-firma-digital-sst-ats"
  ).value;
  impresionFormularioAts.registroFotograficoAts = document.getElementById(
    "registro-fotografico-ats"
  ).value;
  impresionFormularioAts.seleccionPersonalAts = document.getElementById(
    "seleccion-personal-ats"
  ).value;

  impresionFormularioAts.seleccionAutorizadorAts = document.getElementById(
    "seleccion-autorizador-ats"
  ).value;

  console.log(impresionFormularioAts);
});
