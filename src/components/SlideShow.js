import React, { useState } from 'react'
import './SlideShow.css'

function SlideShow (props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (dir) => {
    setCurrentIndex((prevIndex) => {
      if (dir > 0) {
        return prevIndex < props.images.length - 1 ? prevIndex + 1 : 0;
      } else {
        return prevIndex > 0 ? prevIndex - 1 : props.images.length - 1;
      }
    });
  };

  return (
    <div className='slideshow'>
      <p className='slide-info'> 
          {props.info[currentIndex]}
      </p>
      <div className='slide-container fade'>
        <img className='slide-image' src={props.images[currentIndex]} alt={props.images[currentIndex]}/>
        <p className='slide-prev' onClick={() => handleClick(-1)}>
          <i className="fa-solid fa-circle-chevron-left"></i>
        </p>
        <p className='slide-next' onClick={() => handleClick(1)}>
          <i className="fa-solid fa-circle-chevron-right"></i>
        </p>
      </div>
    </div>
  );
};

export default SlideShow
