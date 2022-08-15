import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from '../Location/LocationContext';

const FiveDaysForecastDataContext = createContext();

export const FiveDaysForecastProvider = ({ children }) => {
	const apiKey = 'aa06ca00b7d44d63e1071019fb6fe59f';

	const [fiveDaysWeatherData, setThreeHourWeatherData] = useState([]);
	const { locationData } = useLocation();
	const { lon, lat } = locationData;

	useEffect(() => {
		axios
			.get(
				`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=5&appid=${apiKey}&lang=tr&units=metric`
			)
			.then((res) => {
				setThreeHourWeatherData(res.data.list);
			});
	}, [lat, lon]);

	return (
		<FiveDaysForecastDataContext.Provider value={fiveDaysWeatherData}>
			{children}
		</FiveDaysForecastDataContext.Provider>
	);
};

export const useFiveDaysForecast = () =>
	useContext(FiveDaysForecastDataContext);
