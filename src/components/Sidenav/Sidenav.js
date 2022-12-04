import React from 'react';
import { Icon } from '@iconify/react';
import './Sidenav.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Orders from '../../pages/Orders';

export default function Sidenav() {
  return (
    <div className='sideNavContainer'>
      <div className='sideNavTitle'>My Account</div>

      <ul>

        <li>
          <label for='myDetailsLink'></label>
          <Icon icon="gg:profile" width="34" height="34" inline={true} />
          <Link to={Orders} className='sideNavLinks' name='myDetailsLink'>My Orders</Link>
        </li>

        <li>
          <label for='myOrdersLink'></label>
          <Icon icon="material-symbols:garden-cart" width="34" height="34" inline={true} />
          <Link to='#' className='sideNavLinks' name='myDetailsLink'>My Cart</Link>
        </li>

        <li>
          <label for='wishlist'></label>
          <Icon icon="icon-park-solid:like" width="34" height="34" inline={true} />
          <Link to='#' className='sideNavLinks' name='myDetailsLink'>Wishlist</Link>
        </li>

      </ul>

    </div>
  )
}
