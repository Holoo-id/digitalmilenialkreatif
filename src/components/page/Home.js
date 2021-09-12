import BannerSlider from '../BannerSlider'
import Navbar from '../Navbar'
function Home() {
  return(
    <div className="homePage">
      <figure className="theBackground">
        <img src="./images/bg1.jpg" alt="thebackground"/>
      </figure>
      <Navbar />
      <BannerSlider />
    </div>
  )
}
export default Home