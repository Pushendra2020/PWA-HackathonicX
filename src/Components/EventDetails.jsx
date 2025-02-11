import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function EventDetails({ events }) {
  const { id } = useParams();
  const event = events.find(event => event.id === parseInt(id));
  const [bookedSeats, setBookedSeats] = useState(event ? event.bookedSeats : 0);

  useEffect(() => {
    if (event) {
      setBookedSeats(event.bookedSeats);
    }
  }, [event]);

  if (!event) {
    return <div>Event not found</div>;
  }
let availableSeats 
  const handleBookTicket = () => {
    if(availableSeats == 0) {
      alert('No seats available!');
    }else{
    const confirmBooking = window.confirm('Do you want to book this ticket?');
    if (confirmBooking) {
      const updatedBookedSeats = bookedSeats + 1;
      setBookedSeats(updatedBookedSeats);
      event.bookedSeats = updatedBookedSeats;
      const updatedEvents = events.map(e => (e.id === event.id ? event : e));
      localStorage.setItem('events', JSON.stringify(updatedEvents));
      alert('Ticket booked successfully!');
    }
  }
  };

  return (
    <div className="event-details">
      <h2>{event.name}</h2>
      <p>{event.description}</p>
      <p>Booked Seats: {bookedSeats}</p>
      <p>Available Seats: {availableSeats=event.totalSeats - bookedSeats}</p>
      <button onClick={handleBookTicket}>Buy Ticket</button>
    </div>
  );
}

export default EventDetails;