// import React, { useState, useEffect } from 'react'
import Slider from 'infinite-react-carousel'

function BannerSlider() {
  const settings =  {
    adaptiveHeight: true,
    arrowsBlock: false,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    dots: true,
    slidesToShow: 3.5
  }

  return(
    <div className="bannerSlider">
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
  )
}
export default BannerSlider