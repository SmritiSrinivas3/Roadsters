import React from 'react'
import { Icon } from '@iconify/react';
import './Sidenav.css'

export default function Sidenav() {
  return (
    <div className='sideNavContainer'>
        <h2>My Account</h2>
        <ul>
       <div id="details" class="profileIcons">
       <Icon  name='details' icon="gg:profile" width="38" height="38" /> <li>My details</li>
       </div>
        <div id="cart" class="profileIcons">
        <Icon  icon="material-symbols:garden-cart" width="38" height="38" /> <li>My orders</li>
        </div>
        <div id="wishlist" class="profileIcons">
        <Icon  icon="icon-park-solid:like" width="38" height="38" />   <li> Wishlist</li>
        </div>
        </ul>
      
    </div>
  )
}
