import React, { useEffect, useState } from "react";
import "../Style/navbar.css";
import group from "../Assets/Group.png";
import Keazon from "../Assets/KeazoNBOOKS.png";
import heart from "../Assets/bx_bx-book-heart.png";
import bell from "../Assets/Vector (1).png";
import diamond from "../Assets/Group (1).png";
import user from "../Assets/IMG20210528181544.png";

const NavBar = ({query, setQuery, setBookClicked }) => {
  
 

  return (
    <div className="navbar">
      <nav className="nav-container">
        <div className="logo-container">
          <img src={group} alt="logo1" />
          <img src={Keazon} alt="logo2" className="keazon" />
        </div>
        <div className="search-container">
          <div className="search-input">
            <span className="material-symbols-outlined">search</span>
            <input
              type="text"
              placeholder="Search for the book you want and read it now"
              value={query}
              onChange={(e) => {setQuery(e.target.value)  
                setBookClicked(null)
              }}
            />
          </div>
          <div className="search-btn">
            <button>Search</button>
          </div>
        </div>
        <div className="icons-container">
          <img src={heart} alt="heart-icon" />
          <img src={bell} alt="bell" />
          <img src={diamond} alt="diamond" />
          <img src={user} alt="user" />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
