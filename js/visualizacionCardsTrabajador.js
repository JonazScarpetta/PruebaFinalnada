document.addEventListener("DOMContentLoaded", function () {
  // Crear el encabezado
  var headerContainer = document.createElement("div");
  headerContainer.classList.add("container-sm", "mt-5");

  var headerRow = document.createElement("div");
  headerRow.classList.add(
    "row",
    "bg-primary",
    "m-3",
    "p-3",
    "border",
    "border-primary-subtle",
    "border-5",
    "rounded-4"
  );

  var backButtonCol = document.createElement("div");
  backButtonCol.classList.add("col-3", "text-center", "text-white");
  backButtonCol.style.cursor = "pointer";
  backButtonCol.addEventListener("click", function () {
    window.history.back();
  });

  var backButtonSvg = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  backButtonSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  backButtonSvg.setAttribute("width", "30");
  backButtonSvg.setAttribute("height", "30");
  backButtonSvg.setAttribute("fill", "currentColor");
  backButtonSvg.setAttribute("class", "bi bi-arrow-left-square");
  backButtonSvg.setAttribute("viewBox", "0 0 16 16");

  var backButtonPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  backButtonPath.setAttribute("fill-rule", "evenodd");
  backButtonPath.setAttribute(
    "d",
    "M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
  );

  backButtonSvg.appendChild(backButtonPath);
  backButtonCol.appendChild(backButtonSvg);

  var headerTitleCol = document.createElement("div");
  headerTitleCol.classList.add("col-9", "text-center", "text-white");
  var headerTitle = document.createElement("h5");
  headerTitle.appendChild(document.createTextNode("Cards"));
  headerTitleCol.appendChild(headerTitle);

  headerRow.appendChild(backButtonCol);
  headerRow.appendChild(headerTitleCol);
  headerContainer.appendChild(headerRow);
  document.body.appendChild(headerContainer);

  // Crear el formulario de cards
  var formContainer = document.createElement("div");
  formContainer.classList.add("container");

  var form = document.createElement("form");

  var formGroupLabels = [
    "Nombre",
    "Apellido",
    "Tipo de Documento",
    "Numero de Documento",
    "Cargo",
    "Numero de Celular",
    "Contacto en caso de Emergencia",
    "Numero de Celular en caso de Emergencia",
    "Cargar Planilla de Seguridad Social",
    "Fecha de vencimiento Planilla",
    "Cargar Curso de Alturas",
    "Fecha de vencimiento Curso de Alturas",
    "Cargar Examen Médico",
    "Fecha de vencimiento Examen Médico",
    "Nombre de ARL",
    "Nombre de EPS",
    "Nombre de tu Fondo de Pensiones",
    "Cargar Fotos Registro Fotográfico",
    "Cargar Firma Digital",
  ];

  var formGroupIds = [
    "nombre-pt",
    "apellido-pt",
    "seleccion-documento-trabajador",
    "numero-documento-trabajador-pt",
    "cargo-pt",
    "numero-de-celular-trabajador",
    "contacto-emergencia",
    "numero-celular-emergencia",
    "planilla-seguridad-social",
    "fecha-vencimiento-planilla",
    "curso-alturas",
    "fecha-vencimiento-curso-alturas",
    "examen-medico",
    "fecha-vencimiento-examen-medico",
    "nombre-arl",
    "nombre-eps",
    "nombre-fondo-pensiones",
    "registro-fotografico-trabajador",
    "firma-digital-trabajador",
  ];

  for (var i = 0; i < formGroupLabels.length; i++) {
    var formGroup = document.createElement("div");
    formGroup.classList.add("mb-3");

    var label = document.createElement("label");
    label.setAttribute("for", formGroupIds[i]);
    label.classList.add("form-label");
    label.appendChild(document.createTextNode(formGroupLabels[i]));

    if (i === 2) {
      // Tipo de Documento
      var select = document.createElement("select");
      select.classList.add("form-select", "form-label");
      select.setAttribute("aria-label", "Default select example");
      select.id = formGroupIds[i];

      var defaultOption = document.createElement("option");
      defaultOption.setAttribute("selected", "true");
      defaultOption.appendChild(
        document.createTextNode("Seleccione una opción")
      );
      select.appendChild(defaultOption);

      var options = [
        "Cedula de Ciudadania",
        "Cedula de Extranjeria",
        "Permiso de permanencia",
      ];

      for (var j = 0; j < options.length; j++) {
        var option = document.createElement("option");
        option.value = options[j];
        option.classList.add("form-control");
        option.appendChild(document.createTextNode(options[j]));
        select.appendChild(option);
      }

      formGroup.appendChild(label);
      formGroup.appendChild(select);
    } else if (i === 8 || i === 10 || i === 12 || i === 14 || i === 16) {
      // File inputs
      var inputFile = document.createElement("input");
      inputFile.classList.add("form-control");
      inputFile.setAttribute("type", "file");
      inputFile.id = formGroupIds[i];

      formGroup.appendChild(label);
      formGroup.appendChild(inputFile);
    } else if (i === 9 || i === 11 || i === 13 || i === 15) {
      // Date inputs
      var inputDate = document.createElement("input");
      inputDate.classList.add("form-control");
      inputDate.setAttribute("type", "date");
      inputDate.id = formGroupIds[i];

      formGroup.appendChild(label);
      formGroup.appendChild(inputDate);
    } else {
      // Text inputs
      var inputText = document.createElement("input");
      inputText.classList.add("form-control");
      inputText.setAttribute("type", "text");
      inputText.id = formGroupIds[i];
      inputText.setAttribute("placeholder", "Escribe aquí");

      formGroup.appendChild(label);
      formGroup.appendChild(inputText);
    }

    form.appendChild(formGroup);
  }

  formContainer.appendChild(form);
  document.body.appendChild(formContainer);

  // Crear el footer
  var footer = document.createElement("div");
  footer.classList.add(
    "container-sm",
    "justify-content-end",
    "sticky",
    "bottom"
  );
  var footerRow = document.createElement("div");
  footerRow.classList.add("row", "m-3");
  var footerButtonCol = document.createElement("div");
  footerButtonCol.classList.add("col");

  var salirButton = createButton("Salir", "/index.html");
  var historicoButton = createButton(
    "Historico",
    "/html/archivos-guardados.html"
  );
  var plantillaButton = createButton("Plantilla", "/html/plantillas.html");

  footerButtonCol.appendChild(salirButton);
  footerButtonCol.appendChild(historicoButton);
  footerButtonCol.appendChild(plantillaButton);

  footerRow.appendChild(footerButtonCol);
  footer.appendChild(footerRow);
  document.body.appendChild(footer);

  // Crear botón de emergencia
  var emergencyButtonRow = document.createElement("div");
  emergencyButtonRow.classList.add("row", "sticky-bottom", "m-3");

  var emergencyButtonCol = document.createElement("div");
  emergencyButtonCol.classList.add("col", "text-center");

  var emergencyButton = createButton("Emergencia", "#");
  emergencyButton.classList.add("btn-danger");

  emergencyButtonCol.appendChild(emergencyButton);
  emergencyButtonRow.appendChild(emergencyButtonCol);
  document.body.appendChild(emergencyButtonRow);
});

function createButton(text, link) {
  var button = document.createElement("button");
  button.type = "button";
  button.classList.add("btn", "btn-primary");
  button.style.setProperty("--bs-btn-padding-y", "0.25rem");
  button.style.setProperty("--bs-btn-padding-x", "0.5rem");
  button.style.setProperty("--bs-btn-font-size", "0.75rem");

  var buttonLink = document.createElement("a");
  buttonLink.classList.add("text-white");
  buttonLink.href = link;
  buttonLink.appendChild(document.createTextNode(text));

  button.appendChild(buttonLink);
  return button;
}
