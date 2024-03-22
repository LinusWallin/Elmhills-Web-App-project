import React from 'react'
import './Card.css'

function Card(props) {
  return (
    <>
      <li className='card-item'>
        <div className='card-item-container'>
          <figure className='card-item-fig'>
              <img
                  src={props.src}
                  alt='homepage.jpg'
                  className='card-item-image'
              />
          </figure>
          <div className='card-info'>
              <p className='card-info-header'>
                  {props.header}
              </p>
              <p className='card-info-text'>
                  {props.text}
              </p>
          </div>
        </div>
        
      </li>
    </>
  )
}

export default Card