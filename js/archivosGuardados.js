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
  headerTitle.appendChild(document.createTextNode("Archivos Historico"));
  headerTitleCol.appendChild(headerTitle);

  headerRow.appendChild(backButtonCol);
  headerRow.appendChild(headerTitleCol);
  headerContainer.appendChild(headerRow);
  document.body.appendChild(headerContainer);

  // Crear las secciones de tarjetas
  var container = document.createElement("div");
  container.classList.add("container");

  for (var i = 0; i < 4; i++) {
    var row = document.createElement("div");
    row.classList.add("row");

    for (var j = 0; j < 2; j++) {
      var col = document.createElement("div");
      col.classList.add("col-sm-6", "mb-3", "mb-sm-0");

      var card = document.createElement("div");
      card.classList.add("card");

      var cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      var cardTitle = document.createElement("h5");
      cardTitle.classList.add("card-title");
      cardTitle.appendChild(document.createTextNode("Special title treatment"));

      var cardText = document.createElement("p");
      cardText.classList.add("card-text");
      cardText.appendChild(
        document.createTextNode(
          "With supporting text below as a natural lead-in to additional content."
        )
      );

      var cardLink = document.createElement("a");
      cardLink.href = "#";
      cardLink.classList.add("btn", "btn-primary");
      cardLink.appendChild(document.createTextNode("Go somewhere"));

      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
      cardBody.appendChild(cardLink);
      card.appendChild(cardBody);
      col.appendChild(card);
      row.appendChild(col);
    }

    container.appendChild(row);
  }

  document.body.appendChild(container);

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
