import React from 'react';
import '../styles/header.css';

const Header = ({ tabName }) => {
  return (
    <div className="header">
      <h2 className="header-tab-name">{tabName === "Dashboard" ? "Overview" : tabName}</h2>
      <div className="header-right">
        <input type="text" placeholder="Search..." className="header-search" />
        <button className="header-icon-button">
          <img src="/icons/header-settings.svg" alt="Settings" className="header-icon" />
        </button>
        <button className="header-icon-button">
          <img src="/icons/header-notification.svg" alt="Notifications" className="header-icon" />
        </button>
        <button className="header-icon-button">
          <img src="/icons/header-profile.png" alt="Profile" className="header-icon" />
        </button>
      </div>
    </div>
  );
};

export default Header;
