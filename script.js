const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acabou de sair de seu curso e percebe que tem apenas 6 reias no bolso e você esta com muita fome e, tendo que escolher entre uma goiaba e a passagem do onibus.Qual você escolhe?",
        alternativas: [
            {
                texto: "passagem de onibus",
                afirmacao: "decidiu pegar o onibus. "
            },
            {
                texto: "goiaba",
                afirmacao: "quis comprar uma goiaba."
            }
        ]
    },
    {
        enunciado: "No momento me que você foi comer a goiaba tranquilamente, no final da rua você avista 2 caras e eles acabam te chamando para conversar um assunto...",
        alternativas: [
            {
                texto: "movido pela sua curiosidade, você vai conversar com eles para saber do que se trata.",
                afirmacao: "Conseguiu utilizar a IA para buscar informações úteis."
            },
            {
                texto: "Você os ignora e vai pelo caminho contrário..",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "Os 2 caras que te abordaram pedem sua goiaba. Você tem duas escolhas:",
        alternativas: [
            {
                texto: "Entregar a Goiaba tristemente.",
                afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
            },
            {
                texto: "Implorar para ser perdoado e entregar sua dignidade.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: "No final, você ficou sem dignidade e sem goiaba. Morto de fome e sem passagem você tem duas escolhas:",
        alternativas: [
            {
                texto: "Você deita no chão e chora, esperando esmola até ganhar grana.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Você cria uma ditadura que escraviza para poder ganhar dinheiro sem trabalhar e comprar sua nova goiaba.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "AGORA VOCÊ FOI PROMOVIDO A MENDIGO. Em pleno 2024, você esta pedindo esmola e se diminuindo a tal ponto. ",
        alternativas: [
            
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();