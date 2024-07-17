import React from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Model from './components/Model';
import SearchPage from './components/SearchPage';
import Contact from './components/Contact'; 
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Gallery />
      <Model />
      <SearchPage />
      <AboutUs/>
      <Contact /> {/* Add the Contact component here */}
      <Footer />
    </div>
  );
}

export default App;
