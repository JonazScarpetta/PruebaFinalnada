// import "./pruebaFirebase.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBOZZcTZPW7RoDGyrw7ZyoyayldwEfYtbQ",
  authDomain: "crud-proyectofinal.firebaseapp.com",
  databaseURL: "https://crud-proyectofinal-default-rtdb.firebaseio.com",
  projectId: "crud-proyectofinal",
  storageBucket: "crud-proyectofinal.appspot.com",
  messagingSenderId: "425385465093",
  appId: "1:425385465093:web:94460f496253200b48d36c",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { auth } from "./pruebaFirebase.js";
const userCredentials = createUserWithEmailAndPassword(
  auth,
  paginaRegistro.nombrePaginaRegistro,
  paginaRegistro.apellidoPaginaRegistro,
  paginaRegistro.correoRegistro,
  paginaRegistro.claveRegistro,
  paginaRegistro.confirmacionClaveRegistro
);

// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
// } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
// import {
//   setDoc,
//   doc,
//   getFirestore,
// } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";
// const firebaseConfig = {
//   apiKey: "AIzaSyBOZZcTZPW7RoDGyrw7ZyoyayldwEfYtbQ",
//   authDomain: "crud-proyectofinal.firebaseapp.com",
//   databaseURL: "https://crud-proyectofinal-default-rtdb.firebaseio.com",
//   projectId: "crud-proyectofinal",
//   storageBucket: "crud-proyectofinal.appspot.com",
//   messagingSenderId: "425385465093",
//   appId: "1:425385465093:web:94460f496253200b48d36c",
// };

// const app = initializeApp();
// const auth = getAuth(app);
// const db = getFirestore(app);

// const paginaRegistro = document.getElementById(
//   "iniciar-sesion-pagina-registro"
// );
// paginaRegistro.addEventListener("click", function (event) {
//   event.preventDefault();

//   const paginaRegistroingreso = {};

//   paginaRegistroingreso.nombrePaginaRegistro = document.getElementById(
//     "nombre-pagina-registro"
//   ).value;
//   paginaRegistroingreso.apellidoPaginaRegistro = document.getElementById(
//     "apellido-pagina-registro"
//   ).value;
//   paginaRegistroingreso.opcionDocumento =
//     document.getElementById("opcion-documento").value;
//   paginaRegistroingreso.numeroIdentificacion = document.getElementById(
//     "numero-de-identificacion"
//   ).value;
//   paginaRegistroingreso.numeroTelefonico =
//     document.getElementById("numero-telefonico").value;
//   paginaRegistroingreso.cargo = document.getElementById("cargo").value;
//   paginaRegistroingreso.correoRegistro =
//     document.getElementById("correo-registro").value;
//   paginaRegistroingreso.cargarImagen =
//     document.getElementById("Cargar-imagen").value;
//   paginaRegistroingreso.claveRegistro =
//     document.getElementById("clave-de-registro").value;
//   paginaRegistroingreso.confirmacionClaveRegistro = document.getElementById(
//     "confirmacion-clave-de-registro"
//   ).value;

//   console.log(paginaRegistroingreso);
//   createUserWithEmailAndPassword(auth, paginaRegistro.nombrePaginaRegistro, paginaRegistro.apellidoPaginaRegistro, paginaRegistro.correoRegistro, paginaRegistro.claveRegistro, paginaRegistro.confirmacionClaveRegistro);

//   await setDoc(doc(db, "users", auth.currentUser.uid), {
//     nombrePaginaRegistro,
//     apellidoPaginaRegistro,
//     correoRegistro,
//     claveRegistro,
//     confirmacionClaveRegistro,
//   })

//   alert(" Register Successfully!");
//   window.location.href = "../htnl/pruebasIniciarSesion"

//   // Validar contraseñas basica

//   // function validarContraseñas() {
//   //   // Obtener las contraseñas ingresadas por el usuario

//   //   // Comparar las contraseñas
//   //   if (
//   //     paginaRegistroingreso.claveRegistro ===
//   //     paginaRegistroingreso.confirmacionClaveRegistro
//   //   ) {
//   //     // Contraseñas coinciden, permitir el ingreso
//   //     alert("Contraseñas coinciden. ¡Bienvenido!");
//   //   } else {
//   //     // Contraseñas no coinciden, mostrar alerta de error
//   //     alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
//   //   }
//   // }
//   // funcion validar contraseña avanzado

