const resultado = document.getElementById("resultado");
const j1 = document.getElementById("juros");
let verify = false;

var parentesE = false;
function btn(n) {
  resultado.textContent += n;
}

function limpar(j) {
  resultado.textContent = j;
  limparjuros();
  parentesE = false;
}

function cleaR() {
  var textoAtual = resultado.textContent;
  resultado.textContent = textoAtual.slice(0, -1);
  parentesE = false;
}

function parentese() {
  if (parentesE == false) {
    resultado.textContent += "(";
    parentesE = true;
  } else {
    resultado.textContent += ")";
    parentesE = false;
  }
}

function limparjuros() {
  document.getElementById("capital").value = "";
  document.getElementById("taxa").value = "";
  document.getElementById("tempo").value = "";
}

function juros() {
  var jU = document.getElementById("ks");
  if (verify == false) {
    jU.textContent = "J/simples";
    j1.style.display = "block";
    verify = true;
  } else if (verify == true) {
    jU.textContent = "J/compostos";
    verify = -1;
  } else {
    jU.textContent = "Juros";
    j1.style.display = "none";
    verify = false;
  }
}

function calcular() {
  var c1 = parseFloat(document.getElementById("capital").value);
  var t1 = parseFloat(document.getElementById("taxa").value);
  var tem1 = parseFloat(document.getElementById("tempo").value);
  var resultado = document.getElementById("resultado");

  if (verify == true) {
    resultado.textContent = c1 * (t1 / 100) * tem1;
  } else if (verify == -1) {
    resultado.textContent = c1 * (1 + t1 / 100) ** tem1 - c1;
  } else {
    var expressao = resultado.textContent;
    expressao = expressao
      .replace(/÷/g, "/")
      .replace(/×/g, "*")
      .replace(/%/g, "/100*")
      .replace(/\^/g, "**")
      .replace(/,/g, ".");
    resultado.textContent = eval(expressao).toFixed(5);
    parentesE = false;
  }
}

