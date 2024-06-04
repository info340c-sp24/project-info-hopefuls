// Createwo.js
import React, { useState } from 'react';
import CwHeader from './CwHeader';
import Footer from './Footer';

const Createwo = () => {
  console.log('Createwo component loaded');
  
  const [workoutName, setWorkoutName] = useState('');
  const [catagory, setCatagory] = useState('');
  const [repsSets, setRepsSets] = useState('');
  const [description, setDiscription] = useState('');
  const [newWorkout, setNewWorkout] = useState([]); 

  const handleAddButtonClick = () => {
    const workout = {
      name: workoutName,
      cat: catagory,
      repSet: repsSets,
      des: description,
    };
    setNewWorkout([...newWorkout, workout]);
    setWorkoutName('');
    setCatagory('');
    setDiscription('');
    setRepsSets('');
  };

  return (
    <div>
      <CwHeader />
      <div className='container'>
        <form onSubmit={handleAddButtonClick}>
          <div className='card'>
            <h2>Create Individual Workout</h2>
            <label htmlFor="workout_name">Workout Name: </label>
            <input 
              type="text"
              id="workout_name"
              placeholder="squats"
              value={workoutName}
              onChange={(e) => setWorkoutName(e.target.value)} 
            />
            <label htmlFor="workout_cat_input">Catagory</label>
            <select 
              className="form-select" 
              id="workout_cat_input"
              value={catagory}
              onChange={(e) => setCatagory(e.target.value)}
            >
              <option value="">Choose</option>
              <option value="Cardio">Cardio</option>
              <option value="Arms">Arms</option>
              <option value="Legs">Legs</option>
              <option value="Glutes">Glutes</option>
              <option value="Quads">Quads</option>
              <option value="Back">Back</option>
              <option value="Warm Up">Warm Up</option>
              <option value="New...">New...</option>
            </select>
            <label htmlFor="reps_sets">Reps/Sets</label>
            <input 
              type="text"
              id="reps_sets" 
              placeholder="10-4"
              value={repsSets}
              onChange={(e) => setRepsSets(e.target.value)} 
            />
            <label htmlFor="description_field">Description(optional): </label>
            <textarea 
              className="form-control" 
              id="description_field"
              value={description}
              onChange={(e) => setDiscription(e.target.value)}
            />
            <button type="button" className="button" onClick={handleAddButtonClick}>Save</button>
          </div> 
        </form>
      </div>
      <div className='container'>
        <div className='card'>
          <h2>Current Workout:</h2>
          <ul id="workout_list">
            {newWorkout.map((workout, index) => (
              <li key={index}>
                <h3>{workout.name}</h3>
                <p>Reps/Sets: {workout.repSet}</p>
                <p>Description: {workout.des}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Createwo;
