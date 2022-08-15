import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from '../Location/LocationContext';

const CurrentForecastContext = createContext();

export const CurrentForecastProvider = ({ children }) => {
	const apiKey = 'aa06ca00b7d44d63e1071019fb6fe59f';
	const [currentWeatherData, setCurrentWeatherData] = useState();

	const { locationData } = useLocation();

	useEffect(() => {
		axios
			.get(
				`https://api.openweathermap.org/data/2.5/weather?lat=${locationData.lat}&lon=${locationData.lon}&appid=${apiKey}&lang=tr&units=metric`
			)
			.then((res) => {
				setCurrentWeatherData(res?.data);
			});
	}, [locationData.lat, locationData.lon]);

	return (
		<CurrentForecastContext.Provider value={currentWeatherData}>
			{children}
		</CurrentForecastContext.Provider>
	);
};

export const useCurrentForecast = () => useContext(CurrentForecastContext);
