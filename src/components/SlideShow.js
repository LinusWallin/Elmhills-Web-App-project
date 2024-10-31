import React, { useEffect, useState } from 'react'
import './SlideShow.css'

function SlideShow (props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadGif = new Image();
    loadGif.src = "images/loading.svg";
  }, []);

  useEffect(() => {
    setLoading(true);
  }, [currentIndex]);

  const handleClick = (dir) => {
    setCurrentIndex((prevIndex) => {
      if (dir > 0) {
        return prevIndex < props.images.length - 1 ? prevIndex + 1 : 0;
      } else {
        return prevIndex > 0 ? prevIndex - 1 : props.images.length - 1;
      }
    });
  };

  const handleLoadImg = () => {
    setLoading(false);
  };

  return (
    <div className='slideshow'>
      <p className='slide-info'> 
          {props.info[currentIndex]}
      </p>
      <div className='slide-container fade'>
        {loading && (
          <div className='slide-loading-img-container'>
            <img className='slide-loading-img' src='images/loading.svg' alt='Loading'/>
          </div>
        )}
        <img 
          className='slide-image' 
          src={props.images[currentIndex]} 
          alt={props.images[currentIndex]}
          onLoad={handleLoadImg}
          style={{display: loading ? 'none' : 'block'}}
        />
        <p className='slide-prev' onClick={() => handleClick(-1)}>
          <i className="fa-solid fa-circle-chevron-left" style={{display: loading ? 'none' : 'block'}}></i>
        </p>
        <p className='slide-next' onClick={() => handleClick(1)}>
          <i className="fa-solid fa-circle-chevron-right" style={{display: loading ? 'none' : 'block'}}></i>
        </p>
      </div>
    </div>
  );
};

export default SlideShow
