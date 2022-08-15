// import './syle-forecast.css';
import FiveDaysWeather from './fiveDaysWeather/FiveDaysWeather';
import CurrentWeather from './currentWeather/CurrentWeather';
import { CurrentForecastProvider } from '../../contexts/ForecastData/CurrentForecastDataContext';
import { FiveDaysForecastProvider } from '../../contexts/ForecastData/FiveDaysForecastDataContext';

function Forecast() {
	return (
		<>
			<CurrentForecastProvider>
				<CurrentWeather></CurrentWeather>
			</CurrentForecastProvider>

			<FiveDaysForecastProvider>
				<FiveDaysWeather></FiveDaysWeather>
			</FiveDaysForecastProvider>
		</>
	);
}

export default Forecast;
