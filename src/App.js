// import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Herosec from './components/Herosec';
import Nav from './components/Nav';
import LoginPage from './components/Login';
import Aboutus from './components/Aboutus';
import Contact from './components/Contact';
import Cards from './components/CardsSec';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/" element={<> <Herosec /> <Cards/> </>} />
        </Routes>
      </Router>
      <div id="about-us">
        <Aboutus />
      </div>
      <div id="contact-us">
        <Contact />
      </div>
    </div>
  );
}

export default App;
