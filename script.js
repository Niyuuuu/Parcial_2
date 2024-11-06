const btn = document.getElementById("btn");
const preguntaInput = document.getElementById("pregunta");
const respuesta = document.getElementById("respuesta");

btn.addEventListener("click", () => {
  const pregunta = preguntaInput.value;
  if (!pregunta.includes("?")) {
    respuesta.textContent = "No";
    return;
  }
  apiRespuesta();
});

async function apiRespuesta() {
  try {
    const api = await fetch("https://yesno.wtf/api");
    const dato = await api.json();
    respuesta.innerHTML = `
      <h2>${dato.answer}</h2>
      <img src="${dato.image}">
    `;
  } catch (error) {
    console.error("Ocurrió el siguiente error: ", error);
    respuesta.textContent = "Algo salio mal :,/";
  }
}