import React from 'react';

const SingleCard = ({ vehicle }) => (
  <div className = "cards card">
    <h4>Vehicle: {vehicle.name}</h4>
    <h5>Model: {vehicle.model}</h5>
    <div className = "specs">
      <h6>Specs</h6>
      <p>Manufacturer: {vehicle.manufacturer}</p>
      <p>Class: {vehicle.vehicle_class}</p>
      <p>Passengers: {vehicle.passengers}</p>
      <p>Crew: {vehicle.crew}</p>
      <p>Length: {vehicle.length}</p>
      <p>Max Speed: {vehicle.max_atmosphering_speed}</p>
      <p>Cargo Capacity: {vehicle.cargo_capacity}</p>
    </div>
  </div>
);

export default SingleCard;
