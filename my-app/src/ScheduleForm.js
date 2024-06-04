import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DateInput from './DateInput';
import TimeInput from './TimeInput';
import SubmitButton from './SubmitButton';

const ScheduleForm = ({ workout, setWorkout, date, setDate, time, setTime, handleSubmit }) => {
  const [submitted, setSubmitted] = useState(false);
  const [invalidDate, setInvalidDate] = useState(false); // State for invalid date
  const [scheduledDate, setScheduledDate] = useState(null); // State for scheduled date
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
    setScheduledDate(selectedDate); // Store the scheduled date
    setInvalidDate(false); // Reset invalid date state
    setTimeout(() => {
      navigate('/'); // Redirect to the home page
    }, 2000); // Redirect after 2 seconds
  };

  return (
    <form onSubmit={onSubmit} className="card">
      <h2>Schedule Workout</h2>
      <label htmlFor="workout_input">Workout:</label>
      <input 
        type="text"
        id="workout_input"
        value={workout}
        onChange={(e) => setWorkout(e.target.value)}
        required
      />
      <DateInput date={date} setDate={setDate} />
      <TimeInput time={time} setTime={setTime} />
      {invalidDate && <p style={{ color: 'red' }}>Invalid date! Please select a date on or after today.</p>}
      {submitted && scheduledDate && (
         <p>Workout scheduled for {new Date(scheduledDate.getTime() + scheduledDate.getTimezoneOffset() * 60000).toLocaleDateString()} at {time}.</p>
      )}
      <SubmitButton />
    </form>
  );
};

export default ScheduleForm;
