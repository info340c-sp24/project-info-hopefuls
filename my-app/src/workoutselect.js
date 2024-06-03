import React from 'react';

const WorkoutSelect = ({ workout, setWorkout }) => {
  return (
    <div>
      <label htmlFor="workout_select">Select Workout: </label>
      <select
        className="form-select"
        id="workout_select"
        value={workout}
        onChange={(e) => setWorkout(e.target.value)}
        required
      >
        <option value="">Choose</option>
        <option value="1">Saved workouts</option>
        <option value="2">Others</option>
      </select>
    </div>
  );
};

export default WorkoutSelect;
