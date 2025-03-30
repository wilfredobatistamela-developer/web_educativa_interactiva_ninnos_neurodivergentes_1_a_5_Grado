const estrella = document.getElementById("estrella");
const mensaje = document.getElementById("mensajeResultado");

estrella.addEventListener("click", () => {
  mensaje.textContent = "¡Muy bien! Has hecho clic correctamente. ⭐";
  mensaje.style.color = "green";

  // Aquí luego podríamos guardar el acierto en el archivo JSON del estudiante
});
