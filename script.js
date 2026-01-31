document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("browser").textContent = navigator.userAgent;
  document.getElementById("os").textContent = navigator.platform;
  document.getElementById("lang").textContent = navigator.language;
  document.getElementById("res").textContent =
    screen.width + " x " + screen.height;
});
