import React, { useEffect, useState } from 'react';
import EventList from './EventList';

function UserDashboard() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(storedEvents);
  }, []);

  return (
    <div>
      <h2>User Dashboard</h2>
      <EventList events={events} />
    </div>
  );
}

export default UserDashboard;