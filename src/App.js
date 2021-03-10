import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { SmallNewsCards } from './Component/Home/SmallNewsCards';
import { MediaImage } from './Component/Home/MediaImage';
import { WeatherForecast } from './Component/Home/WeatherForecast';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <SmallNewsCards/>
     <br/>
     <MediaImage/>
     <WeatherForecast/>
    </div>
  );
}

export default App;
