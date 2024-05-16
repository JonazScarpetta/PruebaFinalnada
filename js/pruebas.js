// const usuario = {
//   nombre: "Lucila ",
//   // apellido: "Valbuena",
//   // correo: "soporte.tecnico@gmail.com",
//   // celular: 34132976801,
// };

// //Nombre

// const contenedorNombre = document.getElementById("nombre-ingreso");
// const etiquetaNombre = document.createElement("h3"); // crear Elemento

// let textoNombre = document.createTextNode(usuario.nombre); //crear el texto
// etiquetaNombre.appendChild(textoNombre); // uniendo texto con etiqueta
// contenedorNombre.appendChild(etiquetaNombre); // uniendo el contenedor don el texto

//apellido

// const contenedorApellido = document.getElementById("apellido-ingreso");
// const etiquetaApellido = document.createElement("h3"); // crear Elemento

// let textoApellido = document.createTextNode(usuario.apellido); //crear el texto
// etiquetaApellido.appendChild(textoApellido); // uniendo texto con etiqueta
// contenedorApellido.appendChild(etiquetaApellido); // uniendo el contenedor don el texto

// // celular

// const contenedorCelular = document.getElementById("numero-celular");
// const etiquetaCelular = document.createElement("h4"); // crear Elemento

// let textoCelular = document.createTextNode(usuario.celular); //crear el texto
// etiquetaCelular.appendChild(textoCelular); // uniendo texto con etiqueta
// contenedorCelular.appendChild(etiquetaCelular); // uniendo el contenedor don el texto

// // correo

// const contenedorCorreo = document.getElementById("correo-ingreso");
// const etiquetaCorreo = document.createElement("h4"); // crear Elemento

// let textoCorreo = document.createTextNode(usuario.correo); //crear el texto
// etiquetaCorreo.appendChild(textoCorreo); // uniendo texto con etiqueta
// contenedorCorreo.appendChild(etiquetaCorreo); // uniendo el contenedor don el texto
// prueba

// // icono check list
// const contenedorPrueba = document.getElementById("prueba1");
// contenedorPrueba.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-check" viewBox="0 0 16 16">
//   <path fill-rule="evenodd" d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
//   <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
// </svg>`;

