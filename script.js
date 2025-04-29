const elogios = [
  "Linda 😍", "Forte 💪", "Inteligente 🤓", "Dedicada 👩‍💻", "Amada ❤️",
  "Gentil 🤗", "Sorridente 😊", "Humilde 🙏", "Honesta ✅", "Talentosa 🎨",
  "Brilhante ✨", "Corajosa 🦸‍♀️", "Generosa 🤝", "Empática 🫂", "Criativa 🎭",
  "Carinhosa 💕", "Inspiradora 🌟", "Autêntica 💎", "Amável 😌", "Elegante 👗",
  "Resiliente 🛡", "Cheia de luz 🔆", "Determinada 🏆", "Fofa demais 🥰",
  "Radiante 🌈", "Magnífica 👑", "Encantadora 🌹", "Única 🎀", "Estonteante ✨",
  "Maravilhosa 💖", "Maravilhosamente incrível 🤩", "Incrível em tudo 😘",
  "Pura energia positiva ☀️", "Sempre brilhando 🌟",
];

function mostrarElogioAleatorio() {
  const mensagem = elogios[Math.floor(Math.random() * elogios.length)];
  const toastArea = document.getElementById("toastArea");

  const toastElement = document.createElement("div");
  toastElement.className =
    "toast align-items-center text-white bg-pink border-0 fade show";
  toastElement.setAttribute("role", "alert");
  toastElement.setAttribute("aria-live", "assertive");
  toastElement.setAttribute("aria-atomic", "true");
  toastElement.style.minWidth = "220px";

  toastElement.innerHTML = `
    <div class="d-flex">
      <div class="toast-body">${mensagem}</div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Fechar"></button>
    </div>
  `;

  toastArea.appendChild(toastElement);

  const toastBootstrap = new bootstrap.Toast(toastElement);
  toastBootstrap.show();

  setTimeout(() => {
    toastBootstrap.hide();
    setTimeout(() => toastElement.remove(), 500);
  }, 8000);
}

let currentIndex = 0;
const slides = document.getElementById("slides");
const totalSlides = slides.children.length;

function updateSlide() {
  slides.style.transition = "transform 0.5s ease-in-out"; 
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

setInterval(nextSlide, 6000);

function createHearts() {
  const heartsContainer = document.getElementById("hearts");
  if (Math.random() > 0.5) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 6 + 6 + "s";
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 12000);
  }
}
setInterval(createHearts, 1500);

const videoButtons = document.querySelectorAll(".video-buttons button");
const videoPlayer = document.getElementById("video-player");
const videoSource = videoPlayer.querySelector("source");

const videoMap = {
  2021: "/assets/video/video-2021-2022.mp4",
  2023: "/assets/video/video-2023.mp4",
  2024: "/assets/video/video-2024.mp4",
  2025: "/assets/video/video-2025.mp4",
};

videoButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const year = button.getAttribute("data-year");
    const newSrc = videoMap[year];
    if (newSrc) {
      videoSource.setAttribute("src", newSrc);
      videoPlayer.load();
    }
  });
});
