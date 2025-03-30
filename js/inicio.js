// Lista temporal de estudiantes
const estudiantes = ["Juan", "María", "Luis", "Ana"];

const contenedor = document.getElementById("listaEstudiantes");

estudiantes.forEach(nombre => {
  const boton = document.createElement("button");
  boton.className = "btn-estudiante";
  boton.textContent = nombre;
  boton.onclick = () => {
    alert(`Bienvenido ${nombre}! (Aquí se cargaría su perfil)`);
    // TODO: Cargar archivo JSON desde data/estudiantes/nombre.json
  };
  contenedor.appendChild(boton);
});
