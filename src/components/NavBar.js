import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
  <div className="navbar">
    
      <NavLink
        to="/"
        
      >
        Home<br/>
      </NavLink>
      <NavLink
        to="/movies"
        
      >
        Movies <br/>
      </NavLink>
      <NavLink
        to="/directors"
        
        
      >
        Directors <br/>
      </NavLink>
      <NavLink
        to="/actors"
        
      >
        Actors <br/>
      </NavLink>
    
     
    
  </div>
  );
}

export default NavBar;

