const inputPeso = document.querySelector(".input-peso");
const inputAltura = document.querySelector(".input-altura");
const botonCalcular = document.querySelector(".boton-calcular");
const textoResultado = document.querySelector(".texto-resultado");
const imagen = document.querySelector(".imagen");
let condicion;

botonCalcular.addEventListener("click", () => {
  if (inputPeso.value === "" || inputAltura.value === "") {
    textoResultado.textContent = "Complete todos los campos";
    textoResultado.style.color = "#ca2020";
    return;
  }

  const inputPesoConvertido = +inputPeso.value;
  const inputAlturaConvertido = +inputAltura.value;
  const imc = (inputPesoConvertido / inputAlturaConvertido ** 2).toFixed(2);

  if (inputPesoConvertido === 0 || inputAlturaConvertido === 0) {
    textoResultado.textContent = "No se permite el valor 0";
    return;
  }

  if (imc < 18.5) {
    condicion = "Bajo Peso";
  } else if (imc <= 24.9) {
    condicion = "Peso Saludable";
  } else if (imc <= 29.9) {
    condicion = "Exceso de Peso";
  } else {
    condicion = "Obesidad";
  }

  textoResultado.style.color = "black";
  textoResultado.textContent =
    "Su indice de masa corporal es " + imc + ": " + condicion;

  imagen.style.display = "block";
});
