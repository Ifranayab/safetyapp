// import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Herosec from './components/Herosec';
import Nav from './components/Nav';
import LoginPage from './components/Login';
import Aboutus from './components/Aboutus';
import Contact from './components/Contact';
import Cards from './components/CardsSec';
import Footer from './components/Footer';
import Chatting from './components/Chatting';

function App() {
  const location = useLocation();

  return (
    <div className='bg-orange-100 overflow-x-hidden h-full'>
      {/* Render Nav only if not on the login page */}
      {location.pathname == "/" && <Nav />}

      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/" element={<><Herosec /><Cards /></>} />
        <Route exact path="/chatBot" element={<Chatting />} />
      </Routes>

      {/* Render Footer only on the home page */}
      {location.pathname === "/" && <Aboutus/>}
      {location.pathname === "/" && <Contact />}
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
