import React from 'react';

function CwSearchWorkouts(){
    return(
        <div className='card'>
          <h2>Search My Workouts:</h2>
                        <label class="saved_workouts" for="saved_workout_select">My Workouts: </label>
                        <select class="form-select" id="saved_workout_select">
                            <option selected>Choose</option>
                            <option value="1">Push-Ups</option>
                            <option value="2">Leg-Press</option>
                            <option value="3">Sumo Squats</option>
                            <option value="4">Tredmill</option>
                            <option value="5">Good Mornings</option>
                            <option value="6">Arm Curls</option>
                            <option value="7">New...</option>

                        </select>
                        <label class="workout_catagory" for="workout_cat_input">Catagory</label>
                        <select class="form-select" id="worout_cat_input">
                            <option selected>Choose</option>
                            <option value="1">Cardio</option>
                            <option value="2">Arms</option>
                            <option value="3">Legs</option>
                            <option value="4">Glutes</option>
                            <option value="5">Quads</option>
                            <option value="6">Back</option>
                        </select>  
                        <h3>Results</h3>
                        <img src="img\results.jpg" alt="Results of Filter"></img>
        </div>
    )
}

export default CwSearchWorkouts;