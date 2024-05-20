import React from 'react';
import { useNavigate } from 'react-router-dom';

function CwHeader() {
    const navigate = useNavigate();

    const navigateToSign = () => {
        navigate('/signin');
    }

    return (
      <header>
        <h1>Create Workout</h1>
        <div className="sign-up">
          {/* <a href="sign" className="button">Sign Up</a> */}
            <button onClick= {navigateToSign}>Sign In</button>
        </div>
      </header>
    );
  }

  export default CwHeader;