import React, { useState } from 'react';
import Header from './ScheduleHeader';
import ScheduleForm from './ScheduleForm';
import Footer from './Footer';
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
      <Header title="Schedule Workout" />
      <div className="container">
        <ScheduleForm
          workout={workout}
          setWorkout={setWorkout}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Schedule;
