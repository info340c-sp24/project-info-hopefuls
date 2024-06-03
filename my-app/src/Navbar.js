import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
        <Link to="/search">Search</Link>
      </div>
    </nav>
  );
};

export default Navbar;
