import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { SmallNewsCards } from './Component/Home/SmallNewsCards';
import { MediaImage } from './Component/Home/MediaImage';
import { WeatherForecast } from './Component/Home/WeatherForecast';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <SmallNewsCards/>
     <br/>
     <MediaImage/>
     <WeatherForecast/>
     <Footer></Footer>
    </div>
  );
}

export default App;
