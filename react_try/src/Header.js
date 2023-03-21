import React from 'react';
import './Header.css';
import { useState } from 'react';

const Header = () => {

    const[isLoggedIn ,setlogin]  =useState(false)
 // dummy value for logged in state
  const handleLogin = (e) => {
    // dummy login function
   setlogin(true)
  };
  const handleLogout = (e) => {
    // dummy logout function
  };
  const handleProfileClick = (e) => {
    // dummy profile click function
  };

  return (
    <div className="header">
      <h1>MapUp India</h1>
      {isLoggedIn ? (
        <>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
          <button className="profile-button" onClick={handleProfileClick}>Profile</button>
        </>
      ) : (
        <button className="login-button" onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default Header;
