let map;

function getLocation(city) {
  if (city) {
    //use the geo to get the lat and Long
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${city}do&key=AIzaSyCOYW44XORsf-nBZKXvYwZ8VPxDIgq8X7w`,
      {
        method: "GET",
        dataType: "jsonp",
        headers: {},
      }
    )
      .then((response) => response.json())
      .then((city) => {
        let lat = city.results[0].geometry.location.lat;
        let long = city.results[0].geometry.location.lng;

        // pass the Lat and Long to google place API
        gMap(lat, long);
        getGym(lat, long);
      });
  }
}

function showPosition(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;

  gMap(lat, long);
  getGym(lat, long);
}

function gMap(lat, long) {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: lat, lng: long },
    zoom: 10,
  });
}

const getGym = (lat, long) => {
  let url = `https://floating-headland-95050.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=50000&type=gym&keyword=gym&key=AIzaSyCOYW44XORsf-nBZKXvYwZ8VPxDIgq8X7w`;

  fetch(url, {
    method: "GET",
    dataType: "jsonp",
    headers: {},
  })
    .then((response) => response.json())
    .then((data) => {
      //map over this data and create markers on the map
      data.results.forEach((place) => {
        new google.maps.Marker({
          position: place.geometry.location,
          map,
          title: place.name,
        });
      });
    })
    .catch((err) => console.log(err));
};

document.querySelector("#citySearch").addEventListener("click", (e) => {
  let city = document.getElementById("city").value;
  console.log(city);
  getLocation(city);
  // Save user input to local storage
  window.localStorage.setItem("City", `${city}`);
});
