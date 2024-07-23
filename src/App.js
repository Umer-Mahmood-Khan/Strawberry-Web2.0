import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Model from './components/Model';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import SearchPage from './components/SearchPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { auth } from './firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const [userEmail, setUserEmail] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
        setIsAuthenticated(true);
      } else {
        setUserEmail('');
        setIsAuthenticated(false);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div className="App">
        <Header userEmail={userEmail} setUserEmail={setUserEmail} />
        <Routes>
          <Route path="/" element={
            <>
              <Banner userEmail={userEmail} />
              <Gallery />
              {isAuthenticated && <SearchPage />} {/* Conditionally render SearchPage */}
              <Model />
              <AboutUs />
              <Contact />
            </>
          } />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/model" element={<Model />} />
          {isAuthenticated ? (
            <Route path="/search" element={<SearchPage />} />
          ) : (
            <Route path="/search" element={<div>You need to sign in to access this page.</div>} />
          )}
          
          <Route path="/signin" element={<SignIn setUserEmail={setUserEmail} />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
