import React from 'react';

const TimeInput = ({ time, setTime }) => {
  return (
    <div>
      <label htmlFor="schedule_time">Time: </label>
      <input
        type="time"
        id="schedule_time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
    </div>
  );
};

export default TimeInput;
