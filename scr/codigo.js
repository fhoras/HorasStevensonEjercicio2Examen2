let boton = document.querySelector("#botonEnvio");
let cantidad = document.getElementById("cantidad");
boton.addEventListener("click", () => {
  cantidad = Number(cantidad.value);
  //verificarNulos(cantidad);
  console.log(cantidad);
  // Agregar tantos botones como indique la cantidad
  //  let divContenedor = document.querySelector("#");
  let miDiv = document.createElement("div");
  miDiv.className("contenedor");
  for (let i = 0; i <= cantidad; i++) {
    miDiv.innerHTML("botonAgregar");
  }
});
