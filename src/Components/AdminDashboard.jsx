import React, { useState } from 'react';
import AddEvent from './AddEvent';

function AdminDashboard() {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      const updatedEvents = [...prevEvents, event];
      localStorage.setItem('events', JSON.stringify(updatedEvents));
      return updatedEvents;
    });
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <AddEvent addEvent={addEvent} />
      <h3>Manage Events</h3>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            {event.name} - {event.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDashboard;