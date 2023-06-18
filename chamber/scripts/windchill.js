const temperature = document.querySelector("#temp-value");
const windSpeed = document.querySelector("#wind-speed-value");
const weatherIcon = document.querySelector("#weather-icon");
const weatherDesc = document.querySelector("#weather-status");

const url = "http://api.openweathermap.org/data/2.5/weather?q=tarlac%20city&units=metric&appid=f458f91929bcdd3aba4635302a2c1ae2";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);

        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(weatherData) {
    temperature.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherDesc.textContent = desc.toUpperCase();

    var temp = weatherData.main.temp;
    var wSpeed = weatherData.wind.speed;

    var toFahr = (temp * 1.8) + 32;
    var toMiles = wSpeed / 1.609344;

    windSpeed.textContent = wSpeed.toFixed(1);

    if (toFahr <= 50 && toMiles > 3) {
        windChill = 35.74 + (0.6215 * toFahr) - (35.75 * toMiles**0.16) + (0.4275 * toFahr * toMiles**0.16);
        toCels = (windChill - 32) / 1.8;
        document.querySelector("#wind-chill-value").textContent = toCels.toFixed(1);
    }
    else {
        document.querySelector("#wind-chill-value").textContent =  "N/A"
    } 
}

