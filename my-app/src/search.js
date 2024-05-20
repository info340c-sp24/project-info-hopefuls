import React from "react";
import { useNavigate } from "react-router-dom";

function SearchWorkouts() {
  const navigate = useNavigate();
  

  const navigateToHome = () => {
    navigate("/");
  };
  
  const navigateToCreate = () => {
    navigate('/Create_page.html');
  };

  const navigateToSchedule = () => {
    navigate('/schedule');
  };

  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="container">
            <a href="/" onClick={navigateToHome}>Home</a>
            <a href="/Create_page.html" onClick={navigateToCreate}>Create</a>
            <a href="/schedule" onClick={navigateToSchedule}>Schedule</a>
          </div>
        </nav>
        <div className="container">
          <h1>Search Workouts</h1>
        </div>
      </header>
      <div className="container">
        <form>
          <div className="card">
            <h2>Find a Workout</h2>
            <label htmlFor="goal_input">Your Goal:</label>
            <select id="goal_input" className="form-select">
              <option selected>Choose...</option>
              <option value="weight_loss">Weight Loss</option>
              <option value="muscle_gain">Muscle Gain</option>
              <option value="flexibility">Flexibility</option>
              <option value="endurance">Endurance</option>
            </select>
            <label htmlFor="intensity_input">Intensity Level:</label>
            <select id="intensity_input" className="form-select">
              <option selected>Choose...</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
            <button type="submit" className="button">Search</button>
          </div>
        </form>
        <div className="card">
          <h2>Suggested Workouts</h2>
          <ul id="workout_list">
            <li>
              <h3>Push-Ups</h3>
              <p>Goal: Muscle Gain</p>
              <p>Intensity: Beginner</p>
            </li>
            <li>
              <h3>Leg-Press</h3>
              <p>Goal: Strength</p>
              <p>Intensity: Intermediate</p>
            </li>
            <li>
              <h3>Sumo Squats</h3>
              <p>Goal: Muscle Gain</p>
              <p>Intensity: Advanced</p>
            </li>
          </ul>
        </div>
      </div>
      <footer>
        <p>&copy; 2024 Workout Planner. All rights reserved. INFO hopefuls</p>
      </footer>
    </div>
  );
}

export default SearchWorkouts;
