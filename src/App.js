import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import { store } from './Redux/store';
import AllRoutes from './Routes/AllRoutes';
function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <AllRoutes></AllRoutes>
     <Footer></Footer>
    
    </div>
  );
}

export default App;
