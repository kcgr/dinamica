//toda vez que o usuario clicar em ir trocar a frase e a imagem
//criar um array com as frases e outro com as imagens
//criar uma função que troca a frase e a imagem
let frases = [
    "Qual foi o seu filme favorito?",
    "Se você fosse um animal, que tipo você seria?",
    "Se você pudesse viajar para qualquer lugar do mundo, para onde iria?",
    "Se você pudesse se descrever em apenas uma palavra, qual seria?",
    "Se você pudesse conhecer uma figura histórica, quem seria?",
    "Quais seriam seus superpoderes preferidos?",
    "Melhor livro que você já leu?",
    "Qual é a sua flor ou planta favorita?",
    "Se você pudesse aprender uma nova habilidade, qual seria?",
    "Qual é o seu emoji mais usado?",
    "Se um filme fosse feito sobre sua vida, que gênero seria, quem interpretaria você?",
    "Você tem que cantar karaokê, que música você escolhe?",
    "Quem é o seu herói ou heroína favorito da Disney? Você trocaria de lugar com eles?",
    "Se você pudesse escolher duas pessoas famosas para jantar, com quem seriam?",
    "Se você pudesse renomear a si mesmo, que nome escolheria?",
    "Se você tivesse que dar uma aula sobre uma coisa, o que você ensinaria?",
    "Se você pudesse ter o poder de teletransporte agora, para onde iria e por quê?",
    "Você prefere voltar no tempo ou ir ao futuro? por quê?",
    "Você prefere invisibilidade ou vôo?",
    "Se você pudesse doar um milhão de dólares, que causa você escolheria?",
    "Qual disciplina escolar é a sua favorita?",
    "O que você deseja que as gerações mais velhas saibam sobre os adolescentes de hoje?",
    "Que filme você acha que todo mundo deveria assistir?",
    "Como seria um(a) professor(a) perfeito, pra você?",
    "Você prefere explorar o espaço sideral ou o fundo do oceano?",
]
//array de imagens da pasta images
let imagens = [
    "./images/1.png",
    "./images/2.png",
    "./images/3.png",
    "./images/4.png",
    "./images/5.png",
    "./images/6.png",
    "./images/7.png",
    "./images/8.png",
    "./images/9.png",
    "./images/10.png",
    "./images/11.png",
    "./images/12.png",
    "./images/13.png",
    "./images/14.png",
    "./images/15.png",
    "./images/16.png",
    "./images/17.png",
    "./images/18.png",
    "./images/19.png",
    "./images/20.png",
    "./images/21.png",
    "./images/22.png",
    "./images/23.png",
    "./images/24.png",
    "./images/25.png",

]
//seleciona e remove o elemento img
let imagem = document.getElementById("imagem");
imagem.remove();

//função que troca a frase e a imagem a cada clique no botão ir
function trocarFraseEImagem() {
    //adiciona a  tag imagem ao html
    document.getElementById("frase").after(imagem);
    let frase = document.getElementById("frase");
    //adicionar a classe frase ao elemento
    frase.classList.add("frase");
    let numeroAleatorio = Math.floor(Math.random() * 25);
    //troca a frase e a imagem
    frase.innerHTML = frases[numeroAleatorio];
    imagem.src = imagens[numeroAleatorio];
}