import React from 'react'
import './Card.css'

function AboutCard(props) {
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
              <p className='card-subheader'>
                Snabbfakta
              </p>
              <ul className='card-bullet-list'>
                {props.items.map((item, index) => {
                  return (
                    <li key={index}>
                      <p>{item}</p>
                    </li>
                  );
                })}
              </ul>
              <p>
                {props.text}
              </p>
          </div>
        </div>
      </li>
    </>
  )
}

export default AboutCard