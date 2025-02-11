import React, { useState } from 'react';

function AddEvent({ addEvent }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [totalSeats, setTotalSeats] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = { id: Date.now(), name, description, totalSeats, bookedSeats: 0 };
    addEvent(newEvent);
    saveEventToLocalStorage(newEvent);
    setName('');
    setDescription('');
    setTotalSeats(0);
  };

  const saveEventToLocalStorage = (event) => {
    const events = JSON.parse(localStorage.getItem('events')) || [];
    events.push(event);
    localStorage.setItem('events', JSON.stringify(events));
   // localStorage.setItem('totalSeats', totalSeats);
  };

  return (
    <div>
      <h2>Add Event</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>
        <div>
          <label>Total Seats:</label>
          <input type="number" value={totalSeats} onChange={(e) => setTotalSeats(parseInt(e.target.value))} />
        </div>
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
}

export default AddEvent;