import React from 'react';

const DateInput = ({ date, setDate }) => {
  return (
    <div>
      <label htmlFor="schedule_date">Date: </label>
      <input
        type="date"
        id="schedule_date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
    </div>
  );
};

export default DateInput;
