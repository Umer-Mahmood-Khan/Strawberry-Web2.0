// src/components/Contact.js
import React from 'react';
import './Contact.css'; // Make sure to create and style this CSS file

const Contact = () => {
  return (
    <div id="content-blocks" className="contact">
      <h1 className="h1">CONTACT US</h1>
      <div className="contact-block">
        <div className="img">
          <img src={require('../assets/map.png')} alt="Map" />
        </div>
        <div>
          <h6>DIRECTIONS:</h6>
          <address>712 Brock St, Windsor, ON</address>
          <h6>GET IN TOUCH:</h6>
          <p><a href="mailto:info@waapple.org">strawberry@gmail.com</a></p>
          <p>226.345.4099</p>
          {/* <button>FIND AN APPLE SUPPLIER</button> */}
          <h6>FOLLOW US:</h6>
          <div className="social-icons">
            <a href="#"><img src={require('../assets/face.png')} alt="Facebook" /></a>
            <a href="#"><img src={require('../assets/insta.png')} alt="Instagram" /></a>
            <a href="#"><img src={require('../assets/you.png')} alt="YouTube" /></a>
            <a href="#"><img src={require('../assets/print (1).png')} alt="Pinterest" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
