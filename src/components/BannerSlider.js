// import React, { useState, useEffect } from 'react'
import Slider from 'infinite-react-carousel'
import bgImage2 from '../styles/images/bg-2.jpg'

function BannerSlider() {
  const settings =  {
    adaptiveHeight: true,
    arrowsBlock: false,
    autoplay: false,
    autoplaySpeed: 2000,
    centerMode: true,
    dots: true,
    slidesToShow: 3.5
  }

  return(
    <div className="bannerSlider">
      <figure className="theBackground"><img src={bgImage2}/></figure>
      <Slider { ...settings }>
        <div>
          <div className="bannerCard">
            <div className="bcContent"></div>
            <div className="bcFooter"></div>
          </div>
        </div>
        <div>
          <div className="bannerCard">
            <div className="bcContent"></div>
            <div className="bcFooter"></div>
          </div>
        </div>
        <div>
          <div className="bannerCard">
            <div className="bcContent"></div>
            <div className="bcFooter"></div>
          </div>
        </div>
        <div>
          <div className="bannerCard">
            <div className="bcContent"></div>
            <div className="bcFooter"></div>
          </div>
        </div>
        <div>
          <div className="bannerCard">
            <div className="bcContent"></div>
            <div className="bcFooter"></div>
          </div>
        </div>
        <div>
          <div className="bannerCard">
            <div className="bcContent"></div>
            <div className="bcFooter"></div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
export default BannerSlider;