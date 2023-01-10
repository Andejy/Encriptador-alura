// html Elements
const encripterText = document.querySelector(".encripter-text"),
  ResultText = document.querySelector(".result-text-container"),
  encripterBtn = document.querySelector(".close"),
  desencriptorBtn = document.querySelector(".up"),
  copyBTn = document.querySelector(".secontcopy"),
  fireFlowered = document.querySelector(".fire-flower-container"),
  copyBtn = document.querySelector(".secontcopy");

//functions

const validarLetra = (e) => {
  key = e.keyCode || e.which;
  tecla = String.fromCharCode(key).toLowerCase();
  letras = " abcdefghijklmnñopqrstuvwxyz";
  especiales = [8, 37, 39, 46];

  tecla_especial = false;
  for (var i in especiales) {
    if (key == especiales[i]) {
      tecla_especial = true;
      break;
    }
  }

  if (letras.indexOf(tecla) == -1 && !tecla_especial) return false;
};

const encriptor = () => {
  const encripter = encripterText.value.toLowerCase();

  let text = encripter.replace(/e/im, "enter");
  text = text.replace(/o/im, "ober");
  text = text.replace(/a/im, "ai");
  text = text.replace(/i/im, "imes");
  text = text.replace(/u/im, "ufat");

  if (text == "") ResultText.innerHTML = "No hay nada escrito";
  else ResultText.innerHTML = text;
};

const desencriptor = () => {
  const encripter = encripterText.value.toLowerCase();

  let text = encripter.replace(/enter/gim, "e");
  text = text.replace(/ober/gim, "o");
  text = text.replace(/ai/gim, "a");
  text = text.replace(/imes/gim, "i");
  text = text.replace(/ufat/gim, "u");
  if (text == "") ResultText.innerHTML = "No hay nada escrito";
  else ResultText.innerHTML = text;
};

const copy = () => {
  const seleccion = document.createRange();
  seleccion.selectNodeContents(resultText);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(seleccion);
  const res = document.execCommand("copy");
  window.getSelection().removeRange(seleccion);
};

// Events
document.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    encriptor();
    fireFlowered.style.display = "none";
    if (ResultText.value === "No hay nada escrito") copyBTn.style.display = "none";
    else copyBTn.style.display = "block";
  }
});

encripterBtn.addEventListener("click", () => {
  encriptor();
  fireFlowered.style.display = "none";
  if (ResultText.value === "No hay nada escrito") copyBTn.style.display = "none";
  else copyBTn.style.display = "block";
});

desencriptorBtn.addEventListener("click", () => {
  desencriptor();
  fireFlowered.style.display = "none";
  copyBTn.style.display = "block";
  if (ResultText.value === "No hay nada escrito") copyBTn.style.display = "none";
  else copyBTn.style.display = "block";
});

copyBTn.addEventListener("click", () => {
  copy();
});
