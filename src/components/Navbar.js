import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import Dropdown from './Dropdown';
import { DropdownItems } from './DropdownItems';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => {
    if (click) {
      setDropdown(false);
    }
    setClick(!click);
  };
  const dropdownClick = () => setDropdown(!dropdown);
  const closeMobileMenu = () => {
    setDropdown(false);
    setClick(false);
  };

  const onMouseEnter = () => {
    if (window.innerWidth > 960) {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth > 960) {
      setDropdown(false);
    }
  };

  return (
    <nav className='navbar'>
      <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
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
        <li 
          className='nav-item'
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {window.innerWidth > 960 && (
            <Link to='/valpar' className='nav-links' onClick={closeMobileMenu}>
              Valpar
            </Link>)
          }
          {window.innerWidth <= 960 && (
            <>
              <div className='nav-links' onClick={dropdownClick}>
                <p>
                  Valpar <i className={dropdown ? 'fa-solid fa-caret-up' : 'fa-solid fa-caret-down'}/>
                </p>
                
              </div>
            </>
            )
          }
          {dropdown && window.innerWidth > 960 && <Dropdown/>}
        </li>
        {dropdown && window.innerWidth <= 960 && (DropdownItems.map((item, index) => {
                return (
                    <li 
                      key={index}
                      className='nav-subitem'
                    >
                        <Link 
                            className='nav-sublinks nav-links'
                            to={item.path}
                            onClick={closeMobileMenu}
                        >
                            {item.title}
                        </Link>
                    </li>
                );
            }))}
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
