// Calculate Windchill
const windchill_tag = document.querySelector(".main__eather__lower__windchill");
const temperature_tag = document.querySelector(".main__weather__temperature");
const windspeed_tag = document.querySelector(".main__weather__windspeed");

const temp = 10;
const windSpeed = 10;
var windchill =
  35.74 +
  0.6215 * temp -
  35.75 * Math.pow(windSpeed, 0.16) +
  0.4275 * temp * Math.pow(windSpeed, 0.16);
var windchill = Math.round(windchill);

// Inner Html Stuff
temperature_tag.innerHTML = `${temp}°F`;
windspeed_tag.innerHTML = `${windSpeed} mph`;

if (windchill <= 50 && windSpeed >= 3) {
  windchill_tag.innerHTML = `${windchill}°F`;
} else {
  windchill_tag.innerHTML = "N/a";
}
