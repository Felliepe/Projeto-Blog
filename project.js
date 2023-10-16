// função "incrementHitCount" recebe um postId como parâmetro
function incrementaVisita(postId) {
  var hitCountSpan = document.querySelector(`[data-post-id="${postId}"] .hit-count`) // Encontre o elemento hitCountSpan dentro do postCard identificado por postId
  var hitCount = localStorage.getItem(postId) || 0 // contar visitas atual do localStorage ou usa 0 se não existir
  hitCount++; // Incrementa a contagem de visitas em 1
  localStorage.setItem(postId, hitCount) // Armazenar a contagem de visitas atualizada de volta no localStorage
  hitCountSpan.textContent = hitCount + " Visita" + (hitCount !== 1 ? "s" : ""); // Atualiza a contagem de ocorrências exibida no hitCountSpan, incluindo pluralização
}

var postCards = document.querySelectorAll(".post-card"); // Seleciona todos os elementos com a classe "post-card" e armazenar na variável postCards
postCards.forEach(function (postCard) { // Percorre cada elemento de cartão postal no NodeList postCards
  var postId = postCard.getAttribute("data-post-id"); // Obtém o valor do atributo postId do post-card atual
  postCard.addEventListener("click", function () { // Adicionar addEventListener de clique ao elemento post-card 
    incrementaVisita(postId) // Chama a função incrementHitCount com o postId como argumento quando o post-card é clicado
  })
})

// Inicializar contagens de visitas no carregamento da página
postCards.forEach(function (postCard) { // Percorre cada elemento de cartão postal no NodeList postCards novamente
  var postId = postCard.getAttribute("data-post-id") // Obtém o valor do atributo postId do post-card atual
  var hitCountSpan = postCard.querySelector(".hit-count") // Encontre o elemento hitCountSpan dentro do post-card atual
  var hitCount = localStorage.getItem(postId) || 0 // Obtém a contagem de ocorrências atual do localStorage ou usa 0 se não existir
  hitCountSpan.textContent = hitCount + " Visita" + (hitCount !== 1 ? "s" : ""); // Atualiza a contagem de ocorrências exibida no hitCountSpan, incluindo pluralização
})