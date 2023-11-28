import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TicketForm.css'; // Import your CSS file for styling

const TicketForm = () => {
  const [stations, setStations] = useState([]);
  const [startStation, setStartStation] = useState('');
  const [endStation, setEndStation] = useState('');
  const [ticketId, setTicketId] = useState('');

  useEffect(() => {
    // Load stations from the JSON file when the component mounts
    axios.get('https://shrutisharma25.github.io/Table__API/stations.json')
      .then(response => setStations(response.data.stations))
      .catch(error => console.error('Error fetching stations:', error));
  }, []);

  const handleBuyTicket = () => {
    // Implement ticket generation logic here
    const generatedTicketId = generateTicketId();
    setTicketId(generatedTicketId);
  };

  const generateTicketId = () => {
    // Implement actual logic to generate a unique ticket ID
    // For simplicity, using a random number here
    return Math.floor(Math.random() * 1000000).toString();
  };

  return (
    <div className="ticket-form-container">
      <h2>Metro Ticket Booking</h2>

      <div className="form-group">
        <label htmlFor="startStation">Select Start Station:</label>
        <select
          id="startStation"
          value={startStation}
          onChange={(e) => setStartStation(e.target.value)}
        >
          <option value="">Choose...</option>
          {stations.map(station => (
            <option key={station.id} value={station.name}>{station.name}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="endStation">Select End Station:</label>
        <select
          id="endStation"
          value={endStation}
          onChange={(e) => setEndStation(e.target.value)}
        >
          <option value="">Choose...</option>
          {stations.map(station => (
            <option key={station.id} value={station.name}>{station.name}</option>
          ))}
        </select>
      </div>

      <button className="buy-ticket-button" onClick={handleBuyTicket}>Get Ticket</button>

      {ticketId && (
        <div className="ticket-id-container">
          <h3>Your Ticket ID:</h3>
          <p className="ticket-id">{ticketId}</p>
        </div>
      )}
    </div>
  );
};

export default TicketForm;
