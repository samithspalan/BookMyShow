import React from 'react';
import pushpa from './assets/pushpa-2.png';
import avenger from './assets/avengers.png';
import s2 from './assets/s2.png';
import robinhood from './assets/robinhood.png';
import open from './assets/openheimer.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

function Carousel() {
  const settings = {
    dots: true,
    autoplay:true,
    autoplaySpeed:2500
  };

  return (
    <Slider {...settings}>
      <div className="slide"> 
        <img src={pushpa} alt="Pushpa" style={{width:"100%",height:"50vh"}} />
      </div>
      <div className="slide"> 
        <img src={avenger} alt="Avengers" style={{width:"100%",height:"50vh"}}/>
      </div>
      <div className="slide"> 
        <img src={s2} alt="S2" style={{width:"100%",height:"50vh"}}/>
      </div>
      <div className="slide"> 
        <img src={robinhood} alt="Robinhood"style={{width:"100%",height:"50vh"}} />
      </div>
      <div className="slide"> 
        <img src={open} alt="Oppenheimer" style={{width:"100%",height:"50vh"}}/>
      </div>
    </Slider>  
  );
}

export default Carousel;