// firebase
const firebaseConfig = {
  apiKey: "AIzaSyBOZZcTZPW7RoDGyrw7ZyoyayldwEfYtbQ",
  authDomain: "crud-proyectofinal.firebaseapp.com",
  projectId: "crud-proyectofinal",
  storageBucket: "crud-proyectofinal.appspot.com",
  messagingSenderId: "425385465093",
  appId: "1:425385465093:web:94460f496253200b48d36c",
};
// visualiozacion datos prueba
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

  // impresionTrabajadorDatos.contactoEmergencia = document.getElementById(
  //   "contacto-emergencia"
  // ).value;
  // impresionTrabajadorDatos.numeroCelularEmergencia = document.getElementById(
  //   "numero-celular-emergencia"
  // ).value;
  // impresionTrabajadorDatos.planillaSeguridadSocial = document.getElementById(
  //   "planilla-seguridad-social"
  // ).value;
  // impresionTrabajadorDatos.fechaVencimientoPlanilla = document.getElementById(
  //   "fecha-vencimiento-planilla"
  // ).value;
  // impresionTrabajadorDatos.cursoAlturas =
  //   document.getElementById("curso-alturas").value;
  // impresionTrabajadorDatos.fechaVencimientoCursoAlturas =
  //   document.getElementById("fecha-vencimiento-curso-alturas").value;
  // impresionTrabajadorDatos.examenMedico =
  //   document.getElementById("examen-medico").value;
  // impresionTrabajadorDatos.fechaVencimientoExamenMedico =
  //   document.getElementById("fecha-vencimiento-examen-medico").value;
  // impresionTrabajadorDatos.nombreArl =
  //   document.getElementById("nombre-arl").value;
  // impresionTrabajadorDatos.nombreEps =
  //   document.getElementById("nombre-eps").value;
  // impresionTrabajadorDatos.nombreFondoPensiones = document.getElementById(
  //   "nombre-fondo-pensiones"
  // ).value;
  // impresionTrabajadorDatos.registroFotograficoTrabajador =
  //   document.getElementById("registro-fotografico-trabajador").value;
  // impresionTrabajadorDatos.firmaDigitalTrabajador = document.getElementById(
  //   "firma-digital-trabajador"
  // ).value;

  console.log(impresionTrabajadorDatos);
});
const studentRef = firebase.database().ref("estudents");
const registerStudent = studentRef.push();
registerStudent.set({
  Uid: registerStudent.path.pieces_[1],
  Nombre: impresionTrabajadorDatos.nombrePT,
  Apellido: impresionTrabajadorDatos.apellidoPT,
  Seleccion_documento_trabajador:
    impresionTrabajadorDatos.seleccionDocumentoTrabajador,
  Numero_Documento_Trabajador:
    impresionTrabajadorDatos.numeroDocumentoTrabajadorPT,
  Numero_Celular_trabajador: impresionTrabajadorDatos.numeroCelularTrabajador,
});
$(document).ready(function () {
  // Crear contenedor principal
  var container = $("<div class='container'>").appendTo("body");

  // Crear fila dentro del contenedor
  var row = $("<div class='row ms-3'>").appendTo(container);

  // Primera tarjeta
  var card1 = $("<div class='card' style='width: 18rem;'>").appendTo(row);
  $("<img src='/img/Bruno.jpg' class='card-img-top' alt='...'>").appendTo(
    card1
  );
  var cardBody1 = $("<div class='card-body'>").appendTo(card1);
  $("<div class='card-title' id='nombre-ingreso'></div>").appendTo(cardBody1);
  $("<div class='card-title' id='apellido-ingreso'></div>").appendTo(cardBody1);
  $("<div class='card-title' id='profesion-ingreso'></div>").appendTo(
    cardBody1
  );
  var listGroup1 = $("<ul class='list-group list-group-flush'>").appendTo(
    card1
  );
  $("<div class='card-title' id='numero-celular'></div>").appendTo(listGroup1);
  $("<div class='card-title' id='arl-ingreso'></div>").appendTo(listGroup1);
  $("<div class='card-title' id='eps-ingreso'></div>").appendTo(listGroup1);
  var cardFooter1 = $("<div class='card-body'>").appendTo(card1);
  $(
    "<a href='../html/visualizacion-cards-trabajadores.html' class='card-link'>Mas inf.....</a>"
  ).appendTo(cardFooter1);

  // Segunda tarjeta
  var card2 = $("<div class='card' style='width: 18rem;'>").appendTo(row);
  $("<img src='...' class='card-img-top' alt='...'>").appendTo(card2);
  var cardBody2 = $("<div class='card-body'>").appendTo(card2);
  $("<h5 class='card-title'>Card title</h5>").appendTo(cardBody2);
  $(
    "<p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>"
  ).appendTo(cardBody2);
  var listGroup2 = $("<ul class='list-group list-group-flush'>").appendTo(
    card2
  );
  $("<li class='list-group-item'>An item</li>").appendTo(listGroup2);
  $("<li class='list-group-item'>A second item</li>").appendTo(listGroup2);
  $("<li class='list-group-item'>A third item</li>").appendTo(listGroup2);
  var cardFooter2 = $("<div class='card-body'>").appendTo(card2);
  $("<a href='#' class='card-link'>Card link</a>").appendTo(cardFooter2);
  $("<a href='#' class='card-link'>Another link</a>").appendTo(cardFooter2);

  // Contenedor adicional con botones
  var containerSm = $(
    "<div class='container-sm justify-content-end sticky bottom'>"
  ).appendTo("body");
  $("<br>").appendTo(containerSm);
  var containerTextCenter = $(
    "<div class='container text-center mt-3'>"
  ).appendTo(containerSm);
  var rowButtons = $("<div class='row row-cols-3'>").appendTo(
    containerTextCenter
  );

  var col1 = $("<div class='col'>").appendTo(rowButtons);
  var button1 = $(
    "<button type='button' class='btn btn-primary' style='--bs-btn-padding-y: 0.25rem; --bs-btn-padding-x: 0.5rem; --bs-btn-font-size: 0.75rem;'>"
  ).appendTo(col1);
  $("<a class='text-white' href='/index.html'>Salir</a>").appendTo(button1);

  var col2 = $("<div class='col'>").appendTo(rowButtons);
  var button2 = $(
    "<button type='button' class='btn btn-primary' style='--bs-btn-padding-y: 0.25rem; --bs-btn-padding-x: 0.5rem; --bs-btn-font-size: 0.75rem;'>"
  ).appendTo(col2);
  $(
    "<a class='text-white' href='/html/archivos-guardados.html'>Historico</a>"
  ).appendTo(button2);

  var col3 = $("<div class='col'>").appendTo(rowButtons);
  var button3 = $(
    "<button type='button' class='btn btn-primary' style='--bs-btn-padding-y: 0.25rem; --bs-btn-padding-x: 0.5rem; --bs-btn-font-size: 0.75rem;'>"
  ).appendTo(col3);
  $(
    "<a class='text-white' href='/html/cardsUsuarios.html'>Usuarios</a>"
  ).appendTo(button3);

  // Fila adicional con botón de emergencia
  var rowEmergency = $("<div class='row sticky-bottom m-3'>").appendTo(
    container
  );
  var textCenter = $("<div class='text-center'>").appendTo(rowEmergency);
  $("<div id='liveAlertPlaceholder'></div>").appendTo(textCenter);
  $(
    "<button type='button' class='btn btn-danger' id='liveAlertBtn'>Emergencia</button>"
  ).appendTo(textCenter);
  $("<br><br>").appendTo(container);
});
