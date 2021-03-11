import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { SmallNewsCards } from './Component/Home/SmallNewsCards';
import { MediaImage } from './Component/Home/MediaImage';
import { WeatherForecast } from './Component/Home/WeatherForecast';
import Footer from './Component/Footer/Footer';
import { NewsMain } from './Component/News/NewsHome/NewsMain';
import { AllRoutes } from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
        <AllRoutes/>
     <Footer/>
    </div>
  );
}

export default App;
