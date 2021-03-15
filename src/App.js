import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import AllRoutes  from './Routes/AllRoutes';
import { NewsTost } from './Component/NewsTost/NewsTost'

function App() {
  return (
    <div className="App">
     <Navbar/>
     <NewsTost />
     <AllRoutes/>
     <Footer/>
    </div>
  );
}

export default App;
