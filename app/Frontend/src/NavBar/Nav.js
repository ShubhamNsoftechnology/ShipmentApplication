import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './NavBar.css';


import Home from '../components/Home/Home';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Services from '../components/Services/Services';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faEnvelope, faCog, faUserPlus, faUserCog } from '@fortawesome/free-solid-svg-icons';
// import FAQ from './components/FAQ';
import BootStrap from '../components/Regisration/BootStrap';
import User from '../components/User/User';
// import Homenew from '../components/Home/Homenew';
const App = () => {
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
  return (
    <Router>
      <nav className="navbarr"  >
        <ul className="navbar-navv"   >
          <li className="nav-itemm"  >
            <Link to="/" className="nav-linkk"  > <FontAwesomeIcon icon={faHome}  /> Home</Link>
          </li>
          <li className="nav-itemm">
            <Link to="/about" className="nav-linkk"> <FontAwesomeIcon icon={faInfoCircle} /> About</Link>
          </li>
          <li className="nav-itemm">
            <Link to="/contact" className="nav-linkk"> <FontAwesomeIcon icon={faEnvelope} /> Contact</Link>
          </li>
          <li className="nav-itemm">
            <Link to="/services" className="nav-linkk"> <FontAwesomeIcon icon={faCog} /> Services</Link>
          </li>
          <li className="nav-itemm">
            <Link to="/BootStrap" className="nav-linkk"> <FontAwesomeIcon icon={faUserPlus} /> User-Registration</Link>
          </li>
          <li className="nav-itemm">
            <Link to="/User" className="nav-linkk"> <FontAwesomeIcon icon={faUserCog} /> User Management</Link>
          </li>
        </ul>
      </nav>

      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/BootStrap" element={<BootStrap />} />
        <Route path="/User" element={<User />} />
      </Routes>
    </Router>
  );
};

export default App;
