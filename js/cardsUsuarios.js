// const usuario = {
//   nombre: "Lucila ",
//   apellido: "Valbuena",
//   profesion: "soldador",
//   celular: 34132976801,
//   arl: "Colpatria",
//   eps: "Compensar",
// };

// //Nombre

// const contenedorNombre = document.getElementById("nombre-ingreso");
// const etiquetaNombre = document.createElement("h5"); // crear Elemento

// let textoNombre = document.createTextNode(usuario.nombre); //crear el texto
// etiquetaNombre.appendChild(textoNombre); // uniendo texto con etiqueta
// contenedorNombre.appendChild(etiquetaNombre); // uniendo el contenedor don el texto

// // //apellido
// const contenedorApellido = document.getElementById("apellido-ingreso");
// const etiquetaApellido = document.createElement("h5"); // crear Elemento

// let textoApellido = document.createTextNode(usuario.apellido); //crear el texto
// etiquetaApellido.appendChild(textoApellido); // uniendo texto con etiqueta
// contenedorApellido.appendChild(etiquetaApellido); // uniendo el contenedor don el texto

// // celular

// const contenedorCelular = document.getElementById("numero-celular");
// const etiqutaCelular = document.createElement("h5"); // crear Elemento

// let textoCelular = document.createTextNode(usuario.celular); //crear el texto
// etiqutaCelular.appendChild(textoCelular); // uniendo texto con etiqueta
// contenedorCelular.appendChild(etiqutaCelular); // uniendo el contenedor don el texto

// // // correo

// const contenedorProfesion = document.getElementById("profesion-ingreso");
// const etiquetaProfesion = document.createElement("h5"); // crear Elemento

// let textoProfesion = document.createTextNode(usuario.profesion); //crear el texto
// etiquetaProfesion.appendChild(textoProfesion); // uniendo texto con etiqueta
// contenedorProfesion.appendChild(etiquetaProfesion); // uniendo el contenedor don el texto

// // // Arl usuario

// const contenedorArl = document.getElementById("arl-ingreso");
// const etiquetaArl = document.createElement("h5"); // crear Elemento

// let textoArl = document.createTextNode(usuario.arl); //crear el texto
// etiquetaArl.appendChild(textoArl); // uniendo texto con etiqueta
// contenedorArl.appendChild(etiquetaArl); // uniendo el contenedor don el texto

// // // eps usuario

// const contenedorEps = document.getElementById("eps-ingreso");
// const etiquetaEps = document.createElement("h5"); // crear Elemento

// let textoEps = document.createTextNode(usuario.eps); //crear el texto
// etiquetaEps.appendChild(textoEps); // uniendo texto con etiqueta
// contenedorEps.appendChild(etiquetaEps); // uniendo el contenedor don el texto

// ingresoRegistroAutorizado();

