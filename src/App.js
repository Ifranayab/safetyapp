// import './App.css';
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import Herosec from './components/Herosec';
// import Nav from './components/Nav';
// import LoginPage from './components/Login';
// import { Component } from 'react';
// import Cards from './components/CardsSec';


// function App() {
//   return (
//     <div>
    
    
//     <Router>
//     <Nav/>
//       <Routes>
//         <Route exact path="/login" element={<LoginPage />} />
        
//         <Route exact path="/" element={<> <Herosec /> <Cards/> </>} />
        
//       </Routes>
//     </Router>
   
//     </div>
    
//   );
// }

// export default App;


import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Herosec from './components/Herosec';
import Nav from './components/Nav';
import LoginPage from './components/Login';
import Cards from './components/CardsSec';
import Footer from './components/Footer';

function App() {
  const location = useLocation();

  return (
    <div className=' bg-orange-100 overflow-x-hidden'>
      {/* Render Nav only if not on the login page */}
      {location.pathname !== "/login" && <Nav />}

      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/" element={<><Herosec /><Cards /></>} />
      </Routes>
      {location.pathname =="/" && <Footer/>}
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

