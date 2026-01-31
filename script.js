fetch("https://ipapi.co/json/")
  .then(res => res.json())
  .then(data => {
    document.getElementById("ip").textContent = data.ip;
    document.getElementById("city").textContent = data.city;
    document.getElementById("country").textContent = data.country_name;
    document.getElementById("isp").textContent = data.org;
  })
  .catch(err => {
    console.error(err);
  });
