// Obtener nombre del estudiante desde URL
const params = new URLSearchParams(window.location.search);
const nombre = params.get("nombre");

// Ruta del JSON del estudiante
const archivo = `data/estudiantes/${nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}.json`;

// Elementos del DOM
const titulo = document.getElementById("tituloMenu");
const menu = document.getElementById("menuAreas");

// Iconos por área (puedes personalizarlos)
const iconos = {
  raton: "🖱 Raton",
  lectoescritura: "🔠 Lectoescritura",
  matematicas: "🔢 Matemáticas",
  conocimiento: "🌍 Conocimiento",
  juegos: "🧠 Juegos"
};

// Cargar perfil del estudiante
fetch(archivo)
  .then(res => res.json())
  .then(data => {
    titulo.textContent = `Bienvenido ${data.nombre}`;

    data.areas_habilitadas.forEach(area => {
      const btn = document.createElement("button");
      btn.className = "btn-estudiante";
      btn.textContent = iconos[area] || area;
      btn.onclick = () => {
        //alert(`Entrando al módulo: ${area}`);
        // Aquí más adelante: redirigir a raton.html, lectura.html, etc.
        if (area === "raton") {
          window.location.href = "raton.html";
        } else {
          alert(`Módulo "${area}" aún no está disponible`);
        }
      };
      menu.appendChild(btn);
    });
  })
  .catch(err => {
    alert("No se pudo cargar el menú del estudiante.");
    console.error(err);
  });
