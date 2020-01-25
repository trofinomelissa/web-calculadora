/*
  consts gerais
*/
const cAdd = "+";
const cMinus = "-";
const cMultiply = "*";
const cDivide = "/";

/*
   vars gerais
*/
var numeroAnterior = null;
var memoriaDisplay = [];
var operador = "";


/*
   vars componentes
*/
var display = document.querySelector(".display");

var btnOn = document.querySelector("#btn-on");
var btnOff = document.querySelector("#btn-off");
var btnCe = document.querySelector("#btn-ce");

var btnNumero0 = document.querySelector("#btn-number-0");
var btnNumero1 = document.querySelector("#btn-number-1");
var btnNumero2 = document.querySelector("#btn-number-2");
var btnNumero3 = document.querySelector("#btn-number-3");
var btnNumero4 = document.querySelector("#btn-number-4");
var btnNumero5 = document.querySelector("#btn-number-5");
var btnNumero6 = document.querySelector("#btn-number-6");
var btnNumero7 = document.querySelector("#btn-number-7");
var btnNumero8 = document.querySelector("#btn-number-8");
var btnNumero9 = document.querySelector("#btn-number-9");

var btnAdd = document.querySelector("#btn-addition");
var btnMinus = document.querySelector("#btn-minus");
var btnMultiply = document.querySelector("#btn-multiply");
var btnDivide = document.querySelector("#btn-divide");

var btnEquals = document.querySelector("#btn-equals");

//var btn

/*
   funções gerais
*/
function atualizaDisplay() {

   display.textContent = "";

   for (var i = 0; i < memoriaDisplay.length; i++) {
      display.textContent = display.textContent + memoriaDisplay[i]
   }

   if (display.textContent == "") {
      display.textContent = "0";
   }
}

function calculadoraLigada() {
   return display.textContent != "";
}

function resolveOperacao() {
   
   if (operador == "") {
      return;
   }

   var numeroAtual = parseFloat(display.textContent);
   var resultado;
   
   switch (operador) {
      
      case cAdd: resultado = numeroAnterior + numeroAtual; 
      break;
      
      case cMinus: resultado = numeroAnterior - numeroAtual; 
      break;
      
      case cMultiply: resultado = numeroAnterior * numeroAtual; 
      break;
      
      case cDivide: resultado = numeroAnterior / numeroAtual; 
      break;
   }

   
   operador = "";
   numeroAnterior = null;
   display.textContent = resultado;
   memoriaDisplay = [];

   console.log(operador);
}

/*
   eventos
*/

function clickNumber(numero) {

   if (!calculadoraLigada()) {
      return;
   }

   if (operador != "" && numeroAnterior == null) {
      numeroAnterior = parseFloat(display.textContent);
      memoriaDisplay = [];
   }

   var ultimo = memoriaDisplay[memoriaDisplay.length -1];
      
   if (memoriaDisplay.length == 0 || Number.isInteger(ultimo) || ultimo == '.' || ultimo == ',') {
      
      if (memoriaDisplay.length == 1 && memoriaDisplay[0] == 0) {

         memoriaDisplay[0] = numero;
      }
      else
      {
         memoriaDisplay.push(numero);
      }      
   }

   console.log(memoriaDisplay);

   atualizaDisplay();
}

function clickOperador(opClick) {

   if (!calculadoraLigada()) {
      return;
   }

   if (operador != "" && numeroAnterior != null) {
      resolveOperacao();
   }

   operador = opClick;

   console.log(operador);
}

btnNumero0.addEventListener("click", function() {clickNumber(0)});
btnNumero1.addEventListener("click", function() {clickNumber(1)});
btnNumero2.addEventListener("click", function() {clickNumber(2)});
btnNumero3.addEventListener("click", function() {clickNumber(3)});
btnNumero4.addEventListener("click", function() {clickNumber(4)});
btnNumero5.addEventListener("click", function() {clickNumber(5)});
btnNumero6.addEventListener("click", function() {clickNumber(6)});
btnNumero7.addEventListener("click", function() {clickNumber(7)});
btnNumero8.addEventListener("click", function() {clickNumber(8)});
btnNumero9.addEventListener("click", function() {clickNumber(9)});

btnCe.addEventListener("click", function () {

   if (!calculadoraLigada()) {
      return;
   }

   memoriaDisplay = []

   numeroAnterior = null;

   operador = "";

   atualizaDisplay();

});

btnOn.addEventListener("click", function() {
   
   if (calculadoraLigada()) {

      return;
   }

   atualizaDisplay();

});

btnOff.addEventListener("click", function() {
   
   if (!calculadoraLigada()) {
      return;
   }

   numeroAnterior = null;
   operador = "";
   memoriaDisplay = [];
   display.textContent = "";


});

btnAdd.addEventListener("click", function() {

   clickOperador(cAdd);

});

btnMinus.addEventListener("click", function() {

   clickOperador(cMinus);

});

btnMultiply.addEventListener("click", function() {

   clickOperador(cMultiply);

});

btnDivide.addEventListener("click", function() {

   clickOperador(cDivide);

});

btnEquals.addEventListener("click", resolveOperacao);