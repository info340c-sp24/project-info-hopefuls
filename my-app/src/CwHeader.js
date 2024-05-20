import React from 'react';
import { useNavigate } from 'react-router-dom';

function CwHeader() {
    const navigate = useNavigate();

    const navigateToSign = () => {
        navigate('/signin');
    }
    const navigateToHome = () => {
        navigate('/');
    }
    const navigateToSearch = () => {
        navigate('/search.html');
    }
    const navigateToSchedule = () => {
        navigate('/schedule.html');
    }

    return (
      <header>
        <h1>Create Workout</h1>
        <div className="navbar">
          {/* <a href="sign" className="button">Sign Up</a> */}
            <button onClick= {navigateToSign}>Sign In</button>
            <button onClick= {navigateToHome}>Home</button>
            <button onCLick = {navigateToSearch}>Search</button>
            <button onCLick = {navigateToSchedule}>Schedule</button>
        </div>
      </header>
    );
  }

  export default CwHeader;