import React from 'react';
import './Header.css';  // استيراد CSS المخصص

const Header = () => {
  return (
    <header className="header d-flex align-items-center justify-content-center text-center">
      <div className="container">
        <img
          src="/image/avataaars.svg"
          alt="avatar"
          className="rounded-circle mb-4"
        />
        <h1 className="header-title">START FRAMEWORK</h1>
        <div className="star-divider">
          <div className="divider" />
          <span className="star-icon m-3">&#9733;</span>
          <div className="divider" />
        </div>
        <p className="lead header-subtitle">
          Graphic Artist - Web Designer - Illustrator
        </p>
      </div>
    </header>
  );
};

export default Header;
