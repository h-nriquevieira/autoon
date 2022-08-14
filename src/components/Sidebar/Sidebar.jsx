import React from 'react';
import './Sidebar.css'

function Sidebar({toggle}) {
  const $sidebar = document.querySelector('.sidebar')
  
  function closeSidebar() {
    $sidebar.classList.remove('visible')
  }

  return (
      <div className='sidebar'>
          <button className='close-icon' onClick={toggle}>X</button>
          <ul>
            <li>Catálogo</li>
            <li>Sobre</li>
            <li>Contato</li>
          </ul>
      </div>
  );
}

export default Sidebar;