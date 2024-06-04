import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import CwBuildingWorkout from './CwBuildingWorkout';
import CwHeader from './CwHeader';
import Footer from './Footer';
import workouts from "./workouts.json"; 

const Createwo = () => {
  //creating new workout... or search?
  const [ workoutName, setWorkoutName] = useState('');
  const [ catagory, setCatagory] = useState('');
  const [repsSets, setRepsSets] = useState('');
  const [description, setDiscription] = useState('');
  const [myWO, setmyWO] = useState('');
  
  // workout list user is creating
  const [newWorkout, setNewWorkout] = useState([]);


  //add to list 

  //save button
  const handleAddButtonClick = () => {
    //creates a workout object
    const workout = {
      name : workoutName,
      cat : catagory,
      repSet : repsSets,
      des : description,
    };

    const newList = [...newWorkout, workout];
    
    //update list
    setNewWorkout(newList);
    //reset everything
    setWorkoutName('');
    setCatagory('');
    setDiscription('');
    setRepsSets('');
  };

  

  //search from the json file of premade workouts
  const handleSearch = (e) => {
    e.preventDefault();
    const results = workouts.filter(workout => 
      (catagory === "" || workout.goal === catagory) && 
      (workoutName === "" || workout.name === workoutName)
    );
    setNewWorkout(...newWorkout, results);
  };

  return (
      <div>
        <CwHeader />
        <div className='container'>
          <form onSubmit={handleAddButtonClick}>
            <div className='card'>
               <h2>Create Individual Workout</h2>
                        <label htmlFor="workout_title">Workout Name: </label>
                        <input type="name"
                        id="workout_name"
                        placeholder ="squats"
                        value={workoutName}
                        onChange={(e) => setWorkoutName(e.target.value)}> </input>
                        <label htmlFor="workout_cat_input">Catagory</label>
                        <select 
                        class="form-select" 
                        id="worout_cat_input"
                        value={catagory}
                        onChange={(e) => setCatagory(e.target.value)}>
                            <option selected>Choose</option>
                            <option value="1">Cardio</option>
                            <option value="2">Arms</option>
                            <option value="3">Legs</option>
                            <option value="4">Glutes</option>
                            <option value="5">Quads</option>
                            <option value="6">Back</option>
                            <option value="7">Warm Up</option>
                            <option value="8">New...</option>
                        </select>
                        <label htmlFor="reps_sets">Reps/Sets</label>
                        <input type="reps/sets"
                         id="reps_sets" 
                         placeholder="10-4"
                         value={repsSets}
                        onChange={(e) => setRepsSets(e.target.value)}></input>
                        <label htmlFor="description_field">Description(optional): </label>
                        <textarea type="description" 
                        class="form-control" 
                        id="description_field"
                        value={description}
                        onChange={(e) => setDiscription(e.target.value)}></textarea> 
                        <button type="submit"
                         className="button"
                         onClick={() => handleAddButtonClick()}>Save</button>
            </div> 
          </form>
                       
        </div>

        <div className='container'>
          <form onSubmit={handleSearch}>
            <div className='card'>
               <h2>Search Workouts:</h2>
                        
                        <label htmlFor="workout_cat_input">Catagory</label>
                        <select class="form-select"
                        id="worout_cat_input"
                        value={catagory}
                        onChange={(e) => setCatagory(e.target.value)}>
                            <option selected>Choose</option>
                            <option value="1">strength</option>
                            <option value="2">weight_loss</option>
                            <option value="3">flexibility</option>
                            <option value="4">endurance</option>
                            <option value="5">core_strength</option>
                            <option value="6">cardio</option>
                        </select>  
                        
                        <label htmlFor="saved_workout_select">My Workouts: </label>
                        <select class="form-select" 
                        id="saved_workout_select"
                        value={workoutName}
                        onChange={(e) => setWorkoutName(e.target.value)}
                        >
                            <option selected>Choose</option>
                            <option value="1">Push-Ups</option>
                            <option value="2">Leg-Press</option>
                            <option value="3">Sumo Squats</option>
                            <option value="4">Tredmill</option>
                            <option value="5">Good Mornings</option>
                            <option value="6">Arm Curls</option>
                            <option value="7">New...</option>
                        </select>
                  
                        <h3>Results</h3>
                        <select class="form-select"
                         id="saved_workout_select"
                         value={workoutName}
                         onClick={() => handleAddButtonClick()}>
                          {newWorkout.map((workout, index) => (
                            <option value={index}>{workout.name}</option>
                          ))}
                        </select>
            </div>
          </form>   
        </div>
        <CwBuildingWorkout />
        <Footer />
      </div>
  )
}

export default Createwo