const paginaRegistro = document.getElementById(
  "iniciar-sesion-pagina-registro"
);
paginaRegistro.addEventListener("click", function (event) {
  event.preventDefault();

  const paginaRegistroingreso = {};

  paginaRegistroingreso.nombrePaginaRegistro = document.getElementById(
    "nombre-pagina-registro"
  ).value;
  paginaRegistroingreso.apellidoPaginaRegistro = document.getElementById(
    "apellido-pagina-registro"
  ).value;
  paginaRegistroingreso.opcionDocumento =
    document.getElementById("opcion-documento").value;
  paginaRegistroingreso.numeroIdentificacion = document.getElementById(
    "numero-de-identificacion"
  ).value;
  paginaRegistroingreso.numeroTelefonico =
    document.getElementById("numero-telefonico").value;
  paginaRegistroingreso.cargo = document.getElementById("cargo").value;
  paginaRegistroingreso.correoRegistro =
    document.getElementById("correo-registro").value;
  paginaRegistroingreso.cargarImagen =
    document.getElementById("Cargar-imagen").value;
  paginaRegistroingreso.claveRegistro =
    document.getElementById("clave-de-registro").value;
  paginaRegistroingreso.confirmacionClaveRegistro = document.getElementById(
    "confirmacion-clave-de-registro"
  ).value;

  console.log(paginaRegistroingreso);

  // Validar contraseñas basica

  // function validarContraseñas() {
  //   // Obtener las contraseñas ingresadas por el usuario

  //   // Comparar las contraseñas
  //   if (
  //     paginaRegistroingreso.claveRegistro ===
  //     paginaRegistroingreso.confirmacionClaveRegistro
  //   ) {
  //     // Contraseñas coinciden, permitir el ingreso
  //     alert("Contraseñas coinciden. ¡Bienvenido!");
  //   } else {
  //     // Contraseñas no coinciden, mostrar alerta de error
  //     alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
  //   }
  // }
  // funcion validar contraseña avanzado

  function validarContraseñas() {
    // Expresiones regulares para verificar las condiciones
    var tieneMayuscula = /[A-Z]/.test(paginaRegistroingreso.claveRegistro);
    var tieneNumero = /\d/.test(paginaRegistroingreso.claveRegistro);
    var longitudValida = paginaRegistroingreso.claveRegistro.length >= 8;

    // Verificar las condiciones
    if (
      paginaRegistroingreso.claveRegistro ===
        paginaRegistroingreso.confirmacionClaveRegistro &&
      tieneMayuscula &&
      tieneNumero &&
      longitudValida
    ) {
      alert("Contraseñas coinciden. ¡Bienvenido!");
      window.location.href = "/index.html";
    } else {
      var mensajeError =
        "Las contraseñas no coinciden o no cumplen con los requisitos:\n";
      if (
        paginaRegistroingreso.claveRegistro !==
        paginaRegistroingreso.confirmacionClaveRegistro
      ) {
        mensajeError += "- Las contraseñas no coinciden.\n";
      }
      if (!tieneMayuscula) {
        mensajeError += "- Debe incluir al menos una letra mayúscula.\n";
      }
      if (!tieneNumero) {
        mensajeError += "- Debe incluir al menos un número.\n";
      }
      if (!longitudValida) {
        mensajeError += "- Debe tener al menos 8 caracteres.\n";
      }
      alert(mensajeError);
    }
  }

  validarContraseñas();
});
