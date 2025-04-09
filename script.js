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
