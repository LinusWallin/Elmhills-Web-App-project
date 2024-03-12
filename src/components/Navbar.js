import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { Button } from './Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to="/" className='navbar-logo'>
            Home
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
            <li className='nav-item'>
              <Link to='/intresseanmalan' className='nav-links-mobile' onClick={closeMobileMenu}>
                Intresseanmälan
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Intresseanmälan</Button>}
        </div>
      </nav>
    </>
  )
}

export default Navbar;
