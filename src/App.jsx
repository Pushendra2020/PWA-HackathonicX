import { useState, useEffect, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import './index.js'
const Home = lazy(() => import('./Components/Home.jsx'));
const About = lazy(() => import('./Components/About.jsx'));
const EventList = lazy(() => import('./Components/EventList.jsx'));
const EventDetails = lazy(() => import('./Components/EventDetails.jsx'));
const AddEvent = lazy(() => import('./Components/AddEvent.jsx'));
const Login = lazy(() => import('./Components/Login.jsx'));
const AdminDashboard = lazy(() => import('./Components/AdminDashboard.jsx'));
const UserDashboard = lazy(() => import('./Components/UserDashboard.jsx'));

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(storedEvents);
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/user" element={<UserDashboard />} />
          <Route path="/events/:id" element={<EventDetails events={events} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;