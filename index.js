// Armazenando Dados em Variáveis
var pNome = document.getElementById("pNome");
var nome = pNome;

var pIdade = document.getElementById("pIdade");
var idade = Number(pIdade);

var pSexo = document.getElementById("pSexo");
var sexo = Number(pSexo);

var pIQ = document.getElementById("pIQ");
var iq = pIQ;

var pFor = document.getElementById("pFor");
var forca = pFor;

var pVig = document.getElementById("pVig");
var vigor = pVig;

var pAgi = document.getElementById("pAgi");
var agilidade = pAgi;

var pInt = document.getElementById("pInt");
var intelecto  = pInt;

var pPre = document.getElementById("pPre");
var presenca = pPre;

// Exibição de Dados de Variáveis
function exibirValores() {
    console.log("Nome :", nome)
    console.log("Nome :", idade)
    console.log("Nome :", sexo)
    console.log("Nome :", iq)
    console.log("Nome :", forca)
    console.log("Nome :", agilidade)
    console.log("Nome :", intelecto)
    console.log("Nome :", presenca)
}

let menuState = true;
let menuIndex = document.querySelectorAll("li")

// Incompleto
const exibirMenu = () => {
    if (menuState === true) {
    menuIndex.style.display = "none";
    menuState = false;
    } else {
        menuIndex.style.display = "inline-block";
        menuState = true;
    }
}