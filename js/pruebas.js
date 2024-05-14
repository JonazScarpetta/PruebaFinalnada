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
