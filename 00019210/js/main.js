// slider
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

// Update slider position and active dot
function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 1170}px)`;
  updateActiveDot();
}

// Highlight the active dot
function updateActiveDot() {
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

// Navigate to previous slide
function showPrevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
}

// Navigate to next slide
function showNextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
}

// Navigate to a specific slide
function goToSlide(index) {
  currentIndex = index;
  updateSlider();
}

// Initialize the slider
updateSlider();

// JavaScript to toggle dropdown menu on mobile
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const topList = document.querySelector('.header__top__list');
    const middleList = document.querySelector('.header__middle__list');

    menuToggle.addEventListener('click', function() {
        topList.classList.toggle('open');  // Toggle visibility of the top header list
        middleList.classList.toggle('open'); // Toggle visibility of the middle header list
    });
});



