import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Herosec from './components/Herosec';
import Nav from './components/Nav';
import LoginPage from './components/Login';
import { Component } from 'react';

function App() {
  return (
    <div>
    <Nav/>
    {/* <Herosec/> */}
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        
        <Route path="/" element={<Herosec />} />
        
      </Routes>
    </Router>
   {/* <Herosec/> */}
    {/* //   <LoginPage/> */}
    </div>
    
  );
}

export default App;
