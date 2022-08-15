import React from 'react';
import { useCurrentForecast } from '../../../contexts/ForecastData/CurrentForecastDataContext';

function CurrentWeather() {
	let date = new Date().toLocaleDateString('tr-TR');

	const currentWeatherData = useCurrentForecast();

	return (
		<div>
			<img
				src={`http://openweathermap.org/img/wn/${currentWeatherData?.weather?.[0]?.icon}@2x.png`}
				alt={currentWeatherData?.main?.description}></img>
			<p>{currentWeatherData?.weather?.[0]?.main}</p>
			<p>Current {Math.ceil(currentWeatherData?.main?.temp)} °C</p>
			<p>Min {Math.ceil(currentWeatherData?.main?.temp_min)} °C</p>
			<p>Max {Math.ceil(currentWeatherData?.main?.temp_max)} °C</p>
			<p>
				Feels Like {Math.ceil(currentWeatherData?.main?.feels_like)} °C
			</p>
			<p>{date}</p>
		</div>
	);
}

export default CurrentWeather;
