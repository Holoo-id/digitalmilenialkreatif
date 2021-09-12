import Carousel, { autoplayPlugin, Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel'
function BannerSlider() {

  return(
    <div className="bannerSlider" id="homeSection1">
      <Carousel
        plugins={[
          'centered',
          'fastSwipe',
          'infinite', 
          {
            resolve: autoplayPlugin,
            options: {
              interval: 2000,
            }
          }, 
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 3.5
            }
          }
        ]} 
        animationSpeed={1000} 
        breakpoints={{
          600: {
            plugins: [
              'centered',
              'clickToChange',
              'fastSwipe',
              'infinite', 
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 1
                }
              }
            ]
          },
          700: {
            plugins: [
              'centered',
              'clickToChange',
              'fastSwipe',
              'infinite', 
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 1.25
                }
              }
            ]
          },
          800: {
            plugins: [
              'centered',
              'clickToChange',
              'fastSwipe',
              'infinite', 
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 1.5
                }
              }
            ]
          },
          1100: {
            plugins: [
              'centered',
              'fastSwipe',
              'infinite', 
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 2
                }
              }
            ]
          },
          1200: {
            plugins: [
              'centered',
              'fastSwipe',
              'infinite', 
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 2.25
                }
              }
            ]
          },
          1300: {
            plugins: [
              'centered',
              'fastSwipe',
              'infinite', 
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 2.5
                }
              }
            ]
          },
          1400: {
            plugins: [
              'centered',
              'fastSwipe',
              'infinite', 
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 2.75
                }
              }
            ]
          },
          1500: {
            plugins: [
              'centered',
              'fastSwipe',
              'infinite', 
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 3
                }
              }
            ]
          },
          1700: {
            plugins: [
              'centered',
              'fastSwipe',
              'infinite', 
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 3.25
                }
              }
            ]
          },
        }}
      >
        <div className="bannerCard">
          <img src="./images/photo_video.png" alt="" />
          <div className="bannerInfo">
            <div className="bannerTitle">PHOTO VIDEO</div>
            <div className="bannerText">
              <span>
                <img src="./images/clink.svg" alt="" />
              </span> Audio / Video 
              <span>
                <img src="./images/clink.svg" alt="" />
              </span> Graphic Design 
              <span>
                <img src="./images/clink.svg" alt="" />
              </span> Programming 
              <span>
                <img src="./images/clink.svg" alt="" />
              </span> Service 
              <span>
                <img src="./images/clink.svg" alt="" />
              </span>
            </div>
          </div>
        </div>
        <div className="bannerCard">
          <img src="./images/creative.png" alt="" />
          <div className="bannerInfo">
            <div className="bannerTitle">GRAPHIC DESIGN</div>
            <div className="bannerText">
              <span>
                <img src="./images/clink.svg" alt="" />
              </span> Audio / Video 
              <span>
                <img src="./images/clink.svg" alt="" />
              </span> Graphic Design 
              <span>
                <img src="./images/clink.svg" alt="" />
              </span> Programming 
              <span>
                <img src="./images/clink.svg" alt="" />
              </span> Service 
              <span>
                <img src="./images/clink.svg" alt="" />
              </span>
            </div>
          </div>
        </div>
        <div className="bannerCard">
          <img src="./images/academy_figure.png" alt="" />
          <div className="bannerInfo">
            <div className="bannerTitle">DMKADEMY</div>
            <div className="bannerText">
              <span>
                <img src="./images/clink.svg" alt="" />
              </span> Audio / Video 
              <span>
                <img src="./images/clink.svg" alt="" />
              </span> Graphic Design 
              <span>
                <img src="./images/clink.svg" alt="" />
              </span> Programming 
              <span>
                <img src="./images/clink.svg" alt="" />
              </span> Service 
              <span>
                <img src="./images/clink.svg" alt="" />
              </span>
            </div>
          </div>
        </div>
        <div className="bannerCard">
          <img src="./images/property_figure.png" alt="" />
          <div className="bannerInfo">
            <div className="bannerTitle">PROPERTY</div>
            <div className="bannerText">
              <span>
                <img src="./images/clink.svg" alt="" />
              </span> Audio / Video 
              <span>
                <img src="./images/clink.svg" alt="" />
              </span> Graphic Design 
              <span>
                <img src="./images/clink.svg" alt="" />
              </span> Programming 
              <span>
                <img src="./images/clink.svg" alt="" />
              </span> Service 
              <span>
                <img src="./images/clink.svg" alt="" />
              </span>
            </div>
          </div>
        </div>
        <div className="bannerCard">
          <img src="./images/tech.png" alt="" />
          <div className="bannerInfo">
            <div className="bannerTitle">TEKNOLOGI INFORMASI</div>
            <div className="bannerText">
              <span>
                <img src="./images/clink.svg" alt="" />
              </span> Audio / Video 
              <span>
                <img src="./images/clink.svg" alt="" />
              </span> Graphic Design 
              <span>
                <img src="./images/clink.svg" alt="" />
              </span> Programming 
              <span>
                <img src="./images/clink.svg" alt="" />
              </span> Service 
              <span>
                <img src="./images/clink.svg" alt="" />
              </span>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  )
}
export default BannerSlider