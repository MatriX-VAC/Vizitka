// Анимация появления при скролле
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2,
  rootMargin: '0px 0px -50px 0px'
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Плавный скролл для якорей
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Анимация прогресс-баров при появлении (дополнительно)
const skillBars = document.querySelectorAll('.skill-progress');
const skillSection = document.getElementById('skills');

const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Бары уже имеют ширину, но можно добавить небольшую задержку для красоты
      skillBars.forEach(bar => {
        bar.style.transition = 'width 1s ease';
      });
    }
  });
}, { threshold: 0.5 });

if (skillSection) {
  barObserver.observe(skillSection);
}