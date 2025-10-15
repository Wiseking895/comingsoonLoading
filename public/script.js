// Loading animation with smooth fade-out
document.addEventListener("DOMContentLoaded", () => {
  const percent = document.getElementById("loading-percent");
  const loaderContainer = document.getElementById("loader-container");
  const message = document.getElementById("message");
  const progressBar = document.getElementById("progress-bar");

  let load = 0;
  const interval = setInterval(() => {
    load++;
    percent.textContent = `${load}%`;
    progressBar.style.width = `${load}%`;

    if (load >= 100) {
      clearInterval(interval);

      // Add fade-out animation to loader
      loaderContainer.style.transition = "opacity 1s ease";
      loaderContainer.style.opacity = "0";

      setTimeout(() => {
        loaderContainer.classList.add("hidden");
        message.classList.remove("hidden");
        message.style.opacity = "0";
        message.style.transition = "opacity 1s ease";
        setTimeout(() => {
          message.style.opacity = "1";
        }, 50);
      }, 1000); // Wait for fade-out to finish
    }
  }, 50); // Adjust speed (50ms → ~5 seconds total)
});

// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
});
