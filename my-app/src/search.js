import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import workouts from "./workouts.json"; 

function SearchWorkouts() {
  const [goal, setGoal] = useState("");
  const [intensity, setIntensity] = useState("");
  const [filteredWorkouts, setFilteredWorkouts] = useState([]);

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

  const handleSearch = (e) => {
    e.preventDefault();
    const results = workouts.filter(workout => 
      (goal === "" || workout.goal === goal) && 
      (intensity === "" || workout.intensity === intensity)
    );
    setFilteredWorkouts(results);
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
        {/* the search workout card */}
        <div className="container">
          <h1>Search Workouts</h1>
        </div>
      </header>
      <div className="container">
        <form onSubmit={handleSearch}>
          <div className="card">
            <h2>Find a Workout</h2>
            <label htmlFor="goal_input">Your Goal:</label>
            <select 
              id="goal_input" 
              className="form-select" 
              value={goal} 
              onChange={(e) => setGoal(e.target.value)}
            >
              <option value="">Choose...</option>
              <option value="weight_loss">Weight Loss</option>
              <option value="muscle_gain">Muscle Gain</option>
              <option value="flexibility">Flexibility</option>
              <option value="endurance">Endurance</option>
            </select>

            {/* Intensity */}
            <label htmlFor="intensity_input">Intensity Level:</label>
            <select 
              id="intensity_input" 
              className="form-select" 
              value={intensity} 
              onChange={(e) => setIntensity(e.target.value)}
            >
              <option value="">Choose...</option>
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
            {filteredWorkouts.map((workout, index) => (
              <li key={index}>
                <h3>{workout.name}</h3>
                <p>Intensity: {workout.intensity}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SearchWorkouts;
