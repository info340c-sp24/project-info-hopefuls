import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    const navigateToSign = () => {
        navigate('/signin');
    }

    return (
      <header>
        <h1>Workout Planner</h1>
        <div className="sign-up">
          {/* <a href="sign" className="button">Sign Up</a> */}
            <button onClick= {navigateToSign}>Sign In</button>
        </div>
      </header>
    );
  }

  export default Header;