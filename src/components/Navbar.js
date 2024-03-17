import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className='navbar'>
      <Link to="/" className='navbar-logo'>
        ELMHILLS
      </Link>
      <div className='menu-icon' onClick={handleClick}>
        <i className={click ? 'fa-solid fa-times' : 'fa-solid fa-bars'} />
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
          <Link to='/' className='nav-links' onClick={closeMobileMenu}>
            Hem
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/om-oss' className='nav-links' onClick={closeMobileMenu}>
            Om Oss
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/valpar' className='nav-links' onClick={closeMobileMenu}>
            Valpar
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/vara-hundar' className='nav-links' onClick={closeMobileMenu}>
            Våra Hundar
          </Link>
        </li>
      </ul>
      
    </nav>
  )
}

export default Navbar;
