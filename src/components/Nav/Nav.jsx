import React, {useState} from 'react';
import hamburgerIcon from '../../assets/menu.svg'
import Sidebar from '../Sidebar/Sidebar';
import './Nav.css'

function Nav() {
  const [sideBarShown, setSideBarShown] = useState(false)

  function toggleSidebar() {
    setSideBarShown(prevShown => !prevShown)
  } 

  return (
    <nav>
      <h1 className='logo'>AutoOn</h1>
      <ul className="desktop-nav">
        <li><a className='nav--link' href="https://github.com/h-nriquevieira/autoon">GitHub</a></li>
        <li><a className='nav--link' href="https://henriquevieira.netlify.app/">Portifólio</a></li>
      </ul>
      <button className='mobile-nav' onClick={toggleSidebar}>
        <img src={hamburgerIcon} alt="" />
      </button>
      {sideBarShown && <Sidebar toggle={toggleSidebar}/>}
    </nav>
  );
}

export default Nav;