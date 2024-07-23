import React, { useState } from 'react';
import './Header.css'; // Import the CSS file for Header
import logo from '../assets/logo.png'; // Import the logo
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig'; // Import auth from Firebase
import { signOut } from 'firebase/auth';

const Header = ({ userEmail, setUserEmail }) => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isLanguageDropdownActive, setIsLanguageDropdownActive] = useState(false);
  const navigate = useNavigate();

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownActive(!isLanguageDropdownActive);
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUserEmail('');
      navigate('/signin'); // Redirect to Sign In page
    } catch (error) {
      console.error("Sign Out Error", error);
    }
  };

  return (
    <header id="header" className="header">
      <nav>
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          {userEmail && (
            <>
              <li>
                <Link to="/search">Search</Link>
              </li>
            </>
          )}
          <li>
            <Link to="/model">Model</Link>
          </li>
          {!userEmail ? (
            <>
              <li>
                <Link to="/signin">Sign In</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
            </>
          ) : (
            <li>
              <span onClick={handleSignOut} className="signout-text">Sign Out</span>
            </li>
          )}
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="nav-icons">
          {userEmail && (
            <FontAwesomeIcon icon={faSearch} className="search-icon" onClick={toggleSearch} />
          )}
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
      {isSearchActive && userEmail && (
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
