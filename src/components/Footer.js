import React from 'react'
import { Button } from './Button'
import './Footer.css';

function Footer() {
  return (
      <div className='footer-container'>
        <div className='footer-interest'>
          <p className='footer-interest-header'>
            För att lämna en intresseanmälan klicka på knappen nedanför
          </p>
          <a
            href='https://docs.google.com/forms/d/e/1FAIpQLScVrvBgHytFwiDRYYWPAE-WurW3FpKhxguPbjkBGe-H_BF37g/viewform?vc=0&c=0&w=1&flr=0&pli=1'
            target='_blank'
            rel='noreferrer'
          >
            <Button buttonStyle='btn--outline'>
              Intresseanmälan
            </Button>
          </a>
        </div>
        <div className='socials-container'>
          <p className='socials-text'>
            Följ oss på våra sociala medier!
          </p>
          <div className='socials-wrap'>
            <a
              href='https://www.facebook.com/maylinesgoodgirl/'
              className='social-icon-link'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fa-brands fa-square-facebook'/>
            </a>
            <a
              href='https://www.instagram.com/elmhillskennel'
              className='social-icon-link'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fa-brands fa-instagram'/>
            </a>
          </div>
        </div>
      </div>
      
    
  )
}

export default Footer
