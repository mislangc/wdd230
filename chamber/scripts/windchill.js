var temperature = document.querySelector("#temp-value").textContent;
var windSpeed = document.querySelector("#wind-speed-value").textContent;

var temp = parseInt(temperature);
var wSpeed = parseInt(windSpeed);

var toFahr = (temp * 1.8) + 32;
var toMiles = wSpeed / 1.609344;


if (toFahr <= 50 && toMiles > 3) {
    windChill = 35.74 + (0.6215 * toFahr) - (35.75 * toMiles**0.16) + (0.4275 * toFahr * toMiles**0.16);
    toCels = (windChill - 32) / 1.8;
    document.querySelector("#wind-chill-value").textContent = toCels.toFixed(1);
}
else {
    document.querySelector("#wind-chill-value").textContent =  "N/A"
} 