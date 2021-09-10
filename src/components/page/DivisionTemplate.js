// import Slider from 'infinite-react-carousel'
function DivisionTemplate() {
  // const settings =  {
  //   adaptiveHeight: true,
  //   arrowsBlock: false,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   centerMode: true,
  //   dots: true,
  //   slidesToShow: 3
  // }

  return(
    <div className="divTemp">
      <div className="headSec">
        <div className="headCard">

          <div className="headInfo">
            <h3 className="headTitle">TEKNOLOGI INFORMASI</h3>
            <p className="headDesc">Digital Marketing merupakan bagin divisi dari blabla blabla yang bergerak dibidang Teknologi Informasi, Digital Marketing dan Property.</p>
          </div>
          <div className="headSlide">
            {/* <Slider { ...settings }>
              <div>
                <div className="slideCard">
                  <img className="cardImg" src="/images/laptop.png" />
                  <div className="cardTitle">service A</div>
                </div>
              </div>
              <div>
                <div className="slideCard">
                  <img className="cardImg" src="/images/laptop.png" />
                  <div className="cardTitle">service A</div>
                </div>
              </div>
              <div>
                <div className="slideCard">
                  <img className="cardImg" src="/images/laptop.png" />
                  <div className="cardTitle">service A</div>
                </div>
              </div>
              <div>
                <div className="slideCard">
                  <img className="cardImg" src="/images/laptop.png" />
                  <div className="cardTitle">service A</div>
                </div>
              </div>
              <div>
                <div className="slideCard">
                  <img className="cardImg" src="/images/laptop.png" />
                  <div className="cardTitle">service A</div>
                </div>
              </div>
            </Slider> */}
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