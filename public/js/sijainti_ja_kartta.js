if("geolocation" in navigator) {
  console.log("Sijaintieto saatavilla");
  navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position);

      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      console.log(latitude);
      console.log(longitude);
      document.getElementById("leveysasteet").innerHTML = latitude;
      document.getElementById("pituusasteet").innerHTML = longitude;

      var kartta = L.map('kartta').setView([latitude, longitude], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(kartta);

      var marker = L.marker([latitude, longitude]).addTo(kartta);
  });
}
else{
  console.log("Sijaintietoa ei ole saatavilla");
}
