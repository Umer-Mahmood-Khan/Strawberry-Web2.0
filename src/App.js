import React from 'react';
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

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Banner />
              <Gallery />
              <Model />
            </>
          } />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/model" element={<Model />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
