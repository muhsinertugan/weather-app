import { createContext, useContext, useState, useMemo, useEffect } from 'react';
import axios from 'axios';

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
	const apiKey = 'aa06ca00b7d44d63e1071019fb6fe59f';
	const [defaultLocation, setDefaultLocation] = useState({});
	useMemo(() => {
		navigator.geolocation.getCurrentPosition(setDefaultLocation);
	}, []);

	const defaultData = useMemo(
		() => ({
			lat: defaultLocation?.coords?.latitude,
			lon: defaultLocation?.coords?.longitude,
		}),
		[defaultLocation?.coords?.latitude, defaultLocation?.coords?.longitude]
	);
	const [locationData, setLocationData] = useState(defaultData);
	const [cityName, setCityName] = useState({ city: '' });

	useEffect(() => setLocationData(defaultData), [defaultData]);

	const handleLocation = async () => {
		const res = await axios.get(
			`http://api.openweathermap.org/geo/1.0/direct?q=${cityName.city}&limit=1&appid=${apiKey}`
		);

		return setLocationData({ lon: res.data[0].lon, lat: res.data[0].lat });
	};

	const handleChange = (event) => {
		setCityName({ [event.target.name]: event.target.value });
	};

	console.log(defaultLocation, locationData);

	return (
		<LocationContext.Provider
			value={{ cityName, locationData, handleChange, handleLocation }}>
			{children}
		</LocationContext.Provider>
	);
};

export const useLocation = () => useContext(LocationContext);
