import React from 'react';
import { Link } from 'react-router-dom';

function EventList({ events }) {
  return (
    <div className="event-list">
      {events.map(event => (
        <div key={event.id} className="event-item">
          <h3>{event.name}</h3>
          <p>{event.description}</p>
          <Link to={`/events/${event.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default EventList;