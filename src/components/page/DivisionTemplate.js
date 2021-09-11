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
      <div className="workSecWrap">
        <div className="workTitle">work</div>
        <div className="workSlide">
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
            <div className="slideCard2">
              <img className="cardImg" src="/images/laptop.png" />
              <div className="cardContent">
                <div className="cardTitle">service A</div>
                <div className="cardText">Sed vitae leo porta, pellentesque tellus in, posuere diam. Maecenas gravida id elit et pellentesque. Cras et blandit felis, at tempus neque. Proin laoreet diam porta mollis suscipit. Phasellus tristique neque nisl, id rutrum turpis luctus vitae. Fusce finibus aliquet turpis, vitae condimentum orci tempus nec. Maecenas vel augue et augue fermentum consectetur</div>
              </div>
            </div>
            <div className="slideCard2">
              <img className="cardImg" src="/images/laptop.png" />
              <div className="cardContent">
                <div className="cardTitle">service B</div>
                <div className="cardText">Nulla volutpat blandit aliquam. Ut ultricies fringilla est non dignissim. Mauris luctus suscipit massa. Nulla semper est nec enim lacinia scelerisque. Sed sagittis ex ac nisl pellentesque sollicitudin. Nam imperdiet accumsan bibendum. Aliquam erat volutpat.</div>
              </div>
            </div>
            <div className="slideCard2">
              <img className="cardImg" src="/images/laptop.png" />
              <div className="cardContent">
                <div className="cardTitle">service C</div>
                <div className="cardText">Phasellus posuere mauris quis sem efficitur faucibus. Cras pulvinar fringilla nulla non convallis. Duis facilisis aliquam tellus at malesuada. Aliquam eu erat nulla. Praesent sit amet rutrum sem, ac varius nulla. Ut ullamcorper varius quam id sagittis. Etiam eleifend posuere pellentesque. Nullam sit amet dignissim erat.</div>
              </div>
            </div>
            <div className="slideCard2">
              <img className="cardImg" src="/images/laptop.png" />
              <div className="cardContent">
                <div className="cardTitle">service D</div>
                <div className="cardText">Nulla nisi eros, sagittis sed pulvinar sed, semper id est. Cras sollicitudin tristique cursus. Pellentesque lectus dolor, venenatis a convallis non, hendrerit vitae elit. Duis luctus ligula justo, eget condimentum orci vulputate eu. Integer id varius nisi, eu sodales est. Maecenas consequat porta mi in auctor.</div>
              </div>
            </div>
            <div className="slideCard2">
              <img className="cardImg" src="/images/laptop.png" />
              <div className="cardContent">
                <div className="cardTitle">service E</div>
                <div className="cardText">Vestibulum ultricies condimentum elit, at egestas odio tincidunt id. Phasellus condimentum risus at risus semper sollicitudin. Praesent eleifend nisi id egestas sodales. Fusce posuere consectetur lacus, sed mattis ligula iaculis condimentum. Morbi eu dolor sagittis, hendrerit tortor ultricies, tempus nulla. Sed tristique leo non nulla blandit ultricies. Suspendisse et varius nisl.</div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  )
}
export default DivisionTemplate