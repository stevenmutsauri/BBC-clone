import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { SmallNewsCards } from './Component/Home/SmallNewsCards';
import { MediaImage } from './Component/Home/MediaImage';
import { WeatherForecast } from './Component/Home/WeatherForecast';
import Footer from './Component/Footer/Footer';
import { NewsMain } from './Component/News/NewsHome/NewsMain';
import { AllRoutes } from './Routes/AllRoutes';
import { Home } from './Routes/Home';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
        <AllRoutes/>
     <Home/>
     <SmallNewsCards/>
     <br/>
     <MediaImage/>
     <WeatherForecast/>
     <Footer></Footer>
    </div>
  );
}

export default App;
