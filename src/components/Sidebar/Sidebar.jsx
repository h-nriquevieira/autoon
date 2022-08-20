import React from 'react';
import iconClose from '../../assets/icon-close.png'
import './Sidebar.css'

function Sidebar({toggle}) {
  return (
      <div className='sidebar'>
          <button className='close-icon' onClick={toggle}><img src={iconClose} alt="" /></button>
          <ul>
            <li><a className='nav--link' href="">GitHub</a></li>
            <li><a className='nav--link' href="">Portifólio</a></li>
          </ul>
      </div>
  );
}

export default Sidebar;