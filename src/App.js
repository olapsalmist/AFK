import './App.css';
import Homepage from './Background/Homepage';
import Navbars from './navbar/Navbars';
import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Services from './Services/Services';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Navbars/>
      <Routes>
        <Route path='/'  element={<Homepage/>} />
        <Route path='/Services'  element={<Services/>} />
        {/* <Route path='/Homepage'  element={<Homepage/>} /> */}
      </Routes>
      <Footer/>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
