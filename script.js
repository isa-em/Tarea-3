function abrirMenu() {
  document.getElementById("sidebar").style.left = "0";
}

function cerrarMenu() {
  document.getElementById("sidebar").style.left = "-550px";
}

function mostrar(seccion) {
  document.querySelectorAll("main section").forEach(s => s.classList.add("oculto"));
  document.getElementById(seccion).classList.remove("oculto");

  let titulo = "MOOD";
  if (seccion === "acerca") titulo = "El Buzón que nunca dije";
  if (seccion === "historia") titulo = "Cuéntanos tu Historia";
  if (seccion === "nosotros") titulo = "Nosotros";
  if (seccion === "gracias") titulo = "¡Gracias!";
  document.getElementById("titulo-pagina").innerText = titulo;

  cerrarMenu();
}


function validarFormulario() {
  var titulo = document.getElementById("titulo").value.trim();
  var historia = document.getElementById("historia-texto").value.trim();
  var acepto = document.getElementById("acepto").checked;

  if (titulo === "" || historia === "") {
    alert("Por favor completa todos los campos.");
    return false;
  }

  if (!acepto) {
    alert("Debes aceptar la condición de anonimato.");
    return false;
  }

  // Mostrar página de gracias
  mostrar("gracias");
  return false; // Evita recargar la página
}