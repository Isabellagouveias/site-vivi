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