//   function validarContraseñas() {
//     // Expresiones regulares para verificar las condiciones
//     var tieneMayuscula = /[A-Z]/.test(paginaRegistroingreso.claveRegistro);
//     var tieneNumero = /\d/.test(paginaRegistroingreso.claveRegistro);
//     var longitudValida = paginaRegistroingreso.claveRegistro.length >= 8;

//     // Verificar las condiciones
//     if (
//       paginaRegistroingreso.claveRegistro ===
//         paginaRegistroingreso.confirmacionClaveRegistro &&
//       tieneMayuscula &&
//       tieneNumero &&
//       longitudValida
//     ) {
//       alert("Contraseñas coinciden. ¡Bienvenido!");
//       window.location.href = "/index.html";
//     } else {
//       var mensajeError =
//         "Las contraseñas no coinciden o no cumplen con los requisitos:\n";
//       if (
//         paginaRegistroingreso.claveRegistro !==
//         paginaRegistroingreso.confirmacionClaveRegistro
//       ) {
//         mensajeError += "- Las contraseñas no coinciden.\n";
//       }
//       if (!tieneMayuscula) {
//         mensajeError += "- Debe incluir al menos una letra mayúscula.\n";
//       }
//       if (!tieneNumero) {
//         mensajeError += "- Debe incluir al menos un número.\n";
//       }
//       if (!longitudValida) {
//         mensajeError += "- Debe tener al menos 8 caracteres.\n";
//       }
//       alert(mensajeError);
//     }
//   }

//   validarContraseñas();
// });

// ayuda chat gpt

// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
// } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
// import {
//   setDoc,
//   doc,
//   getFirestore,
// } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyBOZZcTZPW7RoDGyrw7ZyoyayldwEfYtbQ",
//   authDomain: "crud-proyectofinal.firebaseapp.com",
//   databaseURL: "https://crud-proyectofinal-default-rtdb.firebaseio.com",
//   projectId: "crud-proyectofinal",
//   storageBucket: "crud-proyectofinal.appspot.com",
//   messagingSenderId: "425385465093",
//   appId: "1:425385465093:web:94460f496253200b48d36c",
// };

// export const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

const paginaRegistro = document.getElementById(
  "iniciar-sesion-pagina-registro"
);
paginaRegistro.addEventListener("click", async function (event) {
  event.preventDefault();

  const paginaRegistroingreso = {};

  paginaRegistroingreso.nombrePaginaRegistro = document.getElementById(
    "nombre-pagina-registro"
  ).value;
  paginaRegistroingreso.apellidoPaginaRegistro = document.getElementById(
    "apellido-pagina-registro"
  ).value;
  // paginaRegistroingreso.opcionDocumento =
  //   document.getElementById("opcion-documento").value;
  // paginaRegistroingreso.numeroIdentificacion = document.getElementById(
  //   "numero-de-identificacion"
  // ).value;
  // paginaRegistroingreso.numeroTelefonico =
  //   document.getElementById("numero-telefonico").value;
  // paginaRegistroingreso.cargo = document.getElementById("cargo").value;
  paginaRegistroingreso.correoRegistro =
    document.getElementById("correo-registro").value;
  // paginaRegistroingreso.cargarImagen =
  //   document.getElementById("Cargar-imagen").value;
  paginaRegistroingreso.claveRegistro =
    document.getElementById("clave-de-registro").value;
  paginaRegistroingreso.confirmacionClaveRegistro = document.getElementById(
    "confirmacion-clave-de-registro"
  ).value;

  console.log(paginaRegistroingreso);
  console.log(userCredentials);
});

//   try {
//     await createUserWithEmailAndPassword(
//       auth,
//       paginaRegistroingreso.correoRegistro,
//       paginaRegistroingreso.claveRegistro
//     );
//     await setDoc(doc(db, "users", auth.currentUser.uid), {
//       nombrePaginaRegistro: paginaRegistroingreso.nombrePaginaRegistro,
//       apellidoPaginaRegistro: paginaRegistroingreso.apellidoPaginaRegistro,
//       correoRegistro: paginaRegistroingreso.correoRegistro,
//       claveRegistro: paginaRegistroingreso.claveRegistro,
//       confirmacionClaveRegistro:
//         paginaRegistroingreso.confirmacionClaveRegistro,
//     });

//     alert("¡Registro exitoso!");
//     window.location.href = "../htnl/pruebasIniciarSesion";
//   } catch (error) {
//     alert("Error al registrar: " + error.message);
//   }
// });
