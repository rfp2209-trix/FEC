import React from 'react';
import * as Styled from './header.style.js';
import logo from './images/logo.jpeg';

export default function Header() {
  return (
    <Styled.PageHeader>
      <div className="header-inner-wrapper">
        <img src={logo} alt="logo" />
        <h2>Atlier Designs</h2>
        <div className="search">
          <label>Search </label>
          <input type="search" />
        </div>
        <div className="links">
          <div>Home</div>
          <div>My Account</div>
          <div>Profile</div>
        </div>

      </div>
    </Styled.PageHeader>
  );
}
