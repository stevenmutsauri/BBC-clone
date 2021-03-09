import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import { SmallNewsCards } from './Component/SmallNewsCards';
import { MediaImage } from './Component/MediaImage';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <SmallNewsCards/>
     <br/>
     <MediaImage/>
    </div>
  );
}

export default App;
