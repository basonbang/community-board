import React from "react";
import '../App.css'

const GymCard = ( {name, location, image}) => {
  return ( 
    <div className="gym-card">
      <img src={image} alt={name + " image"} />
      <h3>{name}</h3>
      <h4>{location}</h4>
    </div>
   );
}
 
export default GymCard;