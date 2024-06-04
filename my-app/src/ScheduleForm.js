import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DateInput from './DateInput';
import TimeInput from './TimeInput';
import SubmitButton from './SubmitButton';

const ScheduleForm = ({ handleSubmit }) => {
  const [workout, setWorkout] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [invalidDate, setInvalidDate] = useState(false);
  const [formChanged, setFormChanged] = useState(false);
  const [scheduled, setScheduled] = useState(false); // New state for tracking if form is scheduled
  const [scheduledWorkout, setScheduledWorkout] = useState(null);
  const [scheduledTime, setScheduledTime] = useState(null);
  const [scheduledDate, setScheduledDate] = useState(null);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    // Date validation check
    const today = new Date();
    const selectedDate = new Date(date);

    if (selectedDate < today) {
      setInvalidDate(true);
      return;
    }

    // If date is valid, proceed with form submission
    handleSubmit(e);
    setSubmitted(true);
    setScheduledWorkout(workout);
    setScheduledTime(time);
    setScheduledDate(selectedDate);
    setScheduled(true); // Set scheduled to true when form is submitted
    setInvalidDate(false);
  };

  const handleInputChange = () => {
    setFormChanged(true);
  };

  const resetForm = () => {
    setWorkout('');
    setDate('');
    setTime('');
    setSubmitted(false);
    setScheduled(false);
    setFormChanged(false);
  };

  return (
    <form onSubmit={onSubmit} className="card">
      <h2>Schedule Workout</h2>
      <label htmlFor="workout_input">Workout:</label>
      <input 
        type="text"
        id="workout_input"
        value={workout}
        onChange={(e) => {
          setWorkout(e.target.value);
          handleInputChange();
        }}
        required
      />
      <DateInput 
        date={date} 
        setDate={(newDate) => {
          setDate(newDate);
          handleInputChange();
        }}
      />
      <TimeInput 
        time={time} 
        setTime={(newTime) => {
          setTime(newTime);
          handleInputChange();
        }}
      />
      {invalidDate && <p style={{ color: 'red' }}>Invalid date! Please select a date on or after today.</p>}
      {submitted && scheduledDate && (
        <p>{scheduledWorkout} scheduled for {new Date(scheduledDate.getTime() + scheduledDate.getTimezoneOffset() * 60000).toLocaleDateString()} at {scheduledTime}.</p>
      )}
      {!submitted && !scheduled && <SubmitButton />} {/* Render SubmitButton only if not submitted and not scheduled */}
      {scheduled && <button type="button" onClick={resetForm}>Add Another</button>} {/* Render Reset button when scheduled */}
    </form>
  );
};

export default ScheduleForm;

