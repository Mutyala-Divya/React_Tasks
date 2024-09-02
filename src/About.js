import React from 'react';
import './About.css';

function About() {
  return (
    <div>
      <header>
        <h1>Rich Cuisine</h1>
      </header>
      <div className="container">
        <img src="image7.jpg" alt="Rich Cuisine" />
        <div className="about_details">
          <span>About Us</span>
          <h2>We Provide Good Quality Food to Your Family!</h2>
          <p>Rich Cuisine sit amet, consectetur adipiscing elit. Nullam ac eros et nisi lacinia laoreet vel eget magna. Sed aliquet ipsum nec elit laoreet, at fermentum felis gravida.</p>
          <p>Fusce a nunc euismod, dignissim nisi a, gravida odio. Vestibulum sodales, ex ut interdum convallis, neque elit ultricies lorem, nec malesuada odio odio in elit.</p>
          <button className="btn">Rich Cuisine</button>
        </div>
      </div>
      <footer>
        <p>&copy; 2023 Restaurant Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;
