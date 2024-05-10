//sin botones inferiores
document.addEventListener("DOMContentLoaded", function () {
  // Crear contenedor principal
  var container = document.createElement("div");
  container.classList.add("container");

  // Crear el contenedor secundario
  var secondaryContainer = document.createElement("div");
  secondaryContainer.classList.add("container");

  // Agregar imagen al contenedor secundario
  var img1 = createImage("/img/Bruno.jpg");
  var img2 = createImage("/img/Paisaje1.jpg");
  var img3 = createImage("/img/paisaje2.jpg");
  var img4 = createImage("/img/firma.jpg");

  secondaryContainer.appendChild(img1);
  secondaryContainer.appendChild(img2);
  secondaryContainer.appendChild(img3);
  secondaryContainer.appendChild(img4);

  // Agregar contenedor secundario al contenedor principal
  container.appendChild(secondaryContainer);

  // Crear formulario
  var form = document.createElement("form");

  // Agregar elementos al formulario
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

  // Agregar formulario al contenedor principal
  container.appendChild(form);

  // Agregar contenedor principal al body
  document.body.appendChild(container);
});

function createImage(src) {
  var imgContainer = document.createElement("div");
  imgContainer.classList.add("mb-3");
  imgContainer.style.width = "10rem";

  var img = document.createElement("img");
  img.setAttribute("src", src);
  img.classList.add("img-thumbnail");
  img.setAttribute("alt", "Trabajadores");

  imgContainer.appendChild(img);

  return imgContainer;
}
