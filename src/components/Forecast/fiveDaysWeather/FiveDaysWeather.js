import React from 'react';
import FiveDays from './FiveDays';
import { useFiveDaysForecast } from '../../../contexts/ForecastData/FiveDaysForecastDataContext';

function FiveDaysWeather() {
	const fiveDays = useFiveDaysForecast();

	return (
		<>
			{fiveDays?.map((element, index) => (
				<FiveDays
					element={element}
					index={index}
					key={element.dt}></FiveDays>
			))}
		</>
	);
}

export default FiveDaysWeather;
