const visualizacionFormularioAts = {
  desProTarAts:
    "Descripcion y procedimiento tarea hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj yyyyyyyyyyy",
  TipoHerramientaAts: "electrica",
  descripcionHerramientaAts: "RRRRRRRRRRRRRRRRRRRRRRRRRR descripcion",
  escaleraSencillaAts: "verdad",
  escaleraDobleAts: "falso",
  escaleraTijeraAts: "verdad",
};

// Descripcion y procedimiento tarea

const contenedorDesProTarAts = document.getElementById("desProTarAts");
contenedorDesProTarAts.textContent = visualizacionFormularioAts.desProTarAts;

//tipo de herramienta

const contenedorTipoHeramienta = document.getElementById("tipoHerranientaAts");
contenedorTipoHeramienta.textContent =
  visualizacionFormularioAts.TipoHerramientaAts;

// descripcion de la herramienta

const contenedorDescripcionHerramientaAts = document.getElementById(
  "descripcionHerramientaAts"
);
contenedorDescripcionHerramientaAts.textContent =
  visualizacionFormularioAts.descripcionHerramientaAts;

// escalera sencilla

const contenedorEscaleraSencillaAts = document.getElementById(
  "escaleraSencillaAts"
);
contenedorEscaleraSencillaAts.textContent =
  visualizacionFormularioAts.escaleraSencillaAts;

// escalera Doble

const contenedorEscaleraDobleAts = document.getElementById("escaleraDobleAts");
contenedorEscaleraDobleAts.textContent =
  visualizacionFormularioAts.escaleraDobleAts;

// escalera Tijera

const contenedorEscaleraTijeraAts =
  document.getElementById("escaleraTijeraAts");
contenedorEscaleraTijeraAts.textContent =
  visualizacionFormularioAts.escaleraTijeraAts;
