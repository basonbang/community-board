import React from "react";
import '../App.css'

const GymCard = ( {name, location, image, link}) => {
  return ( 
    <div className="gym-card">
      <img src={image} alt={name + " image"} />
      <h3>{name}</h3>
      <h4>{location}</h4>
      <a href={link} target="_blank">
        <button>
          View Gym
        </button>
      </a>
    </div>
   );
}
 
export default GymCard;