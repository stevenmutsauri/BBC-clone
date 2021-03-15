import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { SmallNewsCards } from './Component/Home/SmallNewsCards';
import { MediaImage } from './Component/Home/MediaImage';
import { WeatherForecast } from './Component/Home/WeatherForecast';
import Footer from './Component/Footer/Footer';

import { NewsMain } from './Component/News/NewsHome/NewsMain';
import AllRoutes  from './Routes/AllRoutes';
import { Home } from './Routes/Home';
import Welcome from './Component/Home/Welcome';
import Reel from './Component/Home/Reel';
import Future from './Component/Home/Future';
import Business from './Component/Home/Business';
import Business2 from './Component/Home/Business2';
import World from './Component/Home/World';
import { bindActionCreators } from 'redux';

import { NewsTost } from './Component/NewsTost/NewsTost'


function App() {
  return (
    <div className="App">
     <Navbar/>
     
      <NewsTost />
      {/* <NewsTost/> */}
      <AllRoutes/>
      {/* <Home/> */}
     <Footer/>
     

   


    </div>
  );
}

export default App;
