
const contenedorHabilidades = document.querySelector("#contenedor-habilidades");
const contenedorDatosCuriosos = document.querySelector("#contenedor-datos-curiosos");
const formularioContacto = document.querySelector("#formulario-contacto");
const mensajeEstadoFormulario = document.querySelector("#mensaje-estado-formulario");
const elementoAnioActual = document.querySelector("#anio-actual");



const listaHabilidades = [
  {
    titulo: "SQL",
    descripcion: "Consultas, joins y diseño de bases de datos relacionales.",
  },
  {
    titulo: "Power BI",
    descripcion: "Modelado de datos y creación de dashboards interactivos.",
  },
  {
    titulo: "Java",
    descripcion: "Programación orientada a objetos y lógica de aplicaciones.",
  },
  {
    titulo: "Redes y comunicaciones",
    descripcion: "Configuración de VLANs, subredes y equipos de red (Packet Tracer).",
  },
];

const listaDatosCuriosos = [
  {
    titulo: "Videojuegos",
    descripcion: "Juego principalmente Overwatch 2, Valorant y burnout.",
  },
  {
    titulo: "Fútbol",
    descripcion: "Me gusta ver y jugar fútbol en mi tiempo libre.",
  },
  {
    titulo: "Ensamble de PCs",
    descripcion: "Disfruto armar y optimizar computadores gamers.",
  },
];


function crearTarjeta(objetoDato) {
  const tarjeta = document.createElement("article");
  tarjeta.classList.add("tarjeta");

  const titulo = document.createElement("h3");
  titulo.textContent = objetoDato.titulo;

  const descripcion = document.createElement("p");
  descripcion.textContent = objetoDato.descripcion;

  // appendChild inserta cada elemento hijo dentro de la tarjeta
  tarjeta.appendChild(titulo);
  tarjeta.appendChild(descripcion);

  return tarjeta;
}


function renderizarTarjetas(arregloDatos, contenedorDestino) {
  arregloDatos.forEach((objetoDato) => {
    const tarjeta = crearTarjeta(objetoDato);
    contenedorDestino.appendChild(tarjeta);
  });
}



function manejarEnvioFormulario(evento) {
  evento.preventDefault();

  const campoNombre = document.querySelector("#campo-nombre");
  const campoCorreo = document.querySelector("#campo-correo");
  const campoAsunto = document.querySelector("#campo-asunto");
  const campoAceptacion = document.querySelector("#campo-aceptacion");

  const hayCamposVacios =
    campoNombre.value.trim() === "" ||
    campoCorreo.value.trim() === "" ||
    campoAsunto.value === "";

  if (hayCamposVacios || !campoAceptacion.checked) {
    mensajeEstadoFormulario.textContent =
      "Por favor completa nombre, correo y asunto, y acepta ser contactado.";
    mensajeEstadoFormulario.className = "mensaje-estado mensaje-error";
    return;
  }
  mensajeEstadoFormulario.textContent =
    `¡Gracias, ${campoNombre.value}! Tu mensaje fue recibido correctamente.`;
  mensajeEstadoFormulario.className = "mensaje-estado mensaje-exito";
  formularioContacto.reset();
}


function inicializarPagina() {
  renderizarTarjetas(listaHabilidades, contenedorHabilidades);
  renderizarTarjetas(listaDatosCuriosos, contenedorDatosCuriosos);

  
  elementoAnioActual.textContent = new Date().getFullYear();

  formularioContacto.addEventListener("submit", manejarEnvioFormulario);
}

document.addEventListener("DOMContentLoaded", inicializarPagina);
