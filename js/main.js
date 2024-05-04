console.log("holas");

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

const alertTrigger = document.getElementById("emergencia");
alertTrigger.addEventListener("click", function () {
  let ejemplo = document.getElementById("ejemplo1").value;
  let ejemplo2 = document.getElementById("ejemplochek").checked;
  let ejemplo3 = document.getElementById("ejemplochek2");
  console.log(ejemplo);
  console.log(ejemplo2);
  console.log(ejemplo3);
});
// fin boton de alerta
