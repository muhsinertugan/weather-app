import './style-searchbar.css';
import { useLocation } from '../../contexts/Location/LocationContext';
import { DebounceInput } from 'react-debounce-input';

function Seachbar() {
	const locationData = useLocation();

	return (
		<div className='searchbar'>
			<DebounceInput
				minLength={3}
				debounceTimeout={1000}
				value={locationData.cityName.city}
				onChange={locationData.handleChange}
				name={'city'}></DebounceInput>
			<button onClick={locationData.handleLocation}>Search</button>
		</div>
	);
}

export default Seachbar;
