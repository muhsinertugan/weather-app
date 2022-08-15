function FiveDays({ element }) {
	return (
		<div>
			<img
				src={`http://openweathermap.org/img/wn/${element?.weather?.[0]?.icon}@2x.png`}
				alt={element?.main?.description}></img>
			<p>{element?.dt_txt?.slice(11, 16)}</p>

			<p>{element?.weather?.main}</p>
			<p>Current {Math.ceil(element?.main?.temp)} °C</p>
			<p>Min {Math.ceil(element?.main?.temp_min)} °C</p>
			<p>Max {Math.ceil(element?.main?.temp_max)} °C</p>
			<p>Feels Like {Math.ceil(element?.main?.feels_like)} °C</p>
		</div>
	);
}

export default FiveDays;
