import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Herosec from './components/Herosec';
import Nav from './components/Nav';
import LoginPage from './components/Login';
import { Component } from 'react';
import Cards from './components/CardsSec';
import WellnessSchedule from './components/WellnessSchedule';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import PodcastAndArticles from './components/PodcastAndArticles';
import Yoga from './components/Yoga';
import Chat from './components/Chat';


function App() {
  return (
    <div>
    
    
    <Router>
    <Nav/>
      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
        {/* <Route exact path="/" element={<LoginPage />} /> */}

        
        <Route exact path="/" element={<> <Herosec /> <Cards/> </>} />
        <Route exact path="/wellnessschedule" element={<WellnessSchedule />} />
        {/* <Route exact path="/" element={<Herosec />} /> */}
        <Route exact path="/aboutUs" element={<AboutUs />} />
        <Route exact path="/contactUs" element={<ContactUs />} />
        <Route exact path="/podcast" element={<PodcastAndArticles />} />
        <Route exact path="/yoga" element={<Yoga />} />
        <Route exact path="/chat" element={<Chat />} />


        
      </Routes>
    </Router>
   
    </div>
    
  );
}

export default App;
