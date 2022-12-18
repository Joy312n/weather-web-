const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1fbbe6f3famshe488b53db11f236p1bf109jsnc04e83135037',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


const getWeather = (city) => {
	cityName.innerHTML = city

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then((response) => {



			console.log(response)

			// cloud_pct.innerHTM = response.cloud_pct
			temp.innerHTML = response.temp
			// far.innerHTML = response.temp * 9 / 5 + 32
			feels_like.innerHTML = response.feels_like + "&#176;C"
			humidity.innerHTML = response.humidity + "%"
			min_temp.innerHTML = response.min_temp + "&#176;C"
			max_temp.innerHTML = response.max_temp + "&#176;C"
			wind_speed.innerHTML = response.wind_speed + " kmph"
			wind_degrees.innerHTML = response.wind_degrees
			// sunrise.innerHTML = response.sunrise
			// sunset.innerHTML = response.sunset
			fd.style.opacity = '0.5'
			fd.addEventListener("click", (f) => {
				f.preventDefault()
				temp.innerHTML = parseInt(response.temp * 9 / 5 + 32)
				min_temp.innerHTML = parseInt(response.min_temp * 9 / 5 + 32) + "&#176;F"
				max_temp.innerHTML = parseInt(response.max_temp * 9 / 5 + 32) + "&#176;F"
				feels_like.innerHTML = parseInt(response.feels_like * 9 / 5 + 32) + "&#176;F"
				cd.style.opacity = '0.5'
				fd.style.opacity = '1'
			})
			cd.addEventListener("click", (f) => {
				f.preventDefault()
				temp.innerHTML = response.temp
				min_temp.innerHTML = response.min_temp + "&#176;C"
				max_temp.innerHTML = response.max_temp + "&#176;C"
				feels_like.innerHTML = response.feels_like + "&#176;C"
				fd.style.opacity = '0.5'
				cd.style.opacity = '1'
			})
			// cityName.addEventListener()
			if (city == undefined){
				console.log("un");
				cityName.innerHTML = "enter a city name"
				cf.style.opacity = '0'
			
			
			}
			 else{
				
				 cf.style.opacity = '1'
				 cityName.innerHTML = city
				}

		})
		.catch(err => console.error(err));
};

submit.addEventListener("click", (e) => {

	e.preventDefault()
	getWeather(city.value)
	fd.style.opacity = '0.5'
	cd.style.opacity = '1'
	// try {
	// 	if (getWeather.city == city.value) throw "ok";
		
		
	// switch (getWeather.city) {
	// 	case city == null:
	// 		console.log("un");
	// 			cityName.innerHTML = "enter a city name"
	// 			cf.style.opacity = '0'
	// 		break;
	
	// 	default:
	// 		console.log("ung");
	// 			cityName.innerHTML = city
	// 			cf.style.opacity = '1'
	// 		break;
	// }
	// } catch (error) {
	// 	console.log(error);
	// 	console.log("ok");
	// 	cityName.innerHTML = city
	// 	cf.style.opacity = '1'
	// }
	// // if (getWeather.city == " " ,null) 
	// try {
	// 	if (getWeather.city == null) throw "error";
	// 	else{
			
	// 		console.log("upk");
	// 		cityName.innerHTML = getWeather.city
	// 		cf.style.opacity = '1'
	// 	}
		
		
	// } catch (error) {
	// 	console.log(error);
	// 	console.log("un");
	// 	cityName.innerHTML = "enter a city name"
	// 	cf.style.opacity = '0'
	// }


})


// if (temp1.innerHTML == null){
// 	console.log("un");
// 	cityName.innerHTML = "enter a city name"
// 	cf.style.opacity = '0'


// }
//  else{
	
// 	 cf.style.opacity = '1'
// 	 cityName.innerHTML = city
// 	}

getWeather("Asansol")