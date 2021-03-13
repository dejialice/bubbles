
let bubbles = [];

//get geolocation
(async function geoFind(){
  if('geolocation' in navigator) {
    document.getElementById('myH1').textContent = "allow geolocation to run page"
    await navigator.geolocation.getCurrentPosition(success)
  } else {
    document.getElementById('myH1').textContent = "geolocation not supported. update your browser"
  }

})();

function success(pos) {
  let lat = pos.coords.latitude.toFixed(2);
  let lon = pos.coords.longitude.toFixed(2);
  setup(lat, lon)
}
function setup(lat, lon) {
  let apiKey = '69cb5eeae6b05dc9b67844b8b7877f00&units=imperial'
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
  console.log(url)
  fetch(url)
    .then(res => res.json())
    .then(res => {
      console.log(res);

      let canvas = createCanvas(400, 400);
      canvas.parent('p5js')
      for(let i = 0; i < 250; i++) {
        let x = random(0, 400);
        let y = random(0, 400);
        let m = random(2, 12);
        bubbles[i] = new Bubble(x, y, m)
      }
    })
    .catch(err => console.log(err))

}

function draw() {
  background(220);
  for(let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].move();
  }
}

//refactor
//don't make the api call until you have lat and lon
//pass windspeed
