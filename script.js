document.addEventListener("DOMContentLoaded", () => {
  fetch("https://api.ipify.org?format=json")
    .then(res => res.json())
    .then(data => {
      document.getElementById("ip").textContent = data.ip;
    })
    .catch(() => {
      document.getElementById("ip").textContent = "No se pudo obtener la IP";
    });
});
