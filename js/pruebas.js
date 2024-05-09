document.addEventListener("DOMContentLoaded", function () {
  // Crear el encabezado
  var header = document.createElement("header");
  header.classList.add(
    "container-sm",
    "fondo",
    "mx-auto",
    "p-5",
    "mt-5",
    "mb-5",
    "bg-primary",
    "text-center",
    "text-white",
    "border",
    "border-primary-subtle",
    "border-5",
    "rounded-4"
  );
  header.style.width = "250px";
  var headerTitle = document.createElement("h1");
  headerTitle.appendChild(document.createTextNode("AlturaAPP"));
  header.appendChild(headerTitle);
  document.body.appendChild(header);

  // Crear la sección de usuario de Registro
  var sectionRegistro = createSection(
    "Usuario de Registro",
    "/html/iniciar-sesion-registro.html"
  );
  document.body.appendChild(sectionRegistro);

  // Crear la sección de usuario de Autorización
  var sectionAutorizacion = createSection(
    "Usuario de Autorización",
    "/html/iniciar-sesion-autorizador.html"
  );
  document.body.appendChild(sectionAutorizacion);

  // Crear la sección de Nuevo Usuario
  var sectionNuevoUsuario = createSection(
    "Nuevo Usuario",
    "/html/registro.html"
  );
  document.body.appendChild(sectionNuevoUsuario);
});

function createSection(title, link) {
  var section = document.createElement("section");
  section.classList.add(
    "container-sm",
    "fondo",
    "mx-auto",
    "p-3",
    "mt-3",
    "mb-3",
    "text-center"
  );

  var article = document.createElement("article");
  var articleTitle = document.createElement("h2");
  articleTitle.appendChild(document.createTextNode(title));
  article.appendChild(articleTitle);
  section.appendChild(article);

  var button = document.createElement("button");
  button.type = "button";
  button.classList.add("btn", "btn-primary");
  var buttonLink = document.createElement("a");
  buttonLink.classList.add("text-white");
  buttonLink.href = link;
  buttonLink.appendChild(document.createTextNode("Iniciar Sesión"));
  button.appendChild(buttonLink);
  section.appendChild(button);

  return section;
}
