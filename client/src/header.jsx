import React from 'react';
import * as Styled from './header.style.js';

export default function Header() {

  const logo = 'https://www.creativefabrica.com/wp-content/uploads/2020/07/08/LATTER-A-SIMPLE-LOGO-Graphics-4567365-1-580x387.jpg';

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
