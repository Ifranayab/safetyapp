// import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Herosec from './components/Herosec';
import Nav from './components/Nav';
import LoginPage from './components/Login';
import Aboutus from './components/Aboutus';
import Contact from './components/Contact';
import Cards from './components/CardsSec';
import WellnessSchedule from './components/WellnessSchedule';
// import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import PodcastAndArticles from './components/PodcastAndArticles';
import Yoga from './components/Yoga';
import Chat from './components/Chat';
import Footer from './components/Footer';


function App() {
  const location = useLocation();

  return (
    <div className='bg-orange-100 overflow-x-hidden'>
      {/* Render Nav only if not on the login page */}
      {location.pathname !== "/login" && <Nav />}

      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
        {/* <Route exact path="/" element={<LoginPage />} /> */}

        
        <Route exact path="/" element={<> <Herosec /> <Cards/> </>} />
        <Route exact path="/wellnessschedule" element={<WellnessSchedule />} />
        {/* <Route exact path="/" element={<Herosec />} /> */}
        <Route exact path="/aboutUs" element={<Aboutus />} />
        <Route exact path="/contactUs" element={<ContactUs />} />
        <Route exact path="/podcast" element={<PodcastAndArticles />} />
        <Route exact path="/yoga" element={<Yoga />} />
        <Route exact path="/chat" element={<Chat />} />


        
        {/* <Route exact path="/" element={<><Herosec /><Cards /></>} /> */}
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
