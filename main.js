function getWeather() {
    const location = document.getElementById('location').value;
    const apiKey = 'c9151505cb4b4047987143513253101';
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.getElementById('temperature').innerText = 'Location not found!';
            } else {
                document.getElementById('temperature').innerText = `Temperature in ${location}: ${data.current.temp_c}°C`;
                document.getElementById('humidity').innerText = `Humidity in ${location}: ${data.current.humidity}%`;
                document.getElementById('conditionText').innerText = `Condition : ${data.current.condition.text}`;
                document.getElementById('conditionIcon').src = data.current.condition.icon;
            }
        })
        .catch(error => console.log('Error fetching data:', error));
}
