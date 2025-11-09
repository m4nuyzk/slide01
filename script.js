let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slider = document.getElementById('slider');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

// Função de navegação
function showSlide(index) {
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;
  currentSlide = index;
  slider.style.transform = `translateX(-${index * 100}vw)`;
}

nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));

// Toque (swipe)
let startX = 0;
document.addEventListener('touchstart', e => startX = e.touches[0].clientX);
document.addEventListener('touchend', e => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) showSlide(currentSlide + 1);
  else if (endX - startX > 50) showSlide(currentSlide - 1);
});

// Música
const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');
let musicPlaying = false;

musicBtn.addEventListener('click', () => {
  if (musicPlaying) {
    music.pause();
    musicBtn.textContent = "🎵 Música: OFF";
  } else {
    music.play();
    musicBtn.textContent = "🎵 Música: ON";
  }
  musicPlaying = !musicPlaying;
});

// Gráfico simples
window.onload = () => {
  const canvas = document.getElementById('graficoFuncao');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  ctx.strokeStyle = "#fff";
  ctx.lineWidth = 2;
  ctx.beginPath();
  for (let x = 0; x <= 300; x++) {
    let y = 150 - (0.5 * x);
    ctx.lineTo(x, y);
  }
  ctx.stroke();
};

// Quiz
const quizOptions = document.querySelectorAll('.quiz-option');
const quizResult = document.getElementById('quizResult');

quizOptions.forEach(option => {
  option.addEventListener('click', () => {
    if (option.dataset.correct === "true") {
      quizResult.textContent = "✅ Correto! f(4) = 11 🎯";
      quizResult.style.color = "#00ff9f";
    } else {
      quizResult.textContent = "❌ Tente novamente!";
      quizResult.style.color = "#ff4d4d";
    }
  });
});
