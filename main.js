const caixaPrincipal = document.querySelectorAll(".caixa-principal")
const caixaPergunta = document.querySelectorAll (".caixa-perguntas")
const caixaAlternativas = document.querySelectorAll (".caixa-alternativas")
const caixaResultado = document.querySelectorAll (".caixa-resultado")
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual a data da independencia do Brasil?",
        alternativas: ["7 de novembro","25 de dezembro","7 de setembro"]
    },
    {
        enunciado: "Pergunta 2",
        alternativas: ["aternativa1","alternativa2","alternativa3"]
    },
    {
        enunciado: "Pergunta 3",
        alternativas: ["aternativa1","alternativa2","alternativa3"]
    },
    {
        enunciado: "Pergunta 4",
        alternativas: ["aternativa1","alternativa2","alternativa3"]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
perguntaAtual = perguntas [atual];
caixaPergunta.textContent = perguntaAtual.enuciado;

}

mostraPergunta();