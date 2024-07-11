import React, { useState } from 'react';
import './Header.css'; // Import the CSS file for Header
import logo from '../assets/logo.png'; // Import the logo
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isLanguageDropdownActive, setIsLanguageDropdownActive] = useState(false);

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownActive(!isLanguageDropdownActive);
  };

  return (
    <header id="header" className="header">
      <nav>
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          
        </div>
        <ul className="nav-links">
          <li><a href="#why-washington-apples">MODEL</a></li>
          <li><a href="#varieties">ABOUT US</a></li>
          <li><a href="#recipes">CONTACT US</a></li>
          {/* <li><a href="#apple-facts">STRAWBERRY FACTS</a></li> */}
        </ul>
        <div className="nav-icons">
          <FontAwesomeIcon icon={faSearch} className="search-icon" onClick={toggleSearch} />
          <div className="language-dropdown">
            <span className="language-icon" onClick={toggleLanguageDropdown}>EN</span>
            {isLanguageDropdownActive && (
              <ul className="language-options">
                <li>ENGLISH</li>
                <li>FRANÇAIS</li>
              </ul>
            )}
          </div>
          <FontAwesomeIcon icon={faBars} className="menu-icon" />
        </div>
      </nav>
      {isSearchActive && (
        <div className="search active">
          <form className="search-form">
            <input type="text" placeholder="Search" />
            <button type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </div>
      )}
    </header>
  );
};

export default Header;