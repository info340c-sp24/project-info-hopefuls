import React from 'react';

function Header() {
  return (
    <header>
      <h1>Workout Planner</h1>
      <div className="sign-up">
        <a href="signin.html" className="button">Sign Up</a>
      </div>
    </header>
  );
}

export default Header;