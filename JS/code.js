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
  const encripterText = document.querySelector(".encripter-text");

  const encripter = encripterText.value.toLowerCase();

  let text = encripter.replace(/e/gim, "enter");
  text = text.replace(/o/gim, "ober");
  text = text.replace(/a/gim, "ai");
  text = text.replace(/i/gim, "imes");
  text = text.replace(/u/gim, "ufat");

  // encripterText.addEventListener("keydown", (e) => {
  //   validarLetra(e);
  // });

  const ResultText = document.querySelector(".result-text-container");

  if (text == "") ResultText.innerHTML = "No hay nada escrito";
  else ResultText.innerHTML = text;
};

const desencriptor = () => {
  const encripterText = document.querySelector(".encripter-text");

  const encripter = encripterText.value.toLowerCase();

  let text = encripter.replace(/enter/gim, "e");
  text = text.replace(/ober/gim, "o");
  text = text.replace(/ai/gim, "a");
  text = text.replace(/imes/gim, "i");
  text = text.replace(/ufat/gim, "u");

  const ResultText = document.querySelector(".result-text-container");

  if (text == "") ResultText.innerHTML = "No hay nada escrito";
  else ResultText.innerHTML = text;
};

const copy = () => {
  const resultText = document.querySelector(".result-text-container");
  const seleccion = document.createRange();
  seleccion.selectNodeContents(resultText);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(seleccion);
  const res = document.execCommand("copy");
  window.getSelection().removeRange(seleccion);
};

const encripterBtn = document.querySelector(".close"),
  desencriptorBtn = document.querySelector(".up"),
  copyBTn = document.querySelector(".secontcopy");

document.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    encriptor();
  }
});

encripterBtn.addEventListener("click", () => {
  encriptor();
});

desencriptorBtn.addEventListener("click", () => {
  desencriptor();
});

copyBTn.addEventListener("click", () => {
  copy();
});
