// select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&APPID=cbaa37834ddf1bb0b7fa98983a3fb0d7";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      // displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

function displayResults(data) {
  temperature.textContent = data.main.temp.toFixed(0);
  let desc = capitalize(data.weather[0].description);
  description.textContent = `Icon of current weather condition at Fairbanks which is ${desc}`;
  weatherIcon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}png`;
  weatherIcon.alt = `Icon of current weather condition at Fairbanks which is ${desc}`;
}
