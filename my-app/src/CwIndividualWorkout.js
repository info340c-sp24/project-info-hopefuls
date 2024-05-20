import React from 'react';

function CwIndividualWorkout() {

    return(
        <div className='container'>
            <div className='card'>
               <h2>Create Individual Workout</h2>
                        <label for="workout_title">Workout Title: </label>
                        <label class="workout_catagory" for="workout_cat_input">Catagory</label>
                        <select class="form-select" id="worout_cat_input">
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
                        <label for="reps_sets">Reps/Sets</label>
                        <input type="reps/sets" id="reps_sets" placeholder="10-4"></input>
                        <label for="description_field">Description(optional): </label>
                        <textarea type="description" class="form-control" id="description_field"></textarea> 
                        <a href="#" class="button" >Save</a> 
            </div>
           
                    
        </div>
    );
       
}

export default CwIndividualWorkout;