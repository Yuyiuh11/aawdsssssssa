document.addEventListener("DOMContentLoaded", () => {
  fetch("https://api.ipify.org?format=json")
    .then(r => r.json())
    .then(d => {
      document.getElementById("ip").textContent = d.ip;
    })
    .catch(() => {
      document.getElementById("ip").textContent = "No se pudo obtener la IP";
    });
});
