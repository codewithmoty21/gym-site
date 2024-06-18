import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">GymSite</h1>
        <nav>
          <ul className="nav-links">
            <li><Link to="/home">Home</Link></li>
            <li><HashLink smooth to="/home#programs">Programs</HashLink></li>
            <li><HashLink smooth to="/home#timetable">Timetable</HashLink></li>
            <li><HashLink smooth to="/home#contact">Contact</HashLink></li>
            <li><Link to="/">Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
