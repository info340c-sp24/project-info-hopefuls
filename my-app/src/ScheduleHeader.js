import React from 'react';
import Navbar from './Navbar';

const Header = ({ title }) => {
  return (
    <header>
      <Navbar />
      <div className="container">
        <h1>{title}</h1>
      </div>
    </header>
  );
};

export default Header;