// botones pagina inicio
document
  .getElementById("btn-iniciar-sesion-registro")
  .addEventListener("click", function () {
    window.location.href = "/html/iniciar-sesion-registro.html";
  });

document
  .getElementById("btn-iniciar-sesion-autorizacion")
  .addEventListener("click", function () {
    window.location.href = "/html/iniciar-sesion-autorizador.html";
  });

document
  .getElementById("btn-nuevo-usuario")
  .addEventListener("click", function () {
    window.location.href = "/html/registro.html";
  });
// fin de botones pagina inicio

//boton de alerta//
const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
const appendAlert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};

const alertTrigger = document.getElementById("liveAlertBtn");
if (alertTrigger) {
  alertTrigger.addEventListener("click", () => {
    appendAlert("Nice, you triggered this alert message!", "success");
  });
}
// fin boton de alerta
