const yearElement = document.getElementById('year');
const themeToggleButton = document.getElementById('themeToggle');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

if (themeToggleButton) {
  themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light');
  });
}
