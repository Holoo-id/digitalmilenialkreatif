import Carousel, { autoplayPlugin, Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

function DivisionTemplate() {

  return(
    <div className="divTemp">
      <div className="headSec">
        <div className="headCard">

          <div className="headInfo">
            <h3 className="headTitle">TEKNOLOGI INFORMASI</h3>
            <p className="headDesc">Digital Marketing merupakan bagin divisi dari blabla blabla yang bergerak dibidang Teknologi Informasi, Digital Marketing dan Property.</p>
          </div>
          <div className="headSlide">
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
                   numberOfSlides: 4
                  }
                }
              ]} 
              animationSpeed={1000} 
              breakpoints={{
                640: {
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
                1024: {
                  plugins: [
                    'centered',
                    'clickToChange',
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
                1280: {
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
                }
              }}
            >
              <div className="slideCard">
                <img className="cardImg" src="/images/laptop.png" />
                <div className="cardTitle">service A</div>
              </div>
              <div className="slideCard">
                <img className="cardImg" src="/images/laptop.png" />
                <div className="cardTitle">service B</div>
              </div>
              <div className="slideCard">
                <img className="cardImg" src="/images/laptop.png" />
                <div className="cardTitle">service C</div>
              </div>
              <div className="slideCard">
                <img className="cardImg" src="/images/laptop.png" />
                <div className="cardTitle">service D</div>
              </div>
              <div className="slideCard">
                <img className="cardImg" src="/images/laptop.png" />
                <div className="cardTitle">service E</div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      <div className="servSecWrap">
        <div className="titleWrap">
          <div className="line"></div>
          <h3 className="sectionTitle">serviceA</h3>
        </div>
        <div className="servSec">
          <div className="servDesc">
            Digital Marketing merupakan bagin divisi dari blabla blabla yang bergerak dibidang Teknologi Informasi, Digital Marketing dan Property.
          </div>
          <div className="servCardImg"></div>
        </div>
      </div>
      <div className="workSec"></div>
    </div>
  )
}
export default DivisionTemplate