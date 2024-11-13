const imagens = [
    { alias: 'Capitã Marvel', url: "./img/carol_danvers.jpeg", votos: 0 },
    { alias: 'Ezra', url: "./img/ezra.webp", votos: 0 },
    { alias: 'Hinata', url: "./img/images.jpg", votos: 0 },
    { alias:  'Jane foster', url: "./img/jane_foster.jpg", votos:0 },
    { alias:  'Natasha', url: "./img/natasha.jpg", votos:0 },
    { alias:  'Sakura', url: "./img/sakura.jpeg", votos:0 },
    { alias:  'Sarada', url: "./img/sarada.jpeg", votos:0 },
    { alias:  'Shizune', url: "./img/shizune.jpeg", votos:0 },
    { alias:  'Tenten', url: "./img/tenten.jpg", votos:0 },
    { alias:  'Tsunade', url: "./img/tsunade.jpg", votos:0 },
    { alias:  'Valkyrie', url: "./img/valkyrie.jpg", votos:0 },
    { alias:  'Wanda', url: "./img/wanda.jpg", votos:0 },

]

let imagemAtual1, imagemAtual2;
  
  function apresentarImagens() {
    const imagem1 = imagens[Math.floor(Math.random() * imagens.length)];
    const imagem2 = imagens[Math.floor(Math.random() * imagens.length)];
    
    if (imagem1 === imagem2) {
        imagem2 = imagens[Math.floor(Math.random() * imagens.length)];
    }
    
    document.getElementById('imagem1').src = imagem1.url;
    document.getElementById('imagem2').src = imagem2.url;
    
    imagemAtual1 = imagem1;
    imagemAtual2 = imagem2;
  }

  function atualizarRanking() {
    // Sort images by vote count in descending order
    imagens.sort((a, b) => b.votos - a.votos);

    const ranking = document.getElementById('ranking');
    ranking.innerHTML = ''; // Clear previous ranking

    // Rebuild the ranking list based on sorted vote counts
    imagens.forEach((imagem, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${imagem.alias} (${imagem.votos} votos)`;
        ranking.appendChild(li);
    });
}

// Function to register a vote for the clicked image
function registrarVoto(imagem) {
  if (imagem === imagemAtual1) {
      imagemAtual1.votos++;
  } else if (imagem === imagemAtual2) {
      imagemAtual2.votos++;
  }

  atualizarRanking();    // Update the ranking display after a vote
  apresentarImagens();   // Show new images after each vote
}




apresentarImagens(); 
atualizarRanking()


    






















