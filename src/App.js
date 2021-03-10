import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import { Home } from './Routes/Home';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Home/>
     <Footer></Footer>
    </div>
  );
}

export default App;
