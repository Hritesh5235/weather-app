const apiKey = "f9028ac72cba80a7515a63ff902683c2";

function getWeather() {
    const city = document.getElementById("city").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                document.getElementById("result").innerHTML = "City not found ❌";
                return;
            }

            document.getElementById("result").innerHTML = `
                <h3>${data.name}</h3>
                <p>🌡 Temperature: ${data.main.temp} °C</p>
                <p>💧 Humidity: ${data.main.humidity}%</p>
                <p>🌬 Wind Speed: ${data.wind.speed} m/s</p>
                <p>☁ Weather: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            console.log(error);
        });
}
