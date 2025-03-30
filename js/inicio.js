const estudiantes = ["Juan", "María", "Luis", "Ana"];
const contenedor = document.getElementById("listaEstudiantes");

estudiantes.forEach(nombre => {
  const boton = document.createElement("button");
  boton.className = "btn-estudiante";
  boton.textContent = nombre;
  boton.onclick = () => {
    const archivo = `data/estudiantes/${nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}.json`;

    fetch(archivo)
      .then(res => {
        if (!res.ok) throw new Error("Archivo no encontrado");
        return res.json();
      })
      .then(datos => {
        console.log("✅ Perfil cargado:", datos);

        // Aquí luego puedes redirigir o mostrar el menú de áreas habilitadas
      
        //alert(`Bienvenido ${datos.nombre}.\nÁreas habilitadas: ${datos.areas_habilitadas.join(", ")}`);
        window.location.href = `menu.html?nombre=${nombre}`;
      })
      .catch(error => {
        console.error("❌ Error al cargar perfil:", error);
        alert("No se pudo cargar el perfil del estudiante.");
      });
  };
  contenedor.appendChild(boton);
});
