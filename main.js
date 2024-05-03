const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for(let i=0;i < botoes.length; i++){
    botoes[i].onclick = function (){

            for (let j=0;j <botoes.length;j++){ 
                botoes[j].classList.remove("ativo");
                textos[j].classList.remove("ativo");
            }

            botoes[i].classList.add("ativo");
            textos[j].classList.add("ativo");
        }

}

const contatodes = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-10-05T00:00:00");

let tempoAtual = new Date("2023-12-05T00:00:00");

conta
const tempoObjetivo2 = const tempoobjetivo3 = new Date("2023-12-30T00:00:00");
const tempooObjetivo4 =

new Date("2024-02-01T00:00:00");

const tempos = [tempoobjetivo1,tempoobjetivo2, tempo0bjetivo3, tempoobjetiv

function calculaTempo(tempoobjetivo) {

let tempoAtual = new Date();

let tempoFinal = tempoobjetivo tempoAtual; let segundos = Math.floor(tempoFinal/1000);

let minutos = Math.floor(segundos / 60);

let horas Math.floor(minutos / 60);

let dias Math.floor(horas / 24);

segundos %= 60;
 
const botoes document.querySelectorAll(".botao");

const textos document.querySelectorAll(".aba-conteudo");

for (let i = 0 i < botoes.length; i++) {

botoes[i].onclick = function () {

for (let j = 0 j < botoes.length; j++) { botoes[j].classList.remove("ativo"); textos[j].classList.remove("ativo");

}

botoes[i].classList.add("ativo");

textos[i].classList.add("ativo");

}

}

const contadores = document.querySelectorAll(".contador");

const tempoobjetivo1 = new Date("2020-10-05T00:00:00");

const tempoobjetivo2 = new Date("2023-12-05T00:00:00");

const tempoobjetivo3 = new Date("2023-12-30T00:00:00");

const tempoobjetivo4 = new Date("2024-02-01T00:00:00");

const tempos = [tempoobjetivo1, tempoObjetivo2, tempo objetivo3, tempo objetivo4];

function calculaTempo(tempoobjetivo) {

A

let tempoAtual = new Date();

let tempoFinal = tempoObjetivo - tempoAtual; let segundos = Math.floor(tempoFinal/1000);

let minutos Math.floor(segundos/60);

let horas Math.floor(minutos/60);

let dias = Math.floor(horas/24):
segundos % = 60;