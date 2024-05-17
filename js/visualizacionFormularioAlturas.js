const visualizacionFormularioAlturas = {
  ciudadTA: "Bogota",
  fechaInicioTA: "17/12/2024",
  fechaCulminacionTA: "20/01/2024",
};

// Ciudad

const contenedorCiudadTA = document.getElementById("ciudadTA");
contenedorCiudadTA.textContent = visualizacionFormularioAlturas.ciudadTA;

//fecha Inicio Actividad

const contenedorFechaInicioTA = document.getElementById("fechaInicioTA");
contenedorFechaInicioTA.textContent =
  visualizacionFormularioAlturas.fechaInicioTA;

// Fecha Culminacion Actividad

const contenedorFechaCulminacionTA =
  document.getElementById("fechaCulminacionTA");
contenedorFechaCulminacionTA.textContent =
  visualizacionFormularioAlturas.fechaCulminacionTA;
