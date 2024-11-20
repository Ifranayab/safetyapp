// import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Herosec from './components/Herosec';
import Nav from './components/Nav';
import LoginPage from './components/Login';
import Aboutus from './components/Aboutus';
import Contact from './components/Contact';
import Cards from './components/CardsSec';
import Footer from './components/Footer';

function App() {
  const location = useLocation();

  return (
    <div className='bg-orange-100 overflow-x-hidden'>
      {/* Render Nav only if not on the login page */}
      {location.pathname !== "/login" && <Nav />}

      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/" element={<><Herosec /><Cards /></>} />
      </Routes>

      {/* About Us and Contact Us sections always rendered */}
      <div id="about-us">
        <Aboutus />
      </div>
      <div id="contact-us">
        <Contact />
      </div>

      {/* Render Footer only on the home page */}
      {location.pathname === "/" && <Footer />}
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
