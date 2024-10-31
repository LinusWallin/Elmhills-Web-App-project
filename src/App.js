import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Puppies from './components/pages/Puppies';
import Previous from './components/pages/Previous';
import About1 from './components/pages/About1';
import OurDogs from './components/pages/OurDogs';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/om-oss' exact Component={About1}/>
          <Route path='/valpar' exact Component={Puppies}/>
          <Route path='/tidigare-valpkullar' exact Component={Previous}/>
          <Route path='/valpar/skotselrad' exact Component={About}/>
          <Route path='/valpar/bra-ovningar' exact Component={About}/>
          <Route path='vara-hundar' exact Component={OurDogs}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
