document.addEventListener("DOMContentLoaded", () => {
  fetch("https://ipapi.co/json/")
    .then(res => {
      if (!res.ok) throw new Error("HTTP error");
      return res.json();
    })
    .then(data => {
      document.getElementById("ip").textContent = data.ip;
      document.getElementById("city").textContent = data.city;
      document.getElementById("country").textContent = data.country_name;
      document.getElementById("isp").textContent = data.org;
    })
    .catch(err => {
      console.error(err);
      document.body.innerHTML += "<p>Error al obtener datos</p>";
    });
});
