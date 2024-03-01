import React from "react";
import GymCard from "./GymCard";
import '../App.css'

const GymList = ({ gyms }) => {
  return ( 
      <div className="gym-list">
        {gyms.map( (gym) => 
          <GymCard 
            key={gym.id} 
            name={gym.name} 
            location={gym.location} 
            image={gym.image}
            link={gym.link}
          />
        )}
      </div>
   );
}
 
export default GymList;