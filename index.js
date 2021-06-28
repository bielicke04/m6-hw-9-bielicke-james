var weather = {
    "apiKey": "3883aac7fce1e7e9ff348e06b041a68b",
    fetchWeather: function (city) {
        fetch("http://api.openweathermap.org/data/2.5/weather?q="
        + city
        + "&units=imperial&appid="
        + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        var { name } = data;
        var { country } = data.sys;
        var {icon, description } = data.weather[0];
        var { temp, feels_like, humidity} = data.main;
        //console.log(name, country, icon, description, temp, feels_like, humidity)
        document.querySelector(".city").innerText = "Weather : " + name + ", " + country;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°";
        document.querySelector(".feels").innerText = "Feels like: " + feels_like + "°";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
});

weather.fetchWeather("St Louis");