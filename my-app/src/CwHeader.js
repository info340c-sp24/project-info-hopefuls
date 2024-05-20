import React from 'react';
import { useNavigate } from 'react-router-dom';

function CwHeader() {
    const navigate = useNavigate();

    const navigateToHome = () => {
      navigate("/");
    };

    const navigateToSearch = () => {
      navigate("/search.html");
    };

    const navigateToSchedule = () => {
      navigate("/schedule");
    };

    return (
      <header>
      <nav className="navbar">
        <div className="container">
          <a href="/" onClick={navigateToHome}>Home</a>
          <a href="/search.html" onClick={navigateToSearch}>Search</a>
          <a href="/schedule" onClick={navigateToSchedule}>Schedule</a>
        </div>
      </nav>
      <div className="container">
        <h1>Create Workout</h1>
      </div>
    </header>
    );
  }

  export default CwHeader;