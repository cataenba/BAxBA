// script.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formulario-contacto");
  const mensajeExito = document.getElementById("mensaje-exito");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    form.reset();
    mensajeExito.classList.remove("oculto");
  });
});