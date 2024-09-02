import React from 'react';
import './projectstyle.css';
const Project = () => {
  return (
    <div className="container">
      <h1 style={{ color: 'rgb(247, 1, 1)' }}>Rich Cuisine</h1>
      <div className="navbar">
        <ul>
          <li><a href="#">HOME</a></li>
          <li><a href="About.js">ABOUT</a></li>
          <li><a href="menu1.html">MENU</a></li>
          <li><a href="gallery2.html">GALLERY</a></li>
          <li><a href="team1.html">TEAM</a></li>
          <li><a href="contact1.html">CONTACT</a></li>
          <li><a href="login2.html">Login</a></li>
          <li><a href="reserve.html">Reserve Table</a></li>
        </ul>
      </div>
      <div className="content">
        <h3>Welcome to Rich cuisine</h3>
        <h1>Rich Healthy and Natural Food</h1>
      </div>
      <div className="search">
        <input type="text" placeholder="Search Food" />
      </div>
      <div className="submit">
        <a href="menu1.html">Submit</a>
      </div>
    </div>
  );
}

export default Project;