$(document).ready(function () {
  // Código para manipular el DOM
  var container = $("<div class='container'>").appendTo("body");

  // Primera fila de cards
  var row1 = $("<div class='row row-cols-2'>").appendTo(container);
  var col1 = $("<div class='col'>").appendTo(row1);
  var card1 = $("<div class='card mb-3' style='max-width: 252px'>").appendTo(
    col1
  );
  $("<img src='/img/Bruno.jpg' class='card-img-top' alt='...' />").appendTo(
    card1
  );
  var cardBody1 = $("<div class='card-body'>").appendTo(card1);
  $("<div class='card-title' id='nombre-ingreso'></div>").appendTo(cardBody1);
  $("<div class='card-title' id='apellido-ingreso'></div>").appendTo(cardBody1);
  $("<div class='card-title' id='profesion-ingreso'></div>").appendTo(
    cardBody1
  );
  var cardList1 = $("<ul class='list-group list-group-flush'>").appendTo(card1);
  $("<div class='card-title' id='numero-celular'></div>").appendTo(cardList1);
  $("<div class='card-title' id='arl-ingreso'></div>").appendTo(cardList1);
  $("<div class='card-title' id='eps-ingreso'></div>").appendTo(cardList1);
  var cardBody2 = $("<div class='card-body'>").appendTo(card1);
  $(
    "<a href='../html/visualizacion-cards-trabajadores.html' class='card-link'>Mas inf.....</a>"
  ).appendTo(cardBody2);

  var col2 = $("<div class='col'>").appendTo(row1);
  var card2 = $("<div class='card mb-3' style='max-width: 252px'>").appendTo(
    col2
  );
  $("<img src='/img/Bruno.jpg' class='card-img-top' alt='...' />").appendTo(
    card2
  );
  var cardBody3 = $("<div class='card-body'>").appendTo(card2);
  $("<div class='card-title' id='nombre-ingreso'></div>").appendTo(cardBody3);
  $("<div class='card-title' id='apellido-ingreso'></div>").appendTo(cardBody3);
  $("<div class='card-title' id='profesion-ingreso'></div>").appendTo(
    cardBody3
  );
  var cardList2 = $("<ul class='list-group list-group-flush'>").appendTo(card2);
  $("<div class='card-title' id='numero-celular'></div>").appendTo(cardList2);
  $("<div class='card-title' id='arl-ingreso'></div>").appendTo(cardList2);
  $("<div class='card-title' id='eps-ingreso'></div>").appendTo(cardList2);
  var cardBody4 = $("<div class='card-body'>").appendTo(card2);
  $(
    "<a href='../html/visualizacion-cards-trabajadores.html' class='card-link'>Mas inf.....</a>"
  ).appendTo(cardBody4);

  // Segunda fila de cards
  var row2 = $("<div class='row row-cols-2'>").appendTo(container);
  var col3 = $("<div class='col'>").appendTo(row2);
  var card3 = $("<div class='card mb-3' style='max-width: 252px'>").appendTo(
    col3
  );
  $("<img src='/img/Bruno.jpg' class='card-img-top' alt='...' />").appendTo(
    card3
  );
  var cardBody5 = $("<div class='card-body'>").appendTo(card3);
  $("<div class='card-title' id='nombre-ingreso'></div>").appendTo(cardBody5);
  $("<div class='card-title' id='apellido-ingreso'></div>").appendTo(cardBody5);
  $("<div class='card-title' id='profesion-ingreso'></div>").appendTo(
    cardBody5
  );
  var cardList3 = $("<ul class='list-group list-group-flush'>").appendTo(card3);
  $("<div class='card-title' id='numero-celular'></div>").appendTo(cardList3);
  $("<div class='card-title' id='arl-ingreso'></div>").appendTo(cardList3);
  $("<div class='card-title' id='eps-ingreso'></div>").appendTo(cardList3);
  var cardBody6 = $("<div class='card-body'>").appendTo(card3);
  $(
    "<a href='../html/visualizacion-cards-trabajadores.html' class='card-link'>Mas inf.....</a>"
  ).appendTo(cardBody6);

  var col4 = $("<div class='col'>").appendTo(row2);
  var card4 = $("<div class='card mb-3' style='max-width: 252px'>").appendTo(
    col4
  );
  $("<img src='/img/Bruno.jpg' class='card-img-top' alt='...' />").appendTo(
    card4
  );
  var cardBody7 = $("<div class='card-body'>").appendTo(card4);
  $("<div class='card-title' id='nombre-ingreso'></div>").appendTo(cardBody7);
  $("<div class='card-title' id='apellido-ingreso'></div>").appendTo(cardBody7);
  $("<div class='card-title' id='profesion-ingreso'></div>").appendTo(
    cardBody7
  );
  var cardList4 = $("<ul class='list-group list-group-flush'>").appendTo(card4);
  $("<div class='card-title' id='numero-celular'></div>").appendTo(cardList4);
  $("<div class='card-title' id='arl-ingreso'></div>").appendTo(cardList4);
  $("<div class='card-title' id='eps-ingreso'></div>").appendTo(cardList4);
  var cardBody8 = $("<div class='card-body'>").appendTo(card4);
  $(
    "<a href='../html/visualizacion-cards-trabajadores.html' class='card-link'>Mas inf.....</a>"
  ).appendTo(cardBody8);

  // Puedes añadir más filas y cards según sea necesario
});
