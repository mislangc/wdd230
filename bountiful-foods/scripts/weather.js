const url = "https://api.openweathermap.org/data/2.5/forecast?q=carlsbad&units=imperial&appid=f458f91929bcdd3aba4635302a2c1ae2";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayWeather(data);

        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayWeather(data) {
    const weather = document.querySelector("#weather");

    const weatherTop = document.createElement("div");

    const temp = document.createElement("h2");
    const desc = document.createElement("h3");
    const humi = document.createElement("h3");
    const weatherIcon = document.createElement("img");
    const weatherIconTom = document.createElement("img");
    const weatherIcon2nd = document.createElement("img");
    const weatherIcon3rd = document.createElement("img");

    const weatherBottom = document.createElement("div");

    /* and a 3 day temperature forecast.*/
    const threeDayForecast = document.createElement("div");

    const threeDayTitle = document.createElement("h2");

    const forecastOne = document.createElement("h3");
    const forecastTwo = document.createElement("h3");
    const forecastThree = document.createElement("h3");

    const iconSrc = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
    const iconSrcTom = `https://openweathermap.org/img/w/${data.list[8].weather[0].icon}.png`;
    const iconSrc2nd = `https://openweathermap.org/img/w/${data.list[16].weather[0].icon}.png`;
    const iconSrc3rd = `https://openweathermap.org/img/w/${data.list[24].weather[0].icon}.png`;

    temp.innerHTML = `Temperature: ${data.list[0].main.temp} &#8457;`;
    desc.innerHTML = `${(data.list[0].weather[0].description).toUpperCase()}`;
    humi.textContent = `Humidity: ${data.list[0].main.humidity}%`;
    
    weatherIcon.setAttribute("src", iconSrc);
    weatherIcon.setAttribute("alt", "photo of the current weather");
    weatherIconTom.setAttribute("src", iconSrcTom);
    weatherIconTom.setAttribute("alt", "photo of the tomorrow's weather");
    weatherIcon2nd.setAttribute("src", iconSrc2nd);
    weatherIcon2nd.setAttribute("alt", "photo of the the day after tomorrow's weather");
    weatherIcon3rd.setAttribute("src", iconSrc3rd);
    weatherIcon3rd.setAttribute("alt", "photo of the the day after that weather");

    threeDayTitle.textContent = "3 day temperature forecast";

    forecastOne.innerHTML = `Tomorrow ${data.list[8].main.temp} &#8457;`;
    forecastTwo.innerHTML = `2nd Day ${data.list[16].main.temp} &#8457;`;
    forecastThree.innerHTML = `3rd Day ${data.list[24].main.temp} &#8457;`;

    threeDayForecast.setAttribute("id", "three-day-forecast");

    forecastOne.appendChild(weatherIconTom);
    forecastTwo.appendChild(weatherIcon2nd);
    forecastThree.appendChild(weatherIcon3rd);

    weatherTop.appendChild(temp);
    weatherTop.appendChild(weatherIcon);
    weatherTop.appendChild(desc);
    weatherTop.appendChild(humi);

    threeDayForecast.appendChild(forecastOne);
    threeDayForecast.appendChild(forecastTwo);
    threeDayForecast.appendChild(forecastThree);

    weatherBottom.appendChild(threeDayTitle);
    weatherBottom.appendChild(threeDayForecast);

    weatherTop.setAttribute("id","weather-top");
    weatherBottom.setAttribute("id","weather-bottom");

    weather.appendChild(weatherTop);
    weather.appendChild(weatherBottom);
}