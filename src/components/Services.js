
function Services() {
  return(
    <div className="servicesWrap" id="homeSection3">
      <img className="lampuHias" src="./images/lampu.png"/>
      <div className="serviceV1">
        <div className="serviceCard">
          <a className="serviceCardButton" href="">selengkapnya</a>
        </div>
        <h3 className="serviceTitle">teknologi informasi</h3>
        <p className="serviceDescription">Cras finibus leo nec mauris interdum bibendum. Suspendisse potenti. Etiam augue massa, ultrices eu mauris quis, lacinia ornare orci. Mauris tempus ipsum id nisl tincidunt lacinia. Sed quis ante lorem</p>
        <img src="./images/laptop.png" className="serviceImage laptop"/>
      </div>
      <div className="serviceV2" style={{
        marginTop: '75%'
      }}>
        <div className="serviceCard">
          <a className="serviceCardButton" href="">selengkapnya</a>
        </div>
        <h3 className="serviceTitle">digital marketing</h3>
        <p className="serviceDescription">Cras finibus leo nec mauris interdum bibendum. Suspendisse potenti. Etiam augue massa, ultrices eu mauris quis, lacinia ornare orci. Mauris tempus ipsum id nisl tincidunt lacinia. Sed quis ante lorem</p>
        <img src="./images/camera.png" className="serviceImage camera"/>
      </div>
      <div className="serviceV1" style={{
        marginTop: '-50%',
        marginBottom: '198px'
      }}>
        <div className="serviceCard">
          <a className="serviceCardButton" href="">selengkapnya</a>
        </div>
        <h3 className="serviceTitle">property</h3>
        <p className="serviceDescription">Cras finibus leo nec mauris interdum bibendum. Suspendisse potenti. Etiam augue massa, ultrices eu mauris quis, lacinia ornare orci. Mauris tempus ipsum id nisl tincidunt lacinia. Sed quis ante lorem</p>
        <img src="./images/property.png" className="serviceImage property"/>
      </div>
      <div className="" style={{
        maxWidth: '453px',
        fontSize: '72px',
        lineHeight: '63px',
        textAlign: 'right'
      }}>Let’s turn your <span>IDEAS</span> into <span>REALITY.</span> </div>
    </div>
  )
}
export default Services