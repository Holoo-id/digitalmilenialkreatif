import cameraImage from '../styles/images/camera.png'
import laptopImage from '../styles/images/laptop.png'
import propertyImage from '../styles/images/property.png'
import lampuHias from '../styles/images/lampu.png'
function Services() {
  return(
    <div className="servicesWrap" id="homeSection3">
      <img className="lampuHias" src={lampuHias}/>
      <div className="serviceV1">
        <div className="serviceCard"></div>
        <h3 className="serviceTitle">teknologi informasi</h3>
        <p className="serviceDescription">Cras finibus leo nec mauris interdum bibendum. Suspendisse potenti. Etiam augue massa, ultrices eu mauris quis, lacinia ornare orci. Mauris tempus ipsum id nisl tincidunt lacinia. Sed quis ante lorem</p>
        <img src={laptopImage} className="serviceImage laptop"/>
      </div>
      <div className="serviceV2" style={{
        marginTop: '50%'
      }}>
        <div className="serviceCard"></div>
        <h3 className="serviceTitle">digital marketing</h3>
        <p className="serviceDescription">Cras finibus leo nec mauris interdum bibendum. Suspendisse potenti. Etiam augue massa, ultrices eu mauris quis, lacinia ornare orci. Mauris tempus ipsum id nisl tincidunt lacinia. Sed quis ante lorem</p>
        <img src={cameraImage} className="serviceImage camera"/>
      </div>
      <div className="serviceV1" style={{
        marginTop: '-50%'
      }}>
        <div className="serviceCard"></div>
        <h3 className="serviceTitle">property</h3>
        <p className="serviceDescription">Cras finibus leo nec mauris interdum bibendum. Suspendisse potenti. Etiam augue massa, ultrices eu mauris quis, lacinia ornare orci. Mauris tempus ipsum id nisl tincidunt lacinia. Sed quis ante lorem</p>
        <img src={propertyImage} className="serviceImage property"/>
      </div>
    </div>
  )
}
export default Services