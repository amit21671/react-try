import React, { useState } from 'react';
import './Sidebar.css';
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // state for the sidebar open/closed state
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const handleClick = (e) => {
    setIsOpen(false);
  }
  return (
    <>
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        <span>{isOpen ? 'Close' : 'Open'} Sidebar</span>
      </div>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}><hr />
        <button value='X' onClick={handleClick}>X</button><hr />
        Option 1<br></br><hr />
        Option 2<br></br><hr />
      </div>
    </>
  );
};

export default Sidebar;
