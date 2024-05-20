import React, { useState } from 'react';
import './index.css';

const Schedule = () => {
  const [workout, setWorkout] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(`Workout: ${workout}, Date: ${date}, Time: ${time}`);
  };

  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="container">
            <a href="/">Home</a>
            <a href="/Create_page.html">Create</a>
            <a href="/search.html">Search</a>
          </div>
        </nav>
        <div className="container">
          <h1>Schedule Workout</h1>
        </div>
      </header>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="card">
            <h2>Schedule Workout</h2>
            <label htmlFor="workout_select">Select Workout: </label>
            <select 
              className="form-select" 
              id="workout_select" 
              value={workout} 
              onChange={(e) => setWorkout(e.target.value)}
            >
              <option value="">Choose</option>
              <option value="1">Saved workouts</option>
              <option value="2">Others</option>
            </select>
            <label htmlFor="schedule_date">Date: </label>
            <input 
              type="date" 
              id="schedule_date" 
              value={date} 
              onChange={(e) => setDate(e.target.value)}
            />
            <label htmlFor="schedule_time">Time: </label>
            <input 
              type="time" 
              id="schedule_time" 
              value={time} 
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <div className="card">
            <button type="submit" className="button">Schedule</button>
          </div>
        </form>
      </div>
      <footer>
        <p>&copy; 2024 Workout Planner. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Schedule;
