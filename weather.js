fetch(
	'https://api.openweathermap.org/data/2.5/weather?q=Cancun&appid=6acd1f2fce33de3468a522402b0385c7&units=metric'
)
	.then(response => response.json())
	.then(data => {
		console.log(data);
        console.log(data.main.temp);
        temperature.textContent = "Temperature : "+data.main.temp+"\u00B0C";
        
        //Icon
        const weathericon = "https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";
        console.log(icon)

        icon.src = weathericon;
        icon.alt = data.weather[0].description
    });
