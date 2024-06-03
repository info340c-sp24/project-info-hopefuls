import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WorkoutSelect from './WorkoutSelect';
import DateInput from './DateInput';
import TimeInput from './TimeInput';
import SubmitButton from './SubmitButton';

const ScheduleForm = ({ workout, setWorkout, date, setDate, time, setTime, handleSubmit }) => {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    handleSubmit(e);
    setSubmitted(true);
    setTimeout(() => {
      navigate('/');
    }, 2000); // Redirect after 2 seconds
  };

  return (
    <form onSubmit={onSubmit} className="card">
      <h2>Schedule Workout</h2>
      <WorkoutSelect workout={workout} setWorkout={setWorkout} />
      <DateInput date={date} setDate={setDate} />
      <TimeInput time={time} setTime={setTime} />
      <SubmitButton />
      {submitted && <p>You've scheduled a workout!</p>}
    </form>
  );
};

export default ScheduleForm;
