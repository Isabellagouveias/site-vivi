const elogios = [
  "Linda 😍", "Forte 💪", "Inteligente 🤓", "Dedicada 👩‍💻", "Amada ❤️", "Gentil 🤗", "Sorridente 😊",
  "Humilde 🙏", "Honesta ✅", "Talentosa 🎨", "Brilhante ✨", "Corajosa 🦸‍♀️", "Generosa 🤝",
  "Empática 🫂", "Criativa 🎭", "Carinhosa 💕", "Inspiradora 🌟", "Autêntica 💎", "Amável 😌",
  "Elegante 👗", "Resiliente 🛡", "Cheia de luz 🔆", "Determinada 🏆", "Fofa demais 🥰",
  "Radiante 🌈", "Magnífica 👑", "Encantadora 🌹", "Única 🎀", "Estonteante ✨", "Maravilhosa 💖",
  "Maravilhosamente incrível 🤩", "Incrível em tudo 😘", "Pura energia positiva ☀️", "Sempre brilhando 🌟"
];

function mostrarElogioAleatorio() {
  console.log('mostrarElogioAleatorio acionado');
  const mensagem = elogios[Math.floor(Math.random() * elogios.length)];
  const toastArea = document.getElementById('toastArea');

  // Cria o elemento do Toast
  const toastElement = document.createElement('div');
  toastElement.className = 'toast align-items-center text-white bg-pink border-0 fade show';
  toastElement.setAttribute('role', 'alert');
  toastElement.setAttribute('aria-live', 'assertive');
  toastElement.setAttribute('aria-atomic', 'true');
  toastElement.style.minWidth = '220px';

  toastElement.innerHTML = `
    <div class="d-flex">
      <div class="toast-body">${mensagem}</div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Fechar"></button>
    </div>
  `;

  // Adiciona o toast à área
  toastArea.appendChild(toastElement);

  // Instancia e mostra o toast com o Bootstrap
  const toastBootstrap = new bootstrap.Toast(toastElement);
  toastBootstrap.show();

  // Remove o toast após 8 segundos
  setTimeout(() => {
    toastBootstrap.hide();
    setTimeout(() => toastElement.remove(), 500);
  }, 8000);
}


let currentIndex = 0;
const slides = document.getElementById('slides');
const totalSlides = slides.children.length;

function updateSlide() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlide();
}

setInterval(nextSlide, 5000);

function createHearts() {
    const heartsContainer = document.getElementById('hearts');
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerText = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}
setInterval(createHearts, 500);


document.getElementById('toggleSongs').addEventListener('click', function () {
    var songList = document.getElementById('songList');
    // Alterna entre mostrar e ocultar a lista
    if (songList.style.display === "none") {
        songList.style.display = "block";
    } else {
        songList.style.display = "none";
    }
});

// Seleciona os elementos
const modal = document.getElementById('modal');
const toggleSongsBtn = document.getElementById('toggleSongs');
const closeModalBtn = document.getElementById('closeModal');
const songList = document.getElementById('songList');
const spinner = document.getElementById('spinner');

// Evento para abrir o modal com feedback de carregamento
toggleSongsBtn.addEventListener('click', function () {
  modal.classList.add('show');
  
  // Configura o estado inicial ao abrir o modal
  songList.style.display = 'none';
  spinner.style.display = 'block';
  
  // Simula o carregamento: após 3s, oculta o spinner e mostra a lista
  setTimeout(() => {
    spinner.style.display = 'none';
    songList.style.display = 'block';
  }, 3000); // Ajuste o tempo de acordo com sua necessidade
});

// Evento para fechar o modal
closeModalBtn.addEventListener('click', function () {
  modal.classList.remove('show');
});

// Fecha o modal ao clicar fora da área de conteúdo
window.addEventListener('click', function(e) {
  if (e.target === modal) {
    modal.classList.remove('show');
  }
});

// Exemplo básico de lazy load (só ideia, precisa adaptar ao seu HTML)
const iframes = document.querySelectorAll('iframe.spotify');
let loaded = 0;
const limit = 5;

function loadNextBatch() {
  for (let i = loaded; i < loaded + limit && i < iframes.length; i++) {
    iframes[i].src = iframes[i].dataset.src;
  }
  loaded += limit;
}

// Armazena os src reais em data-src
iframes.forEach((iframe) => {
  iframe.dataset.src = iframe.src;
  iframe.removeAttribute('src');
});

loadNextBatch(); // carrega os primeiros

document.getElementById('verMais').addEventListener('click', loadNextBatch);
