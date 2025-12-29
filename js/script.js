// Para deixar os links do menu marcado inteiro quando estiver na página//

const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}
links.forEach(ativarLink);

//Ativar itens do seguro na página do orçamento - quando escolher o item ouro ou prata na página seguro, ele marcará o item na página orçamento.Também válido para as bicicletas.//

const parametros = new URLSearchParams(location.search);

function ativarProdutos(parametro) {
  const elemento = document.getElementById(parametro);
  elemento.checked = true;
  console.log(elemento);
}

parametros.forEach(ativarProdutos);

console.log(parametros);

//Perguntas frequentes - aparecer e desaparecer as respostas//

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
  console.log(resposta);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

console.log(perguntas);

// Galeria de Bicicletas - Para trocar as imagens da galeria //
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches; // O matchmedia é para determinar que a função de troca não será mais feita quando a página estiver menor que 1000px //
  console.log(media);
  if (media) {
    galeriaContainer.prepend(img);
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

//plugin de animação//
if (window.SimpleAnime) {
  new SimpleAnime();
}
// plugin externo para copiar o conteudo clicando nele//
if (window.ClipboardJS) {
  new ClipboardJS(".introducao-conteudo p");
}
