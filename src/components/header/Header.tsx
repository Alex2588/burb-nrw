import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      BURB-NRW
    </Link>
    <div className='options'>
      <Link className='option' to='/shows'>
        SHOWS
      </Link>
    </div>
  </div>
);

export default Header;