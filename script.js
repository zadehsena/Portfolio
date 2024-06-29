// Existing toggleMenu function
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Intersection Observer for fade-in effect
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });

  // Target all elements with the 'fade-in' class
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach((el) => observer.observe(el));
});
