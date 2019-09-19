if("geolocation" in navigator) {
  console.log("Sijaintieto saatavilla");
  navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position);

      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      console.log(latitude);
      console.log(longitude);

      //document.getElementById("latitude").innerHTML = latitude;
      //document.getElementById("longitude").innerHTML = longitude;
  });
}
else{
  console.log("Sijaintietoa ei ole saatavilla");
}
