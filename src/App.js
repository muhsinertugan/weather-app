import './App.css';
import Seachbar from './components/Searchbar/Searchbar.js';
import Forecast from './components/Forecast/Forecast.js';
import { LocationProvider } from './contexts/Location/LocationContext';

function App() {
	return (
		<div className='App'>
			<LocationProvider>
				<Seachbar></Seachbar>
				<Forecast></Forecast>
			</LocationProvider>
		</div>
	);
}

export default App;
