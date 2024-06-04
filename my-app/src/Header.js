import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from './UserContext'; 

function Header() {
    const navigate = useNavigate();
    const { user } = useUser(); 

    return (
      <header>
        <h1>Workout Planner</h1>
        <div className="sign-up">
          {user ? (
            <span>{user.email}</span> 
          ) : (
            <button onClick={() => navigate('/signin')}>Sign In</button>
          )}
        </div>
      </header>
    );
}
export default Header;