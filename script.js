fetch("http://ip-api.com/json/")
  .then(res => res.json())
  .then(data => {
    document.getElementById("resultado").textContent =
      `IP: ${data.query}
País: ${data.country}
Provincia: ${data.regionName}
Ciudad: ${data.city}
ISP: ${data.isp}`;
  })
  .catch(err => {
    document.getElementById("resultado").textContent = "Error al obtener datos";
    console.error(err);
  });
